import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createSSRApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import fusion from "@fusion/vue/vue";

import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createServer((page) =>
    createInertiaApp({
        title: (title) => `Fusion`,
        page,
        render: renderToString,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob("./Pages/**/*.vue", { eager: true })
            ),

        setup({ el, App, props, plugin }) {
            return createSSRApp({
                render: () => h(App, props),
            })
                .use(plugin)
                .use(ZiggyVue)
                .use(fusion)
                .mount(el);
        },
        progress: {
            color: "#4B5563",
        },
    })
);
