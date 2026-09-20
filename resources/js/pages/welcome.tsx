import { Link } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Check,
    Leaf,
    ShieldCheck,
    Users,
} from 'lucide-react';
import AirflowGraphic from '@/components/airflow-graphic';
import HomeSectionBackground from '@/components/home-section-background';
import MotionControl from '@/components/motion-control';
import { EditorialIntro, SlidingTextLink } from '@/components/threeui-public';
import PublicSiteLayout from '@/layouts/public-site-layout';
import {
    about,
    contact,
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

const memberships = [
    ['Individual', 'For professionals building their expertise.'],
    ['Corporate', 'For businesses strengthening the sector.'],
    ['Student', 'For the next generation of practitioners.'],
    ['Institutional', 'For partners moving the industry forward.'],
];

function HomeHero(): React.JSX.Element {
    return (
        <section className="home-hero bg-brand-navy-950 relative isolate flex min-h-[max(40rem,calc(100svh-4.75rem))] flex-col overflow-hidden px-5 pt-10 pb-6 text-white md:px-10 lg:px-14">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 aspect-square w-[min(115vw,52rem)] -translate-x-1/2 -translate-y-1/2 opacity-45 sm:opacity-60"
            >
                <AirflowGraphic />
            </div>
            <div
                aria-hidden="true"
                className="from-brand-navy-950/70 via-brand-navy-950/40 to-brand-navy-950/80 pointer-events-none absolute inset-0 -z-10 bg-linear-to-b"
            />
            {/* Keeps the headline legible where the blades pass behind it. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(58%_42%_at_50%_46%,var(--color-brand-navy-950)_0%,transparent_78%)] opacity-90 sm:opacity-70"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-5 top-8 bottom-22 -z-10 mx-auto max-w-312 border-x border-white/5 md:inset-x-10 lg:inset-x-14"
            />
            <div className="relative mx-auto my-auto flex w-full max-w-5xl flex-col items-center py-16 text-center">
                <p className="hero-reveal border-brand-green-300/25 bg-brand-navy-950/70 mb-7 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[10px] font-medium tracking-[.15em] text-balance uppercase backdrop-blur-sm">
                    <span className="bg-brand-red-500 size-1.5 shrink-0 rounded-full max-sm:hidden" />
                    A professional home for Rwanda’s HVAC&R sector
                </p>
                <h1 className="hero-reveal font-serif text-[clamp(3.4rem,7.9vw,7.5rem)] leading-[.98] tracking-[-.03em] [text-shadow:0_3px_24px_var(--color-brand-navy-950)]">
                    A better climate
                    <br />
                    <span className="text-brand-green-300 italic">
                        for progress.
                    </span>
                </h1>
                <p className="hero-reveal mt-7 max-w-115 text-sm leading-7 text-white/80 sm:text-base">
                    Advancing the people, standards, and ideas behind Rwanda’s
                    cooling and ventilation future.
                </p>
                <div className="hero-reveal mt-9 flex flex-wrap justify-center gap-4">
                    <SlidingTextLink href={membership()} variant="light">
                        Become a member
                    </SlidingTextLink>
                    <SlidingTextLink
                        href={programsRoute()}
                        variant="outline"
                        className="bg-brand-navy-950/60 backdrop-blur-sm"
                    >
                        Explore our work
                    </SlidingTextLink>
                </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-312 flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-5 text-[10px] tracking-[.12em] uppercase">
                <a
                    href="#about"
                    className="hover:text-brand-green-300 inline-flex min-h-11 items-center gap-3 transition-colors"
                >
                    Discover the Society <ArrowDown size={14} />
                </a>
                <span className="hidden text-white/65 md:block">
                    Rooted in Rwanda. Looking forward.
                </span>
                <MotionControl className="text-white/70" />
            </div>
        </section>
    );
}

export default function Welcome(): React.JSX.Element {
    return (
        <PublicSiteLayout
            title="Rwanda Society of HVAC & Refrigeration"
            variant="home"
            hero={<HomeHero />}
        >
            <section
                aria-label="Our commitments"
                className="border-ink/10 bg-canvas-sunken border-b px-5 py-6 md:px-10 lg:px-14"
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
                                className="text-brand-green-600 shrink-0"
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
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto max-w-312">
                    <EditorialIntro
                        label="01 / The Society"
                        title={
                            <>
                                Essential systems.
                                <br />
                                <span className="text-brand-blue-700 italic">
                                    Exceptional people.
                                </span>
                            </>
                        }
                    >
                        <p>
                            Cooling is essential infrastructure. The people
                            behind it deserve the knowledge, connections, and
                            support to do their best work.
                        </p>
                        <p className="mt-4">
                            We bring Rwanda’s HVAC and refrigeration community
                            together to build a more skilled, responsible, and
                            connected industry.
                        </p>
                        <Link
                            href={about()}
                            className="border-ink/30 text-ink hover:border-brand-blue-800 hover:text-brand-blue-800 mt-6 inline-flex items-center gap-4 border-b pb-2 text-sm font-semibold transition-colors"
                        >
                            Get to know the Society <ArrowUpRight size={16} />
                        </Link>
                    </EditorialIntro>
                    <div
                        id="focus"
                        data-scroll-stagger
                        data-scroll-3d="cards"
                        className="mt-16 grid gap-4 sm:grid-cols-2"
                    >
                        {focusAreas.map(
                            ({ icon: Icon, title, label, copy }) => (
                                <article
                                    key={label}
                                    className="border-ink/10 shadow-card hover:shadow-card-hover flex gap-6 rounded-2xl border bg-white p-6 transition-shadow duration-300 sm:p-8"
                                >
                                    <span className="border-brand-blue-100 bg-brand-blue-50 text-brand-blue-800 grid size-12 shrink-0 place-items-center rounded-xl border">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </span>
                                    <div>
                                        <p className="text-ink-muted text-[10px] font-semibold tracking-[.09em] uppercase">
                                            {label}
                                        </p>
                                        <h3 className="mt-3 text-xl font-medium tracking-tight">
                                            {title}
                                        </h3>
                                        <p className="text-ink-muted mt-3 max-w-md text-sm leading-6">
                                            {copy}
                                        </p>
                                    </div>
                                </article>
                            ),
                        )}
                    </div>
                </div>
            </section>

            <section
                id="programs"
                className="border-ink/10 bg-canvas-sunken relative isolate overflow-hidden border-y px-5 py-20 md:px-10 md:py-28 lg:px-14"
            >
                <HomeSectionBackground variant="grid" />
                <div className="mx-auto max-w-312">
                    <div className="reveal flex flex-wrap items-end justify-between gap-7">
                        <div>
                            <p className="text-xs font-medium tracking-[.12em] uppercase">
                                02 / Programs &amp; activities
                            </p>
                            <span
                                aria-hidden="true"
                                className="bg-brand-red-600 mt-4 block h-0.5 w-12 rounded-full"
                            />
                            <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.04] tracking-[-.02em]">
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
                            className="bg-brand-navy-100 relative min-h-80 overflow-hidden rounded-2xl lg:min-h-110"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=85"
                                alt="Technician working on industrial equipment"
                                loading="lazy"
                                decoding="async"
                                data-scroll-image
                                className="absolute inset-0 size-full object-cover"
                            />
                            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-lg bg-white px-5 py-4 text-xs">
                                <span>Practical learning. Lasting impact.</span>
                                <ArrowUpRight size={17} aria-hidden="true" />
                            </figcaption>
                        </figure>
                        <div
                            data-scroll-stagger
                            className="border-ink/20 border-t"
                        >
                            {programs.map(([title, copy, number]) => (
                                <Link
                                    href={programsRoute()}
                                    key={title}
                                    className="group border-ink/20 flex min-h-27 items-center gap-5 border-b py-6 transition-colors hover:bg-white/70 sm:px-4"
                                >
                                    <span className="text-ink-muted self-start pt-1 font-mono text-xs">
                                        {number}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                                            {title}
                                        </h3>
                                        <p className="text-ink-muted mt-2 text-sm">
                                            {copy}
                                        </p>
                                    </div>
                                    <span className="border-ink/20 group-hover:bg-brand-blue-800 grid size-9 shrink-0 place-items-center rounded-full border transition-colors group-hover:border-transparent group-hover:text-white">
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
                    className="reveal bg-brand-blue-800 relative isolate mx-auto grid max-w-312 overflow-hidden rounded-3xl text-white lg:grid-cols-[1.15fr_1fr]"
                >
                    <HomeSectionBackground variant="airflow" dark />
                    <div className="flex flex-col items-start p-7 sm:p-12 lg:p-14">
                        <p className="text-brand-green-300 text-xs tracking-[.12em] uppercase">
                            03 / Membership
                        </p>
                        <h2 className="mt-7 max-w-lg font-serif text-[clamp(2.7rem,4.6vw,4.5rem)] leading-[1.04] tracking-[-.02em]">
                            Your industry.
                            <br />
                            <span className="text-brand-green-300 italic">
                                Your community.
                            </span>
                        </h2>
                        <p className="mt-6 max-w-md text-sm leading-7 text-white/80">
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
                    <div className="bg-brand-blue-900/60 border-t border-white/15 p-7 sm:p-12 lg:border-t-0 lg:border-l lg:p-14">
                        <p className="text-xs tracking-[.12em] text-white/65 uppercase">
                            A shared commitment to better
                        </p>
                        <div className="mt-7">
                            {memberships.map(([title, copy]) => (
                                <Link
                                    href={membership()}
                                    key={title}
                                    className="group flex items-center justify-between gap-5 border-b border-white/15 py-5 first:pt-0"
                                >
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            {title}
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-white/70">
                                            {copy}
                                        </p>
                                    </div>
                                    <ArrowUpRight
                                        size={18}
                                        className="text-brand-green-300 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto max-w-312">
                    <div className="reveal border-ink/20 flex flex-wrap items-end justify-between gap-7 border-t pt-7">
                        <div>
                            <h2 className="mt-5 font-serif text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.04] tracking-[-.02em]">
                                Ideas in circulation.
                            </h2>
                        </div>
                        <Link
                            href={newsEvents()}
                            className="hover:text-brand-blue-800 inline-flex items-center gap-4 pb-1 text-sm font-semibold transition-colors"
                        >
                            All news &amp; events <ArrowUpRight size={17} />
                        </Link>
                    </div>
                    <div
                        data-scroll-stagger
                        data-scroll-3d="cards"
                        className="mt-12 grid gap-x-5 gap-y-12 md:grid-cols-3 lg:gap-x-8"
                    >
                        {news.map(([category, title, image]) => (
                            <article key={title} className="group">
                                <Link
                                    href={newsEvents()}
                                    className="flex h-full flex-col"
                                    aria-label={`View updates: ${title}`}
                                >
                                    <div className="bg-brand-navy-100 aspect-3/2 overflow-hidden rounded-xl">
                                        <img
                                            loading="lazy"
                                            decoding="async"
                                            src={image}
                                            alt=""
                                            className="size-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[10px] font-medium tracking-[.08em] whitespace-nowrap uppercase">
                                        <span className="border-ink/20 rounded-full border px-3 py-1.5">
                                            {category}
                                        </span>
                                        <span className="text-ink-muted">
                                            Coming soon
                                        </span>
                                    </div>
                                    <h3 className="mt-4 mb-6 text-xl leading-snug font-medium tracking-[-.02em]">
                                        {title}
                                    </h3>
                                    <span className="border-ink/15 group-hover:text-brand-blue-800 mt-auto flex items-center justify-between border-t pt-4 text-xs font-medium transition-colors">
                                        View updates <ArrowUpRight size={16} />
                                    </span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="contact"
                className="border-ink/10 bg-brand-blue-50 relative isolate overflow-hidden border-t px-5 py-20 md:px-10 md:py-24 lg:px-14"
            >
                <HomeSectionBackground variant="airflow" />
                <div className="reveal mx-auto flex max-w-312 flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">
                    <div>
                        <p className="text-xs font-medium tracking-[.12em] uppercase">
                            Let’s move the industry forward
                        </p>
                        <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.5rem,4.8vw,4.75rem)] leading-[1.04] tracking-[-.02em]">
                            Better systems start
                            <br />
                            with{' '}
                            <span className="text-brand-blue-700 italic">
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
                            className="hover:text-brand-blue-800 inline-flex items-center gap-4 text-sm transition-colors"
                        >
                            Have a question? Let’s talk <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
