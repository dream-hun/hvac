import { Head, Link } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Check,
    Leaf,
    ShieldCheck,
    Users,
    Wind,
} from 'lucide-react';
import { useRef, useState } from 'react';
import AirflowGraphic from '@/components/airflow-graphic';
import MotionControl from '@/components/motion-control';
import HomeSectionBackground from '@/components/home-section-background';
import PublicMobileNavigation, {
    publicNavigation,
} from '@/components/public-mobile-navigation';
import { EditorialIntro, SlidingTextLink } from '@/components/threeui-public';
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
    {
        icon: BookOpen,
        title: 'Knowledge that works.',
        label: 'Technical training',
        copy: 'Practical skills for installation, maintenance, diagnostics, and responsible refrigerant handling.',
    },
    {
        icon: ShieldCheck,
        title: 'Standards that matter.',
        label: 'Safety & standards',
        copy: 'Reliable systems, safer worksites, and a shared commitment to professional working practices.',
    },
    {
        icon: Leaf,
        title: 'A lighter footprint.',
        label: 'Environmental care',
        copy: 'Better cooling through energy efficiency, leak prevention, recovery, and responsible disposal.',
    },
    {
        icon: Users,
        title: 'Progress, together.',
        label: 'Industry collaboration',
        copy: 'Connecting professionals, institutions, suppliers, and public partners around common goals.',
    },
];

const programs = [
    ['Technical workshops', 'Hands-on skills for the field', '01'],
    ['Refrigerant management', 'Responsible practice, better outcomes', '02'],
    ['Youth development', 'Building the next generation', '03'],
    ['Women in HVAC&R', 'Space, support, and opportunity', '04'],
];

const news = [
    [
        'Training',
        'Practical refrigeration training for the next generation of technicians',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85',
    ],
    [
        'Industry',
        'Building a stronger, safer cooling sector together',
        'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85',
    ],
    [
        'Sustainability',
        'The case for responsible refrigerant management in Rwanda',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',
    ],
];

