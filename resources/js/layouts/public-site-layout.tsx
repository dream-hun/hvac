import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight, Wind } from 'lucide-react';
import { useRef, useState, type ReactNode } from 'react';
import PublicMobileNavigation, {
    publicNavigation,
} from '@/components/public-mobile-navigation';
import MotionControl from '@/components/motion-control';
import { PublicMotionPausedContext } from '@/hooks/public-motion-context';
import { usePublicMotion } from '@/hooks/use-public-motion';
import { contact, home, membership } from '@/routes';

function Mark(): React.JSX.Element {
    return (
        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-current/30">
            <Wind size={23} strokeWidth={1.5} aria-hidden="true" />
        </span>
    );
}

export default function PublicSiteLayout({
    children,
    title,
}: {
    children: ReactNode;
    title: string;
}): React.JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [motionPaused, setMotionPaused] = useState(false);
    const page = useRef<HTMLDivElement>(null);
    usePublicMotion(page, motionPaused || isOpen, isOpen, 'interior');

    return (
        <div
            ref={page}
            data-motion={motionPaused ? 'paused' : 'playing'}
            className="public-site min-h-screen overflow-x-clip bg-[#f7f7f0] text-[#193e32]"
        >
            <Head title={title} />
            <a href="#public-content" className="public-skip-link">
                Skip to content
            </a>
            <header className="relative z-20 bg-[#122c23] px-5 text-[#f7f7f0] md:px-10 lg:px-14">
                <div className="mx-auto flex max-w-312 items-center justify-between gap-5 border-b border-white/15 py-5">
                    <Link
                        href={home()}
                        className="flex items-center gap-3"
                        aria-label="Rwanda Society of HVAC and Refrigeration home"
                    >
                        <Mark />
                        <span className="text-[10px] leading-relaxed font-semibold tracking-[.1em] uppercase">
                            Rwanda Society of
                            <br />
                            HVAC & Refrigeration
                        </span>
                    </Link>
                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-7 text-xs font-medium lg:flex"
                    >
                        {publicNavigation.map(([label, route]) => (
                            <Link
                                key={label}
                                href={route()}
                                prefetch
                                className="transition-colors hover:text-[#c9dda8]"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link
                            href={membership()}
                            className="hidden items-center gap-4 rounded-full border border-white/30 px-5 py-3 text-xs font-medium transition-colors hover:bg-white/10 sm:inline-flex"
                        >
                            Join the Society <ArrowUpRight size={15} />
                        </Link>
                        <PublicMobileNavigation
                            open={isOpen}
                            onOpenChange={setIsOpen}
                        />
                    </div>
                </div>
            </header>

            <div id="public-content" tabIndex={-1} className="relative">
                <div className="absolute top-3 right-5 z-10 text-[#f7f7f0]/75 md:right-10 lg:right-14">
                    <MotionControl
                        paused={motionPaused}
                        onToggle={() => setMotionPaused(!motionPaused)}
                    />
                </div>
                <PublicMotionPausedContext.Provider
                    value={motionPaused || isOpen}
                >
                    {children}
                </PublicMotionPausedContext.Provider>
            </div>
            <footer className="bg-[#122c23] px-5 pt-16 pb-7 text-[#f7f7f0] md:px-10 lg:px-14">
                <div className="mx-auto max-w-312">
                    <div className="grid gap-12 pb-14 md:grid-cols-[2fr_1fr_1fr]">
                        <div>
                            <Link
                                href={home()}
                                className="inline-flex items-center gap-3"
                            >
                                <Mark />
                                <span className="text-[11px] leading-relaxed font-semibold tracking-[.1em] uppercase">
                                    Rwanda Society of
                                    <br />
                                    HVAC & Refrigeration
                                </span>
                            </Link>
                            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
                                A professional home for the people shaping
                                Rwanda’s cooling and ventilation future.
                            </p>
                        </div>
                        <div>
                            <p className="mb-6 text-[10px] tracking-[.14em] text-[#c9dda8] uppercase">
                                Explore
                            </p>
                            <nav
                                aria-label="Footer navigation"
                                className="flex flex-col items-start gap-3 text-sm text-white/75"
                            >
                                {publicNavigation.map(([label, route]) => (
                                    <Link
                                        href={route()}
                                        key={label}
                                        className="hover:text-[#c9dda8]"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div>
                            <p className="mb-6 text-[10px] tracking-[.14em] text-[#c9dda8] uppercase">
                                Stay connected
                            </p>
                            <p className="text-sm text-white/75">
                                Kigali, Rwanda
                            </p>
                            <p className="mt-3 max-w-55 text-xs leading-6 text-white/55">
                                For membership, partnerships, and general
                                enquiries.
                            </p>
                            <Link
                                href={contact()}
                                className="mt-5 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-sm"
                            >
                                Get in touch <ArrowUpRight size={15} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-4 border-t border-white/15 pt-6 text-[10px] tracking-[.05em] text-white/55">
                        <span>
                            © {new Date().getFullYear()} RSHVACR. All rights
                            reserved.
                        </span>
                        <span>Technical competence. Shared progress.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
