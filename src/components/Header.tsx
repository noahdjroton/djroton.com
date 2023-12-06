"use client";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { useState } from "react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const menus = [
        { title: "About", path: "#about" },
        { title: "Projects", path: "#projects" },
        { title: "Contact", path: "#contact" },
    ];
    return (
        <header className="flex items-center sticky top-0 z-50 container mx-auto w-full lg:h-[var(--nav-height)] backdrop-blur-[10px] transition-[var(--transition)]">
            <nav className="lg:flex relative w-full z-12">
                <div className="flex justify-between items-center lg:py-0 md:py-0Z py-6">
                    <div className="flex items-center">
                        <Link href="#hero">
                            <span className="text-xl font-extrabold font-mono">
                                {"Djroton"}
                            </span>
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        {openMenu ? (
                            <Cross1Icon
                                onClick={() => setOpenMenu(!openMenu)}
                            />
                        ) : (
                            <HamburgerMenuIcon
                                className="h-6 w-6"
                                onClick={() => setOpenMenu(!openMenu)}
                            />
                        )}
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-end items-center md:block ${
                        openMenu ? "block" : "hidden"
                    }`}
                >
                    <ul className="justify-end items-center space-y-4 flex md:space-x-6 md:space-y-0 lg:py-0 py-2 text-xs">
                        {menus.map(item => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className="mx-1 relative transition hover:text-gray-500/75"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <ModeToggle />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
