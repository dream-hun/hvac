import { Link } from '@inertiajs/react';
import { ArrowDownRight } from 'lucide-react';
import type { RouteDefinition } from '@/wayfinder';
import HalftoneWaveBackground from '@/components/halftone-wave-background';

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
        <section className="public-page-hero bg-dark-emerald-900 relative isolate overflow-hidden px-5 py-16 text-white md:px-10 md:py-24 lg:px-14">
            <HalftoneWaveBackground />
            <img
                src={image}
                alt=""
                decoding="async"
                className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-30 mix-blend-luminosity lg:block"
            />
            <div
                aria-hidden="true"
                className="from-dark-emerald-900 via-dark-emerald-900/85 pointer-events-none absolute inset-0 bg-linear-to-r to-transparent"
            />
            <div className="public-hero-copy relative mx-auto max-w-[1328px]">
                <p className="text-cobalt-blue-200 text-[10px] font-bold tracking-[.2em] uppercase">
                    {eyebrow}
                </p>
                <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.8rem,6.6vw,6.5rem)] leading-[1.02] tracking-[-.045em] text-balance">
                    {title}
                </h1>
                <p className="mt-8 max-w-xl text-base leading-7 text-white/80">
                    {copy}
                </p>
                {action && (
                    <Link
                        href={action.route}
                        className="bg-mint-cream-200 text-dark-emerald-900 hover:bg-mint-cream-50 mt-9 inline-flex items-center gap-7 px-5 py-4 text-[11px] font-bold tracking-[.13em] uppercase transition-colors"
                    >
                        {action.label} <ArrowDownRight size={17} />
                    </Link>
                )}
            </div>
        </section>
    );
}
