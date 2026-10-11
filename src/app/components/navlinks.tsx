
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Category } from "@/lib/utils";

interface NavLinksProps {
  isAuthenticated: boolean;
  onSignOut: () => void;
}

export default function NavLinks({
  isAuthenticated,
  onSignOut,
}: NavLinksProps) {
  const pathname = usePathname();

  const [categories, setCategories] = useState<Category[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://api.api-store.workers.dev/api/bazardor/categories"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Menu Toggle */}
        <div className="flex justify-end lg:hidden py-1">
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Category Navigation */}
        <nav className={`${mobileMenuOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-wrap items-center gap-1 py-2">
            {categories.map((cat) => {
              const isActive = pathname === `/category/${cat.slug}`;

              return (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`btn btn-sm ${
                      isActive
                        ? "btn-success text-white"
                        : "btn-ghost text-gray-600 hover:bg-green-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{cat.icon}</span>
                    {cat.nameBn}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Authentication Buttons */}
            {mobileMenuOpen && (
              <li className="w-full mt-2 flex gap-2 lg:hidden">
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/profile"
                      className="btn btn-sm btn-outline btn-success flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      প্রোফাইল
                    </Link>

                    <button
                      type="button"
                      className="btn btn-sm btn-error text-white flex-1"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onSignOut();
                      }}
                    >
                      সাইন আউট
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="btn btn-sm btn-outline btn-success flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      সাইন ইন
                    </Link>

                    <Link
                      href="/signup"
                      className="btn btn-sm btn-success text-white flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      সাইন আপ
                    </Link>
                  </>
                )}
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
