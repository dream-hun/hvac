import { Head, Link } from '@inertiajs/react';
import {
    ArrowDownRight,
    ArrowRight,
    ChevronRight,
    MoveUpRight,
} from 'lucide-react';
import { useRef, useState } from 'react';
import AirflowGraphic from '@/components/airflow-graphic';
import MotionControl from '@/components/motion-control';
import PublicMobileNavigation from '@/components/public-mobile-navigation';
import { usePublicMotion } from '@/hooks/use-public-motion';
import {
    about,
    contact,
    home,
    membership,
    newsEvents,
    programs as programsRoute,
} from '@/routes';

const focusAreas = [
    [
        '01',
        'Technical training',
        'Practical learning for installation, maintenance, diagnostics, electrical safety, and refrigerant handling.',
    ],
    [
        '02',
        'Safety & standards',
        'A shared commitment to reliable systems, safe worksites, and professional working practices.',
    ],
    [
        '03',
        'Environmental care',
        'Smarter cooling through recovery, leak prevention, energy efficiency, and responsible disposal.',
    ],
    [
        '04',
        'Industry collaboration',
        'Connecting professionals, institutions, suppliers, and public partners around common goals.',
    ],
];

const programs = [
    ['Technical workshops', 'Hands-on skills for the field'],
    ['Refrigerant management', 'Responsible practice, better outcomes'],
    ['Youth development', 'A more capable next generation'],
    ['Women in HVAC&R', 'Space, support, and opportunity'],
];

const news = [
    [
        'Training',
        'Coming soon',
        'Practical refrigeration training for the next generation of technicians',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85',
    ],
    [
        'Industry',
        'Coming soon',
        'Building a stronger, safer cooling sector together',
        'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85',
    ],
    [
        'Sustainability',
        'Coming soon',
        'The case for responsible refrigerant management in Rwanda',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85',
    ],
];

const navigation = [
    ['About', about],
    ['Membership', membership],
    ['Programs', programsRoute],
    ['News & events', newsEvents],
    ['Contact', contact],
] as const;

function Mark(): React.JSX.Element {
    return (
        <div className="grid h-10 w-10 shrink-0 place-items-center border border-white/30 text-white">
            <span className="relative block h-5 w-5 border border-current">
                <span className="absolute -top-px left-1/2 h-5 w-px -translate-x-1/2 bg-current" />
                <span className="absolute top-1/2 -left-px h-px w-5 -translate-y-1/2 bg-current" />
            </span>
        </div>
    );
}

