import Header2 from "../components/Header2";
import { Search } from "lucide-react";

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-[#202222] text-white">
      <Header2 />

      <main className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#c7c7c7]">Projects</h1>
          <button className="bg-[#78786d] hover:bg-[#5e5e5e] text-white font-medium px-5 py-2 rounded-lg transition-all text-sm sm:text-base">
            New Project
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search projects"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#3e3e3e] text-white placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#78786d]"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" size={20} />
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#3e3e3e]">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#2a2a2a] text-[#c7c7c7]">
              <tr>
                <th className="px-4 sm:px-6 py-3 font-semibold">Name</th>
                <th className="px-4 sm:px-6 py-3 font-semibold">Description</th>
                <th className="px-4 sm:px-6 py-3 font-semibold">Status</th>
                <th className="px-4 sm:px-6 py-3 font-semibold">Type</th>
                <th className="px-4 sm:px-6 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-[#202222] text-[#e0e0e0] divide-y divide-[#3e3e3e]">
              <tr>
                <td className="px-4 sm:px-6 py-4" colSpan={5}>
                  <div className="text-center text-[#888] py-10 text-sm sm:text-base">
                    No projects available yet.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
