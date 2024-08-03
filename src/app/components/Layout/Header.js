"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="z-10 sticky top-0 bg-white">
            <div className="flex items-center justify-between w-full h-20 px-4">
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    {active ? (
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-2xl hover:border-black hover:border-2 outline-none"
                            onClick={handleClick}
                        >
                            <AiOutlineClose />
                        </button>
                    ) : (
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-2xl hover:border-black hover:border-2 outline-none"
                            onClick={handleClick}
                        >
                            <AiOutlineMenu />
                        </button>
                    )}
                </div>

                {/* Menu Items */}
                <div
                    className={`${active ? "flex" : "hidden"
                        } md:flex w-full md:w-auto md:flex-grow flex-col md:flex-row items-center justify-center md:space-x-4 mt-4 md:mt-0`}
                >
                    <Link href="/" className="nav-menu" onClick={handleClick}>
                        Home
                    </Link>
                    <Link href="/particle" className="nav-menu" onClick={handleClick}>
                        Particles
                    </Link>
                    <Link href="/typewrite" className="nav-menu" onClick={handleClick}>
                        Typewrite
                    </Link>
                    <Link href="/tabs" className="nav-menu" onClick={handleClick}>
                        Tabs
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Header;
