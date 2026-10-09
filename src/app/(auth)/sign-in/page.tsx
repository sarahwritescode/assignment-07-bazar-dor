"use client";
import React from 'react';

import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";



const SignIn = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};
        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };
    return (
        <div className="min-h-screen bg-[#f2f7f3] px-4 py-8 font-bengali sm:px-6">
            <Form className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center" onSubmit={onSubmit}>
                {/* Header */}
                <div className="mb-5 w-full max-w-[380px] text-center">
                    <h1 className="text-[24px] font-bold leading-tight text-gray-900 sm:text-[26px]">
                        সাইন ইন
                    </h1>

                    <p className="mt-1.5 text-[12px] leading-5 text-gray-500 sm:text-[13px]">
                        আপনার অ্যাকাউন্টে প্রবেশ করুন ও চালিয়ে যান
                    </p>
                </div>
                <div className="flex w-full flex-col max-w-[380px] rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "সঠিক ইমেইল ঠিকানা লিখুন";
                            }
                            return null;
                        }}
                    >
                        <Label className="mb-1.5 block text-[13px] font-medium text-gray-700">
                            ইমেইল</Label>
                        <Input placeholder="john@example.com" className="
              h-10
              w-full
              rounded-md
              border
              border-gray-200
              bg-white
              px-3
              text-[13px]
              text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-green-600
              focus:ring-2
              focus:ring-green-100
            "/>
                        <FieldError className="mt-1 text-[11px] text-red-500" />
                    </TextField>
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
                                return "কমপক্ষে একটি বড় হাতের অক্ষর থাকতে হবে";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "পাসওয়ার্ডে কমপক্ষে একটি সংখ্যা থাকতে হবে";
                            }
                            return null;
                        }}
                    >
                        <Label className="mb-1.5 block text-[13px] font-medium text-gray-700">
                            পাসওয়ার্ড</Label>
                        <Input placeholder="আপনার পাসওয়ার্ড লিখুন"
                            className="
              h-10
              w-full
              rounded-md
              border
              border-gray-200
              bg-white
              px-3
              text-[13px]
              text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-green-600
              focus:ring-2
              focus:ring-green-100
            " />

                        <FieldError className="mt-1 text-[11px] text-red-500" />
                    </TextField>
                    <div className="mt-2 flex justify-end">
                        <a
                            href="/forgot-password"
                            className="text-[11px] font-medium text-green-700 transition hover:text-green-800 hover:underline"
                        >
                            পাসওয়ার্ড ভুলে গেছেন?
                        </a>


                    </div>
                    <Button
                        type="submit"
                        className="
            mt-4
            h-10
            w-full
            rounded-md
            bg-[#07883f]
            px-4
            text-[13px]
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-[#067536]
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
            focus:ring-offset-2
            active:scale-[0.99]
          "
                    >
                        সাইন ইন
                    </Button>

                    {/* Divider */}
                    <div className="my-5 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gray-200" />

                        <span className="shrink-0 text-[11px] text-gray-400">
                            অথবা
                        </span>

                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">


                        <Button
                            type="button"
                            className="
              flex
              h-10
              w-full
              items-center
              justify-center
              gap-2
              rounded-md
              border
              border-gray-200
              bg-white
              px-2
              text-[11px]
              font-medium
              text-gray-700
              transition
              hover:bg-gray-50
            "
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.44h3.14c1.84-1.69 2.93-4.18 2.93-7.4Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 21.9c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.52A9.75 9.75 0 0 0 12 21.9Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M6.54 13.99a5.86 5.86 0 0 1 0-3.75V7.72H3.3a9.75 9.75 0 0 0 0 8.79l3.24-2.52Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 6.2c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.83 3.3 14.63 2.4 12 2.4a9.75 9.75 0 0 0-8.7 5.32l3.24 2.52C7.31 7.93 9.46 6.2 12 6.2Z"
                                    fill="#EA4335"
                                />
                            </svg>

                            Google দিয়ে চালিয়ে যান
                        </Button>
                        <Button
                            type="button"
                            className="
              flex
              h-10
              w-full
              items-center
              justify-center
              gap-2
              rounded-md
              border
              border-gray-200
              bg-white
              px-2
              text-[11px]
              font-medium
              text-gray-700
              transition
              hover:bg-gray-50
            "
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                            </svg>

                            GitHub দিয়ে চালিয়ে যান
                        </Button>




                        {/* Login */}
                        <p className="mt-5 text-center text-[11px] text-gray-500">
                            অ্যাকাউন্ট নেই?{" "}
                            <a
                                href="/signup"
                                className="font-semibold text-green-700 hover:text-green-800 hover:underline"
                            >
                                সাইন আপ করুন
                            </a>
                        </p>
                    </div>
                </div>
            </Form>

        </div >
    );
};

export default SignIn;