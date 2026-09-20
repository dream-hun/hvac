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
                    lerp: 0.09,
                    smoothWheel: true,
                    anchors: true,
                });
                scroller.current = lenis;
                const tick = (time: number): void => lenis.raf(time * 1000);
                lenis.on('scroll', () => ScrollTrigger.update());
                gsap.ticker.add(tick);

                gsap.from(
                    variant === 'home'
                        ? '.hero-reveal'
                        : '.public-hero-copy > *',
                    {
                        autoAlpha: 0,
                        y: 24,
                        duration: 0.85,
                        stagger: 0.09,
                        ease: 'power3.out',
                        clearProps: 'transform,opacity,visibility',
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
                            y: 56,
                            duration: 1,
                            ease: 'power3.out',
                            clearProps: 'transform,opacity,visibility',
                            scrollTrigger: {
                                trigger: element,
                                start: 'clamp(top 82%)',
                                once: true,
                            },
                        });
                    });

                root.querySelectorAll<HTMLElement>(
                    '[data-scroll-stagger]:not([data-scroll-3d])',
                ).forEach((group) => {
                    gsap.from(group.children, {
                        opacity: 0,
                        y: 64,
                        duration: 0.9,
                        stagger: 0.14,
                        ease: 'power3.out',
                        clearProps: 'transform,opacity,visibility',
                        scrollTrigger: {
                            trigger: group,
                            start: 'clamp(top 82%)',
                            once: true,
                        },
                    });
                });
                root.querySelectorAll<HTMLElement>('[data-scroll-3d]').forEach(
                    (scene) => {
                        const kind = scene.getAttribute('data-scroll-3d');
                        const elements =
                            kind === 'cards'
                                ? (Array.from(scene.children) as HTMLElement[])
                                : [scene];

                        elements.forEach((element, index) => {
                            const intensity = (): number =>
                                window.innerWidth < 768 ? 0.45 : 1;
                            gsap.fromTo(
                                element,
                                {
                                    transformPerspective: 1200,
                                    transformOrigin: '50% 80%',
                                    rotationX: () =>
                                        (kind === 'image' ? 8 : 22) *
                                        intensity(),
                                    rotationY: () =>
                                        (kind === 'image'
                                            ? -12
                                            : kind === 'cards'
                                              ? index % 2 === 0
                                                  ? -8
                                                  : 8
                                              : 0) * intensity(),
                                    z: () => -120 * intensity(),
                                    y: () => 55 * intensity(),
                                    scale: 0.96,
                                },
                                {
                                    rotationX: 0,
                                    rotationY: 0,
                                    z: 0,
                                    y: 0,
                                    scale: 1,
                                    ease: 'none',
                                    scrollTrigger: {
                                        trigger: element,
                                        start: 'clamp(top 95%)',
                                        end: 'clamp(top 48%)',
                                        scrub: 0.65,
                                        invalidateOnRefresh: true,
                                    },
                                },
                            );
                        });
                    },
                );
                root.querySelectorAll<HTMLElement>(
                    '.section-background-motion',
                ).forEach((background) => {
                    gsap.fromTo(
                        background,
                        { yPercent: -7 },
                        {
                            yPercent: 7,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: background.closest('section'),
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: 0.8,
                            },
                        },
                    );
                });
                root.querySelectorAll<HTMLElement>(
                    '[data-scroll-image]',
                ).forEach((image) => {
                    gsap.fromTo(
                        image,
                        { yPercent: -6, scale: 1.14 },
                        {
                            yPercent: 6,
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
                        duration: 60,
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
