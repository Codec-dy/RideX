import React, { useState } from 'react';
import { assets, Details } from '../assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className=" bg-white shadow-md absolute right-0 top-0 w-screen z-30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <Image src={assets.logo} alt="logo" width={40} height={40} /> */}
          <span className="text-2xl font-extrabold text-blue-900 tracking-tight prata-regular">{Details.whosePortfolio}</span>
        </div>

        {/* Desktop Links */}
        <div className="flex-1 hidden sm:flex items-center w-full justify-center gap-8">
          <Link
            href="/"
            onClick={() => setActive("Home")}
            className={`transition-colors duration-200 px-2 py-1 rounded-md ${active === "Home" ? "text-blue-700 font-semibold bg-blue-50" : "text-gray-700 hover:text-blue-700"}`}
          >
            Plan & Book
          </Link>
          <Link
            href="/services/manage-booking"
            onClick={() => setActive("About")}
            className={`transition-colors duration-200 px-2 py-1 rounded-md ${active === "About" ? "text-blue-700 font-semibold bg-blue-50" : "text-gray-700 hover:text-blue-700"}`}
          >
            Manage Booking
          </Link>
          <Link
            href="/services/contact"
            onClick={() => setActive("Contact")}
            className={`transition-colors duration-200 px-2 py-1 rounded-md ${active === "Contact" ? "text-blue-700 font-semibold bg-blue-50" : "text-gray-700 hover:text-blue-700"}`}
          >
            Contact Us
          </Link>
        </div>
        <div className='sm:flex items-center w-fit justify-end hidden'>
          <select className="ml-4 bg-gray-100 border border-gray-300 text-gray-700 p-2 rounded-md focus:outline-blue-700">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
          <a href="/auth/login" className="ml-2">
            <Image src="/account_circle.png" alt="Account" width={32} height={32} className="rounded-full border border-gray-200" />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="sm:hidden flex items-center"
          onClick={() => setVisible(true)}
          aria-label="Open menu"
        >
          <Image src={assets.menu_icon} alt="menu" width={36} height={36} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-60 transition-opacity duration-300 ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setVisible(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${visible ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-blue-900">{Details.whosePortfolio}</span>
            <button onClick={() => setVisible(false)} aria-label="Close menu">
              <Image src={assets.dropdown_icon} alt="Close" width={28} height={28} className="rotate-180" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <a
              href="/dashboard/home"
              onClick={() => { setVisible(false); setActive("Home"); }}
              className={`px-2 py-2 rounded-md ${active === "Home" ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"}`}
            >
              Plan & Book
            </a>
            <a
              href="/services/manage-booking"
              onClick={() => { setVisible(false); setActive("About"); }}
              className={`px-2 py-2 rounded-md ${active === "About" ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"}`}
            >
              Manage Booking
            </a>
            <a
              href="/services/contact"
              onClick={() => { setVisible(false); setActive("Contact"); }}
              className={`px-2 py-2 rounded-md ${active === "Contact" ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"}`}
            >
              Contact Us
            </a>
            <select className="bg-gray-100 border border-gray-300 text-gray-700 p-2 rounded-md mt-4">
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
            </select>
            <a href="/auth/login" className="mt-4 flex items-center gap-2">
              <Image src="/account_circle.png" alt="Account" width={32} height={32} className="rounded-full border border-gray-200" />
              <span className="text-gray-700">Login</span>
            </a>
          </nav>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;