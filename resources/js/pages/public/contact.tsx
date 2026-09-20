import { MapPin } from 'lucide-react';
import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
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
                    eyebrow="Contact the Society"
                    title={
                        <>
                            Start a useful
                            <br />
                            <i className="text-brand-green-300 font-normal">
                                conversation.
                            </i>
                        </>
                    }
                    copy="Contact us about membership, training, partnerships, events, sponsorship, or Society activities."
                    image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                />
            }
        >
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto grid max-w-312 gap-16 lg:grid-cols-12">
                    <div className="border-ink/10 bg-canvas-sunken self-start rounded-2xl border p-7 lg:col-span-4">
                        <span className="border-brand-blue-200 text-brand-blue-800 mb-8 grid size-12 place-items-center rounded-full border">
                            <MapPin
                                size={22}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                        </span>
                        <p className="text-ink-muted text-xs font-medium tracking-[.12em] uppercase">
                            Contact information
                        </p>
                        <h2 className="mt-6 font-serif text-4xl leading-[1.04] tracking-[-.02em]">
                            Details will be published here.
                        </h2>
                        <p className="text-ink-muted mt-6 max-w-sm text-sm leading-6">
                            The Society’s official address, telephone number,
                            email address, office hours, and social accounts are
                            awaiting confirmation before publication.
                        </p>
                    </div>
                    <div className="lg:col-span-7 lg:col-start-6">
                        <p className="text-brand-green-700 text-xs font-medium tracking-[.12em] uppercase">
                            How can we help?
                        </p>
                        <div
                            data-scroll-3d="cards"
                            className="mt-7 grid gap-3 sm:grid-cols-2"
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
                                The contact form and interactive office map will
                                be enabled once official contact details and the
                                office location are confirmed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
