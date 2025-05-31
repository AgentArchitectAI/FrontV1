import React from "react";
import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex flex-col sm:flex-row justify-between items-center bg-[#202222] shadow-md gap-4 sm:gap-0">
      <h1 className="text-2xl font-bold text-[#78786d]">Birkenstahl Agent</h1>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <Link to="/login" title="Login">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-[#78786d] text-[#78786d] rounded hover:bg-[#78786d] hover:text-white transition">
            <LogIn className="w-5 h-5" />
            <span className="hidden sm:inline">Login</span>
          </button>
        </Link>
        <Link to="/register" title="Register">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[#78786d] text-white rounded hover:bg-[#5e5e5e] transition">
            <UserPlus className="w-5 h-5" />
            <span className="hidden sm:inline">Register</span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

