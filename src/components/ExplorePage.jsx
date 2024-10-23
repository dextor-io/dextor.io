import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import exploreData from '../data/explore.json';
import SearchBar from './ui/SearchBar';
import FilterSelect from './ui/FilterSelect';
import ProjectCard from './ui/ProjectCard';
import Pagination from './ui/Pagination';

const ExplorePage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(9);

  useEffect(() => {
    const loadData = () => {
      try {
        setIsLoading(true);
        if (!Array.isArray(exploreData.projects)) {
          throw new Error('Invalid data structure in explore.json');
        }
        setProjects(exploreData.projects);
        const uniqueCategories = [...new Set(exploreData.projects.map(project => project.category))];
        setCategories(['All', ...uniqueCategories]);
        setFilteredProjects(exploreData.projects);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading explore data:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
      const matchesCategory = categoryFilter === 'All' || project.category === categoryFilter;
      
      return matchesSearch && matchesStatus && matchesCategory;
    });
    
    setFilteredProjects(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, statusFilter, categoryFilter, projects]);

  // Get current projects for pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-blue-400">Loading projects...</div>
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
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="mb-6 text-3xl font-bold text-white">Explore Projects</h2>
        
        <div className="flex flex-col gap-4 mb-6 sm:flex-row">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search projects..."
          />
          
          <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
            <Filter size={20} className="text-gray-400" />
            <FilterSelect
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              options={['All', 'Live', 'Code']}
            />
            
            <FilterSelect
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              options={categories}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map(project => (
          <ProjectCard key={project.id} idea={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-400">No projects found matching your criteria.</p>
        </div>
      )}

      {filteredProjects.length > projectsPerPage && (
        <Pagination
          projectsPerPage={projectsPerPage}
          totalProjects={filteredProjects.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default ExplorePage;