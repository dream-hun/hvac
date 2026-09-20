import { Check } from 'lucide-react';
import HomeSectionBackground from '@/components/home-section-background';
import PublicPageHero from '@/components/public-page-hero';
import SectionHeading from '@/components/section-heading';
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
        'Professional competence',
        'We promote technical knowledge, practical skills, and continuous professional development.',
    ],
    [
        'Safety',
        'We support procedures that protect technicians, customers, equipment, buildings, and the public.',
    ],
    [
        'Environmental responsibility',
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
        <PublicSiteLayout
            title="About us"
            hero={
                <PublicPageHero
                    eyebrow="About us"
                    title="About the Rwanda Society of HVAC and Refrigeration"
                    copy="The Society is a nonprofit professional organization serving individuals and institutions involved in heating, ventilation, air conditioning, refrigeration, and cooling technologies. It provides a platform for technical learning, professional cooperation, industry representation, and environmental responsibility."
                    action={{ label: 'Become a member', route: membership() }}
                    image="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1400&q=85"
                    imageAlt="Refrigeration technician servicing equipment"
                />
            }
        >
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto grid max-w-312 gap-10 md:grid-cols-2">
                    <div className="border-ink/10 shadow-card rounded-2xl border bg-white p-7 md:p-9">
                        <h2 className="text-brand-blue-800 text-xs font-semibold tracking-[.12em] uppercase">
                            Our vision
                        </h2>
                        <p className="mt-4 text-lg leading-8">
                            A competent, safe, energy-efficient, and
                            environmentally responsible HVAC and refrigeration
                            sector in Rwanda.
                        </p>
                    </div>
                    <div className="border-ink/10 shadow-card rounded-2xl border bg-white p-7 md:p-9">
                        <h2 className="text-brand-blue-800 text-xs font-semibold tracking-[.12em] uppercase">
                            Our mission
                        </h2>
                        <p className="mt-4 text-lg leading-8">
                            To strengthen Rwanda&rsquo;s HVAC and refrigeration
                            sector through technical training, professional
                            development, safe working practices, responsible
                            refrigerant management, and cooperation between
                            professionals and institutions.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-canvas-sunken relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="grid" />
                <div className="mx-auto max-w-312">
                    <SectionHeading
                        eyebrow="Our objectives"
                        title="What the Society works to achieve"
                    />
                    <ul className="border-ink/15 mt-10 grid border-t md:grid-cols-2">
                        {objectives.map((objective) => (
                            <li
                                key={objective}
                                className="border-ink/15 flex gap-4 border-b py-5 md:px-7 md:[&:nth-child(odd)]:border-r"
                            >
                                <Check
                                    size={18}
                                    className="text-brand-green-700 mt-0.5 shrink-0"
                                    aria-hidden="true"
                                />
                                <p className="text-sm leading-6">{objective}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto max-w-312">
                    <SectionHeading
                        eyebrow="Our values"
                        title="The standards we hold ourselves to"
                    />
                    <div
                        data-scroll-3d="cards"
                        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {values.map(([title, copy]) => (
                            <div
                                key={title}
                                className="border-ink/10 shadow-card rounded-2xl border bg-white p-6 md:p-8"
                            >
                                <h3 className="text-lg font-semibold tracking-tight">
                                    {title}
                                </h3>
                                <p className="text-ink-muted mt-3 text-sm leading-6">
                                    {copy}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-brand-navy-900 relative isolate overflow-hidden px-5 py-20 text-white md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="airflow" dark />
                <div className="mx-auto grid max-w-312 gap-12 lg:grid-cols-[1fr_1.5fr]">
                    <div>
                        <p className="text-brand-green-300 text-xs font-semibold tracking-[.12em] uppercase">
                            Who we serve
                        </p>
                        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                            Membership is open to everyone working in the sector
                        </h2>
                    </div>
                    <ul
                        data-scroll-3d="cards"
                        className="grid gap-3 sm:grid-cols-2"
                    >
                        {people.map((person) => (
                            <li
                                key={person}
                                className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm"
                            >
                                {person}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-24 lg:px-14">
                <HomeSectionBackground variant="dots" />
                <div className="mx-auto grid max-w-312 gap-10 md:grid-cols-[1fr_1.5fr]">
                    <SectionHeading
                        eyebrow="Leadership and governance"
                        title="How the Society is governed"
                    />
                    <p className="text-ink-muted text-sm leading-7">
                        The Society is governed according to its constitution,
                        internal policies, and applicable Rwandan laws.
                        Leadership profiles will include each official&rsquo;s
                        full name, position, professional qualifications, area
                        of expertise, short biography, and official photograph
                        once confirmed.
                    </p>
                </div>
            </section>
        </PublicSiteLayout>
    );
}