function Mark(): React.JSX.Element {
    return (
        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-current/30">
            <Wind size={23} strokeWidth={1.5} aria-hidden="true" />
        </span>
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
            className="public-site homepage overflow-x-clip bg-[#f7f7f0] text-[#193e32]"
        >
            <Head title="Rwanda Society of HVAC & Refrigeration" />
            <a href="#top" className="public-skip-link">
                Skip to content
            </a>
            <header className="welcome-header absolute inset-x-0 top-0 z-20 px-5 text-[#f7f7f0] md:px-10 lg:px-14">
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
                            open={isMenuOpen}
                            onOpenChange={setIsMenuOpen}
                        />
                    </div>
                </div>
            </header>
            <main id="top" tabIndex={-1}>
                <section className="home-hero relative isolate flex min-h-[max(48rem,100svh)] flex-col overflow-hidden bg-[#122c23] px-5 pt-32 pb-6 text-[#f7f7f0] md:px-10 lg:px-14">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 aspect-square w-[min(115vw,52rem)] -translate-x-1/2 -translate-y-1/2 opacity-65"
                    >
                        <AirflowGraphic />
                    </div>
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 bg-[#122c23]/45"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-5 top-28 bottom-22 -z-10 mx-auto max-w-312 border-x border-white/5 md:inset-x-10 lg:inset-x-14"
                    />
                    <div className="relative mx-auto my-auto flex w-full max-w-5xl flex-col items-center py-16 text-center">
                        <p className="hero-reveal mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#c9dda8]/25 bg-[#122c23]/75 px-4 py-2 text-[10px] font-medium tracking-[.15em] text-balance uppercase">
                            <span className="size-1.5 shrink-0 rounded-full bg-[#c9dda8] max-sm:hidden" />
                            A professional home for Rwanda’s HVAC&R sector
                        </p>
                        <h1 className="hero-reveal font-serif text-[clamp(3.4rem,7.9vw,7.5rem)] leading-[.98] tracking-[-.055em] [text-shadow:0_3px_18px_#122c23]">
                            A better climate
                            <br />
                            <span className="text-[#d5e6b9] italic">
                                for progress.
                            </span>
                        </h1>
                        <p className="hero-reveal mt-7 max-w-115 text-sm leading-7 text-[#e0e7dd] sm:text-base">
                            Advancing the people, standards, and ideas behind
                            Rwanda’s cooling and ventilation future.
                        </p>
                        <div className="hero-reveal mt-9 flex flex-wrap justify-center gap-4">
                            <SlidingTextLink
                                href={membership()}
                                variant="light"
                            >
                                Become a member
                            </SlidingTextLink>
                            <SlidingTextLink
                                href={programsRoute()}
                                variant="outline"
                                className="bg-[#122c23]/80"
                            >
                                Explore our work
                            </SlidingTextLink>
                        </div>
                    </div>
                    <div className="relative mx-auto flex w-full max-w-312 flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-5 text-[10px] tracking-[.12em] uppercase">
                        <a
                            href="#about"
                            className="inline-flex min-h-11 items-center gap-3"
                        >
                            Discover the Society <ArrowDown size={14} />
                        </a>
                        <span className="hidden text-white/65 md:block">
                            Rooted in Rwanda. Looking forward.
                        </span>
                        <MotionControl
                            paused={motionPaused}
                            onToggle={() => setMotionPaused(!motionPaused)}
                        />
                    </div>
                </section>

                <section
                    aria-label="Our commitments"
                    className="border-b border-[#193e32]/15 bg-[#e9eddf] px-5 py-6 md:px-10 lg:px-14"
                >
                    <div className="mx-auto grid max-w-312 grid-cols-2 gap-5 sm:grid-cols-4">
                        {[
                            'Technical competence',
                            'Responsible cooling',
                            'Safer practices',
                            'Stronger connections',
                        ].map((label) => (
                            <p
                                key={label}
                                className="flex items-center gap-2 text-[10px] font-semibold tracking-[.07em] uppercase sm:justify-center sm:text-xs"
                            >
                                <Check
                                    size={14}
                                    className="shrink-0 text-[#648b56]"
                                />
                                {label}
                            </p>
                        ))}
                    </div>
                </section>

                <section
                    id="about"
                    className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14"
                >
                    <HomeSectionBackground
                        variant="signal-particles"
                        paused={motionPaused || isMenuOpen}
                    />
                    <div className="mx-auto max-w-312">
                        <EditorialIntro
                            label="01 / The Society"
                            title={
                                <>
                                    Essential systems.
                                    <br />
                                    <span className="text-[#75866b] italic">
                                        Exceptional people.
                                    </span>
                                </>
                            }
                        >
                            <p>
                                Cooling is essential infrastructure. The people
                                behind it deserve the knowledge, connections,
                                and support to do their best work.
                            </p>
                            <p className="mt-4">
                                We bring Rwanda’s HVAC and refrigeration
                                community together to build a more skilled,
                                responsible, and connected industry.
                            </p>
                            <Link
                                href={about()}
                                className="mt-6 inline-flex items-center gap-4 border-b border-[#193e32]/30 pb-2 text-sm font-semibold text-[#193e32]"
                            >
                                Get to know the Society{' '}
                                <ArrowUpRight size={16} />
                            </Link>
                        </EditorialIntro>
                        <div
                            id="focus"
                            data-scroll-stagger
                            data-scroll-3d="cards"
                            className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {focusAreas.map(
                                ({ icon: Icon, title, label, copy }) => (
                                    <article
                                        key={label}
                                        className="reveal rounded-2xl border border-[#193e32]/12 bg-[#fffef9] p-6 shadow-[0_3px_0_#193e3206] transition-shadow duration-300 hover:shadow-[0_12px_30px_#193e3210]"
                                    >
                                        <span className="mb-10 grid size-11 place-items-center rounded-xl border border-[#193e32]/10 bg-[#eef1e6]">
                                            <Icon size={21} strokeWidth={1.5} />
                                        </span>
                                        <p className="text-[10px] font-semibold tracking-[.09em] text-[#64745e] uppercase">
                                            {label}
                                        </p>
                                        <h3 className="mt-3 text-xl font-medium tracking-tight">
                                            {title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-[#657269]">
                                            {copy}
                                        </p>
                                    </article>
                                ),
                            )}
                        </div>
                    </div>
                </section>

                <section
                    id="programs"
                    className="relative isolate overflow-hidden border-y border-[#193e32]/10 bg-[#eeefe6] px-5 py-20 md:px-10 md:py-28 lg:px-14"
                >
                    <HomeSectionBackground
                        variant="override-grid"
                        paused={motionPaused || isMenuOpen}
                    />
                    <div className="mx-auto max-w-312">
                        <div className="reveal flex flex-wrap items-end justify-between gap-7">
                            <div>
                                <p className="text-xs font-medium tracking-[.12em] uppercase">
                                    02 / Programs & activities
                                </p>
                                <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.04] tracking-[-.045em]">
                                    Knowledge into practice.
                                </h2>
                            </div>
                            <SlidingTextLink
                                href={programsRoute()}
                                variant="outline"
                            >
                                Explore all programs
                            </SlidingTextLink>
                        </div>
                        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-14">
                            <figure
                                data-scroll-3d="image"
                                className="reveal relative min-h-80 overflow-hidden rounded-2xl bg-[#d9dfd1] lg:min-h-110"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=85"
                                    alt="Technician working on industrial equipment"
                                    loading="lazy"
                                    decoding="async"
                                    data-scroll-image
                                    className="absolute inset-0 size-full object-cover"
                                />
                                <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-lg bg-[#f7f7f0] px-5 py-4 text-xs">
                                    <span>
                                        Practical learning. Lasting impact.
                                    </span>
                                    <ArrowUpRight
                                        size={17}
                                        aria-hidden="true"
                                    />
                                </figcaption>
                            </figure>
                            <div
                                data-scroll-stagger
                                className="border-t border-[#193e32]/20"
                            >
                                {programs.map(([title, copy, number]) => (
                                    <Link
                                        href={programsRoute()}
                                        key={title}
                                        className="group flex min-h-27 items-center gap-5 border-b border-[#193e32]/20 py-6 transition-colors hover:bg-white/50 sm:px-4"
                                    >
                                        <span className="self-start pt-1 font-mono text-xs text-[#72806a]">
                                            {number}
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                                                {title}
                                            </h3>
                                            <p className="mt-2 text-sm text-[#657269]">
                                                {copy}
                                            </p>
                                        </div>
                                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#193e32]/20 transition-colors group-hover:bg-[#193e32] group-hover:text-white">
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="membership"
                    className="px-5 py-20 md:px-10 md:py-28 lg:px-14"
                >
                    <div
                        data-scroll-3d="panel"
                        className="reveal relative isolate mx-auto grid max-w-312 overflow-hidden rounded-3xl bg-[#193e32] text-[#f7f7f0] lg:grid-cols-[1.15fr_1fr]"
                    >
                        <HomeSectionBackground
                            variant="ribbon-field"
                            paused={motionPaused || isMenuOpen}
                            dark
                        />
                        <div className="flex flex-col items-start p-7 sm:p-12 lg:p-14">
                            <p className="text-xs tracking-[.12em] text-[#d5e6b9] uppercase">
                                03 / Membership
                            </p>
                            <h2 className="mt-7 max-w-lg font-serif text-[clamp(2.7rem,4.6vw,4.5rem)] leading-[1.04] tracking-[-.04em]">
                                Your industry.
                                <br />
                                <span className="text-[#d5e6b9] italic">
                                    Your community.
                                </span>
                            </h2>
                            <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
                                Find the training, resources, and professional
                                connections to take your work further. There’s a
                                place for you here.
                            </p>
                            <SlidingTextLink
                                href={membership()}
                                variant="light"
                                className="mt-9"
                            >
                                Find your membership
                            </SlidingTextLink>
                        </div>
                        <div className="border-t border-white/15 bg-[#204638]/70 p-7 sm:p-12 lg:border-t-0 lg:border-l lg:p-14">
                            <p className="text-xs tracking-[.12em] text-white/60 uppercase">
                                A shared commitment to better
                            </p>
                            <div className="mt-7">
                                {[
                                    [
                                        'Individual',
                                        'For professionals building their expertise.',
                                    ],
                                    [
                                        'Corporate',
                                        'For businesses strengthening the sector.',
                                    ],
                                    [
                                        'Student',
                                        'For the next generation of practitioners.',
                                    ],
                                    [
                                        'Institutional',
                                        'For partners moving the industry forward.',
                                    ],
                                ].map(([title, copy]) => (
                                    <Link
                                        href={membership()}
                                        key={title}
                                        className="group flex items-center justify-between gap-5 border-b border-white/15 py-5 first:pt-0"
                                    >
                                        <div>
                                            <h3 className="text-lg font-medium">
                                                {title}
                                            </h3>
                                            <p className="mt-1 text-xs leading-5 text-white/65">
                                                {copy}
                                            </p>
                                        </div>
                                        <ArrowUpRight
                                            size={18}
                                            className="shrink-0 text-[#d5e6b9] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="insights"
                    className="relative isolate overflow-hidden px-5 pb-20 md:px-10 md:pb-28 lg:px-14"
                >
                    <HomeSectionBackground
                        variant="data-pixel"
                        paused={motionPaused || isMenuOpen}
                    />
                    <div className="mx-auto max-w-312">
                        <div className="reveal flex flex-wrap items-end justify-between gap-7 border-t border-[#193e32]/20 pt-7">
                            <div>
                                <p className="text-xs font-medium tracking-[.12em] uppercase">
                                    04 / From the Society
                                </p>
                                <h2 className="mt-5 font-serif text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.04] tracking-[-.045em]">
                                    Ideas in circulation.
                                </h2>
                            </div>
                            <Link
                                href={newsEvents()}
                                className="inline-flex items-center gap-4 pb-1 text-sm font-semibold"
                            >
                                All news & events <ArrowUpRight size={17} />
                            </Link>
                        </div>
                        <div
                            data-scroll-stagger
                            data-scroll-3d="cards"
                            className="mt-12 grid gap-x-5 gap-y-12 md:grid-cols-3 lg:gap-x-8"
                        >
                            {news.map(([category, title, image]) => (
                                <article key={title} className="reveal group">
                                    <Link
                                        href={newsEvents()}
                                        className="flex h-full flex-col"
                                        aria-label={`View updates: ${title}`}
                                    >
                                        <div className="aspect-[1.45] overflow-hidden rounded-xl bg-[#e3e6dc]">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                src={image}
                                                alt=""
                                                className="size-full object-cover saturate-75 transition duration-500 group-hover:scale-105 group-hover:saturate-100"
                                            />
                                        </div>
                                        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[10px] font-medium tracking-[.08em] whitespace-nowrap uppercase">
                                            <span className="rounded-full border border-[#193e32]/20 px-3 py-1.5">
                                                {category}
                                            </span>
                                            <span className="text-[#657269]">
                                                Coming soon
                                            </span>
                                        </div>
                                        <h3 className="mt-4 mb-6 text-xl leading-snug font-medium tracking-[-.03em]">
                                            {title}
                                        </h3>
                                        <span className="mt-auto flex items-center justify-between border-t border-[#193e32]/15 pt-4 text-xs font-medium">
                                            View updates{' '}
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="contact"
                    className="relative isolate overflow-hidden border-t border-[#193e32]/10 bg-[#e0e8d2] px-5 py-20 md:px-10 md:py-24 lg:px-14"
                >
                    <HomeSectionBackground
                        variant="ribbon-field"
                        paused={motionPaused || isMenuOpen}
                    />
                    <div className="reveal mx-auto flex max-w-312 flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">
                        <div>
                            <p className="text-xs font-medium tracking-[.12em] uppercase">
                                Let’s move the industry forward
                            </p>
                            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.5rem,4.8vw,4.75rem)] leading-[1.04] tracking-[-.045em]">
                                Better systems start
                                <br />
                                with{' '}
                                <span className="italic">
                                    better connections.
                                </span>
                            </h2>
                        </div>
                        <div className="flex shrink-0 flex-col items-start gap-5">
                            <SlidingTextLink href={membership()}>
                                Join the Society
                            </SlidingTextLink>
                            <Link
                                href={contact()}
                                className="inline-flex items-center gap-4 text-sm"
                            >
                                Have a question? Let’s talk{' '}
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
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
