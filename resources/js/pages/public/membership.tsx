import { Check } from 'lucide-react';
import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
import SectionHeading from '@/components/section-heading';
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
const steps = [
    'Complete the membership form',
    'Upload the required documents',
    'Submit the application for Society review',
    'Receive confirmation after approval',
];

export default function Membership(): React.JSX.Element {
    return (
        <PublicSiteLayout
            title="Membership"
            hero={
                <PublicPageHero
                    eyebrow="Membership"
                    title="Become a member of the Society"
                    copy="Join a professional community committed to improving technical competence, workplace safety, energy efficiency, and responsible refrigeration practices in Rwanda."
                    action={{
                        label: 'Start your application',
                        route: contact(),
                    }}
                    image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1400&q=85"
                    imageAlt="HVAC professionals at work"
                />
            }
        >
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto max-w-312">
                    <SectionHeading
                        eyebrow="Membership categories"
                        title="Five ways to join"
                        lead="Membership reflects the many ways professionals and institutions contribute to the sector."
                    />
                    <div
                        data-scroll-3d="cards"
                        className="mt-10 grid gap-5 md:grid-cols-2"
                    >
                        {categories.map(([title, copy]) => (
                            <article
                                key={title}
                                className="border-ink/10 shadow-card rounded-2xl border bg-white p-6 md:p-8"
                            >
                                <h3 className="text-xl font-semibold tracking-tight">
                                    {title} membership
                                </h3>
                                <p className="text-ink-muted mt-3 max-w-md text-sm leading-6">
                                    {copy}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-brand-blue-50 relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="airflow" />
                <div className="mx-auto grid max-w-312 gap-10 lg:grid-cols-[1fr_1.4fr]">
                    <SectionHeading
                        eyebrow="Membership benefits"
                        title="What members receive"
                    />
                    <ul className="border-ink/20 border-t">
                        {benefits.map((benefit) => (
                            <li
                                key={benefit}
                                className="border-ink/20 flex gap-4 border-b py-4"
                            >
                                <Check
                                    size={18}
                                    className="text-brand-green-700 mt-0.5 shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="text-sm leading-6">
                                    {benefit}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="grid" />
                <div className="mx-auto max-w-312">
                    <SectionHeading
                        eyebrow="Application process"
                        title="How to apply"
                    />
                    <ol
                        data-scroll-3d="cards"
                        className="mt-10 grid gap-6 md:grid-cols-4"
                    >
                        {steps.map((step, index) => (
                            <li
                                key={step}
                                className="border-ink/10 bg-canvas-sunken rounded-2xl border p-6"
                            >
                                <span className="bg-brand-blue-800 grid size-8 place-items-center rounded-full text-sm font-semibold text-white">
                                    {index + 1}
                                </span>
                                <p className="mt-5 text-sm leading-6">{step}</p>
                            </li>
                        ))}
                    </ol>
                    <SlidingTextLink href={contact()} className="mt-10">
                        Enquire about membership
                    </SlidingTextLink>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
