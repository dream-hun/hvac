export default function HalftoneWaveBackground(): React.JSX.Element {
    return <div aria-hidden="true" className="halftone-wave absolute inset-0 overflow-hidden">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1440 720" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="halftone-noise" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.008 0.035" numOctaves="3" seed="17" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <pattern id="halftone-dots" width="18" height="18" patternUnits="userSpaceOnUse">
                    <circle cx="9" cy="9" r="1.45" fill="currentColor" />
                </pattern>
                <linearGradient id="halftone-fade" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                    <stop offset="48%" stopColor="white" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.05" />
                </linearGradient>
                <mask id="halftone-mask">
                    <rect width="1440" height="720" fill="url(#halftone-fade)" />
                </mask>
            </defs>
            <g className="text-cobalt-blue-200" filter="url(#halftone-noise)" mask="url(#halftone-mask)">
                <rect width="1440" height="720" fill="url(#halftone-dots)" />
            </g>
            <path className="halftone-wave-line" d="M-80 480C150 350 235 620 475 470S820 250 1040 410s255 0 480-145" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    </div>;
}
