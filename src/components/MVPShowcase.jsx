import React, {useEffect, useState} from 'react';
import {Filter} from 'lucide-react';
import featuredData from '../data/featured.json';
import SearchBar from './ui/SearchBar';
import FilterSelect from './ui/FilterSelect';
import ProjectCard from './ui/ProjectCard';

const MVPShowcase = () => {
    const [featured, setFeatured] = useState([]);
    const [filteredFeatured, setFilteredFeatured] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = () => {
            try {
                setIsLoading(true);
                if (!Array.isArray(featuredData.ideas)) {
                    throw new Error('Invalid data structure in featured.json');
                }
                // Sort featured ideas by name
                const sortedFeatured = featuredData.ideas.sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
                setFeatured(sortedFeatured);
                const uniqueCategories = [...new Set(sortedFeatured.map(featured => featured.category))];
                setCategories(['All', ...uniqueCategories]);
                setFilteredFeatured(sortedFeatured);
                setIsLoading(false);
            } catch (err) {
                console.error('Error loading MVP data:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    useEffect(() => {
        const filtered = featured.filter(featured => {
            const matchesSearch =
                featured.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                featured.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                featured.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesStatus = statusFilter === 'All' || featured.status === statusFilter;
            const matchesCategory = categoryFilter === 'All' || featured.category === categoryFilter;

            return matchesSearch && matchesStatus && matchesCategory;
        });

        setFilteredFeatured(filtered);
    }, [searchTerm, statusFilter, categoryFilter, featured]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-primary-400">Loading projects...</div>
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
                <h2 className="mb-6 text-3xl font-bold text-black">Featured Projects</h2>

                <div className="flex flex-col gap-4 mb-6 sm:flex-row">
                    <SearchBar
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search projects..."
                    />

                    <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                        <Filter size={20} className="text-gray-400"/>
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
                {filteredFeatured.map(featured => (
                    <ProjectCard key={featured.id} idea={featured}/>
                ))}
            </div>

            {filteredFeatured.length === 0 && (
                <div className="py-12 text-center">
                    <p className="text-gray-400">No projects found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default MVPShowcase;