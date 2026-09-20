import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
import { SlidingTextLink } from '@/components/threeui-public';
import PublicSiteLayout from '@/layouts/public-site-layout';
import { contact } from '@/routes';

const categories = [
    [
        'Professional',
        'For technicians, engineers, consultants, installers, supervisors, and maintenance professionals.',
    ],
    [
        'Corporate',
        'For HVAC companies, refrigeration businesses, contractors, equipment distributors, and service providers.',
    ],
    [
        'Student',
        'For students enrolled in HVAC, refrigeration, mechanical engineering, electrical engineering, or related technical programs.',
    ],
    [
        'Institutional',
        'For universities, technical schools, vocational training centres, public institutions, and professional organizations.',
    ],
    [
        'Partner',
        'For organizations supporting technical education, environmental protection, employment, or industry development.',
    ],
];
const benefits = [
    'Access to technical training and workshops',
    'Reduced fees for selected Society events',
    'Access to technical guides and resources',
    'Professional networking opportunities',
    'Participation in committees and Society activities',
    'Information about jobs, tenders, training, and scholarships',
    "Listing in the member directory, with the member's consent",
    'Invitations to conferences and industry meetings',
    'Opportunities to contribute to industry discussions',
];

export default function Membership(): React.JSX.Element {
    return (
        <PublicSiteLayout
            title="Membership"
            hero={
                <PublicPageHero
                    eyebrow="Membership"
                    title={
                        <>
                            Join the network
                            <br />
                            moving{' '}
                            <i className="text-brand-green-300 font-normal">
                                forward.
                            </i>
                        </>
                    }
                    copy="Join a professional community committed to improving technical competence, workplace safety, energy efficiency, and responsible refrigeration practices in Rwanda."
                    action={{
                        label: 'Start your application',
                        route: contact(),
                    }}
                    image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1400&q=85"
                />
            }
        >
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto max-w-312">
                    <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
                        <h2 className="font-serif text-5xl leading-[1.04] tracking-[-.02em] md:text-6xl">
                            Choose your place.
                        </h2>
                        <p className="text-ink-muted max-w-sm text-sm leading-6">
                            Membership is designed to reflect the many ways
                            professionals and institutions contribute to the
                            sector.
                        </p>
                    </div>
                    <div
                        data-scroll-3d="cards"
                        className="mt-12 grid gap-5 md:grid-cols-2"
                    >
                        {categories.map(([title, copy], index) => (
                            <article
                                key={title}
                                className="border-ink/10 shadow-card rounded-2xl border bg-white p-6 md:p-8"
                            >
                                <span className="text-brand-blue-700 font-serif text-2xl">
                                    0{index + 1}
                                </span>
                                <h3 className="mt-8 text-2xl font-semibold tracking-[-.02em]">
                                    {title} membership
                                </h3>
                                <p className="text-ink-muted mt-4 max-w-md text-sm leading-6">
                                    {copy}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-brand-blue-50 relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
                <HomeSectionBackground variant="airflow" />
                <div className="mx-auto grid max-w-312 gap-14 lg:grid-cols-2">
                    <div>
                        <p className="text-xs font-medium tracking-[.12em] uppercase">
                            What membership opens up
                        </p>
                        <span
                            aria-hidden="true"
                            className="bg-brand-red-600 mt-4 block h-0.5 w-12 rounded-full"
                        />
                        <h2 className="mt-6 font-serif text-5xl leading-[1.04] tracking-[-.02em] md:text-6xl">
                            Useful access. Meaningful connection.
                        </h2>
                    </div>
                    <ul className="border-ink/20 border-t">
                        {benefits.map((benefit, index) => (
                            <li
                                key={benefit}
                                className="border-ink/20 flex gap-5 border-b py-5"
                            >
                                <span className="text-brand-blue-700 font-serif text-xl">
                                    0{index + 1}
                                </span>
                                <span className="pt-1 text-sm font-semibold">
                                    {benefit}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
                <HomeSectionBackground variant="grid" />
                <div className="border-ink/15 mx-auto max-w-312 border-t pt-8">
                    <p className="text-ink-muted text-xs font-medium tracking-[.12em] uppercase">
                        Application process
                    </p>
                    <div
                        data-scroll-3d="cards"
                        className="mt-10 grid gap-6 md:grid-cols-4"
                    >
                        {[
                            'Complete the membership form',
                            'Upload required documents',
                            'Submit for Society review',
                            'Receive confirmation after approval',
                        ].map((step, index) => (
                            <div
                                key={step}
                                className="border-ink/10 bg-canvas-sunken rounded-2xl border p-6"
                            >
                                <span className="text-brand-blue-700 font-serif text-4xl">
                                    0{index + 1}
                                </span>
                                <p className="mt-5 max-w-44 text-sm leading-6">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                    <SlidingTextLink href={contact()} className="mt-10">
                        Enquire about membership
                    </SlidingTextLink>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
