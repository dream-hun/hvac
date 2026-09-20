import { Pause, Play } from 'lucide-react';
import { useContext } from 'react';
import { PublicMotionContext } from '@/hooks/public-motion-context';
import { cn } from '@/lib/utils';

export default function MotionControl({
    className,
}: {
    className?: string;
}): React.JSX.Element {
    const { paused, toggle } = useContext(PublicMotionContext);

    return (
        <button
            type="button"
            onClick={toggle}
            aria-pressed={paused}
            className={cn(
                'motion-control inline-flex min-h-11 items-center gap-2 rounded-full border border-current/30 px-4 text-[10px] font-semibold tracking-[.12em] uppercase transition-colors hover:bg-current/10',
                className,
            )}
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
