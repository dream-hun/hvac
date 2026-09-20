export default function AirflowGraphic(): React.JSX.Element {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 text-[#b3c8b1]"
        >
            <svg viewBox="0 0 480 480" fill="none" className="size-full">
                <circle
                    cx="240"
                    cy="240"
                    r="231"
                    stroke="currentColor"
                    opacity=".3"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="214"
                    stroke="currentColor"
                    strokeDasharray="1 8"
                    opacity=".6"
                />
                <circle
                    cx="240"
                    cy="244"
                    r="189"
                    stroke="#061a13"
                    strokeWidth="12"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="189"
                    stroke="#7b9681"
                    strokeWidth="3"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="182"
                    stroke="currentColor"
                    opacity=".2"
                />
                <path
                    d="M240 0V33M240 447V480M0 240H33M447 240H480"
                    stroke="currentColor"
                    opacity=".65"
                />
                <g className="hero-orbit">
                    {Array.from({ length: 12 }, (_, index) => (
                        <g
                            key={index}
                            transform={`rotate(${index * 30} 240 240)`}
                        >
                            <path
                                d="M248 201C273 139 330 102 387 107C374 158 330 205 277 225C266 216 257 207 248 201Z"
                                fill="#456953"
                                stroke="#90aa8c"
                                strokeWidth=".7"
                            />
                            <path
                                d="M248 201C286 167 341 121 387 107C350 156 310 197 277 225Z"
                                fill="#6f8b69"
                                opacity=".5"
                            />
                            <path
                                d="M248 201C273 139 330 102 387 107"
                                stroke="#b9cbaa"
                                strokeOpacity=".65"
                            />
                        </g>
                    ))}
                </g>
                <circle cx="240" cy="243" r="41" fill="#0d231b" />
                <circle
                    cx="240"
                    cy="240"
                    r="38"
                    fill="#2c4a36"
                    stroke="#9cb294"
                    strokeWidth="1.5"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="27"
                    fill="#203d2c"
                    stroke="#66845f"
                />
                <circle cx="240" cy="240" r="5" fill="#b9cbaa" />
            </svg>
        </div>
    );
}
