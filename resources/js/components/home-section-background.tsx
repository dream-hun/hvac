import {
    lazy,
    Suspense,
    useContext,
    useEffect,
    useId,
    useRef,
    useState,
    useSyncExternalStore,
} from 'react';

import { PublicMotionContext } from '@/hooks/public-motion-context';
import { cn } from '@/lib/utils';

/*
 * Two cheap ThreeUI backgrounds. Which one a section gets is the whole
 * optimisation: `PredictiveArcCanvas`'s `signal-particles` and `override-grid`
 * variants lazy-import the NeuformBatchEffects barrel, which re-exports eighteen
 * effects at once and cost ~350 KB to use one, and the shaders built on three128
 * (DotMatrixBackground and friends) cost ~510 KB. The ribbon field is raw WebGL
 * and the data-pixel arc is a 2D canvas; both import nothing but React and build
 * to a few KB.
 */
const RibbonFieldBackground = lazy(() =>
    import('@designcodeio/threeui/components/RibbonFieldBackground').then(
        (module) => ({ default: module.RibbonFieldBackground }),
    ),
);

const DataPixelArcCanvas = lazy(() =>
    import('@threeui/data-pixel-arc').then((module) => ({
        default: module.DataPixelArcCanvas,
    })),
);

type BackgroundVariant = 'dots' | 'grid' | 'airflow';

const PATTERNS: Record<
    BackgroundVariant,
    { size: number; shape: React.JSX.Element; opacity: string }
> = {
    dots: {
        size: 26,
        shape: <circle cx="2" cy="2" r="1" fill="currentColor" />,
        opacity: 'opacity-[.09]',
    },
    grid: {
        size: 46,
        shape: (
            <path
                d="M46 0H0V46"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
            />
        ),
        opacity: 'opacity-[.07]',
    },
    airflow: {
        size: 72,
        shape: (
            <path
                d="M0 36C17 36 17 14 36 14S55 36 72 36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
            />
        ),
        opacity: 'opacity-[.05]',
    },
};

function subscribeToMotionPreference(callback: () => void): () => void {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    media.addEventListener('change', callback);
    document.addEventListener('visibilitychange', callback);
    return () => {
        media.removeEventListener('change', callback);
        document.removeEventListener('visibilitychange', callback);
    };
}

function motionDisabled(): boolean {
    return (
        document.hidden ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
}

/**
 * Decorative section texture: a tiled brand pattern with a ThreeUI shader drawn
 * over it.
 *
 * The shader is mounted only while the section is near the viewport, so each
 * page holds one or two WebGL contexts rather than one per section, and it is
 * dropped entirely when motion is paused or the tab is hidden.
 *
 * `dark` picks the renderer as well as the palette. Both shaders paint an opaque
 * field, so each is composited against the surface it suits: the ribbon's
 * near-black drops out under `screen` on the navy sections, and the pixel arc's
 * near-white drops out under `multiply` on the light ones.
 */
export default function HomeSectionBackground({
    variant = 'dots',
    dark = false,
}: {
    variant?: BackgroundVariant;
    dark?: boolean;
}): React.JSX.Element {
    const patternId = useId();
    const pattern = PATTERNS[variant];
    const container = useRef<HTMLDivElement>(null);
    const [near, setNear] = useState(false);
    const { paused } = useContext(PublicMotionContext);
    const disabled = useSyncExternalStore(
        subscribeToMotionPreference,
        motionDisabled,
        () => true,
    );
    const active = near && !paused && !disabled;

    useEffect(() => {
        if (!container.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setNear(entry.isIntersecting),
            { rootMargin: '25% 0px' },
        );
        observer.observe(container.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={container}
            aria-hidden="true"
            inert
            data-section-background={variant}
            data-active={active}
            className={cn(
                'section-background pointer-events-none absolute inset-0 -z-10 overflow-hidden',
                dark && 'section-background--dark',
            )}
        >
            <svg
                className={cn('absolute inset-0 size-full', pattern.opacity)}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id={patternId}
                        width={pattern.size}
                        height={pattern.size}
                        patternUnits="userSpaceOnUse"
                    >
                        {pattern.shape}
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
            <div className="section-background-motion absolute inset-0">
                {active && (
                    <Suspense fallback={null}>
                        {dark ? (
                            <RibbonFieldBackground
                                speed={0.35}
                                pointerAmount={0}
                                smoothing={0.02}
                                brightness={0.85}
                                saturation={0.55}
                                hue={20}
                            />
                        ) : (
                            <DataPixelArcCanvas
                                mode="light"
                                speed={0.4}
                                pixelSize={variant === 'grid' ? 8 : 11}
                                /* Sits the arc low so it never crosses body copy. */
                                arcCenter={0.74}
                                arcDrop={0.45}
                                thickness={0.2}
                                brightness={0.9}
                                saturation={0.75}
                                /* The light palette resolves to green; rotate it onto brand blue. */
                                hue={80}
                            />
                        )}
                    </Suspense>
                )}
            </div>
        </div>
    );
}
