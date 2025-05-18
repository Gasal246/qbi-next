/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { PlusIcon, TrashIcon } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { registerUser } from "@/query/user-functions/functions";
import LoaderSpin from "./LoaderSpin";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string().min(10, "you should enter atleas 10 digits").max(10, "enter your 10 digits mobile number."),
    whatsapp: z.string().min(10, "you should enter atleas 10 digits").max(10, "enter your 10 digits whatsapp number."),
    email: z.string().email()
});



const JobSeekerForm = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(false);

    const [experiences, setExperiences] = useState<any[]>([]);
    const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [start_date, setStart_date] = useState("");
    const [end_date, setEnd_date] = useState("");
    const [description, setDescription] = useState("");

    const [qualifications, setQualifications] = useState<any[]>([]);
    const [isQualificationModalOpen, setIsQualificationModalOpen] = useState(false);
    const [place, setPlace] = useState("");
    const [course, setCourse] = useState("");
    
    useEffect(() => {
        if(!isExperienceModalOpen) {
            setCompany("");
            setPosition("");
            setStart_date("");
            setEnd_date("");
            setDescription("");
        }
        if(!isQualificationModalOpen) {
            setPlace("");
            setCourse("");
            setStart_date("");
            setEnd_date("");
            setDescription("");
        }
    }, [isExperienceModalOpen, isQualificationModalOpen])

    const handleAddExperience = () => {
        if(!company || !position || !start_date) {
            toast("Complete All Required Fields.", {
                description: "company, position and start date are required fields.",
                duration: 3000
            });
            return;
        }
        setExperiences([...experiences, { company, position, start_date, end_date, description }]);
        setCompany("");
        setPosition("");
        setStart_date("");
        setEnd_date("");
        setDescription("");
        // close the modal
        setIsExperienceModalOpen(false);
    };

    const handleAddQualification = () => {
        if(!place || !course || !start_date) {
            toast("Complete All Required Fields.", {
                description: "place, course and start date are required fields.",
                duration: 3000
            });
            return;
        }
        setQualifications([...qualifications, { place, course, start_date, end_date, description }]);
        setPlace("");
        setCourse("");
        setStart_date("");
        setEnd_date("");
        setDescription("");
        // close the modal
        setIsQualificationModalOpen(false);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            whatsapp: "",
            email: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData();
        formData.append("body", JSON.stringify({
            name: values.name,
            phone: values.phone,
            email: values.email,
            whatsapp: values.whatsapp,
            experiences,
            qualifications
        }));

        setLoading(true);
        try {
            const res = await registerUser(formData);
            if(res?.status === 302) {
                toast("User already exist.", {
                    description: "User with same email already exist.",
                    duration: 3000
                });
                return;
            } else if ( res?.status === 303 ) {
                toast("User already exist.", {
                    description: "User with same phone number already exist.",
                    duration: 3000
                })
                return;
            }
            if (res?.status === 200) {
                toast("User created successfully.", {
                    duration: 3000
                });
            }
        } catch (error: any) {
            console.log(error);
            toast("Something went wrong.", {
                description: "Please try again later.",
                duration: 3000
            });
        } finally {
            setLoading(false);
            form.reset();
            setExperiences([]);
            setQualifications([]);
        }
    }

    return (
        <div className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 pt-5 pb-10" id={id}>
            {loading && <LoaderSpin />}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex w-full flex-wrap">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full lg:w-1/2 p-1">
                                <FormLabel className="text-white">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full lg:w-1/2 p-1">
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="w-full lg:w-1/2 p-1">
                                <FormLabel className="text-white">Phone</FormLabel>
                                <FormControl>
                                    <Input type="tel" maxLength={10} placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                            <FormItem className="w-full lg:w-1/2 p-1">
                                <FormLabel className="text-white">Whatsapp Number</FormLabel>
                                <FormControl>
                                    <Input type="tel" maxLength={10} placeholder="Enter your whatsapp number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full mt-5">
                        <h1 className='text-slate-200 text-sm font-semibold mb-2'>Experience</h1>
                        <div className="w-full flex flex-wrap">
                        {/* Experiences */}
                        {experiences.map((experience, index) => (
                            <div key={index} className="w-full lg:w-3/12 p-1 relative">
                                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ rotate: -15 }} className="absolute top-3 right-3 cursor-pointer" onClick={() => setExperiences(experiences.filter((_, i) => i !== index))}>
                                    <TrashIcon className="text-white hover:text-red-500" size={20} />
                                </motion.div>
                                <div className="bg-slate-950 border-2 border-dashed border-slate-700 rounded-lg p-2">
                                    <h1 className='text-slate-200 text-sm font-semibold mb-1'>Experience {index + 1}</h1>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">Company: </h1>
                                        <h1 className="text-slate-300 text-sm">{experience?.company || "-"}</h1>
                                    </div>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">Position: </h1>
                                        <h1 className="text-slate-300 text-sm">{experience?.position || "-"}</h1>
                                    </div>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">Start Date: </h1>
                                        <h1 className="text-slate-300 text-sm">{experience?.start_date || "-"}</h1>
                                    </div>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">End Date: </h1>
                                        <h1 className="text-slate-300 text-sm">{experience?.end_date || "-"}</h1>
                                    </div>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">Description: </h1>
                                        <h1 className="text-slate-300 text-sm">{experience?.description || "-"}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        
                        <Dialog open={isExperienceModalOpen} onOpenChange={setIsExperienceModalOpen}>
                            <DialogTrigger>
                                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }} className="flex flex-wrap bg-slate-950 border-2 border-dashed mx-1 border-slate-700 rounded-lg p-2 w-[200px] items-center justify-center cursor-pointer">
                                    <PlusIcon color="white" size={18} />
                                    <h1 className='text-slate-200 text-sm font-semibold'>Add New Experience</h1>
                                </motion.div>
                            </DialogTrigger>
                            <DialogContent className="bg-slate-950 border-3 border-slate-700 border-dashed rounded-lg p-7">
                                <DialogHeader>
                                    <DialogTitle className="text-white text-left">Add New Experience</DialogTitle>
                                    <DialogDescription className="text-white text-left">Please fill the form below to add new experience</DialogDescription>
                                </DialogHeader>
                                <div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">* Company</h1>
                                        <Input onChange={(e) => setCompany(e.target.value)} value={company} placeholder="Enter company name" />
                                    </div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">* Position</h1>
                                        <Input onChange={(e) => setPosition(e.target.value)} value={position} placeholder="Enter position" />
                                    </div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">* Start Date</h1>
                                        <Input type="date" onChange={(e) => setStart_date(e.target.value)} value={start_date} placeholder="Enter start date" />
                                    </div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">End Date</h1>
                                        <Input type="date" onChange={(e) => setEnd_date(e.target.value)} value={end_date} placeholder="Enter end date" />
                                    </div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">Description</h1>
                                        <Input onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Enter description" />
                                    </div>
                                    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }} className="bg-slate-900 hover:bg-slate-800 py-2 rounded-lg text-white font-semibold text-sm w-full flex items-center justify-center cursor-pointer" onClick={handleAddExperience}>Add Experience</motion.div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="w-full mt-5">
                        <h1 className='text-slate-200 text-sm font-semibold mb-2'>Qualification</h1>
                        <div className="w-full flex flex-wrap">
                        {/* Qualification */}
                        {qualifications.map((qualification, index) => (
                            <div key={index} className="w-full lg:w-3/12 p-1 relative">
                                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ rotate: -15 }} className="absolute top-3 right-3 cursor-pointer" onClick={() => setQualifications(qualifications.filter((_, i) => i !== index))}>
                                    <TrashIcon className="text-white hover:text-red-500" size={20} />
                                </motion.div>
                                <div className="bg-slate-950 border-2 border-dashed border-slate-700 rounded-lg p-2">
                                    <h1 className='text-slate-200 text-sm font-semibold mb-1'>Qualification {index + 1}</h1>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">Place: </h1>
                                        <h1 className="text-slate-300 text-sm">{qualification?.place || "-"}</h1>
                                    </div>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">Course: </h1>
                                        <h1 className="text-slate-300 text-sm">{qualification?.course || "-"}</h1>
                                    </div>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">Start Date: </h1>
                                        <h1 className="text-slate-300 text-sm">{qualification?.start_date || "-"}</h1>
                                    </div>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">End Date: </h1>
                                        <h1 className="text-slate-300 text-sm">{qualification?.end_date || "-"}</h1>
                                    </div>
                                    <div className="flex gap-2" >
                                        <h1 className="text-slate-300 text-sm font-semibold">Description: </h1>
                                        <h1 className="text-slate-300 text-sm">{qualification?.description || "-"}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        
                        <Dialog open={isQualificationModalOpen} onOpenChange={setIsQualificationModalOpen}>
                            <DialogTrigger>
                                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }} className="flex flex-wrap bg-slate-950 border-2 border-dashed mx-1 border-slate-700 rounded-lg p-2 w-[200px] items-center justify-center cursor-pointer">
                                    <PlusIcon color="white" size={18} />
                                    <h1 className='text-slate-200 text-sm font-semibold'>Add New Qualification</h1>
                                </motion.div>
                            </DialogTrigger>
                            <DialogContent className="bg-slate-950 border-3 border-slate-700 border-dashed rounded-lg p-7">
                                <DialogHeader>
                                    <DialogTitle className="text-white text-left">Add New Qualification</DialogTitle>
                                    <DialogDescription className="text-white text-left">Please fill the form below to add new qualification</DialogDescription>
                                </DialogHeader>
                                <div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">* Place</h1>
                                        <Input onChange={(e) => setPlace(e.target.value)} value={place} placeholder="Enter place" />
                                    </div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">* Course</h1>
                                        <Input onChange={(e) => setCourse(e.target.value)} value={course} placeholder="Enter course" />
                                    </div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">* Start Date</h1>
                                        <Input type="date" onChange={(e) => setStart_date(e.target.value)} value={start_date} placeholder="Enter start date" />
                                    </div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">End Date</h1>
                                        <Input type="date" onChange={(e) => setEnd_date(e.target.value)} value={end_date} placeholder="Enter end date" />
                                    </div>
                                    <div className="my-2">
                                        <h1 className="text-slate-200 text-sm font-semibold mb-1">Description</h1>
                                        <Input onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Enter description" />
                                    </div>
                                    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }} className="bg-slate-900 hover:bg-slate-800 py-2 rounded-lg text-white font-semibold text-sm w-full flex items-center justify-center cursor-pointer" onClick={handleAddQualification}>Add Qualification</motion.div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    
                    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }} className="bg-slate-950 hover:bg-slate-800 mt-5 ml-auto mr-auto lg:mr-10 cursor-pointer rounded-lg text-white font-semibold text-sm w-[230px] flex items-center justify-center">
                        <Button type="submit" className="bg-transparent hover:bg-transparent text-white w-full cursor-pointer">Submit Form</Button>
                    </motion.div>
                    </div>
                </form>
            </Form>
            
        </div>
    )
}

export default JobSeekerForm
