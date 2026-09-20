/**
 * The hero's impeller: twelve blades turning inside a set of instrument rings.
 * Colours come from the brand tokens so the graphic follows the palette.
 */
export default function AirflowGraphic(): React.JSX.Element {
    return (
        <div
            aria-hidden="true"
            className="text-brand-blue-300 pointer-events-none absolute inset-0"
        >
            <svg viewBox="0 0 480 480" fill="none" className="size-full">
                <circle
                    cx="240"
                    cy="240"
                    r="231"
                    stroke="currentColor"
                    opacity=".25"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="214"
                    stroke="currentColor"
                    strokeDasharray="1 8"
                    opacity=".5"
                />
                <circle
                    cx="240"
                    cy="244"
                    r="189"
                    stroke="var(--color-brand-navy-950)"
                    strokeWidth="12"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="189"
                    stroke="var(--color-brand-blue-400)"
                    strokeWidth="2.5"
                    opacity=".7"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="182"
                    stroke="currentColor"
                    opacity=".18"
                />
                <path
                    d="M240 0V33M240 447V480M0 240H33M447 240H480"
                    stroke="currentColor"
                    opacity=".55"
                />
                <g className="hero-orbit">
                    {Array.from({ length: 12 }, (_, index) => (
                        <g
                            key={index}
                            transform={`rotate(${index * 30} 240 240)`}
                        >
                            <path
                                d="M248 201C273 139 330 102 387 107C374 158 330 205 277 225C266 216 257 207 248 201Z"
                                fill="var(--color-brand-blue-800)"
                                stroke="var(--color-brand-blue-400)"
                                strokeWidth=".7"
                                strokeOpacity=".8"
                            />
                            <path
                                d="M248 201C286 167 341 121 387 107C350 156 310 197 277 225Z"
                                fill="var(--color-brand-blue-600)"
                                opacity=".55"
                            />
                            <path
                                d="M248 201C273 139 330 102 387 107"
                                stroke="var(--color-brand-blue-200)"
                                strokeOpacity=".6"
                            />
                        </g>
                    ))}
                </g>
                <circle
                    cx="240"
                    cy="243"
                    r="41"
                    fill="var(--color-brand-navy-950)"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="38"
                    fill="var(--color-brand-navy-800)"
                    stroke="var(--color-brand-blue-300)"
                    strokeWidth="1.5"
                    strokeOpacity=".8"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="27"
                    fill="var(--color-brand-navy-900)"
                    stroke="var(--color-brand-red-600)"
                    strokeOpacity=".8"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="5"
                    fill="var(--color-brand-blue-200)"
                />
            </svg>
        </div>
    );
}
