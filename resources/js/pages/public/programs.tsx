import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
import SectionHeading from '@/components/section-heading';
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
        'Youth and student development',
        'Career guidance, mentorship, practical demonstrations, internship referrals, industry visits, competitions, and employment preparation.',
    ],
    [
        'Women in HVAC and refrigeration',
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
                    eyebrow="Programs and activities"
                    title="Programs that improve skills, safety, and efficiency"
                    copy="The Society organizes programs that improve technical skills, promote safe practices, support environmental responsibility, and connect professionals with industry opportunities."
                    action={{
                        label: 'Register your interest',
                        route: contact(),
                    }}
                    image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=85"
                    imageAlt="Technicians in a training workshop"
                />
            }
        >
            <section
                id="program-list"
                className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14"
            >
                <HomeSectionBackground variant="grid" />
                <div className="mx-auto max-w-312">
                    <SectionHeading
                        eyebrow="Our program areas"
                        title="Six areas of work"
                    />
                    <div data-scroll-3d="cards" className="mt-10 grid gap-4">
                        {programs.map(([title, copy]) => (
                            <article
                                key={title}
                                className="border-ink/10 shadow-card grid gap-4 rounded-2xl border bg-white p-6 md:grid-cols-12 md:gap-10 md:p-8"
                            >
                                <h2 className="text-xl font-semibold tracking-tight md:col-span-5">
                                    {title}
                                </h2>
                                <p className="text-ink-muted max-w-2xl text-sm leading-6 md:col-span-7">
                                    {copy}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-canvas-sunken relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="airflow" />
                <div className="mx-auto grid max-w-312 gap-10 lg:grid-cols-2">
                    <SectionHeading
                        eyebrow="Program information"
                        title="Details are published for every activity"
                    />
                    <div>
                        <p className="text-ink-muted text-base leading-7">
                            Every program is built around practical outcomes.
                            Information on dates, locations, participation
                            requirements, registration, and results will be
                            published for each activity.
                        </p>
                        <a
                            href="#program-list"
                            className="border-brand-blue-800 text-brand-blue-800 mt-6 inline-flex border-b pb-2 text-sm font-semibold"
                        >
                            Explore program areas
                        </a>
                    </div>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
