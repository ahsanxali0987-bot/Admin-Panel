import React, { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { CiTrash } from "react-icons/ci";

const initialData = [
  { id: 1, category: "Football", description: "Large scale events" },
  { id: 2, category: "Cricket", description: "Online seminars" },
];

const EventCategories = () => {
  const [categories, setCategories] = useState(initialData);

  const deleteCategory = (id) =>
    setCategories((prev) => prev.filter((c) => c.id !== id));

  const addCategory = () =>
    setCategories((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        category: "New Event",
        description: "Description here",
      },
    ]);

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-[#F5F5F5] box-border font-[Poppins]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="bg-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden p-4 sm:p-6">
        {/* Section heading with dynamic layout configuration */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
          <p className="text-[14px] sm:text-[15px] font-semibold text-[#000000CC] m-0">
            1. Event Categories
          </p>
          {/* Desktop/Tablet dynamic secondary top button layout alternative shortcut */}
          <button
            onClick={addCategory}
            className="hidden sm:inline-flex items-center justify-center bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[11px] font-semibold px-4 py-2 rounded-md tracking-wide transition-colors shadow-xs"
          >
            ADD MORE EVENT +
          </button>
        </div>

        {/* ── Mobile Stack Card View (Hidden on Desktop) ── */}
        <div className="block md:hidden space-y-3">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 rounded-xl border border-gray-200/60 space-y-3 shadow-xs"
            >
              <div className="space-y-1">
                <span className="text-[14px] font-bold text-gray-900 block">
                  {item.category}
                </span>
                <p className="text-[12px] text-gray-500 leading-relaxed m-0">
                  {item.description}
                </p>
              </div>

              {/* Responsive Action Grid Buttons inside Card */}
              <div className="flex gap-2 pt-2 border-t border-gray-200/50 justify-end">
                <button className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors shadow-xs">
                  <LuPencilLine className="text-white text-sm" />
                </button>
                <button
                  onClick={() => deleteCategory(item.id)}
                  className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors shadow-xs"
                >
                  <CiTrash className="text-white text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop Table View (Hidden on Mobile) ── */}
        <div className="hidden md:block overflow-x-auto w-full rounded-xl border border-gray-100 bg-gray-50/30">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-[#dfdfdf]">
                {["Event Category", "Description", "Actions"].map((heading) => (
                  <th
                    key={heading}
                    className={`py-3 px-5 text-left text-[13px] sm:text-[14px] font-medium text-[#000000CC] ${heading === "Actions" ? "text-right pr-8" : ""}`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {categories.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/40 transition-colors"
                >
                  <td className="py-3.5 px-5 text-[13px] sm:text-[14px] text-[#000000E5] font-medium">
                    {item.category}
                  </td>
                  <td className="py-3.5 px-5 text-[13px] sm:text-[14px] text-gray-600">
                    {item.description}
                  </td>
                  <td className="py-2 px-5 pr-6">
                    <div className="flex justify-end gap-2">
                      <button className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors shadow-xs">
                        <LuPencilLine className="text-white text-sm" />
                      </button>
                      <button
                        onClick={() => deleteCategory(item.id)}
                        className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors shadow-xs"
                      >
                        <CiTrash className="text-white text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mobile Bottom Add Button (Only visible on small devices) ── */}
        <div className="pt-4 w-full sm:hidden">
          <button
            onClick={addCategory}
            className="w-full py-2.5 bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[12px] font-semibold rounded-lg tracking-wide transition-colors shadow-xs"
          >
            ADD MORE EVENT +
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
