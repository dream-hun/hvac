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
    imageAlt,
}: {
    eyebrow: string;
    title: string;
    copy: string;
    action?: { label: string; route: RouteDefinition<'get'> };
    image: string;
    imageAlt?: string;
}): React.JSX.Element {
    return (
        <section className="public-page-hero bg-brand-navy-900 relative isolate overflow-hidden px-5 pt-14 pb-7 text-white md:px-10 md:pt-16 lg:px-14">
            <HomeSectionBackground variant="airflow" dark />
            <div className="mx-auto grid max-w-312 items-center gap-12 pb-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:pb-16">
                <div className="relative">
                    <p className="hero-reveal text-brand-green-300 text-xs font-semibold tracking-[.12em] uppercase">
                        {eyebrow}
                    </p>
                    <h1 className="hero-reveal mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    <p className="hero-reveal mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
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
                        alt={imageAlt ?? ''}
                        decoding="async"
                        className="size-full object-cover"
                    />
                    <div
                        aria-hidden="true"
                        className="from-brand-navy-950/70 absolute inset-0 bg-linear-to-t to-transparent"
                    />
                </figure>
            </div>
            <div className="mx-auto flex max-w-312 flex-wrap items-center justify-end gap-4 border-t border-white/20 pt-5">
                <MotionControl className="text-white/70" />
            </div>
        </section>
    );
}
