import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import MotionControl from '@/components/motion-control';
import { publicNavigation } from '@/components/public-mobile-navigation';
import RshvacrLogo from '@/components/rshvacr-logo';
import { contact, home } from '@/routes';

export default function PublicFooter(): React.JSX.Element {
    return (
        <footer className="bg-brand-navy-950 px-5 pt-16 pb-7 text-white md:px-10 lg:px-14">
            <div className="mx-auto max-w-312">
                <div className="grid gap-12 pb-14 md:grid-cols-[2fr_1fr_1fr]">
                    <div>
                        <Link
                            href={home()}
                            className="inline-flex rounded-lg bg-white px-2.5 py-2"
                        >
                            <RshvacrLogo className="w-52" />
                        </Link>
                        <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
                            A professional home for the people shaping Rwanda’s
                            cooling and ventilation future.
                        </p>
                    </div>
                    <div>
                        <p className="text-brand-green-300 mb-6 text-[10px] tracking-[.14em] uppercase">
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
                                    className="hover:text-brand-green-300 transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div>
                        <p className="text-brand-green-300 mb-6 text-[10px] tracking-[.14em] uppercase">
                            Stay connected
                        </p>
                        <p className="text-sm text-white/75">Kigali, Rwanda</p>
                        <p className="mt-3 max-w-55 text-xs leading-6 text-white/60">
                            For membership, partnerships, and general enquiries.
                        </p>
                        <Link
                            href={contact()}
                            className="hover:border-brand-green-300 hover:text-brand-green-300 mt-5 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-sm transition-colors"
                        >
                            Get in touch
                            <ArrowUpRight size={15} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-[10px] tracking-[.05em] text-white/60">
                    <span>
                        © {new Date().getFullYear()} RSHVACR. All rights
                        reserved.
                    </span>
                    <span className="hidden sm:block">
                        Technical competence. Shared progress.
                    </span>
                    <MotionControl className="text-white/70" />
                </div>
            </div>
        </footer>
    );
}
