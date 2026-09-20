import { Link } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Leaf,
    ShieldCheck,
    Users,
} from 'lucide-react';
import AirflowGraphic from '@/components/airflow-graphic';
import HomeSectionBackground from '@/components/home-section-background';
import MotionControl from '@/components/motion-control';
import SectionHeading from '@/components/section-heading';
import { SlidingTextLink } from '@/components/threeui-public';
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
        title: 'Technical training',
        copy: 'Practical training on installation, maintenance, troubleshooting, electrical safety, equipment inspection, and refrigerant handling.',
    },
    {
        icon: ShieldCheck,
        title: 'Safety and standards',
        copy: 'Safe installation, servicing, maintenance, equipment testing, and workplace procedures on every job.',
    },
    {
        icon: Leaf,
        title: 'Environmental responsibility',
        copy: 'Leak prevention, refrigerant recovery, energy efficiency, equipment maintenance, and responsible disposal.',
    },
    {
        icon: Users,
        title: 'Industry collaboration',
        copy: 'Connecting professionals, companies, training institutions, suppliers, government institutions, and development partners.',
    },
];

const programs = [
    [
        'Technical workshops',
        'Hands-on sessions on installation, servicing, and diagnostics.',
    ],
    [
        'Refrigerant management',
        'Safe handling, leak prevention, recovery, and recycling.',
    ],
    [
        'Youth and student development',
        'Mentorship, career guidance, and industry exposure.',
    ],
    [
        'Women in HVAC and refrigeration',
        'Training, mentorship, and leadership opportunities.',
    ],
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
        'Responsible refrigerant management in Rwanda',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',
    ],
];

