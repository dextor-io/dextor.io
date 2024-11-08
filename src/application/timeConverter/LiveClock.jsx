import React, {useEffect, useState} from 'react';

const LiveClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [inputTime, setInputTime] = useState('');  // Correct state for manual input time

    useEffect(() => {
        const interval = setInterval(() => {
            // Only update time if no input is given (if inputTime is empty)
            if (!inputTime) {
                setTime(new Date().toLocaleTimeString());
            }
        }, 1000);

        // Cleanup interval when component is unmounted
        return () => clearInterval(interval);
    }, [inputTime]);

    return (
        <h1 className="text-3xl font-bold">{time}</h1>
    );
};

export default LiveClock;
