/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters.",}),
    phone: z.string().min(10, "you should enter atleas 10 digits").max(10, "enter your 10 digits mobile number."),
    designation: z.string().min(2, {message: "Designation must be at least 2 characters.",}),
    email: z.string().email(),
    company_name: z.string().min(2, {message: "Company name must be at least 2 characters.",}),
    company_address: z.string().min(2, {message: "Company address must be at least 2 characters.",}),
})
const HireTalendForm = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            designation: "",
            email: "",
            company_name: "",
            company_address: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 pt-5 pb-10" id={id}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                        <Input placeholder="Enter your email" {...field} />
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
                                        <Input placeholder="Enter your phone" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="designation"
                            render={({ field }) => (
                                <FormItem className="w-full lg:w-1/2 p-1">
                                    <FormLabel className="text-white">Designation</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your designation" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company_name"
                            render={({ field }) => (
                                <FormItem className="w-full lg:w-1/2 p-1">
                                    <FormLabel className="text-white">Company Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your company name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company_address"
                            render={({ field }) => (
                                <FormItem className="w-full lg:w-1/2 p-1">
                                    <FormLabel className="text-white">Company Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your company address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.02 }} className="bg-slate-950 hover:bg-slate-800 mt-5 ml-auto mr-auto lg:mr-10 cursor-pointer rounded-lg text-white font-semibold text-sm w-[230px] flex items-center justify-center">
                        <Button type="submit" className="bg-transparent hover:bg-transparent text-white w-full cursor-pointer">Submit Form</Button>
                    </motion.div>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default HireTalendForm