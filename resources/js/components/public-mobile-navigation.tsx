import { Link } from '@inertiajs/react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { useEffect } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { about, contact, membership, newsEvents, programs } from '@/routes';

export const publicNavigation = [
    ['About', about],
    ['Membership', membership],
    ['Programs', programs],
    ['News & events', newsEvents],
    ['Contact', contact],
] as const;

export default function PublicMobileNavigation({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}): React.JSX.Element {
    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 1024px)');
        const closeOnDesktop = (): void => {
            if (desktop.matches) onOpenChange(false);
        };
        desktop.addEventListener('change', closeOnDesktop);
        return () => desktop.removeEventListener('change', closeOnDesktop);
    }, [onOpenChange]);

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <button
                    type="button"
                    className="border-ink/25 hover:bg-ink/5 grid size-11 shrink-0 place-items-center rounded-full border transition-colors lg:hidden"
                    aria-label="Open navigation"
                >
                    <Menu size={19} />
                </button>
            </SheetTrigger>
            <SheetContent
                data-lenis-prevent
                className="public-menu bg-brand-navy-950 w-full overflow-y-auto border-white/15 px-6 pt-8 pb-10 text-white motion-reduce:animate-none motion-reduce:transition-none sm:max-w-lg [&>button]:top-5 [&>button]:right-5 [&>button]:grid [&>button]:size-11 [&>button]:place-items-center"
            >
                <SheetTitle className="text-brand-green-300 pr-14 text-xs font-semibold tracking-[.12em] uppercase">
                    Explore the Society
                </SheetTitle>
                <nav
                    aria-label="Mobile navigation"
                    className="my-auto flex shrink-0 flex-col py-12"
                >
                    {publicNavigation.map(([label, route]) => (
                        <Link
                            key={label}
                            href={route()}
                            onClick={() => onOpenChange(false)}
                            className="group hover:text-brand-green-300 flex items-center gap-4 border-b border-white/20 py-5 text-xl font-semibold tracking-tight transition-colors"
                        >
                            {label}
                            <ArrowUpRight className="text-brand-green-300 ml-auto size-5" />
                        </Link>
                    ))}
                </nav>
                <SheetDescription className="max-w-xs text-sm leading-6 text-white/70">
                    Rwanda Society of HVAC and Refrigeration — a nonprofit
                    professional organization.
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}
