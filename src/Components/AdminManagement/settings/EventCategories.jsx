import React, { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { CiTrash } from "react-icons/ci";

/* ── Initial seed data for event categories ── */
const initialData = [
  { id: 1, category: "Football", description: "Large scale events" },
  { id: 2, category: "Cricket", description: "Online seminars" },
];

const EventCategories = () => {
  /* Local state — manages the list of event categories */
  const [categories, setCategories] = useState(initialData);

  /* Removes a category row by its id */
  const deleteCategory = (id) =>
    setCategories((prev) => prev.filter((c) => c.id !== id));

  /* Appends a blank placeholder category to the list */
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
    <div className="rounded-lg overflow-hidden px-5 pt-3 pb-5">
      {/* Section heading */}
      <p className="text-[14px] font-semibold text-[#000000CC] pb-2">
        1. Event Categories
      </p>

      <div className="bg-white">
        {/* ── Categories table ── */}
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Event Category
              </th>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Description
              </th>
              <th className="py-1 px-4 text-right text-[13px] font-medium text-[#000000CC]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr key={item.id}>
                <td className="py-1 px-4 text-[13px] text-[#000000E5]">
                  {item.category}
                </td>
                <td className="py-1 px-4 text-[13px] text-[#000000E5]">
                  {item.description}
                </td>
                <td className="py-1 px-4">
                  <div className="flex justify-end gap-2">
                    {/* Edit action — opens edit mode (wiring pending) */}
                    <button className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors">
                      <LuPencilLine className="text-white" />
                    </button>

                    {/* Delete action — removes row from list */}
                    <button
                      onClick={() => deleteCategory(item.id)}
                      className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors"
                    >
                      <CiTrash className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── Add new category button ── */}
        <div className="p-4 w-[400px] mx-auto">
          <button
            onClick={addCategory}
            className="w-full py-2.5 bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[11px] font-semibold rounded-md tracking-wide transition-colors"
          >
            ADD MORE EVENT +
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
