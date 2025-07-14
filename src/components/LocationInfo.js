import React, { useEffect, useState } from 'react';

function LocationInfo() {
    const [location, setLocation] = useState({ lat: '', lng: '' });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    }, []);

    return (
    <div className="border p-3 rounded">
        <p>Latitude: {location.lat}</p>
        <p>Longitude: {location.lng}</p>
        {location.lat && location.lng && (
            <iframe
                title="User Location"
                width="100%"
                height="200"
                frameBorder="0"
                src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                allowFullScreen
            ></iframe>
        )}
    </div>
);

}

export default LocationInfo;