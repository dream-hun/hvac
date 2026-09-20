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
        <PublicSiteLayout title="Programs & activities">
            <PublicPageHero
                eyebrow="Programs & activities"
                title={
                    <>
                        Work that moves
                        <br />
                        the sector{' '}
                        <i className="font-normal text-[#d5e6b9]">forward.</i>
                    </>
                }
                copy="The Society organizes programs that improve technical skills, promote safe practices, support environmental responsibility, and connect professionals with industry opportunities."
                action={{ label: 'Register your interest', route: contact() }}
                image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=85"
            />
            <main>
                <section
                    id="program-list"
                    className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14"
                >
                    <HomeSectionBackground variant="override-grid" />
                    <div className="mx-auto max-w-312">
                        <p className="text-xs font-medium tracking-[.12em] text-[#657269] uppercase">
                            Our program areas
                        </p>
                        <div data-scroll-3d="cards" className="mt-8 grid gap-4">
                            {programs.map(([title, copy], index) => (
                                <article
                                    key={title}
                                    className="grid gap-6 rounded-2xl border border-[#193e32]/12 bg-[#fffef9] p-6 md:grid-cols-12 md:gap-10 md:p-8"
                                >
                                    <span className="font-serif text-3xl text-[#648b56] md:col-span-1">
                                        0{index + 1}
                                    </span>
                                    <h2 className="text-2xl font-semibold tracking-[-.04em] md:col-span-4">
                                        {title}
                                    </h2>
                                    <p className="max-w-xl text-sm leading-6 text-[#657269] md:col-span-6 md:col-start-7">
                                        {copy}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="relative isolate overflow-hidden bg-[#eeefe6] px-5 py-20 md:px-10 md:py-28 lg:px-14">
                    <HomeSectionBackground variant="ribbon-field" />
                    <div className="mx-auto grid max-w-312 gap-12 lg:grid-cols-12">
                        <h2 className="font-serif text-5xl leading-[1.04] tracking-[-.05em] md:text-6xl lg:col-span-5">
                            Programs that meet people where the work happens.
                        </h2>
                        <div className="lg:col-span-5 lg:col-start-8">
                            <p className="text-base leading-7 text-[#657269]">
                                Every program is built around practical
                                outcomes. Information on dates, locations,
                                participation requirements, registration, and
                                results will be published for each activity.
                            </p>
                            <a
                                href="#program-list"
                                className="mt-8 inline-flex border-b border-[#193e32] pb-2 text-[11px] font-bold tracking-[.14em] uppercase"
                            >
                                Explore program areas
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </PublicSiteLayout>
    );
}
