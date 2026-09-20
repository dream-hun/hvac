import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
import SectionHeading from '@/components/section-heading';
import PublicSiteLayout from '@/layouts/public-site-layout';
import { contact } from '@/routes';

const storyImages = [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',
];

const stories = [
    [
        'Training opportunity',
        'Practical refrigeration training for the next generation of technicians',
        'The Society will share details of upcoming learning opportunities, registration requirements, and participation information here.',
    ],
    [
        'Industry update',
        'Building a stronger, safer cooling sector together',
        'Read Society announcements, partnership updates, and the conversations shaping professional practice.',
    ],
    [
        'Environmental information',
        'Responsible refrigerant management in Rwanda',
        'Updates on efficient cooling, prevention of refrigerant leakage, recovery, and environmentally responsible work.',
    ],
];

const events = [
    'Technical workshops',
    'Training courses',
    'Member meetings',
    'Industry exhibitions',
];

export default function NewsEvents(): React.JSX.Element {
    return (
        <PublicSiteLayout
            title="News & events"
            hero={
                <PublicPageHero
                    eyebrow="News and events"
                    title="Announcements, training opportunities, and events"
                    copy="Read Society announcements, discover training opportunities, and register for upcoming industry events."
                    action={{ label: 'Ask about an event', route: contact() }}
                    image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=85"
                    imageAlt="Professionals attending an industry meeting"
                />
            }
        >
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto max-w-312">
                    <SectionHeading
                        eyebrow="Latest updates"
                        title="News from the Society"
                        lead="News stories, training announcements, and industry updates will appear here as they are published."
                    />
                    <div
                        data-scroll-3d="cards"
                        className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-3"
                    >
                        {stories.map(([type, title, copy], index) => (
                            <article key={title}>
                                <div className="bg-brand-navy-100 aspect-3/2 overflow-hidden rounded-xl">
                                    <img
                                        data-scroll-image
                                        src={storyImages[index]}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                                    <span className="border-ink/20 rounded-full border px-3 py-1.5 font-medium">
                                        {type}
                                    </span>
                                    <span className="text-ink-muted">
                                        Coming soon
                                    </span>
                                </div>
                                <h2 className="mt-4 text-lg leading-snug font-semibold tracking-tight">
                                    {title}
                                </h2>
                                <p className="text-ink-muted mt-3 text-sm leading-6">
                                    {copy}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-brand-navy-900 relative isolate overflow-hidden px-5 py-20 text-white md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="dots" dark />
                <div className="mx-auto grid max-w-312 gap-10 lg:grid-cols-2">
                    <div>
                        <p className="text-brand-green-300 text-xs font-semibold tracking-[.12em] uppercase">
                            Upcoming events
                        </p>
                        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                            What the Society organizes
                        </h2>
                        <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
                            Event dates, locations, and registration details
                            will be published here once confirmed.
                        </p>
                    </div>
                    <ul className="border-t border-white/20">
                        {events.map((event) => (
                            <li
                                key={event}
                                className="border-b border-white/20 py-5 text-sm font-medium"
                            >
                                {event}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
