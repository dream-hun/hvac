import { useEffect, useState } from 'react';

/**
 * True once the page has scrolled past `threshold`. Lenis drives native scroll,
 * so the window listener stays accurate while smooth scrolling is running.
 */
export function useScrolled(threshold = 24): boolean {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const update = (): void => setScrolled(window.scrollY > threshold);
        update();
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, [threshold]);

    return scrolled;
}
