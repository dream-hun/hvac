import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import PublicMobileNavigation, {
    publicNavigation,
} from '@/components/public-mobile-navigation';
import RshvacrLogo from '@/components/rshvacr-logo';
import { useScrolled } from '@/hooks/use-scrolled';
import { cn } from '@/lib/utils';
import { home, membership } from '@/routes';

export default function PublicHeader({
    menuOpen,
    onMenuOpenChange,
}: {
    menuOpen: boolean;
    onMenuOpenChange: (open: boolean) => void;
}): React.JSX.Element {
    const scrolled = useScrolled(40);

    return (
        <header
            className={cn(
                'border-ink/10 text-ink sticky top-0 z-30 border-b bg-white px-5 transition-shadow duration-300 md:px-10 lg:px-14',
                scrolled && 'shadow-[0_6px_24px_rgba(32,48,92,.08)]',
            )}
        >
            <div className="mx-auto flex max-w-312 items-center justify-between gap-5 py-3">
                <Link href={home()} className="rounded-lg">
                    <RshvacrLogo className="w-38 sm:w-44" />
                </Link>
                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-8 text-xs font-medium lg:flex"
                >
                    {publicNavigation.map(([label, route]) => (
                        <Link
                            key={label}
                            href={route()}
                            prefetch
                            className="text-ink-muted hover:text-brand-blue-800 transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <Link
                        href={membership()}
                        className="bg-brand-blue-800 hover:bg-brand-blue-700 hidden items-center gap-3 rounded-full px-5 py-3 text-xs font-semibold text-white transition-colors sm:inline-flex"
                    >
                        Join the Society
                        <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                    <PublicMobileNavigation
                        open={menuOpen}
                        onOpenChange={onMenuOpenChange}
                    />
                </div>
            </div>
        </header>
    );
}
