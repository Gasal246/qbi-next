/* eslint-disable @typescript-eslint/no-explicit-any */
import connectDB from "@/lib/mongo";
import Employers from "@/models/employer.model";
import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/nodemailer";

await connectDB();

interface CreateEmployerRequest {
    name: string;
    phone: string;
    designation: string;
    email: string;
    company_name: string;
    company_address: string;
}

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData();
        const data = Object.fromEntries(formData) as any;
        const body = JSON.parse(data?.body) as CreateEmployerRequest;

        const emailExist = await Employers.findOne({ email: body.email });
        if (emailExist) {
            return NextResponse.json({ error: "Employer with this email already exists.", status: 302 }, { status: 204 });
        }

        const phoneExist = await Employers.findOne({ phone: body.phone });
        if (phoneExist) {
            return NextResponse.json({ error: "Employer with this phone number already exists.", status: 303 }, { status: 204 });
        }

        const newEmployer = new Employers({
            name: body.name,
            phone: body.phone,
            designation: body.designation,
            email: body.email,
            company_name: body.company_name,
            company_address: body.company_address,
        });
        await newEmployer.save();

        await transporter.sendMail({
            from: process.env.NEXT_NODEMAILER_USER,
            to: "qbiemployement@gmail.com",
            subject: "QBI Employer Response",
            text: `QBI Employer Response\nHi, you have received a new employer response from ${body.name}, ${body.email}\n...`,
            html: `
                <h1>QBI Employer Response</h1>
                <p>Hi, you have received a new employer response from ${body.name}, ${body.email}</p>
                <hr />
                <h2>Details</h2>
                <p>Name: ${body.name}</p>
                <p>Phone: ${body.phone}</p>
                <p>Email: ${body.email}</p>
                <p>Designation: ${body.designation}</p>
                <p>Company Name: ${body.company_name}</p>
                <p>Company Address: ${body.company_address}</p>
            `,
        });

        return NextResponse.json({ message: "Employer created successfully.", status: 200 }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}