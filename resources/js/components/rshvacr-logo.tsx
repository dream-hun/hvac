import AppLogoIcon from '@/components/app-logo-icon';
import { cn } from '@/lib/utils';

/**
 * The leaf mark alone, on a white plate so the blue wordmark and snowflake
 * inside it keep their contrast on the Society's deep navy surfaces.
 */
export function RshvacrMark({
    className,
    size = 44,
}: {
    className?: string;
    size?: number;
}): React.JSX.Element {
    return (
        <span
            className={cn(
                'grid shrink-0 place-items-center overflow-hidden rounded-xl bg-white',
                className,
            )}
            style={{ width: size, height: size }}
        >
            <AppLogoIcon className="size-[86%] object-contain" />
        </span>
    );
}

/**
 * The supplied logo lockup, unaltered. The artwork is flattened onto white, so
 * it sits flush on a light surface; on the navy footer the caller wraps it in a
 * white plate rather than the logo losing its blue wordmark and green subtitle.
 */
export default function RshvacrLogo({
    className,
}: {
    /** Sets the rendered width; the artwork keeps its native 3:1 ratio. */
    className?: string;
}): React.JSX.Element {
    return (
        <img
            src="/images/rshvacr-lockup.png"
            alt="Rwanda Society of HVAC and Refrigeration"
            width={720}
            height={240}
            decoding="async"
            className={cn('block h-auto w-44', className)}
        />
    );
}
