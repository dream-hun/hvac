import { usePage } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect, useRef, type RefObject } from 'react';

export function usePublicMotion(
    page: RefObject<HTMLDivElement | null>,
    paused: boolean,
    menuOpen: boolean,
    variant: 'home' | 'interior',
): void {
    const { url } = usePage();
    const scroller = useRef<Lenis | null>(null);

    useEffect(() => {
        if (paused || !page.current) return;

        gsap.registerPlugin(ScrollTrigger);
        const root = page.current;
        const media = gsap.matchMedia();
        media.add(
            '(prefers-reduced-motion: no-preference)',
            () => {
                const lenis = new Lenis({
                    lerp: 0.12,
                    smoothWheel: true,
                    anchors: true,
                });
                scroller.current = lenis;
                const tick = (time: number): void => lenis.raf(time * 1000);
                lenis.on('scroll', () => ScrollTrigger.update());
                gsap.ticker.add(tick);

                /*
                 * The hero is hidden by CSS until this runs, so it animates to an
                 * explicit end state rather than clearing back to the stylesheet.
                 */
                gsap.fromTo(
                    gsap.utils.toArray<HTMLElement>('.hero-reveal', root),
                    { autoAlpha: 0, y: 20 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.08,
                        ease: 'power2.out',
                        clearProps: 'transform',
                    },
                );

                const targets =
                    variant === 'home'
                        ? '.reveal'
                        : 'main > section > :not(.section-background)';
                gsap.utils
                    .toArray<HTMLElement>(targets, root)
                    .filter(
                        (element) =>
                            !element.closest('[data-scroll-stagger]') &&
                            !element.hasAttribute('data-scroll-3d') &&
                            !element.querySelector(
                                '[data-scroll-3d], [data-scroll-stagger]',
                            ),
                    )
                    .forEach((element) => {
                        gsap.from(element, {
                            opacity: 0,
                            y: 40,
                            duration: 0.8,
                            ease: 'power2.out',
                            clearProps: 'transform,opacity,visibility',
                            scrollTrigger: {
                                trigger: element,
                                start: 'clamp(top 88%)',
                                once: true,
                            },
                        });
                    });

                root.querySelectorAll<HTMLElement>(
                    '[data-scroll-stagger]:not([data-scroll-3d])',
                ).forEach((group) => {
                    gsap.from(group.children, {
                        opacity: 0,
                        y: 44,
                        duration: 0.75,
                        stagger: 0.1,
                        ease: 'power2.out',
                        clearProps: 'transform,opacity,visibility',
                        scrollTrigger: {
                            trigger: group,
                            start: 'clamp(top 88%)',
                            once: true,
                        },
                    });
                });

                /*
                 * A shallow tilt that resolves well before the element reaches the
                 * middle of the viewport — enough to read as depth, not enough to
                 * leave text skewed while someone is trying to read it.
                 */
                root.querySelectorAll<HTMLElement>('[data-scroll-3d]').forEach(
                    (scene) => {
                        const kind = scene.getAttribute('data-scroll-3d');
                        const elements =
                            kind === 'cards'
                                ? (Array.from(scene.children) as HTMLElement[])
                                : [scene];

                        elements.forEach((element, index) => {
                            const intensity = (): number =>
                                window.innerWidth < 768 ? 0.4 : 1;
                            gsap.fromTo(
                                element,
                                {
                                    transformPerspective: 1400,
                                    transformOrigin: '50% 100%',
                                    rotationX: () =>
                                        (kind === 'image' ? 5 : 9) *
                                        intensity(),
                                    rotationY: () =>
                                        (kind === 'cards'
                                            ? index % 2 === 0
                                                ? -3
                                                : 3
                                            : 0) * intensity(),
                                    y: () => 34 * intensity(),
                                    scale: 0.985,
                                },
                                {
                                    rotationX: 0,
                                    rotationY: 0,
                                    y: 0,
                                    scale: 1,
                                    ease: 'none',
                                    clearProps: 'transform',
                                    scrollTrigger: {
                                        trigger: element,
                                        start: 'clamp(top 92%)',
                                        end: 'clamp(top 62%)',
                                        scrub: 0.5,
                                        invalidateOnRefresh: true,
                                    },
                                },
                            );
                        });
                    },
                );
                root.querySelectorAll<HTMLElement>(
                    '[data-scroll-image]',
                ).forEach((image) => {
                    gsap.fromTo(
                        image,
                        { yPercent: -5, scale: 1.12 },
                        {
                            yPercent: 5,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: image.parentElement,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: 0.8,
                            },
                        },
                    );
                });
                if (variant === 'home') {
                    gsap.to('.hero-orbit', {
                        rotation: 360,
                        duration: 90,
                        repeat: -1,
                        ease: 'none',
                        transformOrigin: '50% 50%',
                        scrollTrigger: {
                            trigger: '.home-hero',
                            start: 'top bottom',
                            end: 'bottom top',
                            toggleActions: 'play pause resume pause',
                        },
                    });
                }

                let disposed = false;
                let frame = 0;
                const refresh = (): void => {
                    if (disposed) return;
                    cancelAnimationFrame(frame);
                    frame = requestAnimationFrame(() => {
                        lenis.resize();
                        ScrollTrigger.refresh();
                    });
                };
                root.addEventListener('load', refresh, true);
                root.addEventListener('error', refresh, true);
                void document.fonts.ready.then(refresh);
                refresh();

                return () => {
                    disposed = true;
                    cancelAnimationFrame(frame);
                    root.removeEventListener('load', refresh, true);
                    root.removeEventListener('error', refresh, true);
                    gsap.ticker.remove(tick);
                    lenis.destroy();
                    scroller.current = null;
                };
            },
            root,
        );

        return () => media.revert();
    }, [page, paused, url, variant]);

    useEffect(() => {
        if (menuOpen) scroller.current?.stop();
        else scroller.current?.start();
    }, [menuOpen, paused, url]);
}
