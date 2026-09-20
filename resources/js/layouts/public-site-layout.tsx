import { Head } from '@inertiajs/react';
import { useCallback, useMemo, useRef, useState, type ReactNode } from 'react';
import PublicFooter from '@/components/public-footer';
import PublicHeader from '@/components/public-header';
import { PublicMotionContext } from '@/hooks/public-motion-context';
import { usePublicMotion } from '@/hooks/use-public-motion';

export default function PublicSiteLayout({
    children,
    title,
    hero,
    variant = 'interior',
}: {
    children: ReactNode;
    title: string;
    /** Rendered full-bleed above `main`; the header floats over it on the homepage. */
    hero: ReactNode;
    variant?: 'home' | 'interior';
}): React.JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);
    const [motionPaused, setMotionPaused] = useState(false);
    const page = useRef<HTMLDivElement>(null);

    usePublicMotion(page, motionPaused, menuOpen, variant);

    const toggle = useCallback(
        () => setMotionPaused((value) => !value),
        [setMotionPaused],
    );
    const motion = useMemo(
        () => ({ paused: motionPaused, toggle }),
        [motionPaused, toggle],
    );

    return (
        <PublicMotionContext.Provider value={motion}>
            <div
                ref={page}
                data-motion={motionPaused ? 'paused' : 'playing'}
                className="public-site bg-canvas text-ink min-h-screen overflow-x-clip"
            >
                <Head title={title} />
                <a href="#public-content" className="public-skip-link">
                    Skip to content
                </a>
                <PublicHeader
                    menuOpen={menuOpen}
                    onMenuOpenChange={setMenuOpen}
                />
                {hero}
                <main id="public-content" tabIndex={-1}>
                    {children}
                </main>
                <PublicFooter />
            </div>
        </PublicMotionContext.Provider>
    );
}
