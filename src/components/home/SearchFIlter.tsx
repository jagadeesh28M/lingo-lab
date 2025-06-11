"use client";

import { useState } from "react";
import { Search, Filter, ChevronDown, X, Check } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterCategory {
  name: string;
  options: FilterOption[];
}

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedFilters: Record<string, string[]>;
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<Record<string, string[]>>
  >;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedFilters,
  setSelectedFilters,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterCategories: FilterCategory[] = [
    {
      name: "level",
      options: [
        { id: "beginner", label: "Beginner" },
        { id: "intermediate", label: "Intermediate" },
        { id: "advanced", label: "Advanced" },
      ],
    },
    {
      name: "participants",
      options: [
        { id: "small", label: "1-3 People" },
        { id: "medium", label: "4-6 People" },
        { id: "large", label: "7+ People" },
      ],
    },
  ];

  const toggleFilter = (category: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const currentSelected = [...(prev[category] || [])];

      if (currentSelected.includes(optionId)) {
        return {
          ...prev,
          [category]: currentSelected.filter((id) => id !== optionId),
        };
      } else {
        return {
          ...prev,
          [category]: [...currentSelected, optionId],
        };
      }
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      level: [],
      time: [],
      participants: [],
    });
  };

  const totalSelectedFilters = Object.values(selectedFilters).flat().length;

  return (
    <div className="relative w-full p-5">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search input */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search languages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-400 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              <X size={16} className="text-slate-400 hover:text-white" />
            </button>
          )}
        </div>

        {/* Filter button */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 ${
              isFilterOpen || totalSelectedFilters > 0
                ? "bg-indigo-600/20 border-indigo-500/50 text-indigo-300"
                : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600"
            }`}
            aria-expanded={isFilterOpen}
            aria-controls="filter-dropdown"
          >
            <Filter size={18} />
            <span>Filter</span>
            {totalSelectedFilters > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-indigo-600 rounded-full">
                {totalSelectedFilters}
              </span>
            )}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isFilterOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Filter dropdown */}
          {isFilterOpen && (
            <div
              id="filter-dropdown"
              className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-lg shadow-xl z-50 overflow-hidden"
              role="region"
              aria-label="Filter options"
            >
              <div className="p-3 border-b border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">Filters</h3>
                  {totalSelectedFilters > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-indigo-400 hover:text-indigo-300"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>

              <div className="p-3 max-h-96 overflow-y-auto">
                {filterCategories.map((category) => (
                  <div key={category.name} className="mb-4 last:mb-0">
                    <h4 className="text-sm font-medium text-slate-300 mb-2 capitalize">
                      {category.name}
                    </h4>
                    <div className="space-y-1">
                      {category.options.map((option) => {
                        const isSelected = selectedFilters[
                          category.name
                        ]?.includes(option.id);

                        return (
                          <button
                            key={option.id}
                            onClick={() =>
                              toggleFilter(category.name, option.id)
                            }
                            className={`flex items-center w-full px-2 py-1.5 rounded text-sm focus:outline-none ${
                              isSelected
                                ? "bg-indigo-600/20 text-indigo-300"
                                : "hover:bg-slate-800 text-slate-300"
                            }`}
                            aria-pressed={isSelected}
                          >
                            <div
                              className={`w-4 h-4 mr-2 rounded border flex items-center justify-center ${
                                isSelected
                                  ? "border-indigo-500 bg-indigo-500/20"
                                  : "border-slate-600"
                              }`}
                            >
                              {isSelected && (
                                <Check size={12} className="text-indigo-400" />
                              )}
                            </div>
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="px-4 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
