import { ArrowDown } from 'lucide-react';
import HomeSectionBackground from '@/components/home-section-background';
import MotionControl from '@/components/motion-control';
import { SlidingTextLink } from '@/components/threeui-public';
import type { RouteDefinition } from '@/wayfinder';

export default function PublicPageHero({
    eyebrow,
    title,
    copy,
    action,
    image,
}: {
    eyebrow: string;
    title: React.ReactNode;
    copy: string;
    action?: { label: string; route: RouteDefinition<'get'> };
    image: string;
}): React.JSX.Element {
    return (
        <section className="public-page-hero bg-brand-navy-900 relative isolate overflow-hidden px-5 pt-16 pb-7 text-white md:px-10 md:pt-20 lg:px-14">
            <HomeSectionBackground variant="airflow" dark />
            <div className="mx-auto grid max-w-312 items-center gap-12 pb-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:pb-20">
                <div className="relative">
                    <p className="hero-reveal border-brand-green-300/30 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[10px] font-medium tracking-[.15em] uppercase">
                        <span className="bg-brand-red-500 size-1.5 shrink-0 rounded-full" />
                        {eyebrow}
                    </p>
                    <h1 className="hero-reveal mt-7 font-serif text-[clamp(2.8rem,5.5vw,5.75rem)] leading-[1.02] tracking-[-.03em]">
                        {title}
                    </h1>
                    <p className="hero-reveal mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                        {copy}
                    </p>
                    {action && (
                        <div className="hero-reveal mt-9">
                            <SlidingTextLink
                                href={action.route}
                                variant="light"
                            >
                                {action.label}
                            </SlidingTextLink>
                        </div>
                    )}
                </div>
                <figure
                    data-scroll-3d="image"
                    className="border-brand-blue-300/20 bg-brand-navy-950 relative aspect-4/3 overflow-hidden rounded-2xl border lg:aspect-4/5"
                >
                    <img
                        data-scroll-image
                        src={image}
                        alt=""
                        decoding="async"
                        className="size-full object-cover"
                    />
                    <div
                        aria-hidden="true"
                        className="from-brand-navy-950/70 absolute inset-0 bg-linear-to-t to-transparent"
                    />
                    <figcaption className="absolute inset-x-6 bottom-6 border-t border-white/25 pt-4 text-[10px] tracking-[.12em] uppercase">
                        Rooted in Rwanda. Looking forward.
                    </figcaption>
                </figure>
            </div>
            <div className="mx-auto flex max-w-312 flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5 text-[10px] tracking-[.12em] uppercase">
                <span className="flex items-center gap-3 text-white/70">
                    Discover more <ArrowDown size={14} aria-hidden="true" />
                </span>
                <MotionControl className="text-white/70" />
            </div>
        </section>
    );
}
