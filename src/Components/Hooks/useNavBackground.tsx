import { useState, useEffect } from 'react';

export const useNavBackground = () => {
    const [navBackground, setNavBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setNavBackground(true);
            } else {
                setNavBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return navBackground;
};