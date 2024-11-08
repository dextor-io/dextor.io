import React, {useEffect, useState} from "react";
import regionData from "../timeConverter/data/RegionData.json";
import SearchBar from "../../components/ui/SearchBar.jsx";
import ClockCard from "./ClockCard.jsx";

function TimeConverter() {
    const [time, setTime] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRegionData, setFilteredRegionData] = useState(regionData);

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const filtered = regionData.filter(region => {
            const matchesSearch = region.cities.some(city =>
                city.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                city.country.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return matchesSearch;
        });

        setFilteredRegionData(filtered);
    }, [searchTerm]);

    return (
        <div className="relative overflow-hidden">
            <div className="px-4 pt-20 pb-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <h1 className="mb-6 text-5xl font-bold text-black md:text-7xl animate-fade-in">
                    TimeConverter<span className="text-primary-500">.io</span>
                </h1>
            </div>
            <div className="text-center mt-6">
                <label htmlFor="time-input" className="block text-xl mb-2">
                    Select Time:
                </label>
                <input
                    type="time"
                    id="time-input"
                    value={time}
                    onChange={handleTimeChange}
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label="Select a time"
                />
            </div>

            <div className="mt-8 mx-8">
                <div className="flex flex-col lg:mx-12 gap-4 mb-4 sm:flex-row">
                    <SearchBar
                        value={searchTerm}  // Pass the search term as value to SearchBar
                        onChange={handleSearchChange}  // Handle the search input change
                        placeholder="Search by city or country..."
                    />
                </div>

                {filteredRegionData && filteredRegionData.length > 0 ? (
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-8 p-4 md:p-6">
                        {filteredRegionData.map((item) => (
                            <div
                                key={item.id || item.name || item.region}
                                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-primary-100 hover:shadow-xl transition-all duration-300 border border-gray-100 backdrop-blur-sm hover:-translate-y-1"
                            >
                                <ClockCard inputTime={time} item={item}/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center mt-6 text-red-500">No region data available for the search term.</p>
                )}
            </div>
        </div>
    );
}

export default TimeConverter;
