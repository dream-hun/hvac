import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
import PublicSiteLayout from '@/layouts/public-site-layout';
import { contact } from '@/routes';

const programs = [
    [
        'Technical training',
        'Installation, maintenance, electrical controls, troubleshooting, cold-room installation, commissioning, leak detection, and workplace safety.',
    ],
    [
        'Refrigerant management',
        'Responsible use through handling training, leak prevention, recovery and recycling, safe decommissioning, and guidance on new technologies.',
    ],
    [
        'Energy efficiency',
        'Helping professionals and equipment owners reduce consumption through correct sizing, maintenance, insulation, temperature control, and customer education.',
    ],
    [
        'Youth & student development',
        'Career guidance, mentorship, practical demonstrations, internship referrals, industry visits, competitions, and employment preparation.',
    ],
    [
        'Women in HVAC & refrigeration',
        'Technical training, mentorship, career guidance, business development, outreach, networking, and leadership opportunities.',
    ],
    [
        'Business development',
        'Quotation preparation, job costing, customer service, record management, service agreements, quality control, and workplace management.',
    ],
];

export default function Programs(): React.JSX.Element {
    return (
        <PublicSiteLayout
            title="Programs & activities"
            hero={
                <PublicPageHero
                    eyebrow="Programs & activities"
                    title={
                        <>
                            Work that moves
                            <br />
                            the sector{' '}
                            <i className="text-brand-green-300 font-normal">
                                forward.
                            </i>
                        </>
                    }
                    copy="The Society organizes programs that improve technical skills, promote safe practices, support environmental responsibility, and connect professionals with industry opportunities."
                    action={{
                        label: 'Register your interest',
                        route: contact(),
                    }}
                    image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=85"
                />
            }
        >
            <section
                id="program-list"
                className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14"
            >
                <HomeSectionBackground variant="grid" />
                <div className="mx-auto max-w-312">
                    <p className="text-ink-muted text-xs font-medium tracking-[.12em] uppercase">
                        Our program areas
                    </p>
                    <div data-scroll-3d="cards" className="mt-8 grid gap-4">
                        {programs.map(([title, copy], index) => (
                            <article
                                key={title}
                                className="border-ink/10 shadow-card grid gap-6 rounded-2xl border bg-white p-6 md:grid-cols-12 md:gap-10 md:p-8"
                            >
                                <span className="text-brand-blue-700 font-serif text-3xl md:col-span-1">
                                    0{index + 1}
                                </span>
                                <h2 className="text-2xl font-semibold tracking-[-.02em] md:col-span-4">
                                    {title}
                                </h2>
                                <p className="text-ink-muted max-w-xl text-sm leading-6 md:col-span-6 md:col-start-7">
                                    {copy}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-canvas-sunken relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
                <HomeSectionBackground variant="airflow" />
                <div className="mx-auto grid max-w-312 gap-12 lg:grid-cols-12">
                    <h2 className="font-serif text-5xl leading-[1.04] tracking-[-.02em] md:text-6xl lg:col-span-5">
                        Programs that meet people where the work happens.
                    </h2>
                    <div className="lg:col-span-5 lg:col-start-8">
                        <p className="text-ink-muted text-base leading-7">
                            Every program is built around practical outcomes.
                            Information on dates, locations, participation
                            requirements, registration, and results will be
                            published for each activity.
                        </p>
                        <a
                            href="#program-list"
                            className="border-brand-blue-800 text-brand-blue-800 mt-8 inline-flex border-b pb-2 text-[11px] font-bold tracking-[.14em] uppercase"
                        >
                            Explore program areas
                        </a>
                    </div>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
