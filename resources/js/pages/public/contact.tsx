import { MapPin } from 'lucide-react';
import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
import SectionHeading from '@/components/section-heading';
import PublicSiteLayout from '@/layouts/public-site-layout';

const enquiries = [
    'General enquiry',
    'Membership',
    'Training',
    'Programs',
    'Partnerships',
    'Sponsorship',
    'News and media',
    'Complaints',
];

export default function Contact(): React.JSX.Element {
    return (
        <PublicSiteLayout
            title="Contact us"
            hero={
                <PublicPageHero
                    eyebrow="Contact us"
                    title="Get in touch with the Society"
                    copy="Contact us about membership, training, partnerships, events, sponsorship, or Society activities."
                    image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                    imageAlt="Team members talking in an office"
                />
            }
        >
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto grid max-w-312 gap-12 lg:grid-cols-12">
                    <div className="border-ink/10 bg-canvas-sunken self-start rounded-2xl border p-7 lg:col-span-4">
                        <span className="border-brand-blue-200 text-brand-blue-800 mb-7 grid size-12 place-items-center rounded-full border">
                            <MapPin
                                size={22}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                        </span>
                        <h2 className="text-xl font-semibold tracking-tight">
                            Contact information
                        </h2>
                        <p className="text-ink-muted mt-4 max-w-sm text-sm leading-6">
                            The Society&rsquo;s official address, telephone
                            number, email address, and office hours are awaiting
                            confirmation before publication.
                        </p>
                    </div>
                    <div className="lg:col-span-7 lg:col-start-6">
                        <SectionHeading
                            eyebrow="How can we help?"
                            title="What is your enquiry about?"
                        />
                        <div
                            data-scroll-3d="cards"
                            className="mt-8 grid gap-3 sm:grid-cols-2"
                        >
                            {enquiries.map((enquiry) => (
                                <div
                                    key={enquiry}
                                    className="border-ink/10 flex items-center justify-between gap-3 rounded-xl border bg-white px-6 py-5 text-sm font-medium"
                                >
                                    {enquiry}
                                </div>
                            ))}
                        </div>
                        <div className="border-brand-blue-200 bg-brand-blue-50 mt-8 rounded-2xl border p-6">
                            <p className="text-ink-muted text-sm leading-6">
                                The contact form and office map will be enabled
                                once the official contact details and office
                                location are confirmed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
