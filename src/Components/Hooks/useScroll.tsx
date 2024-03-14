import { useState, useEffect, useRef } from 'react';

export const useScroll = () => {
    const slideRef = useRef<HTMLDivElement>(null);
    const [canScroll, setCanScroll] = useState({
        left: false,
        right: true,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (slideRef.current) {
                setCanScroll({
                    left: slideRef.current.scrollLeft > 0,
                    right:
                        slideRef.current.scrollLeft <
                        slideRef.current.scrollWidth - slideRef.current.clientWidth,
                });
            }
        };

        if (slideRef.current) {
            slideRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (slideRef.current) {
                slideRef.current.removeEventListener("scroll", handleScroll); // eslint-disable-line react-hooks/exhaustive-deps
            }
        };
    }, []);

    return { slideRef, canScroll };
};