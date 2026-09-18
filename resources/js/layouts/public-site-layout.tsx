import { Head, Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { useRef, useState, type ReactNode } from 'react';
import PublicMobileNavigation from '@/components/public-mobile-navigation';
import MotionControl from '@/components/motion-control';
import { usePublicMotion } from '@/hooks/use-public-motion';
import {
    about,
    contact,
    home,
    membership,
    newsEvents,
    programs,
} from '@/routes';

function Mark({ dark = false }: { dark?: boolean }): React.JSX.Element {
    return (
        <div
            className={`grid h-10 w-10 place-items-center border ${dark ? 'border-dark-emerald-900/30 text-dark-emerald-900' : 'border-white/30 text-white'}`}
        >
            <span className="relative block h-5 w-5 border border-current">
                <span className="absolute -top-px left-1/2 h-5 w-px -translate-x-1/2 bg-current" />
                <span className="absolute top-1/2 -left-px h-px w-5 -translate-y-1/2 bg-current" />
            </span>
        </div>
    );
}

const navigation = [
    ['About', about],
    ['Membership', membership],
    ['Programs', programs],
    ['News & events', newsEvents],
    ['Contact', contact],
] as const;

export default function PublicSiteLayout({
    children,
    title,
}: {
    children: ReactNode;
    title: string;
}): React.JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const page = useRef<HTMLDivElement>(null);

    const [motionPaused, setMotionPaused] = useState(false);
    usePublicMotion(page, motionPaused, isOpen, 'interior');

    return (
        <div
            ref={page}
            data-motion={motionPaused ? 'paused' : 'playing'}
            className="public-site bg-mint-cream-50 text-dark-emerald-900 min-h-screen overflow-x-clip"
        >
            <Head title={title} />
            <a href="#public-content" className="public-skip-link">
                Skip to content
            </a>
            <header className="border-dark-emerald-900/15 bg-mint-cream-50 border-b px-5 py-4 md:px-10 lg:px-14">
                <div className="mx-auto flex max-w-[1328px] items-center justify-between gap-5">
                    <Link href={home()} className="flex items-center gap-3">
                        <Mark dark />
                        <span className="max-w-40 text-[10px] leading-[1.25] font-semibold tracking-[0.13em] uppercase">
                            Rwanda Society of
                            <br />
                            HVAC & Refrigeration
                        </span>
                    </Link>
                    <nav className="hidden items-center gap-6 text-[10px] font-bold tracking-[.12em] uppercase lg:flex">
                        {navigation.map(([label, route]) => (
                            <Link
                                key={label}
                                href={route()}
                                prefetch
                                className="hover:text-cobalt-blue-700 transition-colors"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href={membership()}
                        className="bg-cobalt-blue-700 hover:bg-cobalt-blue-800 hidden px-5 py-3 text-[10px] font-bold tracking-[.14em] text-white uppercase transition-colors sm:block"
                    >
                        Join the Society
                    </Link>
                    <PublicMobileNavigation
                        open={isOpen}
                        onOpenChange={setIsOpen}
                    />
                </div>
            </header>
            <div id="public-content" tabIndex={-1} className="relative">
                <div className="absolute top-3 right-5 z-10 text-white/75 md:right-10 lg:right-14">
                    <MotionControl
                        paused={motionPaused}
                        onToggle={() => setMotionPaused(!motionPaused)}
                    />
                </div>
                {children}
            </div>
            <footer className="bg-dark-emerald-900 px-5 py-12 text-white md:px-10 lg:px-14">
                <div className="mx-auto grid max-w-[1328px] gap-12 md:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-3">
                            <Mark />
                            <span className="text-[10px] font-bold tracking-[.13em] uppercase">
                                Rwanda Society of HVAC & Refrigeration
                            </span>
                        </div>
                        <p className="mt-6 max-w-md text-sm leading-6 text-white/60">
                            A nonprofit professional organization supporting
                            technical competence, safety, energy efficiency,
                            environmental responsibility, and cooperation in
                            Rwanda’s HVAC and refrigeration sector.
                        </p>
                    </div>
                    <div>
                        <p className="text-cobalt-blue-200 text-[10px] font-bold tracking-[.14em] uppercase">
                            Explore
                        </p>
                        <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
                            {navigation.slice(0, 4).map(([label, route]) => (
                                <Link
                                    key={label}
                                    href={route()}
                                    className="hover:text-cobalt-blue-200 transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-cobalt-blue-200 text-[10px] font-bold tracking-[.14em] uppercase">
                            Official contact details
                        </p>
                        <p className="mt-5 text-sm leading-6 text-white/70">
                            Address, telephone, email, and social accounts will
                            be published following Society confirmation.
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-12 flex max-w-[1328px] flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-5 text-[10px] tracking-[.12em] text-white/40 uppercase">
                    <span>© {new Date().getFullYear()} RSHVACR</span>
                    <Link
                        href={contact()}
                        className="hover:text-cobalt-blue-200 flex items-center gap-2 transition-colors"
                    >
                        Contact <ArrowRight size={13} />
                    </Link>
                </div>
            </footer>
        </div>
    );
}
