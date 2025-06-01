import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LayoutDashboard, Folder, Bot, TerminalSquare, User } from "lucide-react";

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { to: "/project", icon: <Folder size={20} />, label: "Project" },
    { to: "/agents", icon: <Bot size={20} />, label: "Agents" },
    { to: "/playground", icon: <TerminalSquare size={20} />, label: "Playground" },
    { to: "/profile", icon: <User size={20} />, label: "Perfil" },
  ];

  return (
    <header className="w-full bg-[#202222] px-6 py-4 shadow-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold pl-1">
          <span className="text-[#c7c7c7]">Birkenstahl</span>{" "}
          <span className="text-[#78786d]">Agent</span>
        </h1>

        <nav className="hidden md:flex gap-6 items-center text-[#c7c7c7]">
          {navItems.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              title={label}
              className={`flex items-center gap-2 hover:text-[#78786d] transition ${
                location.pathname === to ? "text-[#78786d]" : ""
              }`}
            >
              {icon}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#c7c7c7] focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 px-4 flex flex-col gap-4 text-[#c7c7c7]">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#78786d] transition"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header2;
