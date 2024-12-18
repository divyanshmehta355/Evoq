"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EVOQ_LOGO } from "@/utils/constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className={cn("bg-[#010203] p-4 w-full border-b")}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <button onClick={() => router.push("/")}>
            <Image
              src={EVOQ_LOGO}
              alt="Logo"
              width={150} 
              height={50}
              className="h-12 w-auto"
            />
          </button>
        </div>

        {/* Menu button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            {sidebarOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>

        {/* Navigation links (hidden on mobile) */}
        <div className="hidden md:flex space-x-4">
          <NavLink href="/" title="Home" />
          <NavLink href="/about" title="About" />
          <NavLink href="/services" title="Services" />
          <NavLink href="/contact" title="Contact Us" />
        </div>

        {/* Sidebar for mobile */}
        <div
          className={`fixed top-0 left-0 h-full bg-[#010203] w-64 transform transition-transform duration-300 ease-in-out md:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar} className="text-white">
              <AiOutlineClose size={28} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-8">
            <NavLink href="/" title="Home" />
            <NavLink href="/about" title="About" />
            <NavLink href="/services" title="Services" />
            <NavLink href="/contact" title="Contact Us" />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href}>
      <div className="text-white hover:bg-gray-700 px-3 py-2 rounded hover:cursor-customHover">
        {title}
      </div>
    </Link>
  );
};


export default Navbar;
