import { Facebook, Instagram, Linkedin } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { cn } from '@/lib/utils';

/** Lucide has no X mark, so the wordmark is drawn here at the same size. */
function XIcon(props: SVGProps<SVGSVGElement>): React.JSX.Element {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            {...props}
        >
            <path d="M17.53 3h3.04l-6.64 7.59L21.75 21h-5.9l-4.62-6.04L5.94 21H2.9l7.1-8.12L2.25 3h6.05l4.18 5.52L17.53 3Zm-1.07 16.17h1.68L7.6 4.74H5.8l10.66 14.43Z" />
        </svg>
    );
}

/**
 * Official Society accounts. Update the handles here when they change.
 */
export const socialLinks: {
    label: string;
    href: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
    { label: 'X', href: 'https://x.com/rshvacr', icon: XIcon },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/rshvacr',
        icon: Instagram,
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/rshvacr',
        icon: Facebook,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/rshvacr',
        icon: Linkedin,
    },
];

export default function SocialLinks({
    className,
}: {
    className?: string;
}): React.JSX.Element {
    return (
        <ul className={cn('flex flex-wrap items-center gap-3', className)}>
            {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${label} (opens in a new tab)`}
                        className="hover:border-brand-green-300 hover:text-brand-green-300 grid size-11 place-items-center rounded-full border border-white/25 text-white/80 transition-colors"
                    >
                        <Icon className="size-4.5" />
                    </a>
                </li>
            ))}
        </ul>
    );
}
