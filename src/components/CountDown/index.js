import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ seconds, onCountdownEnd }) {
    const [countdown, setCountdown] = useState(seconds);

    useEffect(() => {
        const timer = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                clearInterval(timer);
                onCountdownEnd(); // Gọi hàm callback khi đếm ngược kết thúc
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown, onCountdownEnd]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return <div style={{ marginLeft: '5px' }}>{formatTime(countdown)}</div>;
}
