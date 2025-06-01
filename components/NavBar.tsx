"use client";
import { useState } from "react";
import logo from "../public/white.png";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import CookiesService from "../service";
import { NavLinks } from "../data/data";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const token = CookiesService.get("UserToken");
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();
  const namepath = usePathname();
  const filteredLinks = NavLinks.filter(({ label }) => {
    if (token) {
      return label !== "Login" && label !== "Join";
    } else {
      return label !== "Profile" && label !== "Sessions";
    }
  });

  const handleLogout = () => {
    CookiesService.remove("UserToken");
    route.push("/");
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-[#022639] to-[#0a3a5a] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              onClick={() => route.push("/")}
              src={logo}
              className="h-32 w-32 cursor-pointer"
              alt="Logo"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {filteredLinks.map(({ label, path }) => {
              const routePath = label === "Sessions" ? "/Sessions" : path;
              return (
                <Link
                  key={label}
                  href={routePath}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    namepath === path
                      ? "text-[#42D5AE] border-b-2 border-[#42D5AE]"
                      : "text-gray-300 hover:text-white hover:bg-[#42D5AE]/20 rounded-md"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            {token && (
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors hover:bg-[#ef4444]/20 rounded-md"
              >
                <FiLogOut className="mr-2" />
                Logout
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md hover:bg-[#42D5AE] focus:outline-none focus:ring-2 focus:ring-[#42D5AE]"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <CiMenuFries className="w-6 h-6" />
              ) : (
                <CiMenuBurger className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#022639] overflow-hidden transition-all duration-300">
            <div className="px-2 pt-2 pb-4 space-y-2">
              {filteredLinks.map(({ label, path }) => {
                const routePath = label === "Sessions" ? "/Sessions" : path;
                return (
                  <Link
                    key={label}
                    href={routePath}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      namepath === path
                        ? "text-[#42D5AE] border-b-2 border-[#42D5AE]"
                        : "text-gray-300 hover:text-white hover:bg-[#42D5AE]/20 rounded-md"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}

              {token && (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-[#ef4444]/50 hover:text-white"
                >
                  <FiLogOut className="mr-2" />
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
