import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
import PublicSiteLayout from '@/layouts/public-site-layout';
import { membership } from '@/routes';

const objectives = [
    'Improve the technical competence of HVAC and refrigeration professionals',
    'Promote safe installation and maintenance procedures',
    'Encourage responsible refrigerant handling',
    'Support energy-efficient cooling and ventilation systems',
    'Connect professionals with training and employment opportunities',
    'Encourage cooperation between industry and training institutions',
    'Increase public awareness of qualified HVAC and refrigeration services',
    'Represent the professional interests of Society members',
];
const values = [
    [
        'Professional Competence',
        'We promote technical knowledge, practical skills, and continuous professional development.',
    ],
    [
        'Safety',
        'We support procedures that protect technicians, customers, equipment, buildings, and the public.',
    ],
    [
        'Environmental Responsibility',
        'We encourage practices that reduce refrigerant emissions, equipment waste, and unnecessary energy consumption.',
    ],
    [
        'Integrity',
        'We expect members to provide honest information, responsible services, and fair treatment to customers.',
    ],
    [
        'Cooperation',
        'We bring professionals and institutions together to address common industry challenges.',
    ],
    [
        'Accountability',
        'We support transparent leadership, responsible financial management, and measurable program results.',
    ],
];
const people = [
    'HVAC technicians',
    'Refrigeration technicians',
    'Mechanical engineers',
    'Electrical technicians',
    'Students and trainees',
    'HVAC and refrigeration companies',
    'Equipment suppliers',
    'Training institutions',
    'Facility managers',
    'Public institutions',
    'Development partners',
];

export default function About(): React.JSX.Element {
    return (
        <PublicSiteLayout title="About us">
            <PublicPageHero
                eyebrow="About the Society"
                title={
                    <>
                        The people behind
                        <br />
                        Rwanda’s{' '}
                        <i className="font-normal text-[#d5e6b9]">
                            cooling future.
                        </i>
                    </>
                }
                copy="The Rwanda Society of HVAC and Refrigeration is a nonprofit professional organization serving individuals and institutions involved in heating, ventilation, air conditioning, refrigeration, and cooling technologies. The Society provides a platform for technical learning, professional cooperation, industry representation, and environmental responsibility."
                action={{ label: 'Become a member', route: membership() }}
                image="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1400&q=85"
            />
            <main>
                <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
                    <HomeSectionBackground variant="signal-particles" />
                    <div className="mx-auto grid max-w-312 gap-16 lg:grid-cols-12">
                        <p className="text-xs font-medium tracking-[.12em] text-[#657269] uppercase lg:col-span-3">
                            Our direction
                        </p>
                        <div className="lg:col-span-8 lg:col-start-5">
                            <p className="font-serif text-4xl leading-[1.04] tracking-[-.05em] md:text-6xl">
                                A competent, safe, energy-efficient, and
                                environmentally responsible HVAC and
                                refrigeration sector in Rwanda.
                            </p>
                            <div className="mt-14 grid gap-10 border-t border-[#193e32]/20 pt-8 md:grid-cols-2">
                                <div>
                                    <p className="text-[10px] font-bold tracking-[.16em] text-[#648b56] uppercase">
                                        Our Vision
                                    </p>
                                    <p className="mt-4 text-lg leading-7">
                                        A competent, safe, energy-efficient, and
                                        environmentally responsible HVAC and
                                        refrigeration sector in Rwanda.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[.16em] text-[#648b56] uppercase">
                                        Our Mission
                                    </p>
                                    <p className="mt-4 text-lg leading-7">
                                        To strengthen Rwanda's HVAC and
                                        refrigeration sector through technical
                                        training, professional development, safe
                                        working practices, responsible
                                        refrigerant management, and cooperation
                                        between professionals and institutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative isolate overflow-hidden bg-[#eeefe6] px-5 py-20 md:px-10 md:py-28 lg:px-14">
                    <HomeSectionBackground variant="override-grid" />
                    <div className="mx-auto max-w-312">
                        <p className="text-xs font-medium tracking-[.12em] text-[#657269] uppercase">
                            Our objectives
                        </p>
                        <div className="mt-8 grid border-t border-[#193e32]/20 md:grid-cols-2">
                            {objectives.map((objective, index) => (
                                <div
                                    key={objective}
                                    className="flex gap-5 border-b border-[#193e32]/20 py-6 md:px-7 md:[&:nth-child(odd)]:border-r"
                                >
                                    <span className="font-serif text-xl text-[#648b56]">
                                        0{index + 1}
                                    </span>
                                    <p className="text-sm leading-6">
                                        {objective}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
                    <HomeSectionBackground variant="data-pixel" />
                    <div className="mx-auto max-w-312">
                        <p className="text-xs font-medium tracking-[.12em] text-[#657269] uppercase">
                            Our values
                        </p>
                        <div
                            data-scroll-3d="cards"
                            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {values.map(([title, copy], index) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-[#193e32]/12 bg-[#fffef9] p-6 shadow-[0_3px_0_#193e3206] md:p-8"
                                >
                                    <span className="font-serif text-2xl text-[#648b56]">
                                        0{index + 1}
                                    </span>
                                    <h2 className="mt-10 text-xl font-semibold tracking-[-.03em]">
                                        {title}
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-[#657269]">
                                        {copy}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="relative isolate overflow-hidden bg-[#122c23] px-5 py-24 text-white md:px-10 md:py-32 lg:px-14">
                    <HomeSectionBackground variant="ribbon-field" dark />
                    <div className="mx-auto grid max-w-312 gap-14 lg:grid-cols-2">
                        <div>
                            <p className="text-xs font-medium tracking-[.12em] text-[#d5e6b9] uppercase">
                                Who we serve
                            </p>
                            <h2 className="mt-6 font-serif text-5xl leading-[1.04] tracking-[-.05em]">
                                A home for every part of the sector.
                            </h2>
                        </div>
                        <div
                            data-scroll-3d="cards"
                            className="grid gap-3 sm:grid-cols-2"
                        >
                            {people.map((person) => (
                                <div
                                    key={person}
                                    className="rounded-xl border border-white/15 bg-white/5 px-5 py-5 text-sm"
                                >
                                    {person}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
                    <HomeSectionBackground variant="signal-particles" />
                    <div className="mx-auto grid max-w-312 gap-10 border-t border-[#193e32]/20 pt-8 md:grid-cols-2">
                        <div>
                            <p className="text-xs font-medium tracking-[.12em] text-[#648b56] uppercase">
                                Leadership & governance
                            </p>
                            <h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-.05em]">
                                Accountable by design.
                            </h2>
                        </div>
                        <p className="text-sm leading-7 text-[#657269]">
                            The Society is governed according to its
                            constitution, internal policies, and applicable
                            Rwandan laws. Leadership profiles will include each
                            official's full name, position, professional
                            qualifications, area of expertise, short biography,
                            and official photograph once confirmed.
                        </p>
                    </div>
                </section>
            </main>
        </PublicSiteLayout>
    );
}
