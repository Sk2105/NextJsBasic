"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";

export function NavbarDemo() {
    return (
        <div className="relative top-2 w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="grid grid-cols-2 gap-4 space-y-4 text-sm">
                        <ProductItem
                            title="Product 1"
                            description="Product 1 description"
                            href="/product/1"
                            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        />
                        <ProductItem
                            title="Product 2"
                            description="Product 2 description"
                            href="/product/2"
                            src="/product-2.png"
                        />
                        <ProductItem
                            title="Product 3"
                            description="Product 3 description"
                            href="/product/3"
                            src="/product-3.png"
                        />
                        <ProductItem
                            title="Product 4"
                            description="Product 4 description"
                            href="/product/4"
                            src="/product-4.png"
                        />

                        <ProductItem
                            title="Product 5"
                            description="Product 5 description"
                            href="/product/5"
                            src="/product-5.png"
                        />

                        <ProductItem
                            title="Product 6"
                            description="Product 6 description"
                            href="/product/6"
                            src="/product-6.png"
                        />
                    </div>

                </MenuItem>
                <Link href="/about" onMouseEnter={() => setActive(null)} onMouseLeave={() => setActive(null)}>About</Link>
                <Link href="/login" onMouseLeave={() => setActive(null)} onMouseEnter={() => setActive(null)} ><button className="text-gray-400 py-2 px-2 hover:bg-gray-400/40 rounded-3xl">Login</button></Link>
                <Link href="/signup" onMouseLeave={() => setActive(null)} onMouseEnter={() => setActive(null)}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">Signup</button></Link>
            </Menu>
        </div>
    );
}

