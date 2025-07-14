import React from 'react';
import Sidebar from './components/Sidebar';
import NetworkInfo from './components/NetworkInfo';
import LocationInfo from './components/LocationInfo';
import CanvasChart from './components/CanvasChart';
import ScrollAnimation from './components/ScrollAnimation';

function App() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 dashboard-content" style={{ marginLeft: '240px' }}>
              
                <h2 className="mb-4">Remote Work Dashboard</h2>
                <p>
                    This dashboard provides essential network and health insights for remote workers, helping improve productivity and well-being.
                </p>          
                <section id="network" className="scroll-offset mb-5">
                    <h4>1️⃣ Network Information</h4>
                    <NetworkInfo />
                </section>

                <section id="location" className="scroll-offset mb-5">
                    <h4>2️⃣ Location Information</h4>
                    <LocationInfo />
                </section>

                <section id="canvas" className="scroll-offset mb-5">
                    <h4>3️⃣ Network Strength (Visual)</h4>
                    <CanvasChart />
                </section>

                <section id="health" className="scroll-offset mb-5">
                    <h4>4️⃣ Health Tips for Remote Workers</h4>
                    <ScrollAnimation />
                </section>
            </div>
        </div>
    );
}

export default App;
