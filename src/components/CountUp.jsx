import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export default function CountUp({ end, duration = 1200, suffix = '' }) {
    const [ref, inView] = useInView();
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let rafId;
        const start = performance.now();

        const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setVal(Math.round(eased * end));
            if (progress < 1) {
                rafId = requestAnimationFrame(step);
            }
        };

        rafId = requestAnimationFrame(step);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [inView, end, duration]);

    return <span ref={ref}>{val}{suffix}</span>;
}