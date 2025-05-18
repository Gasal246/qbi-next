/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import connectDB from "@/lib/mongo";
import Users from "@/models/user.model";
import { transporter } from "@/lib/nodemailer";
import User_experiences from "@/models/user_experiences.model";
import User_qualifications from "@/models/user_qualifications.model";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

await connectDB();

interface Experience {
    position: string;
    start_date: string;
    company: string;
    end_date?: string;
    description?: string;
}

interface Qualification {
    place: string;
    course: string;
    start_date: string;
    end_date?: string;
    description?: string;
}

interface CreateUserRequest {
    body: string;
    name: string;
    phone: string;
    email: string;
    whatsapp: string;
    experiences: Experience[];
    qualifications: Qualification[];
}

const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
    email: z.string().email("Invalid email"),
    whatsapp: z.string().optional(),
    experiences: z.array(z.object({
        position: z.string().min(1),
        start_date: z.string().min(1),
        company: z.string().min(1),
        end_date: z.string().optional(),
        description: z.string().optional(),
    })).optional(),
    qualifications: z.array(z.object({
        place: z.string().min(1),
        course: z.string().min(1),
        start_date: z.string().min(1),
        end_date: z.string().optional(),
        description: z.string().optional(),
    })).optional(),
});

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const data = Object.fromEntries(formData) as any;

        const body = JSON.parse(data?.body) as CreateUserRequest;

        const emailExist = await Users.findOne({ email: body.email });
        if (emailExist) {
            return NextResponse.json({ error: "User with this email already exists.", status: 302 }, { status: 204 });
        }

        const phoneExist = await Users.findOne({ phone: body.phone });
        if (phoneExist) {
            return NextResponse.json({ error: "User with this phone number already exists.", status: 303 }, { status: 204 });
        }

        const session = await Users.startSession();
        session.startTransaction();
        try {
            const newUser = new Users({
                name: body.name,
                phone: body.phone,
                email: body.email,
                whatsapp: body.whatsapp,
            });
            const savedUser = await newUser.save({ session });

            const experiencePromise = body.experiences.map((experience: Experience) => {
                const newExperience = new User_experiences({
                    ...experience,
                    user_id: savedUser._id,
                });
                return newExperience.save({ session });
            });

            const qualificationPromise = body.qualifications.map((qualification: Qualification) => {
                const newQualification = new User_qualifications({
                    ...qualification,
                    user_id: savedUser._id,
                });
                return newQualification.save({ session });
            });

            const [addedExperiences, addedQualifications] = await Promise.all([
                Promise.all(experiencePromise),
                Promise.all(qualificationPromise),
            ]);

            await session.commitTransaction();

            const experienceText = body.experiences.map((exp: Experience, index: number) =>
                `${index + 1}. Position : ${exp.position}, Company: ${exp.company}, ${exp.start_date} - ${exp.end_date || "Present"}`
            ).join("<br />");
            const qualificationText = body.qualifications.map((qual: Qualification, index: number) =>
                `${index + 1}. Course: ${qual.course}, Place: ${qual.place}, ${qual.start_date} - ${qual.end_date || "Present"}`
            ).join("<br />");

            await transporter.sendMail({
                from: process.env.NEXT_NODEMAILER_USER,
                to: "qbiemployement@gmail.com",
                subject: "QBI Job Seeker Response",
                text: `QBI Job Seeker Response\nHi, you have received a new job seeker response from ${body.name}, ${body.email}\n...`,
                html: `
                    <h1>QBI Job Seeker Response</h1>
                    <p>Hi, you have received a new job seeker response from ${body.name}, ${body.email}</p>
                    <hr />
                    <h2>Details</h2>
                    <p>Name: ${body.name}</p>
                    <p>Phone: ${body.phone}</p>
                    <p>Email: ${body.email}</p>
                    <p>Whatsapp: ${body.whatsapp}</p>
                    <h2>Experiences & Qualifications</h2>
                    <h3>Experiences</h3>
                    <p>${experienceText || "None"}</p>
                    <h3>Qualifications</h3>
                    <p>${qualificationText || "None"}</p>
                `,
            });

            return NextResponse.json(
                { user: savedUser, experiences: addedExperiences, qualifications: addedQualifications, status: 200 },
                { status: 200 }
            );
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error?.message || "Internal Server Error" }, { status: 500 });
    }
}

export const dynamic = "force-dynamic";
