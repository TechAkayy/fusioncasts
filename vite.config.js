import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import fusion from "@fusion/vue/vite";
import { liveDesigner } from "@pinegrow/vite-plugin";
import { fileURLToPath, URL } from "node:url";
import AutoImportComponents from "unplugin-vue-components/vite";
import AutoImportAPIs from "unplugin-auto-import/vite";
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
    plugins: [
        fusion(),
        laravel({
            input: ["resources/js/app.js", "resources/css/app.css"],
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        // liveDesigner({
        //     devServerUrls: {
        //         /* Please ensure that you update this URL with the actual URL of your app-server. */
        //         local: "http://127.0.0.1:8000/", // App-server URL
        //     },
        //     dirs: {
        //         /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        //         src: "./resources/js/",
        //         layouts: "./resources/js/Layouts",
        //         pages: "./resources/js/Pages",
        //         components: "./resources/js/Components",
        //     },
        //     startupPage: "./resources/js/Pages/Index.vue",
        //     tailwindcss: {
        //         /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        //         configPath: "tailwind.config.js",
        //         cssPath: "resources/css/app.css",
        //         // themePath: false, // Set to false so that Design Panel is not used
        //         // restartOnConfigUpdate: true,
        //         restartOnThemeUpdate: true,
        //     },
        //     //...
        // }),
        // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
        AutoImportComponents({
            /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

            dirs: ["./resources/js/Components", "./resources/js/Layouts"],

            // allow auto load markdown components under ./src/components/
            extensions: ["vue", "md"],

            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

            // resolvers: [], // Auto-import using resolvers
            dts: "components.d.ts",
            types: [
                {
                    from: "vue-router",
                    names: ["RouterLink", "RouterView"],
                },
            ],
        }),
        // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
        AutoImportAPIs({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
                // /\.mdx$/, // .mdx
            ],
            imports: [
                "vue",
                // "vue-router",
                // 'vue-i18n',
                // 'vue/macros',
                // '@vueuse/head',
                // '@vueuse/core',
                // 'pinia',
            ],
            dirs: [
                /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
                "**/pg-*/**", // To auto-import composables from Vue Designer plugins.
                "resources/js/Composables",
                // 'src/utils',
                // 'src/stores',
            ],
            vueTemplate: true,
            dts: "auto-imports.d.ts",
        }),
        Unocss({
            presets: [
                presetIcons({
                    prefix: "i-", // default prefix, do not change
                }),
            ],
            content: {
                pipeline: {
                    /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
                    include: ["./resources/js/**/*"],
                },
            },
        }),
    ],
    resolve: {
        alias: {
            /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
            /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
            /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

            "@": fileURLToPath(new URL("./resources/js", import.meta.url)),
            "~": fileURLToPath(new URL("./resources/js", import.meta.url)),
            "~~": fileURLToPath(new URL("./", import.meta.url)),
        },
    },
});
