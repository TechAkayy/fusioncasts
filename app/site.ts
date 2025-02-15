// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
    title: "Cafe Tee Kaapi",
    description: "Adopt Your Fur Mate",
    logo: "/public/icon.svg",
    author: "Pinegrow",
    url: "https://happy-paws-with-nuxt-tailwindcss.netlify.app",
    github: 'https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss',

    // absolute url (or) from public folder
    ogImageUrl: 'og-image.jpg',

    generator: "https://vuedesigner.com",

    // default
    defaultLocale: "en-US",

    identity: "Person",
    twitter: "@vuedesigner",

    // default
    trailingSlash: false,

    // default
    titleSeparator: "❤️",

    navs: [{
        title: "Home",
        icon: "i-mdi-home",
        path: "/index",

        types: [{
            type: "primary",
            order: 1
        }]
    }, {
        title: "Adopt Now",
        icon: "i-mdi-home",
        path: "/adopt",

        types: [{
            type: "primary",
            order: 1
        }]
    }, {
        title: "Articles",
        icon: "i-mdi-home",
        path: "/articles",

        types: [{
            type: "secondary",
            order: 1
        }]
    }, {
        title: "Volunteer",
        icon: "i-mdi-home",
        path: "/volunteer",

        types: [{
            type: "secondary",
            order: 1
        }]
    }],
    slug: "happy-paws-with-nuxt-tailwindcss",
    logoSvg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path fill=\"#6f4e37\" d=\"M13.114 5.728c.025.153-.051.28-.306.408a3.46 3.46 0 0 0-1.63-.229c-.637.051-1.172.255-1.1.688c.1.433.713.688 1.808.586c2.674-.229 2.649-2.038 6.571-2.394c3.056-.28 4.763.662 4.992 1.808c.178.891-.56 1.757-2.776 1.936c-1.961.178-3.107-.357-3.209-.891c-.051-.28.1-.688 1.044-.79c.1.433.637.891 1.91.764C21.341 7.536 22.1 7.2 22 6.7c-.1-.535-1.07-.84-2.6-.713c-3.107.28-3.871 1.987-6.52 2.216c-1.88.173-3.408-.514-3.612-1.533c-.076-.382-.076-1.273 1.91-1.452c1.019-.076 1.834.1 1.936.509Zm3.718 4.763A41 41 0 0 1 8.5 9.7c-2.263-.56-3.46-1.171-3.46-1.96c0-.331.153-.611.611-.942c-1.426.56-2.19 1.019-2.19 1.732c.076.79 1.35 1.579 3.948 2.19a39.4 39.4 0 0 0 9.347.942a39 39 0 0 0 9.344-.942c2.6-.611 3.846-1.426 3.846-2.19c0-.56-.56-1.1-1.579-1.5a.86.86 0 0 1 .408.688c0 .79-1.172 1.426-3.54 1.961a39.3 39.3 0 0 1-8.402.811Z\"/><path fill=\"#393\" d=\"M3.181 16.374A5.28 5.28 0 0 0 2.01 19.99a4.2 4.2 0 0 0 1.655 3.056a4 4 0 0 0 3.362.79a11 11 0 0 0 1.5-.484a4.24 4.24 0 0 1-2.751-1.019a4.13 4.13 0 0 1-1.732-2.827a3.8 3.8 0 0 1 .614-3.006A3.98 3.98 0 0 1 7.409 15a4.8 4.8 0 0 1 3.209.942a7 7 0 0 0-.866-.866a4.1 4.1 0 0 0-3.464-.688a5.2 5.2 0 0 0-3.107 1.987Zm23.024-3.693a42.3 42.3 0 0 1-9.347.942a44 44 0 0 1-9.424-.942c-2.19-.56-3.362-1.172-3.769-1.808a23.2 23.2 0 0 0 2.6 7.641c.942 1.426 1.885 2.674 2.827 4.024a10 10 0 0 1 .866 2.369a4.56 4.56 0 0 0 2.6 1.732a10.6 10.6 0 0 0 4.177.611h.153a11.8 11.8 0 0 0 4.3-.611a4.87 4.87 0 0 0 2.521-1.732h.076a9.6 9.6 0 0 1 .79-2.369c.942-1.35 1.885-2.6 2.827-4.024A24.6 24.6 0 0 0 30 10.872c-.509.713-1.681 1.328-3.795 1.809\"/></svg>",
    image: "https://images.unsplash.com/photo-1570824104629-1817c91f7d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDh8fGNhdHMlMjBkb2dzfGVufDB8fHx8MTczOTA1MTMyOXww&ixlib=rb-4.0.3&q=80&w=1080",
    repository: "https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss",
    brief: "Cafe Tee Kaapi, a fusion Indian and Western food destination featuring Melbourne's finest coffee and chai offerings. Modern and minimalist design that emphasizes clean lines and uncluttered spaces. Features warm browns and deep oranges with modern sans-serif typography for a clean, contemporary look. Responsive design adapts seamlessly across all devices. IMPORTANT: All section background images will use creative means (dimmed background, text boxes, effects...) to ensure optimal text visibility and readability. Furthermore, the website's visual identity will exclusively use imagery related to coffee, tea, and Indian-fusion cuisine, including artfully plated dishes, brewing processes, steaming beverages, and authentic ingredients, ensuring a cohesive and authentic brand experience that captures the unique fusion of cultures and flavors. Use tailwind color palette - Primary, Secondary and Tertiary instead of standard tailwindcss colors.",
};