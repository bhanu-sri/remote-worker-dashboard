import React from 'react';

function NetworkInfo() {
    const connection = navigator.connection || {};
    return (
        <div className="border p-3 rounded">
            <p>Downlink Speed: {connection.downlink || 'Unknown'} Mbps</p>
            <p>Connection Type: {connection.effectiveType || 'Unknown'}</p>
            <p>RTT (Round Trip Time): {connection.rtt || 'Unknown'} ms</p>
            <p>Save Data Mode: {connection.saveData ? 'Enabled' : 'Disabled'}</p>
        </div>
    );
}

export default NetworkInfo;
