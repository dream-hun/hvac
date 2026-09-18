export default function AirflowGraphic(): React.JSX.Element {
    return (
        <div
            aria-hidden="true"
            className="text-cobalt-blue-200 pointer-events-none relative mx-auto aspect-square w-full max-w-112"
        >
            <svg viewBox="0 0 480 480" fill="none" className="size-full">
                <circle
                    cx="240"
                    cy="240"
                    r="230"
                    stroke="currentColor"
                    opacity=".2"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="202"
                    stroke="currentColor"
                    strokeDasharray="1 9"
                    opacity=".6"
                />
                <path
                    d="M240 0V42M240 438V480M0 240H42M438 240H480"
                    stroke="currentColor"
                    opacity=".65"
                />
                <g className="hero-orbit">
                    {Array.from({ length: 12 }, (_, index) => (
                        <path
                            key={index}
                            d="M248 201C273 139 330 102 387 107C374 158 330 205 277 225C266 216 257 207 248 201Z"
                            transform={`rotate(${index * 30} 240 240)`}
                            fill="currentColor"
                            fillOpacity=".08"
                            stroke="currentColor"
                            strokeOpacity=".55"
                        />
                    ))}
                </g>
                <circle
                    cx="240"
                    cy="240"
                    r="38"
                    stroke="currentColor"
                    opacity=".7"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="23"
                    stroke="currentColor"
                    opacity=".3"
                />
                <path d="M231 240H249M240 231V249" stroke="currentColor" />
            </svg>
            <span className="bg-dark-emerald-900 text-mint-cream-200 absolute top-1/2 right-0 translate-x-2 py-2 font-mono text-[9px] tracking-[.16em]">
                AIR / FLOW
            </span>
        </div>
    );
}
