
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

import NavLinks from "./navlinks";
import { getBanglaDate } from "@/lib/utils";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("সাইন আউট সফল হয়েছে!");
            router.push("/");
          },
        },
      });
    } catch (error) {
      console.error("Sign out failed:", error);
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Row: Logo + Authentication */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🛒</span>

          <div>
            <h1 className="text-xl font-bold text-green-700 leading-tight">
              বাজার দর
            </h1>

            <p className="text-xs text-gray-500">
              {getBanglaDate()}
            </p>
          </div>
        </Link>

        {/* Desktop Authentication */}
        <div className="hidden lg:flex items-center gap-2">
          {isPending ? (
            <span className="loading loading-spinner loading-sm" />
          ) : session ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm gap-2"
              >
                <div className="avatar placeholder">
                  <div className="bg-green-100 text-green-700 rounded-full w-8">
                    <span className="text-sm">
                      {session.user.name?.charAt(0) || "U"}
                    </span>
                  </div>
                </div>

                <span>{session.user.name}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white rounded-box shadow-lg z-[1] w-52 p-2"
              >
                <li>
                  <Link href="/profile">
                    <span>👤</span>
                    আমার প্রোফাইল
                  </Link>
                </li>

                <li>
                  <button type="button" onClick={handleSignOut}>
                    <span>🚪</span>
                    সাইন আউট
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="btn btn-sm btn-outline btn-success"
              >
                সাইন ইন
              </Link>

              <Link
                href="/signup"
                className="btn btn-sm btn-success text-white"
              >
                সাইন আপ
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Category Links + Mobile Menu */}
      <NavLinks
        isAuthenticated={!!session}
        onSignOut={handleSignOut}
      />

    </header>
  );
}