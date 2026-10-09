"use client";
import React from 'react';
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import { signUp } from '@/lib/auth-client';

const SignUp = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};
        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        if (data.password !== data.confirmPassword) {
            window.alert("পাসওয়ার্ড দুটি মিলছে না");
            return;
        }
console.log(data);
        const { data: signUpData, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,

            callbackURL: "/",
        });

        console.log(signUpData, error);
    };

    return (
        <div className="min-h-screen bg-[#f1f6f2] px-4 py-8">
            <Form className="mx-auto w-full max-w-[366px]" onSubmit={onSubmit}>
                <Fieldset >
                    <div className="mb-4 text-center">
                        <Fieldset.Legend className="text-xl font-bold text-gray-800"> অ্যাকাউন্ট তৈরি করুন</Fieldset.Legend>
                        <Description className="mt-1 text-[11px] text-gray-500"> বিনা খরচে সাইন আপ করে সব সুবিধা পান</Description>
                    </div>
                    {/* Form */}
                    <FieldGroup className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-xs font-medium text-gray-700">নাম</Label>
                            <Input placeholder="আপনার নাম লিখুন" className="mt-1 h-9 w-full rounded-sm border border-gray-200 bg-white px-3 text-xs outline-none focus:border-green-600" />
                            <FieldError className="text-[10px]" />
                        </TextField>
                        <TextField isRequired name="email" type="email">
                            <Label className="text-xs font-medium text-gray-700">ইমেইল</Label>
                            <Input placeholder="you@example.com" className="mt-1 h-9 w-full rounded-sm border border-gray-200 bg-white px-3 text-xs outline-none focus:border-green-600"
                            />
                            <FieldError className="text-[10px]" />
                        </TextField>
                        {/* password */}
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "কমপক্ষে ১টি বড় হাতের অক্ষর থাকতে হবে";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "কমপক্ষে ১টি সংখ্যা থাকতে হবে";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-xs font-medium text-gray-700">পাসওয়ার্ড</Label>
                            <Input placeholder="পাসওয়ার্ড লিখুন"
                                className="mt-1 h-9 w-full rounded-sm border border-gray-200 bg-white px-3 text-xs outline-none focus:border-green-600"
                            />
                            <Description className="mt-1 text-[10px] text-gray-500"> কমপক্ষে ৮ অক্ষর</Description>
                            <FieldError className="text-[10px]" />
                        </TextField>

                        {/* Confirm Password */}
                        <TextField
                            isRequired
                            name="password"
                            type="password"
                        />
                        <Label className="text-xs font-medium text-gray-700">
                            পাসওয়ার্ড নিশ্চিত করুন
                        </Label>

                        <div className="relative mt-1">
                            <Input
                                type='password'
                                name='confirmPassword'
                                placeholder="আবার পাসওয়ার্ড লিখুন"
                                className="h-9 w-full rounded-sm border border-gray-200 bg-white px-3 pr-10 text-xs outline-none focus:border-green-600"
                            />


                            <Fieldset.Actions className="mt-2">
                                <Button
                                    type="submit"
                                    className="h-8 w-full rounded-sm bg-green-600 text-xs font-medium text-white hover:bg-green-700"
                                >
                                    অ্যাকাউন্ট তৈরি করুন
                                </Button>
                            </Fieldset.Actions>
                            {/* Divider */}
                            <div className="my-3 flex items-center gap-2">
                                <div className="h-px flex-1 bg-gray-200" />

                                <span className="text-[10px] text-gray-400">
                                    অথবা
                                </span>

                                <div className="h-px flex-1 bg-gray-200" />
                            </div>

                            {/* Social Login */}
                            <div className="grid grid-cols-2 gap-2">
                                <Button
                                    type="button"
                                    className="h-8 rounded-sm border border-gray-200 bg-white text-[10px] text-gray-700 hover:bg-gray-50"
                                >

                                    <FcGoogle className="mr-2" />
                                    Google দিয়ে চালিয়ে যান
                                </Button>

                                <Button
                                    type="button"
                                    className="h-8 rounded-sm border border-gray-200 bg-white text-[10px] text-gray-700 hover:bg-gray-50"
                                >

                                    <FaGithub />
                                    GitHub দিয়ে চালিয়ে যান
                                </Button>
                            </div>

                            {/* Login */}
                            <p className="mt-3 text-center text-[10px] text-gray-500">
                                অ্যাকাউন্ট আছে?{" "}
                                <a
                                    href="/login"
                                    className="font-medium text-green-600 hover:underline"
                                >
                                    সাইন ইন করুন
                                </a>
                            </p>
                        </div>

                    </FieldGroup>

                </Fieldset>
            </Form>
            {/* Back to Home */}
            <div className="mt-4 text-center">
                <Link
                    href="/"
                    className="text-[10px] text-gray-400 hover:text-gray-600"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>

        </div>
    );
};

export default SignUp;