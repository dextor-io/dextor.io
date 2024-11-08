import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MVPShowcase from './components/MVPShowcase';
import ExplorePage from './components/ExplorePage';
import logo from './assets/dextor.svg';
import TimeConverter from "./application/timeConverter/TimeConverter.jsx";

function App() {
    return (
        <Router>
            <Helmet>
                <title>Dextor</title>
                <link rel="icon" type="image/svg+xml" href={logo}/>
            </Helmet>
            <div className="min-h-screen">
                <Navbar/>
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection/>
                            <MVPShowcase/>
                        </>
                    }/>
                    <Route path="/explore" element={<ExplorePage/>}/>
                    <Route path="/timeconverter" element={<TimeConverter/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;