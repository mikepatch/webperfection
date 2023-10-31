import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollToTop = () => {
        try {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.pageYOffset);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollPosition, scrollToTop };
};
