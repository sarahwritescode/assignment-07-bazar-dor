import Image from "next/image";
import { connection } from "next/server"
// import { useEffect, useState } from "react";

export default async function Hero() {
    //     const [today, setToday] = useState("");

    //   useEffect(() => {
    //     const formattedDate = new Intl.DateTimeFormat("bn-BD", {
    //       day: "numeric",
    //       month: "long",
    //       year: "numeric",
    //       timeZone: "Asia/Dhaka",       
    //     }).format(new Date());

    //     setToday(formattedDate);
    //   }, []);
    await connection()
    const currentDate = new Date();

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6">
            <div className="flex min-h-[180px] items-center justify-between gap-4 overflow-hidden rounded-xl border border-[#e2eee5] bg-[#f8fbf9] px-5 py-5 sm:px-8 md:min-h-[220px]">
                {/* Left content */}
                <div className="max-w-2xl flex-1">
                    {/* <span className="inline-block rounded-full bg-[#dff4e6] px-3 py-1 text-[10px] font-medium text-[#168343] sm:text-xs">
                        {today || "আজকের বাজার"}
                    </span> */}
                    <p className="mb-4 inline-block rounded-lg bg-green-50 px-3 py-2 text-xs text-green-700">
                        {currentDate.toLocaleDateString("bn-BD", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            timeZone: "Asia/Dhaka"
                        })}
                    </p>

                    <h1 className="mt-2 text-xl font-bold leading-snug text-[#202b23] sm:text-2xl md:text-3xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-2 max-w-xl text-[11px] leading-5 text-gray-500 sm:text-xs sm:leading-6">
                        চাল, ডাল, তেল, পেঁয়াজ, মাছ, মাংস, সবজিসহ নিত্যপ্রয়োজনীয়
                        জিনিসের দাম দেখুন। প্রতিদিনের বাজারের সঠিক ধারণা পেতে
                        আমাদের সাথেই থাকুন।
                    </p>

                    <a
                        href="#সব-পণ্য"
                        className="mt-4 inline-flex items-center justify-center rounded-md bg-[#07883f] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#066d33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07883f]"
                    >
                        সব পণ্য দেখুন
                    </a>
                </div>

                {/* Right hero image */}
                <div className="relative h-24 w-24 shrink-0 sm:h-32 sm:w-32 md:h-40 md:w-40">
                    <Image
                        src="/bazar-hero.png"
                        alt="বাজারের নিত্যপ্রয়োজনীয় পণ্য"
                        fill
                        priority
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
