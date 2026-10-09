import React from 'react';
import NavLinks from './navlinks';
import { Suspense } from 'react';
import Image from 'next/image';
import { connection } from "next/server";
import Link from 'next/link';


const Navbar = async () => {
    await connection();

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    return (
        <div className="w-full border-t-2 border-blue-500 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo-icon.png"
                        alt="বাজার দর লোগো"
                        width={36}
                        height={36}
                        className="rounded-lg bg-green-700 p-1.5"
                        priority
                    />
                    <div className="flex flex-col">
                        <h2 className="text-base font-bold leading-5 text-gray-900">বাজার দর</h2>
                        <p className="text-[9px] leading-4 text-gray-500">
                            {date}
                        </p>
                    </div>
                </Link>
                {/* Authentication buttons */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/sign-in"
                        className="whitespace-nowrap text-xs font-medium text-gray-800 hover:text-green-700"
                    >
                        সাইন ইন
                    </Link>
                    <Link
                        href="/sign-up"
                        className="whitespace-nowrap rounded-lg bg-green-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800"
                    >
                        সাইন আপ
                    </Link>
                </div>
            </div>
             {/* Category navigation */}
            <Suspense fallback={<div className="h-9 border-t border-gray-100">Loading...</div>}>
                <NavLinks />
            </Suspense>


        </div>
    );
};

export default Navbar;