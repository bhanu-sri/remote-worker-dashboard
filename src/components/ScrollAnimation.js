import React, { useEffect, useRef } from 'react';

function ScrollAnimation() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );
        const elements = cardsRef.current.filter(Boolean);
        elements.forEach(card => observer.observe(card));

        return () => {
            elements.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };

    }, []);

    const tips = [
        "💧 Stay hydrated throughout your workday.",
        "🧍‍♂️ Take frequent short standing breaks.",
        "👁️ Follow 20-20-20 rule for eye health (every 20 mins, look 20ft away for 20 seconds).",
        "🧘‍♀️ Practice light stretching during breaks.",
        "🍎 Maintain a balanced diet while working remotely.",
        "☀️ Ensure good lighting in your workspace to reduce eye strain."
    ];

    return (
        <div className="scrollanimation">
            <div className="row">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="col-md-6 mb-4 card fade p-3"
                        style={{
                            backgroundColor: '#2e2e4d',
                            color: '#ffffff',
                            borderRadius: '48px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <h5>Tip #{index + 1}</h5>
                        <p>{tip}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScrollAnimation;
