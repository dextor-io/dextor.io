import React, { useState, useEffect } from "react";
import { Filter } from "lucide-react";
import featuredData from "../data/featured.json";
import SearchBar from "./ui/SearchBar";
import FilterSelect from "./ui/FilterSelect";
import ProjectCard from "./ui/ProjectCard";

const MVPShowcase = () => {
  const [featured, setFeatured] = useState([]);
  const [filteredFeatured, setFilteredFeatured] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = () => {
      try {
        setIsLoading(true);
        if (!Array.isArray(featuredData.ideas)) {
          throw new Error("Invalid data structure in featured.json");
        }
        const sortedFeatured = featuredData.ideas.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setFeatured(sortedFeatured);
        const uniqueCategories = [
          ...new Set(sortedFeatured.map((featured) => featured.category)),
        ];
        setCategories(["All", ...uniqueCategories]);
        setFilteredFeatured(sortedFeatured);
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading MVP data:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const filtered = featured.filter((featured) => {
      const matchesSearch =
        featured.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        featured.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        featured.tech.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesStatus =
        statusFilter === "All" || featured.status === statusFilter;
      const matchesCategory =
        categoryFilter === "All" || featured.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });

    setFilteredFeatured(filtered);
  }, [searchTerm, statusFilter, categoryFilter, featured]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-600">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-400">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white">
      <div className="mb-12">
        <h2 className="mb-8 text-4xl font-bold text-gray-800 tracking-tight font-helveticaBold">
          Featured Projects
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects..."
              className="w-full shadow-sm bg-white/70 backdrop-blur-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <Filter size={18} className="text-gray-400" />
              <FilterSelect
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                options={["All", "Live", "Code"]}
                className="bg-transparent border-none focus:ring-0"
              />
            </div>

            <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <FilterSelect
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                options={categories}
                className="bg-transparent border-none focus:ring-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredFeatured.map((featured) => (
          <div
            key={featured.id}
            className="transform transition-all duration-300 hover:scale-[1.02]"
          >
            <ProjectCard idea={featured} />
          </div>
        ))}
      </div>

      {filteredFeatured.length === 0 && (
        <div className="py-16 text-center bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
          <p className="text-gray-600 text-lg">
            No projects found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default MVPShowcase;
