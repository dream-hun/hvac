import { Pause, Play } from 'lucide-react';

export default function MotionControl({
    paused,
    onToggle,
}: {
    paused: boolean;
    onToggle: () => void;
}): React.JSX.Element {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="motion-control inline-flex min-h-11 items-center gap-2 border border-current/30 px-3 text-[10px] font-semibold tracking-[.12em] uppercase transition-colors hover:bg-white/10"
        >
            {paused ? (
                <Play size={12} aria-hidden="true" />
            ) : (
                <Pause size={12} aria-hidden="true" />
            )}
            {paused ? 'Resume motion' : 'Pause motion'}
        </button>
    );
}