export default function Welcome() {
    const page = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [motionPaused, setMotionPaused] = useState(false);
    usePublicMotion(page, motionPaused, isMenuOpen, 'home');

    return (
        <div
            ref={page}
            data-motion={motionPaused ? 'paused' : 'playing'}
            className="public-site bg-mint-cream-50 text-dark-emerald-900 overflow-x-clip"
        >
            <Head title="Rwanda Society of HVAC & Refrigeration" />
            <a href="#top" className="public-skip-link">
                Skip to content
            </a>

            <header className="welcome-header absolute inset-x-0 top-0 z-20 mx-auto flex max-w-360 items-center justify-between px-5 py-5 text-white md:px-10 lg:px-14">
                <Link
                    href={home()}
                    className="flex items-center gap-3"
                    aria-label="Rwanda Society of HVAC and Refrigeration home"
                >
                    <Mark />
                    <span className="max-w-40 text-[10px] leading-tight font-semibold tracking-[0.13em] uppercase">
                        Rwanda Society of
                        <br />
                        HVAC & Refrigeration
                    </span>
                </Link>
                <nav className="hidden items-center gap-7 text-[11px] font-semibold tracking-[0.12em] uppercase lg:flex">
                    {navigation.map(([label, route]) => (
                        <Link
                            key={label}
                            href={route()}
                            prefetch
                            className="transition-opacity hover:opacity-60"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                <Link
                    href={membership()}
                    className="hover:text-dark-emerald-900 hidden border border-white px-5 py-3 text-[10px] font-bold tracking-[0.14em] uppercase transition-colors hover:bg-white sm:block"
                >
                    Join the Society
                </Link>
                <PublicMobileNavigation
                    open={isMenuOpen}
                    onOpenChange={setIsMenuOpen}
                />
            </header>
            <main id="top" tabIndex={-1}>
                <section className="home-hero bg-dark-emerald-900 relative isolate overflow-hidden px-5 pt-36 pb-8 text-white md:px-10 md:pt-44 lg:px-14">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_25%,var(--color-dark-emerald-800),transparent_65%)]"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-size-[72px_72px]"
                    />
                    <div className="relative mx-auto grid max-w-332 items-center gap-12 pb-12 lg:grid-cols-[1.45fr_1fr] lg:gap-8 lg:pb-20">
                        <div className="min-w-0">
                            <p className="hero-reveal text-mint-cream-200 mb-8 flex items-center gap-3 text-[10px] font-semibold tracking-[.18em] uppercase">
                                <span className="bg-mint-cream-200 size-1.5" />
                                Rwanda Society of HVAC & Refrigeration
                            </p>
                            <h1 className="hero-reveal max-w-4xl font-serif text-[clamp(3.4rem,7.8vw,7.7rem)] leading-[.96] tracking-[-.055em]">
                                A better climate
                                <br />
                                <i className="text-mint-cream-200 font-normal">
                                    for progress.
                                </i>
                            </h1>
                            <p className="hero-reveal mt-8 max-w-lg text-base leading-7 text-white/75">
                                Advancing the people, standards, and ideas
                                behind Rwanda’s cooling and ventilation future.
                            </p>
                            <div className="hero-reveal mt-9 flex flex-wrap gap-3">
                                <Link
                                    href={membership()}
                                    className="group bg-mint-cream-200 text-dark-emerald-900 hover:bg-mint-cream-50 flex items-center gap-8 px-5 py-4 text-[11px] font-bold tracking-[0.13em] uppercase transition-colors"
                                >
                                    Become a member{' '}
                                    <ArrowDownRight
                                        size={17}
                                        className="transition-transform group-hover:translate-y-1"
                                    />
                                </Link>
                                <a
                                    href="#programs"
                                    className="flex items-center gap-3 border border-white/40 px-5 py-4 text-[11px] font-bold tracking-[0.13em] uppercase"
                                >
                                    Explore our work <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                        <div className="hero-reveal mx-auto w-full max-w-lg">
                            <AirflowGraphic />
                            <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4 text-[9px] tracking-[.16em] text-white/60 uppercase">
                                <span>Engineering a better tomorrow</span>
                                <span>Kigali · Rwanda</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-332 flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5">
                        <a
                            href="#about"
                            className="inline-flex min-h-11 items-center gap-3 text-[10px] font-semibold tracking-[.14em] text-white/75 uppercase"
                        >
                            Discover the Society <ArrowDownRight size={15} />
                        </a>
                        <span className="hidden text-[10px] tracking-[.12em] text-white/60 uppercase md:block">
                            Technical competence. Shared progress.
                        </span>
                        <MotionControl
                            paused={motionPaused}
                            onToggle={() => setMotionPaused(!motionPaused)}
                        />
                    </div>
                </section>
                <section
                    aria-label="Our commitments"
                    className="marquee border-dark-emerald-900/15 bg-mint-cream-200 overflow-hidden border-y py-5"
                >
                    <div className="marquee-track flex w-max text-[11px] font-bold tracking-[.17em] uppercase">
                        {[0, 1].map((copy) => (
                            <div
                                key={copy}
                                aria-hidden={copy === 1 ? true : undefined}
                                className="marquee-group flex shrink-0 items-center justify-around gap-10 pr-10"
                            >
                                {[
                                    'Technical competency',
                                    'Responsible cooling',
                                    'Safer practices',
                                    'Stronger connections',
                                ].map((label) => (
                                    <span
                                        key={label}
                                        className="flex items-center gap-10"
                                    >
                                        <span>{label}</span>
                                        <span
                                            aria-hidden="true"
                                            className="bg-dark-emerald-800 size-1.5 rounded-full"
                                        />
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
                <section
                    id="about"
                    className="about-section relative overflow-hidden px-5 py-24 md:px-10 md:py-36 lg:px-14"
                >
                    <div className="cooling-graphic border-dark-emerald-100/50 absolute top-12 right-[-20%] h-140 w-140 rounded-full border-70 md:right-[3%]" />
                    <div className="relative mx-auto grid max-w-332 gap-16 lg:grid-cols-12">
                        <div className="reveal lg:col-span-4">
                            <p className="text-dark-emerald-700 text-[10px] font-bold tracking-[0.18em] uppercase">
                                The Society
                            </p>
                            <p className="mt-6 max-w-xs font-serif text-3xl leading-[1.05] tracking-[-0.04em]">
                                Supporting a skilled and responsible industry.
                            </p>
                        </div>
                        <div className="reveal lg:col-span-7 lg:col-start-6">
                            <p className="font-serif text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[.98] tracking-[-.055em]">
                                Cooling is essential infrastructure. The people
                                behind it should be supported accordingly.
                            </p>
                            <p className="text-dark-emerald-700 mt-9 max-w-2xl text-base leading-7">
                                From hospitals and hotels to homes,
                                laboratories, supermarkets, and industrial
                                operations, HVAC and refrigeration systems
                                matter. We give the professionals who maintain
                                them practical knowledge, stronger networks, and
                                a shared standard of care.
                            </p>
                            <a
                                href="#focus"
                                className="border-dark-emerald-900 mt-10 inline-flex items-center gap-4 border-b pb-2 text-[11px] font-bold tracking-[.14em] uppercase"
                            >
                                How we help <ArrowRight size={15} />
                            </a>
                        </div>
                    </div>
                </section>
                <section
                    id="focus"
                    className="bg-dark-emerald-900 text-mint-cream-50 px-5 py-24 md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-332">
                        <div className="reveal flex flex-col justify-between gap-6 border-b border-white/20 pb-12 md:flex-row md:items-end">
                            <div>
                                <p className="text-cobalt-blue-200 text-[10px] font-bold tracking-[.18em] uppercase">
                                    What guides our work
                                </p>
                                <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[.9] tracking-tighter md:text-7xl">
                                    Designed for
                                    <br />
                                    real-world impact.
                                </h2>
                            </div>
                            <p className="max-w-sm text-sm leading-6 text-white/65">
                                A sector can only advance when skills,
                                standards, and opportunity advance together.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2">
                            {focusAreas.map(([number, title, copy]) => (
                                <article
                                    key={number}
                                    className="reveal group border-b border-white/20 py-9 md:px-8 md:odd:border-r md:odd:border-white/20"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="text-cobalt-blue-200 font-serif text-2xl">
                                            {number}
                                        </span>
                                        <ArrowDownRight
                                            size={18}
                                            className="text-white/55 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                        />
                                    </div>
                                    <h3 className="mt-16 text-xl font-semibold tracking-[-.03em]">
                                        {title}
                                    </h3>
                                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                                        {copy}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    id="membership"
                    className="px-5 py-24 md:px-10 md:py-36 lg:px-14"
                >
                    <div className="reveal bg-cobalt-blue-700 mx-auto grid max-w-332 overflow-hidden text-white lg:grid-cols-2">
                        <div className="flex min-h-117.5 flex-col justify-between p-8 md:p-12">
                            <p className="text-cobalt-blue-100 text-[10px] font-bold tracking-[.18em] uppercase">
                                Membership
                            </p>
                            <div>
                                <h2 className="max-w-lg font-serif text-5xl leading-[.93] tracking-tighter md:text-7xl">
                                    Find your place in the industry.
                                </h2>
                                <p className="mt-7 max-w-md text-sm leading-6 text-white/75">
                                    Access training, technical resources,
                                    professional connections, industry events,
                                    and a role in shaping the sector.
                                </p>
                            </div>
                            <Link
                                href={membership()}
                                className="hover:text-cobalt-blue-700 flex w-fit items-center gap-8 border border-white/50 px-5 py-4 text-[11px] font-bold tracking-[.14em] uppercase transition-colors hover:bg-white"
                            >
                                Join the Society <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="bg-cobalt-blue-600 relative min-h-90 overflow-hidden">
                            <img
                                loading="lazy"
                                decoding="async"
                                src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=85"
                                alt="Technician at work"
                                className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-multiply"
                            />
                            <div className="absolute inset-0 [background:linear-gradient(135deg,transparent_50%,rgba(20,43,45,.35))]" />
                            <div className="absolute right-8 bottom-8 left-8 border-t border-white/50 pt-4">
                                <span className="text-[10px] font-bold tracking-[.14em] uppercase">
                                    Individual · Corporate · Student ·
                                    Institutional
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="programs"
                    className="px-5 pb-24 md:px-10 md:pb-36 lg:px-14"
                >
                    <div className="mx-auto max-w-332">
                        <div className="reveal border-dark-emerald-900/20 grid gap-10 border-t pt-8 lg:grid-cols-12">
                            <div className="lg:col-span-4">
                                <p className="text-dark-emerald-700 text-[10px] font-bold tracking-[.18em] uppercase">
                                    Programs & activities
                                </p>
                                <h2 className="mt-5 font-serif text-5xl leading-[.9] tracking-tighter md:text-6xl">
                                    Learning that leaves the room.
                                </h2>
                            </div>
                            <p className="text-dark-emerald-700 self-end text-sm leading-6 lg:col-span-4 lg:col-start-8">
                                Our programs respond to the practical needs of
                                the professionals and businesses working across
                                Rwanda’s cooling and ventilation sector.
                            </p>
                        </div>
                        <div className="border-dark-emerald-900/20 mt-14 border-t">
                            {programs.map(([title, copy], index) => (
                                <Link
                                    href={programsRoute()}
                                    key={title}
                                    className="reveal group border-dark-emerald-900/20 grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b py-6 md:grid-cols-[100px_1fr_1fr_auto] md:py-8"
                                >
                                    <span className="text-cobalt-blue-700 font-serif text-2xl">
                                        0{index + 1}
                                    </span>
                                    <span className="text-lg font-semibold tracking-[-.03em] md:text-2xl">
                                        {title}
                                    </span>
                                    <span className="text-dark-emerald-700 hidden text-sm md:block">
                                        {copy}
                                    </span>
                                    <ArrowRight
                                        size={19}
                                        className="transition-transform duration-300 group-hover:translate-x-2"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    id="insights"
                    className="bg-cobalt-blue-100 px-5 py-24 md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-332">
                        <div className="reveal flex flex-wrap items-end justify-between gap-5">
                            <div>
                                <p className="text-dark-emerald-700 text-[10px] font-bold tracking-[.18em] uppercase">
                                    From the Society
                                </p>
                                <h2 className="mt-4 font-serif text-5xl leading-[.9] tracking-tighter md:text-6xl">
                                    Ideas in circulation.
                                </h2>
                            </div>
                            <Link
                                href={newsEvents()}
                                className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[.14em] uppercase"
                            >
                                All news & events <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="mt-14 grid gap-6 md:grid-cols-3">
                            {news.map(([type, date, title, image]) => (
                                <article key={title} className="reveal group">
                                    <div className="bg-dark-emerald-800 aspect-[1.2] overflow-hidden">
                                        <img
                                            loading="lazy"
                                            decoding="async"
                                            src={image}
                                            alt=""
                                            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                        />
                                    </div>
                                    <div className="text-dark-emerald-700 mt-5 flex justify-between text-[10px] font-bold tracking-[.14em] uppercase">
                                        <span>{type}</span>
                                        <span>{date}</span>
                                    </div>
                                    <h3 className="mt-3 max-w-sm font-serif text-2xl leading-[1.03] tracking-[-.04em]">
                                        {title}
                                    </h3>
                                    <Link
                                        href={newsEvents()}
                                        className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-[.13em] uppercase"
                                    >
                                        View updates <ChevronRight size={15} />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    id="contact"
                    className="bg-dark-emerald-800 relative overflow-hidden px-5 py-24 text-white md:px-10 md:py-32 lg:px-14"
                >
                    <div className="border-mint-cream-200/20 absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full border-44" />
                    <div className="reveal relative mx-auto max-w-332">
                        <p className="text-mint-cream-200 text-[10px] font-bold tracking-[.18em] uppercase">
                            Make the connection
                        </p>
                        <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                            <h2 className="max-w-4xl font-serif text-[clamp(3.3rem,7vw,7rem)] leading-[.88] tracking-tighter md:text-[clamp(4.5rem,6vw,8rem)]">
                                Better systems start
                                <br />
                                with{' '}
                                <i className="font-normal">better people.</i>
                            </h2>
                            <Link
                                href={membership()}
                                className="group bg-cobalt-blue-600 hover:bg-cobalt-blue-700 flex shrink-0 items-center gap-6 px-6 py-5 text-[11px] font-bold tracking-[.14em] text-white uppercase transition-colors"
                            >
                                Join the Society{' '}
                                <MoveUpRight
                                    size={17}
                                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-cobalt-blue-900 px-5 pb-8 text-white md:px-10 lg:px-14">
                <div className="mx-auto grid max-w-332 gap-12 border-t border-white/20 py-12 md:grid-cols-4">
                    <div className="md:col-span-2">
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
                        <p className="text-mint-cream-200 text-[10px] font-bold tracking-[.14em] uppercase">
                            Explore
                        </p>
                        <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
                            <Link href={about()}>About us</Link>
                            <Link href={programsRoute()}>Programs</Link>
                            <Link href={membership()}>Membership</Link>
                            <Link href={newsEvents()}>News & events</Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-mint-cream-200 text-[10px] font-bold tracking-[.14em] uppercase">
                            Contact
                        </p>
                        <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
                            <span>
                                Official contact details to be confirmed
                            </span>
                            <span>Kigali, Rwanda</span>
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex max-w-332 flex-col justify-between gap-3 border-t border-white/20 pt-5 text-[10px] tracking-[.12em] text-white/40 uppercase sm:flex-row">
                    <span>© {new Date().getFullYear()} RSHVACR</span>
                    <span>Professional competence · Responsible cooling</span>
                </div>
            </footer>
        </div>
    );
}