const memberships = [
    ['Professional', 'Technicians, engineers, consultants, and installers.'],
    ['Corporate', 'HVAC and refrigeration companies and service providers.'],
    ['Student', 'Students in HVAC, refrigeration, and related programs.'],
    ['Institutional', 'Training institutions and public institutions.'],
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
            <div className="relative mx-auto my-auto flex w-full max-w-4xl flex-col items-center py-16 text-center">
                <h1 className="hero-reveal text-3xl font-semibold tracking-tight text-balance [text-shadow:0_3px_24px_var(--color-brand-navy-950)] sm:text-4xl lg:text-5xl">
                    Advancing HVAC and refrigeration professionals in Rwanda
                </h1>
                <p className="hero-reveal mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                    The Rwanda Society of HVAC and Refrigeration is a nonprofit
                    professional organization bringing together technicians,
                    engineers, students, companies, training institutions, and
                    industry partners.
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
                        View our programs
                    </SlidingTextLink>
                </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-312 flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-5 text-[11px]">
                <a
                    href="#about"
                    className="hover:text-brand-green-300 inline-flex min-h-11 items-center gap-3 transition-colors"
                >
                    About the Society <ArrowDown size={14} />
                </a>
                <span className="hidden text-white/65 md:block">
                    Rwanda Society of HVAC &amp; Refrigeration
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
                id="about"
                className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14"
            >
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto flex max-w-312 flex-col gap-14">
                    <div className="reveal grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                        <SectionHeading
                            eyebrow="About the Society"
                            title="Supporting a skilled and responsible industry"
                        />
                        <div>
                            <p className="text-ink-muted text-base leading-7">
                                Heating, ventilation, air conditioning, and
                                refrigeration systems support hospitals, hotels,
                                offices, homes, supermarkets, laboratories, food
                                storage facilities, and industrial operations.
                            </p>
                            <p className="text-ink-muted mt-4 text-base leading-7">
                                The Society helps professionals improve their
                                technical skills, follow safety procedures,
                                access industry information, and build
                                connections with other professionals and
                                institutions.
                            </p>
                            <Link
                                href={about()}
                                className="border-ink/30 text-ink hover:border-brand-blue-800 hover:text-brand-blue-800 mt-6 inline-flex items-center gap-3 border-b pb-2 text-sm font-semibold transition-colors"
                            >
                                Learn about us <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                    <div
                        id="focus"
                        data-scroll-stagger
                        data-scroll-3d="cards"
                        className="grid gap-4 sm:grid-cols-2"
                    >
                        {focusAreas.map(({ icon: Icon, title, copy }) => (
                            <article
                                key={title}
                                className="border-ink/10 shadow-card hover:shadow-card-hover flex gap-6 rounded-2xl border bg-white p-6 transition-shadow duration-300 sm:p-8"
                            >
                                <span className="border-brand-blue-100 bg-brand-blue-50 text-brand-blue-800 grid size-12 shrink-0 place-items-center rounded-xl border">
                                    <Icon size={22} strokeWidth={1.5} />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold tracking-tight">
                                        {title}
                                    </h3>
                                    <p className="text-ink-muted mt-3 max-w-md text-sm leading-6">
                                        {copy}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="programs"
                className="border-ink/10 bg-canvas-sunken relative isolate overflow-hidden border-y px-5 py-20 md:px-10 md:py-24 lg:px-14"
            >
                <HomeSectionBackground variant="grid" />
                <div className="mx-auto flex max-w-312 flex-col gap-12">
                    <div className="reveal flex flex-wrap items-end justify-between gap-7">
                        <SectionHeading
                            eyebrow="Programs and activities"
                            title="Activities built around the practical needs of the sector"
                        />
                        <SlidingTextLink
                            href={programsRoute()}
                            variant="outline"
                        >
                            Explore all programs
                        </SlidingTextLink>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
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
                            <figcaption className="absolute inset-x-4 bottom-4 rounded-lg bg-white px-5 py-4 text-xs">
                                Members at a technical training session.
                            </figcaption>
                        </figure>
                        <div
                            data-scroll-stagger
                            className="border-ink/20 border-t"
                        >
                            {programs.map(([title, copy]) => (
                                <Link
                                    href={programsRoute()}
                                    key={title}
                                    className="group border-ink/20 flex min-h-27 items-center gap-5 border-b py-6 transition-colors hover:bg-white/70 sm:px-4"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold tracking-tight">
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
                className="px-5 py-20 md:px-10 md:py-24 lg:px-14"
            >
                <div
                    data-scroll-3d="panel"
                    className="reveal bg-brand-blue-800 relative isolate mx-auto grid max-w-312 overflow-hidden rounded-3xl text-white lg:grid-cols-[1.15fr_1fr]"
                >
                    <HomeSectionBackground variant="airflow" dark />
                    <div className="flex flex-col items-start p-7 sm:p-12 lg:p-14">
                        <p className="text-brand-green-300 text-xs font-semibold tracking-[.12em] uppercase">
                            Membership
                        </p>
                        <h2 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
                            Join Rwanda&rsquo;s HVAC and refrigeration
                            professional network
                        </h2>
                        <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
                            Membership provides access to training, technical
                            resources, industry events, professional
                            connections, and participation in Society
                            activities.
                        </p>
                        <SlidingTextLink
                            href={membership()}
                            variant="light"
                            className="mt-9"
                        >
                            View membership options
                        </SlidingTextLink>
                    </div>
                    <div className="bg-brand-blue-900/60 border-t border-white/15 p-7 sm:p-12 lg:border-t-0 lg:border-l lg:p-14">
                        <p className="text-xs font-semibold tracking-[.12em] text-white/65 uppercase">
                            Membership categories
                        </p>
                        <div className="mt-6">
                            {memberships.map(([title, copy]) => (
                                <Link
                                    href={membership()}
                                    key={title}
                                    className="group flex items-center justify-between gap-5 border-b border-white/15 py-5 first:pt-0"
                                >
                                    <div>
                                        <h3 className="font-semibold">
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
                className="relative isolate overflow-hidden px-5 pb-20 md:px-10 md:pb-24 lg:px-14"
            >
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto max-w-312">
                    <div className="reveal border-ink/20 flex flex-wrap items-end justify-between gap-7 border-t pt-10">
                        <SectionHeading
                            eyebrow="News and events"
                            title="Latest news and events"
                        />
                        <Link
                            href={newsEvents()}
                            className="hover:text-brand-blue-800 inline-flex items-center gap-3 pb-1 text-sm font-semibold transition-colors"
                        >
                            View all news and events <ArrowUpRight size={17} />
                        </Link>
                    </div>
                    <div
                        data-scroll-stagger
                        data-scroll-3d="cards"
                        className="mt-10 grid gap-x-5 gap-y-12 md:grid-cols-3 lg:gap-x-8"
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
                                    <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs whitespace-nowrap">
                                        <span className="border-ink/20 rounded-full border px-3 py-1.5 font-medium">
                                            {category}
                                        </span>
                                        <span className="text-ink-muted">
                                            Coming soon
                                        </span>
                                    </div>
                                    <h3 className="mt-4 mb-6 text-lg leading-snug font-semibold tracking-tight">
                                        {title}
                                    </h3>
                                    <span className="border-ink/15 group-hover:text-brand-blue-800 mt-auto flex items-center justify-between border-t pt-4 text-xs font-medium transition-colors">
                                        Read more <ArrowUpRight size={16} />
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
                    <SectionHeading
                        eyebrow="Get involved"
                        title="Help strengthen Rwanda’s HVAC and refrigeration sector"
                        lead="Join the Society, attend a training session, participate in an event, or support one of our programs."
                    />
                    <div className="flex shrink-0 flex-col items-start gap-5">
                        <SlidingTextLink href={membership()}>
                            Join the Society
                        </SlidingTextLink>
                        <Link
                            href={contact()}
                            className="hover:text-brand-blue-800 inline-flex items-center gap-3 text-sm transition-colors"
                        >
                            Contact us <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
