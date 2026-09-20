/**
 * Adapted from ThreeUI Community Sliding Text CTA and Editorial Intro Section.
 * https://github.com/MengTo/threeui — MIT License
 * Copyright (c) 2026 Meng To
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { RouteDefinition } from '@/wayfinder';

export function SlidingTextLink({
    href,
    children,
    variant = 'dark',
    className,
}: {
    href: RouteDefinition<'get'>;
    children: string;
    variant?: 'dark' | 'light' | 'outline';
    className?: string;
}): React.JSX.Element {
    return (
        <Link
            href={href}
            className={cn(
                'group/cta relative inline-flex min-h-12 items-center justify-center gap-6 overflow-hidden rounded-full border px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
                variant === 'dark' &&
                    'border-brand-blue-800 bg-brand-blue-800 text-white shadow-[0_3px_0_var(--color-brand-blue-950)]',
                variant === 'light' &&
                    'text-brand-blue-800 border-white bg-white shadow-[0_3px_0_var(--color-brand-blue-200)]',
                variant === 'outline' &&
                    'border-current/30 bg-transparent text-current hover:bg-current/10',
                className,
            )}
        >
            <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 group-hover/cta:translate-y-[150%] group-focus-visible/cta:translate-y-[150%]">
                    {children}
                </span>
                <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-y-[150%] transition-transform duration-300 group-hover/cta:translate-y-0 group-focus-visible/cta:translate-y-0"
                >
                    {children}
                </span>
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
    );
}

export function EditorialIntro({
    label,
    title,
    children,
}: {
    label: string;
    title: ReactNode;
    children: ReactNode;
}): React.JSX.Element {
    return (
        <div className="reveal border-ink/15 grid gap-8 border-t pt-7 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <p className="flex items-start gap-3 text-xs font-medium tracking-[.12em] uppercase">
                <span className="bg-brand-red-600 mt-1.5 size-1.5 shrink-0 rounded-full" />
                {label}
            </p>
            <div>
                <h2 className="max-w-3xl font-serif text-[clamp(2.5rem,4.8vw,4.75rem)] leading-[1.06] tracking-[-.045em]">
                    {title}
                </h2>
                <div className="text-ink-muted mt-7 max-w-2xl text-base leading-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
