import HomeSectionBackground from '@/components/home-section-background';
import { ArrowDown } from 'lucide-react';
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
        <section className="public-page-hero relative isolate overflow-hidden bg-[#122c23] px-5 pt-16 pb-7 text-[#f7f7f0] md:px-10 md:pt-20 lg:px-14">
            <HomeSectionBackground variant="ribbon-field" dark />
            <div className="mx-auto grid max-w-312 items-center gap-12 pb-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:pb-20">
                <div className="public-hero-copy relative">
                    <p className="inline-flex items-center gap-2.5 rounded-full border border-[#c9dda8]/25 px-4 py-2 text-[10px] font-medium tracking-[.15em] uppercase">
                        <span className="size-1.5 shrink-0 rounded-full bg-[#c9dda8]" />
                        {eyebrow}
                    </p>
                    <h1 className="mt-7 font-serif text-[clamp(2.8rem,5.5vw,5.75rem)] leading-[1.02] tracking-[-.055em]">
                        {title}
                    </h1>
                    <p className="mt-7 max-w-xl text-sm leading-7 text-[#e0e7dd] sm:text-base">
                        {copy}
                    </p>
                    {action && (
                        <SlidingTextLink
                            href={action.route}
                            variant="light"
                            className="mt-9"
                        >
                            {action.label}
                        </SlidingTextLink>
                    )}
                </div>
                <figure
                    data-scroll-3d="image"
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-[#193e32] lg:aspect-[4/5]"
                >
                    <img
                        data-scroll-image
                        src={image}
                        alt=""
                        decoding="async"
                        className="size-full object-cover saturate-50"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-[#122c23]/60 to-transparent"
                    />
                    <figcaption className="absolute inset-x-6 bottom-6 border-t border-white/30 pt-4 text-[10px] tracking-[.12em] uppercase">
                        Rooted in Rwanda. Looking forward.
                    </figcaption>
                </figure>
            </div>
            <div className="mx-auto flex max-w-312 items-center justify-between gap-4 border-t border-white/20 pt-5 text-[10px] tracking-[.12em] uppercase">
                <span>{eyebrow}</span>
                <span className="flex items-center gap-3 text-white/65">
                    Discover more <ArrowDown size={14} aria-hidden="true" />
                </span>
            </div>
        </section>
    );
}
