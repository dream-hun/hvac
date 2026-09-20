import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
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

export default function NewsEvents(): React.JSX.Element {
    return (
        <PublicSiteLayout
            title="News & events"
            hero={
                <PublicPageHero
                    eyebrow="News & events"
                    title={
                        <>
                            The sector is
                            <br />
                            <i className="text-brand-green-300 font-normal">
                                in conversation.
                            </i>
                        </>
                    }
                    copy="Read Society announcements, discover training opportunities, and register for upcoming industry events."
                    action={{ label: 'Ask about an event', route: contact() }}
                    image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=85"
                />
            }
        >
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto max-w-312">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="text-ink-muted text-xs font-medium tracking-[.12em] uppercase">
                                Latest updates
                            </p>
                            <h2 className="mt-5 font-serif text-5xl leading-[1.04] tracking-[-.02em] md:text-6xl">
                                Ideas in circulation.
                            </h2>
                        </div>
                        <p className="text-ink-muted max-w-sm text-sm leading-6">
                            News stories, training announcements, and industry
                            updates will appear here as they are published.
                        </p>
                    </div>
                    <div
                        data-scroll-3d="cards"
                        className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3"
                    >
                        {stories.map(([type, title, copy], index) => (
                            <article key={title} className="group">
                                <div className="bg-brand-navy-100 aspect-3/2 overflow-hidden rounded-xl">
                                    <img
                                        data-scroll-image
                                        src={storyImages[index]}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        className="size-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <p className="text-ink-muted mt-5 text-[10px] tracking-[.08em] uppercase">
                                    Coming soon
                                </p>
                                <p className="border-ink/20 mt-3 inline-flex rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-[.08em] uppercase">
                                    {type}
                                </p>
                                <h3 className="mt-4 text-xl leading-snug font-medium tracking-[-.02em]">
                                    {title}
                                </h3>
                                <p className="text-ink-muted mt-5 text-sm leading-6">
                                    {copy}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-brand-navy-900 relative isolate overflow-hidden px-5 py-24 text-white md:px-10 md:py-32 lg:px-14">
                <HomeSectionBackground variant="dots" dark />
                <div className="mx-auto grid max-w-312 gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-brand-green-300 text-xs font-medium tracking-[.12em] uppercase">
                            Upcoming events
                        </p>
                        <h2 className="mt-6 font-serif text-5xl leading-[1.04] tracking-[-.02em] md:text-6xl">
                            Save the space for what’s next.
                        </h2>
                    </div>
                    <div className="border-t border-white/20">
                        {[
                            'Technical workshops',
                            'Training courses',
                            'Member meetings',
                            'Industry exhibitions',
                        ].map((event, index) => (
                            <div
                                key={event}
                                className="flex items-center justify-between border-b border-white/20 py-6"
                            >
                                <span className="text-sm font-semibold">
                                    {event}
                                </span>
                                <span className="text-brand-green-300 font-serif text-2xl">
                                    0{index + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
