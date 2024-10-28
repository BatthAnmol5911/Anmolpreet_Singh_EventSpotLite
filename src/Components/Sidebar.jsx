import React from 'react';
import { FaSignalMessenger } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

const links = [
  { to: "/", label: "Home", icon: <FaHome fontSize={20} /> },
  { to: "/myevent", label: "MyEvents", icon: <AiOutlineMessage fontSize={20} /> },
  { to: "/login", label: "Login", icon: <IoIosLogIn fontSize={20} /> },
  { to: "/logout", label: "Logout", icon: <IoIosLogOut fontSize={20} /> },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
<div className={`bg-gray-900 w-60 h-screen p-3 flex flex-col text-white fixed md:relative transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      <div className='flex items-center gap-2 px-1 py-3'>
        <FaSignalMessenger fontSize={30} />
        <span className="text-neutral-100 text-lg">EventSpotLite</span>
      </div>
      <nav className='flex-1'>
        <ul className='space-y-3'>
          {links.map(link => (
            <li key={link.label} className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-800'>
              {link.icon}
              <Link to={link.to} className='block p-2 rounded'>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='mt-auto'>
        <p className='text-sm'>© 2024 AnmolPreet Singh</p>
      </div>
    </div>
  );
}
