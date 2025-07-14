import React from 'react';

function Sidebar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="p-3 sidebar" style={{ width: '220px', position: 'fixed' }}>
            <h5 className="mb-4">Workplace Insights</h5>
            <ul className="list-unstyled">
                <li><button onClick={() => scrollToSection('network')} className="btn btn-link">Network Info</button></li>
                <li><button onClick={() => scrollToSection('location')} className="btn btn-link">Location Info</button></li>
                <li><button onClick={() => scrollToSection('canvas')} className="btn btn-link">Network Strength</button></li>
                <li><button onClick={() => scrollToSection('health')} className="btn btn-link">Health Tips</button></li>
            </ul>
        </div>
    );
}

export default Sidebar;
