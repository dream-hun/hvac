import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { local } from 'laravel-vite-plugin/fonts';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { defineConfig, lazyPlugins } from 'vite-plus';

/*
 * ThreeUI only exposes its data-pixel arc through PredictiveArcCanvas, whose
 * other variant branches lazy-import the Neuform barrels. Those branches are
 * unreachable for us but still emit ~1 MB of chunks, so the leaf module is
 * resolved directly. `package.json` is in the package's exports map, which makes
 * this work under any install layout and fail loudly if the path ever moves.
 */
const threeui = dirname(
    createRequire(import.meta.url).resolve(
        '@designcodeio/threeui/package.json',
    ),
);

export default defineConfig({
    resolve: {
        alias: {
            '@threeui/data-pixel-arc': join(
                threeui,
                'lib-dist/shaders/data-pixel-arc/DataPixelArcCanvas.js',
            ),
        },
    },
    plugins: lazyPlugins(() => [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
            /*
             * Self-hosted WOFF2 only. The remote providers emit a separate
             * @font-face per format, so the WOFF rule wins the cascade and every
             * weight gets fetched twice.
             */
            fonts: [
                local('Instrument Sans', {
                    variants: [
                        {
                            src: 'resources/fonts/instrument-sans-400-normal.woff2',
                            weight: 400,
                        },
                        {
                            src: 'resources/fonts/instrument-sans-500-normal.woff2',
                            weight: 500,
                        },
                        {
                            src: 'resources/fonts/instrument-sans-600-normal.woff2',
                            weight: 600,
                        },
                    ],
                }),
            ],
        }),
        inertia(),
        react(),
        babel({
            presets: [reactCompilerPreset()],
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ]),
    server: {
        watch: {
            ignored: [
                '**/.agents/**',
                '**/.claude/**',
                '**/.cursor/**',
                '**/.junie/**',
                '**/vendor/**',
            ],
        },
    },
    lint: {
        ignorePatterns: [
            'vendor/**',
            'node_modules/**',
            'public/**',
            'bootstrap/ssr/**',
            'tailwind.config.js',
            'resources/js/actions/**',
            'resources/js/components/ui/*',
            'resources/js/routes/**',
            'resources/js/wayfinder/**',
        ],
        options: {
            denyWarnings: true,
            typeAware: true,
        },
    },
    fmt: {
        printWidth: 80,
        tabWidth: 4,
        singleQuote: true,
        semi: true,
        singleAttributePerLine: false,
        htmlWhitespaceSensitivity: 'css',
        ignorePatterns: [
            '.github/**',
            'composer.json',
            'resources/js/components/ui/*',
            'resources/views/mail/*',
        ],
        sortTailwindcss: {
            functions: ['clsx', 'cn', 'cva'],
            entryPoint: 'resources/css/app.css',
        },
    },
});
