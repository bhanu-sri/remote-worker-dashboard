import React from 'react';
import NetworkInfo from './NetworkInfo';
import LocationInfo from './LocationInfo';
import CanvasChart from './CanvasChart';
import ScrollAnimation from './ScrollAnimation'; // ADD THIS

function Dashboard() {
    return (
        <div className="p-4" style={{ marginLeft: '220px' }}>
    <h2>Remote Work Dashboard</h2>
    <h3 id="network">Dashboard Overview</h3>
    <NetworkInfo />
    <div id="location">
        <LocationInfo />
    </div>
    <div id="canvas">
        <CanvasChart />
    </div>
    <div id="health">
        <ScrollAnimation />
    </div>
</div>

    );
}

export default Dashboard;
