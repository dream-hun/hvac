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
                    variant === 'home' ? '.reveal' : 'main > section > *';
                gsap.utils
                    .toArray<HTMLElement>(targets, root)
                    .forEach((element) => {
                        gsap.from(element, {
                            opacity: 0,
                            y: 28,
                            duration: 0.7,
                            ease: 'power3.out',
                            clearProps: 'transform,opacity,visibility',
                            scrollTrigger: {
                                trigger: element,
                                start: 'clamp(top 90%)',
                                once: true,
                            },
                        });
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
                    gsap.to('.marquee-track', {
                        xPercent: -50,
                        duration: 32,
                        repeat: -1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.marquee',
                            start: 'top bottom',
                            end: 'bottom top',
                            toggleActions: 'play pause resume pause',
                        },
                    });
                } else {
                    gsap.to('.halftone-wave svg', {
                        xPercent: 1,
                        yPercent: 1,
                        scale: 1.04,
                        duration: 12,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        scrollTrigger: {
                            trigger: '.public-page-hero',
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

        if (variant === 'home') {
            media.add(
                '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
                () => {
                    gsap.to('.cooling-graphic', {
                        yPercent: -9,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.about-section',
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 0.8,
                        },
                    });
                },
                root,
            );
        }

        return () => media.revert();
    }, [page, paused, url, variant]);

    useEffect(() => {
        if (menuOpen) scroller.current?.stop();
        else scroller.current?.start();
    }, [menuOpen, paused, url]);
}
