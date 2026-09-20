import { cn } from '@/lib/utils';

/**
 * Standard heading block for the public site: a small label, a plain
 * sans-serif heading, and an optional lead paragraph.
 */
export default function SectionHeading({
    eyebrow,
    title,
    lead,
    level = 'h2',
    className,
}: {
    eyebrow?: string;
    title: string;
    lead?: string;
    level?: 'h1' | 'h2';
    className?: string;
}): React.JSX.Element {
    const Heading = level;

    return (
        <div className={cn('max-w-3xl', className)}>
            {eyebrow && (
                <p className="text-brand-blue-800 text-xs font-semibold tracking-[.12em] uppercase">
                    {eyebrow}
                </p>
            )}
            <Heading
                className={cn(
                    'font-semibold tracking-tight',
                    level === 'h1'
                        ? 'text-3xl sm:text-4xl lg:text-5xl'
                        : 'text-2xl sm:text-3xl',
                    eyebrow && 'mt-3',
                )}
            >
                {title}
            </Heading>
            {lead && (
                <p className="text-ink-muted mt-5 text-base leading-7">
                    {lead}
                </p>
            )}
        </div>
    );
}
