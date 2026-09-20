import {
    lazy,
    Suspense,
    useEffect,
    useContext,
    useId,
    useRef,
    useState,
    useSyncExternalStore,
} from 'react';

import { PublicMotionPausedContext } from '@/hooks/public-motion-context';

const PredictiveArcCanvas = lazy(() =>
    import('@designcodeio/threeui/components/PredictiveArcCanvas').then(
        (module) => ({ default: module.PredictiveArcCanvas }),
    ),
);

type BackgroundVariant =
    | 'signal-particles'
    | 'data-pixel'
    | 'override-grid'
    | 'ribbon-field';

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

export default function HomeSectionBackground({
    variant,
    paused,
    dark = false,
}: {
    variant: BackgroundVariant;
    paused?: boolean;
    dark?: boolean;
}): React.JSX.Element {
    const patternId = useId();
    const layoutPaused = useContext(PublicMotionPausedContext);
    const container = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const disabled = useSyncExternalStore(
        subscribeToMotionPreference,
        motionDisabled,
        () => true,
    );
    const active = visible && !(paused || layoutPaused) && !disabled;

    useEffect(() => {
        if (!container.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setVisible(entry.isIntersecting),
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
            className={`section-background pointer-events-none absolute inset-0 -z-10 overflow-hidden ${dark ? 'section-background--dark' : ''}`}
        >
            <svg
                className="absolute inset-0 size-full opacity-[.07]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id={patternId}
                        width="26"
                        height="26"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
            <div className="section-background-motion absolute inset-x-0 -inset-y-[12%]">
                {active && (
                    <Suspense fallback={null}>
                        {variant === 'ribbon-field' ? (
                            <PredictiveArcCanvas
                                variant="ribbon-field"
                                speed={0.5}
                                pointerAmount={0}
                                saturation={0}
                            />
                        ) : variant === 'data-pixel' ? (
                            <PredictiveArcCanvas
                                variant="data-pixel"
                                mode="dark"
                                speed={0.45}
                                pixelSize={9}
                                arcCenter={0.2}
                                arcDrop={0.7}
                                thickness={0.3}
                                saturation={0}
                            />
                        ) : (
                            <PredictiveArcCanvas
                                variant={variant}
                                mode="dark"
                                speed={0.55}
                                size={variant === 'override-grid' ? 40 : 1.5}
                                gap={3}
                                saturation={0}
                            />
                        )}
                    </Suspense>
                )}
            </div>
        </div>
    );
}
