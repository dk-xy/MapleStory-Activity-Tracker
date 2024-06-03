import React, { useState, useEffect } from 'react';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const now = new Date();
        const targetDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
    
        // Add days until the next Monday
        targetDate.setUTCDate(targetDate.getUTCDate() + ((1 + 7 - now.getUTCDay()) % 7));
    
        let difference = targetDate - now;
    
        // If the target date is in the past, add 7 days to the difference
        if (difference < 0) {
            difference += 7 * 24 * 60 * 60 * 1000;
        }
    
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return (
        <div className='timeLeft'>
        {timeLeft.days > 0 ? `${timeLeft.days}d ` : ""}
        {timeLeft.hours}h {timeLeft.minutes}m 
        {timeLeft.days === 0 ? `${timeLeft.seconds}s` : ""}
        </div>
    );
}

export default Countdown;