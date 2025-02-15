import {
    pg_colors,
    pg_fonts,
    pg_backgrounds,
} from "./themes/pg-tailwindcss/tokens.mjs";

import { getFontsWithFallback } from "./resources/js/utils/font";
import { safelist } from "./resources/js/utils/colors";

import tailwindTypography from "@tailwindcss/typography";
import tailwindForms from "@tailwindcss/forms";
import tailwindCssPluginPinegrow from "@pinegrow/tailwindcss-plugin";

export default {
    darkMode: "class",
    plugins: [
        tailwindTypography,
        tailwindForms,
        tailwindCssPluginPinegrow({
            colors: pg_colors, // primary, secondary etc
            fonts: getFontsWithFallback(pg_fonts),
            backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
        }),
    ],

    safelist,

    get content() {
        const _content = [
            "./index.html",
            "./src/**/*.{html,vue,svelte,astro,js,jsx,cjs,mjs,ts,tsx,cts,mts,css,md,mdx,json}",
            "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
            "./storage/framework/views/*.php",
            "./resources/views/**/*.blade.php",
            "./resources/js/**/*.vue",
        ];
        return process.env.NODE_ENV === "production"
            ? _content
            : [..._content, "./_pginfo/**/*.{html,js}"]; // used by Vue Desginer for live-designing during development
    },
};
