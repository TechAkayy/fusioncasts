var _a, _b, _c, _d;
import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext, computed, resolveDynamicComponent, useSlots, renderSlot, createCommentVNode, toDisplayString, ref, Transition, reactive, isRef, Fragment, renderList, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import { defu } from "defu";
import defaultColors from "tailwindcss/colors.js";
import { useDark, useToggle, useBrowserLocation } from "@vueuse/core";
import axios from "axios";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "pb-24 pt-12" }, _attrs))}><div class="container mx-auto px-4 py-8"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div class="space-y-4"><h3 class="text-2xl font-serif">Cafe Tee Kaapi</h3><p class="text-stone-300"> Bringing the finest fusion of Indian and Western flavors to Melbourne. </p><div class="flex space-x-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "text-stone-300 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Facebook</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Facebook"),
              (openBlock(), createBlock("svg", {
                class: "h-6 w-6",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "text-stone-300 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Instagram</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Instagram"),
              (openBlock(), createBlock("svg", {
                class: "h-6 w-6",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-4"><h4 class="font-semibold text-lg">Quick Links</h4><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "text-stone-300 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/menu",
        class: "text-stone-300 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Menu`);
          } else {
            return [
              createTextVNode("Menu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/about",
        class: "text-stone-300 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/contact",
        class: "text-stone-300 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="space-y-4"><h4 class="font-semibold text-lg">Legal</h4><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/privacy",
        class: "text-stone-300 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/terms",
        class: "text-stone-300 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="space-y-4"><h4 class="font-semibold text-lg">Contact Us</h4><address class="text-stone-300 not-italic"><p>123 Coffee Lane</p><p>Melbourne, VIC 3000</p><p>Phone: (03) 9123 4567</p><p>Email: hello@teekaaapi.com</p></address></div></div><div class="mt-8 pt-8 border-t border-stone-700 text-center text-stone-400"><p>© 2024 Cafe Tee Kaapi. All rights reserved.</p></div></div></footer>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheFooter.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "i-line-md-iconify1"
    },
    tag: {
      type: String,
      default: "span"
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const addUnit = (val) => {
      if (val && !(val.endsWith("px") || val.endsWith("em"))) {
        return `${val}px`;
      } else {
        return val;
      }
    };
    const iconStyle = computed(() => {
      const width = addUnit(props.width) || addUnit(props.height) || "20px";
      const height = addUnit(props.height) || width;
      const display = "inline-block";
      return {
        width,
        height,
        display
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tag), mergeProps({
        class: __props.name,
        style: iconStyle.value
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BaseIcon.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const kebabCase = (str) => {
  var _a2, _b2;
  return ((_b2 = (_a2 = str == null ? void 0 : str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  )) == null ? void 0 : _a2.map((x2) => x2.toLowerCase())) == null ? void 0 : _b2.join("-")) ?? "";
};
const omit = (obj, keys) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key))
  );
};
const pg_colors = {
  gray: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827"
  },
  red: {
    "50": "#fef2f2",
    "100": "#fee2e2",
    "200": "#fecaca",
    "300": "#fca5a5",
    "400": "#f87171",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c",
    "800": "#991b1b",
    "900": "#7f1d1d"
  },
  yellow: {
    "50": "#fffbeb",
    "100": "#fef3c7",
    "200": "#fde68a",
    "300": "#fcd34d",
    "400": "#fbbf24",
    "500": "#f59e0b",
    "600": "#d97706",
    "700": "#b45309",
    "800": "#92400e",
    "900": "#78350f"
  },
  green: {
    "50": "#ecfdf5",
    "100": "#d1fae5",
    "200": "#a7f3d0",
    "300": "#6ee7b7",
    "400": "#34d399",
    "500": "#10b981",
    "600": "#059669",
    "700": "#047857",
    "800": "#065f46",
    "900": "#064e3b"
  },
  blue: {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a"
  },
  indigo: {
    "50": "#eef2ff",
    "100": "#e0e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1",
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81"
  },
  purple: {
    "50": "#f5f3ff",
    "100": "#ede9fe",
    "200": "#ddd6fe",
    "300": "#c4b5fd",
    "400": "#a78bfa",
    "500": "#8b5cf6",
    "600": "#7c3aed",
    "700": "#6d28d9",
    "800": "#5b21b6",
    "900": "#4c1d95"
  },
  pink: {
    "50": "#fdf2f8",
    "100": "#fce7f3",
    "200": "#fbcfe8",
    "300": "#f9a8d4",
    "400": "#f472b6",
    "500": "#ec4899",
    "600": "#db2777",
    "700": "#be185d",
    "800": "#9d174d",
    "900": "#831843"
  },
  primary: {
    "50": "#ecf4f1",
    "100": "#d2e7de",
    "200": "#b7dacc",
    "300": "#9bceba",
    "400": "#7fc1a8",
    "500": "#62b497",
    "600": "#40a786",
    "700": "#3b997b",
    "800": "#358b70",
    "900": "#307d65",
    "950": "#2b705a",
    DEFAULT: "#26634f"
  },
  secondary: {
    "50": "#efeced",
    "100": "#dccbce",
    "200": "#c8acb0",
    "300": "#b48c94",
    "400": "#a06e78",
    "500": "#8b515d",
    "600": "#763344",
    "700": "#6c2f3e",
    "800": "#622a39",
    "900": "#592633",
    "950": "#4f222e",
    DEFAULT: "#461e28"
  },
  tertiary: {
    "50": "#fdf2ee",
    "100": "#fde2d5",
    "200": "#fcd3bd",
    "300": "#fac3a5",
    "400": "#f7b48d",
    "500": "#f3a476",
    "600": "#ee955f",
    "700": "#da8857",
    "800": "#c67c4f",
    "900": "#b37047",
    "950": "#9f6440",
    DEFAULT: "#8d5838"
  },
  neutral: {
    "50": "#ebebeb",
    "100": "#c4c4c4",
    "200": "#9f9f9f",
    "300": "#7b7b7b",
    "400": "#585858",
    "500": "#383838",
    "600": "#1b1b1b",
    "700": "#191919",
    "800": "#171717",
    "900": "#151515",
    "950": "#131313",
    DEFAULT: "#101010"
  },
  success: {
    "50": "#ecf0ec",
    "100": "#cdddcb",
    "200": "#aec9ab",
    "300": "#90b68c",
    "400": "#71a36d",
    "500": "#519050",
    "600": "#2e7d32",
    "700": "#2a722e",
    "800": "#26682a",
    "900": "#235e26",
    "950": "#1f5422",
    DEFAULT: "#519050"
  },
  warning: {
    "50": "#fcefeb",
    "100": "#ffd9c7",
    "200": "#ffc4a4",
    "300": "#ffae7f",
    "400": "#fb985c",
    "500": "#f58238",
    "600": "#ed6c02",
    "700": "#d96302",
    "800": "#c55a02",
    "900": "#b25102",
    "950": "#9f4801",
    DEFAULT: "#f58238"
  },
  error: {
    "50": "#f9ecec",
    "100": "#f9cfca",
    "200": "#f6b2a9",
    "300": "#f19488",
    "400": "#e97669",
    "500": "#df564c",
    "600": "#d32f2f",
    "700": "#c12b2b",
    "800": "#b02727",
    "900": "#9e2323",
    "950": "#8d2020",
    DEFAULT: "#df564c"
  },
  info: {
    "50": "#ebf1f9",
    "100": "#d0dff2",
    "200": "#b4ccec",
    "300": "#96bbe5",
    "400": "#76a9df",
    "500": "#5098d8",
    "600": "#0288d1",
    "700": "#027cbf",
    "800": "#0271ae",
    "900": "#02669d",
    "950": "#015b8c",
    "975": "#015989",
    DEFAULT: "#5098d8"
  }
};
delete defaultColors.lightBlue;
delete defaultColors.warmGray;
delete defaultColors.trueGray;
delete defaultColors.coolGray;
delete defaultColors.blueGray;
const colorsToExclude = [
  "inherit",
  "transparent",
  "current",
  "white",
  "black",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "cool",
  "prime"
];
const safelistByComponent = {
  button: (colorsAsRegex2) => [
    {
      pattern: RegExp(`^bg-(${colorsAsRegex2})-50$`),
      variants: ["hover", "disabled"]
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex2})-100$`),
      variants: ["hover"]
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
      variants: ["dark", "dark:disabled"]
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`),
      variants: ["disabled", "dark:hover"]
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex2})-600$`),
      variants: ["hover"]
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex2})-900$`),
      variants: ["dark:hover"]
    },
    {
      pattern: RegExp(`^bg-(${colorsAsRegex2})-950$`),
      variants: ["dark", "dark:hover", "dark:disabled"]
    },
    {
      pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
      variants: ["dark", "dark:disabled"]
    },
    {
      pattern: RegExp(`^text-(${colorsAsRegex2})-500$`),
      variants: ["dark:hover", "disabled"]
    },
    {
      pattern: RegExp(`^text-(${colorsAsRegex2})-600$`),
      variants: ["hover"]
    },
    {
      pattern: RegExp(`^outline-(${colorsAsRegex2})-400$`),
      variants: ["dark:focus-visible"]
    },
    {
      pattern: RegExp(`^outline-(${colorsAsRegex2})-500$`),
      variants: ["focus-visible"]
    },
    {
      pattern: RegExp(`^ring-(${colorsAsRegex2})-400$`),
      variants: ["dark:focus-visible"]
    },
    {
      pattern: RegExp(`^ring-(${colorsAsRegex2})-500$`),
      variants: ["focus-visible"]
    }
  ]
  // input: (colorsAsRegex) => [
  //   {
  //     pattern: RegExp(`^text-(${colorsAsRegex})-400$`),
  //     variants: ['dark'],
  //   },
  //   {
  //     pattern: RegExp(`^text-(${colorsAsRegex})-500$`),
  //   },
  //   {
  //     pattern: RegExp(`^ring-(${colorsAsRegex})-400$`),
  //     variants: ['dark', 'dark:focus'],
  //   },
  //   {
  //     pattern: RegExp(`^ring-(${colorsAsRegex})-500$`),
  //     variants: ['focus'],
  //   },
  // ],
};
const colorsAsRegex = (colors) => colors.join("|");
const excludeColors = (colors) => {
  return Object.entries(omit(colors, colorsToExclude)).filter(([, value]) => typeof value === "object").map(([key]) => kebabCase(key));
};
const globalColors = {
  ...defaultColors,
  ...pg_colors
};
const allColors = excludeColors(globalColors);
const generateSafelist = (colors) => {
  const baseSafelist = Object.keys(safelistByComponent).flatMap(
    (component) => safelistByComponent[component](colorsAsRegex(colors))
  );
  return [
    ...baseSafelist,
    // ...formsSafelist,
    // Ensure all global colors are safelisted for the Notification (toast.add)
    // ...safelistByComponent['notification'](colorsAsRegex(allColors)),
    // Gray safelist for Avatar & Notification
    "bg-gray-500",
    "dark:bg-gray-400",
    "text-gray-500",
    "dark:text-gray-400"
  ];
};
generateSafelist(allColors);
((_a = pg_colors.primary) == null ? void 0 : _a.DEFAULT) || ((_b = pg_colors.primary) == null ? void 0 : _b[600]);
((_c = pg_colors.secondary) == null ? void 0 : _c.DEFAULT) || ((_d = pg_colors.primary) == null ? void 0 : _d[600]);
const button = {
  // Inspired by https://ui.nuxt.com/elements/button#preset
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-3xl",
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-base",
    xl: "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-2",
    md: "gap-x-2",
    lg: "gap-x-2",
    xl: "gap-x-2"
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-3 py-1.5",
    md: "px-3 py-2",
    lg: "px-4 py-2",
    xl: "px-4 py-3"
  },
  square: {
    "2xs": "p-[5px]",
    xs: "p-1.5",
    sm: "p-2",
    md: "p-2",
    lg: "p-2.5",
    xl: "p-3"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    size: {
      "2xs": "h-3.5 w-3.5",
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const appConfig = {
  ui: {
    button
  }
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => appConfig.ui.button.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.button.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => appConfig.ui.button.default.color,
      validator(value) {
        return [...allColors, ...Object.keys(appConfig.ui.button.color)].includes(
          value
        );
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.button.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.button.variant),
          ...Object.values(appConfig.ui.button.color).flatMap(
            (value2) => Object.keys(value2)
          )
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => appConfig.ui.button.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    },
    target: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.button
    }
  },
  setup(__props) {
    const props = __props;
    const ui = computed(
      () => defu({}, props.ui, appConfig.ui.button)
    );
    const slots = useSlots();
    const buttonIs = computed(() => {
      if (props.to) {
        return "a";
      }
      return "button";
    });
    const buttonProps = computed(() => {
      if (props.to) {
        return { href: props.to, target: props.target };
      } else {
        return { disabled: props.disabled || props.loading, type: props.type };
      }
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(
      () => props.square || !slots.default && !props.label
    );
    const buttonClass = computed(() => {
      var _a2, _b2;
      const variant = ((_b2 = (_a2 = ui.value.color) == null ? void 0 : _a2[props.color]) == null ? void 0 : _b2[props.variant]) || ui.value.variant[props.variant];
      return classNames(
        ui.value.base,
        ui.value.font,
        ui.value.rounded,
        ui.value.size[props.size],
        ui.value.gap[props.size],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][props.size],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        props.block ? "w-full flex justify-center items-center" : "inline-flex items-center"
      );
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        ui.value.icon.size[props.size],
        props.loading && "animate-spin"
      );
    });
    const trailingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        ui.value.icon.size[props.size],
        props.loading && !isLeading.value && "animate-spin"
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIcon = _sfc_main$a;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(buttonIs.value), mergeProps({
        class: buttonClass.value,
        "aria-label": __props.ariaLabel
      }, buttonProps.value, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, null, _push2, _parent2, _scopeId);
            if (isLeading.value && leadingIconName.value) {
              _push2(ssrRenderComponent(_component_BaseIcon, {
                name: leadingIconName.value,
                class: leadingIconClass.value,
                "aria-hidden": "true",
                height: "24px"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (__props.label) {
                _push2(`<span class="${ssrRenderClass([__props.truncate ? "text-left break-all line-clamp-1" : ""])}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            if (isTrailing.value && trailingIconName.value) {
              _push2(ssrRenderComponent(_component_BaseIcon, {
                name: trailingIconName.value,
                class: trailingIconClass.value,
                "aria-hidden": "true",
                height: "24px"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "trailing", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading"),
              isLeading.value && leadingIconName.value ? (openBlock(), createBlock(_component_BaseIcon, {
                key: 0,
                name: leadingIconName.value,
                class: leadingIconClass.value,
                "aria-hidden": "true",
                height: "24px"
              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default", {}, () => [
                __props.label ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: [__props.truncate ? "text-left break-all line-clamp-1" : ""]
                }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
              ]),
              isTrailing.value && trailingIconName.value ? (openBlock(), createBlock(_component_BaseIcon, {
                key: 1,
                name: trailingIconName.value,
                class: trailingIconClass.value,
                "aria-hidden": "true",
                height: "24px"
              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "trailing")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BaseButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const isMobileMenuOpen = ref(false);
const openMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const useMobileMenu = () => {
  return {
    isMobileMenuOpen,
    openMobileMenu
  };
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NavSecondary",
  __ssrInlineRender: true,
  props: {
    navs: {
      type: Array,
      default() {
        return [];
      }
    },
    currentPath: {
      type: String,
      default: "/"
    }
  },
  setup(__props) {
    const { isMobileMenuOpen: isMobileMenuOpen2 } = useMobileMenu();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(isMobileMenuOpen2)) {
        _push(`<div class="sm:min-w-[200px] rounded-lg shadow overflow-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 px-4 py-5 sm:p-6 z-10"><div class="space-y-1"><!--[-->`);
        ssrRenderList(__props.navs, (nav, index) => {
          _push(ssrRenderComponent(_component_BaseButton, {
            key: index,
            to: nav.to,
            variant: nav.to === __props.currentPath ? "solid" : "ghost",
            block: "",
            class: "!rounded-lg whitespace-nowrap",
            size: "md",
            onClick: ($event) => isMobileMenuOpen2.value = !unref(isMobileMenuOpen2)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="w-full sm:text-center"${_scopeId}>${ssrInterpolate(nav.title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "w-full sm:text-center" }, toDisplayString(nav.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavSecondary.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NavHamburger",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobileMenuOpen: isMobileMenuOpen2, openMobileMenu: openMobileMenu2 } = useMobileMenu();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$9;
      _push(ssrRenderComponent(_component_BaseButton, mergeProps({
        size: "xl",
        icon: unref(isMobileMenuOpen2) ? "i-material-symbols-close" : "i-material-symbols-menu",
        class: "!py-2 !rounded-lg leading-none",
        onClick: unref(openMobileMenu2)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Open main menu</span>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Open main menu")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavHamburger.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const isDark = useDark();
const toggleDark = useToggle(isDark);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DarkModeSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$9;
      const _component_BaseIcon = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        variant: "ghost",
        class: "!rounded-lg",
        "aria-label": "Toggle theme",
        onClick: ($event) => unref(toggleDark)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            if (unref(isDark)) {
              _push2(ssrRenderComponent(_component_BaseIcon, {
                name: "i-material-symbols-dark-mode-outline",
                class: "text-2xl"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_BaseIcon, {
                name: "i-material-symbols-light-mode-outline",
                class: "text-2xl"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode(Transition, {
                name: "slide",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  unref(isDark) ? (openBlock(), createBlock(_component_BaseIcon, {
                    key: 0,
                    name: "i-material-symbols-dark-mode-outline",
                    class: "text-2xl"
                  })) : (openBlock(), createBlock(_component_BaseIcon, {
                    key: 1,
                    name: "i-material-symbols-light-mode-outline",
                    class: "text-2xl"
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DarkModeSwitch.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NavPrimary",
  __ssrInlineRender: true,
  props: {
    navs: {
      type: Array,
      default() {
        return [];
      }
    },
    currentPath: {
      type: String,
      default: "/"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full items-center" }, _attrs))}><div class="flex h-full space-x-2"><!--[-->`);
      ssrRenderList(__props.navs, (nav, index) => {
        _push(ssrRenderComponent(_component_BaseButton, {
          key: index,
          to: nav.to,
          label: nav.title,
          size: "lg",
          variant: nav.to === __props.currentPath ? "solid" : "ghost",
          class: "!rounded-lg"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "ml-3",
        target: "_blank",
        to: "https://vuedesigner.com",
        size: "xl",
        icon: "i-mdi-pine-tree",
        color: "secondary",
        trailing: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="pl-2"${_scopeId}>Try Now</span>`);
          } else {
            return [
              createVNode("span", { class: "pl-2" }, "Try Now")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavPrimary.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const siteMeta = {
  title: "Cafe Tee Kaapi",
  description: "Adopt Your Fur Mate",
  logo: "/public/icon.svg",
  author: "Pinegrow",
  url: "https://happy-paws-with-nuxt-tailwindcss.netlify.app",
  github: "https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss",
  // absolute url (or) from public folder
  ogImageUrl: "og-image.jpg",
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
  logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#6f4e37" d="M13.114 5.728c.025.153-.051.28-.306.408a3.46 3.46 0 0 0-1.63-.229c-.637.051-1.172.255-1.1.688c.1.433.713.688 1.808.586c2.674-.229 2.649-2.038 6.571-2.394c3.056-.28 4.763.662 4.992 1.808c.178.891-.56 1.757-2.776 1.936c-1.961.178-3.107-.357-3.209-.891c-.051-.28.1-.688 1.044-.79c.1.433.637.891 1.91.764C21.341 7.536 22.1 7.2 22 6.7c-.1-.535-1.07-.84-2.6-.713c-3.107.28-3.871 1.987-6.52 2.216c-1.88.173-3.408-.514-3.612-1.533c-.076-.382-.076-1.273 1.91-1.452c1.019-.076 1.834.1 1.936.509Zm3.718 4.763A41 41 0 0 1 8.5 9.7c-2.263-.56-3.46-1.171-3.46-1.96c0-.331.153-.611.611-.942c-1.426.56-2.19 1.019-2.19 1.732c.076.79 1.35 1.579 3.948 2.19a39.4 39.4 0 0 0 9.347.942a39 39 0 0 0 9.344-.942c2.6-.611 3.846-1.426 3.846-2.19c0-.56-.56-1.1-1.579-1.5a.86.86 0 0 1 .408.688c0 .79-1.172 1.426-3.54 1.961a39.3 39.3 0 0 1-8.402.811Z"/><path fill="#393" d="M3.181 16.374A5.28 5.28 0 0 0 2.01 19.99a4.2 4.2 0 0 0 1.655 3.056a4 4 0 0 0 3.362.79a11 11 0 0 0 1.5-.484a4.24 4.24 0 0 1-2.751-1.019a4.13 4.13 0 0 1-1.732-2.827a3.8 3.8 0 0 1 .614-3.006A3.98 3.98 0 0 1 7.409 15a4.8 4.8 0 0 1 3.209.942a7 7 0 0 0-.866-.866a4.1 4.1 0 0 0-3.464-.688a5.2 5.2 0 0 0-3.107 1.987Zm23.024-3.693a42.3 42.3 0 0 1-9.347.942a44 44 0 0 1-9.424-.942c-2.19-.56-3.362-1.172-3.769-1.808a23.2 23.2 0 0 0 2.6 7.641c.942 1.426 1.885 2.674 2.827 4.024a10 10 0 0 1 .866 2.369a4.56 4.56 0 0 0 2.6 1.732a10.6 10.6 0 0 0 4.177.611h.153a11.8 11.8 0 0 0 4.3-.611a4.87 4.87 0 0 0 2.521-1.732h.076a9.6 9.6 0 0 1 .79-2.369c.942-1.35 1.885-2.6 2.827-4.024A24.6 24.6 0 0 0 30 10.872c-.509.713-1.681 1.328-3.795 1.809"/></svg>',
  image: "https://images.unsplash.com/photo-1570824104629-1817c91f7d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDh8fGNhdHMlMjBkb2dzfGVufDB8fHx8MTczOTA1MTMyOXww&ixlib=rb-4.0.3&q=80&w=1080",
  repository: "https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss",
  brief: "Cafe Tee Kaapi, a fusion Indian and Western food destination featuring Melbourne's finest coffee and chai offerings. Modern and minimalist design that emphasizes clean lines and uncluttered spaces. Features warm browns and deep oranges with modern sans-serif typography for a clean, contemporary look. Responsive design adapts seamlessly across all devices. IMPORTANT: All section background images will use creative means (dimmed background, text boxes, effects...) to ensure optimal text visibility and readability. Furthermore, the website's visual identity will exclusively use imagery related to coffee, tea, and Indian-fusion cuisine, including artfully plated dishes, brewing processes, steaming beverages, and authentic ingredients, ensuring a cohesive and authentic brand experience that captures the unique fusion of cultures and flavors. Use tailwind color palette - Primary, Secondary and Tertiary instead of standard tailwindcss colors."
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheLogo",
  __ssrInlineRender: true,
  setup(__props) {
    const { title, logo } = siteMeta;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIcon = _sfc_main$a;
      _push(`<a${ssrRenderAttrs(mergeProps({
        "data-pg-name": "Logo",
        class: "flex items-center sm:flex-row",
        href: "/"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseIcon, {
        class: "mt-2",
        height: "32px",
        name: unref(logo)
      }, null, _parent));
      _push(`<h6 class="text-primary-600 dark:text-primary-200 font-extrabold font-serif ml-2 mt-4 text-2xl">${ssrInterpolate(unref(title))}</h6></a>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheLogo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useNavMenu = () => {
  const navs = siteMeta.navs;
  const navsPrimary = navs.filter((nav) => nav.types.find(({ type }) => type === "primary"));
  const navsSecondary = navs.filter((nav) => nav.types.find(({ type }) => type === "secondary"));
  const currentPath = computed(() => {
    return useBrowserLocation().value.pathname;
  });
  return {
    allNavs: navs,
    navsPrimary,
    navsSecondary,
    currentPath
  };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  props: {
    currentPath: {
      type: String,
      default: "/"
    }
  },
  setup(__props) {
    const { allNavs, navsPrimary, navsSecondary } = useNavMenu();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheLogo = _sfc_main$4;
      const _component_NavPrimary = _sfc_main$5;
      const _component_DarkModeSwitch = _sfc_main$6;
      const _component_NavHamburger = _sfc_main$7;
      const _component_NavSecondary = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><nav class><div class="container mx-auto px-4 sm:px-6"><div class="flex h-24 items-center justify-between"><div class="flex items-center justify-between w-full"><div class="flex flex-shrink-0 items-center">`);
      _push(ssrRenderComponent(_component_TheLogo, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NavPrimary, {
        navs: unref(navsPrimary),
        "current-path": __props.currentPath,
        class: "hidden sm:flex sm:ml-6"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_DarkModeSwitch, null, null, _parent));
      _push(`<div class="-mr-2 items-center relative">`);
      if (unref(navsSecondary).length) {
        _push(ssrRenderComponent(_component_NavHamburger, { class: "hidden sm:block" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(allNavs).length) {
        _push(ssrRenderComponent(_component_NavHamburger, { class: "sm:hidden" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NavSecondary, {
        class: "hidden sm:flex sm:justify-end absolute right-0 mt-4",
        navs: unref(navsSecondary),
        "current-path": __props.currentPath
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_NavSecondary, {
        class: "sm:hidden",
        navs: unref(allNavs),
        "current-path": __props.currentPath
      }, null, _parent));
      _push(`</nav></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "My Page Title"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$3;
      const _component_TheFooter = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">`);
      _push(ssrRenderComponent(_component_NavBar, { class: "fixed shadow z-20 bg-white dark:bg-neutral-950" }, null, _parent));
      _push(`<div class="mt-24"><main class="shadow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function syncQueryString({ fusion: fusion2, state, action }, next) {
  const { property, query } = action;
  let frameCount = 0;
  const maxFrames = 60;
  function updateUrl() {
    const url = new URL(window.location.href);
    if (state.hasOwnProperty(property)) {
      const value = unref(state[property]);
      if (!value) {
        url.searchParams.delete(query);
      } else {
        url.searchParams.set(query, value.toString());
      }
    } else {
      url.searchParams.delete(query);
    }
    const newUrl = url.pathname + (url.search || "");
    if (window.location.pathname + window.location.search !== newUrl) {
      window.history.replaceState(
        window.history.state,
        "",
        newUrl
      );
    }
    frameCount++;
    if (frameCount < maxFrames) {
      requestAnimationFrame(updateUrl);
    }
  }
  requestAnimationFrame(updateUrl);
  return next({ fusion: fusion2, state });
}
function applyServerState({ fusion: fusion2, state }, next) {
  Object.keys(fusion2.state).forEach((key) => {
    state[key] = ref(unref(fusion2.state[key]));
  });
  return next({ fusion: fusion2, state });
}
function log(ctx, next) {
  const { action } = ctx;
  if (action.message) {
    console.log(action.message);
  }
  console.log(ctx);
  return next;
}
function logStack(ctx, next) {
  const { pipeline } = ctx;
  const table = pipeline.stack.map((s2) => {
    return {
      priority: s2.action.priority,
      handler: s2.action.handler
    };
  });
  console.table(table);
  return next;
}
const fusionProvidedActions = {
  applyServerState,
  syncQueryString,
  log,
  logStack
};
class Pipeline {
  constructor(response) {
    var _a2;
    this.stack = [];
    this.initial = {
      fusion: response,
      state: {}
    };
    (_a2 = response == null ? void 0 : response.actions) == null ? void 0 : _a2.forEach((action) => {
      this.use({
        priority: action.priority,
        // Append the action itself to the middleware, as it often
        // contains params that were added on the server side.
        action: { ...action },
        // @TODO user-defined handlers?
        handler: fusionProvidedActions[action.handler] ?? function() {
          throw new Error(`No handler exported for [${action.handler}].`);
        }
      });
    });
  }
  use(middleware) {
    if (typeof middleware.handler !== "function" || typeof middleware.priority !== "number") {
      throw new Error(`Invalid middleware: expected an object with a numeric 'priority' and a 'handler' function`);
    }
    this.stack.push(middleware);
    return this;
  }
  run() {
    let index = 0;
    this.stack.sort((a2, b2) => a2.priority - b2.priority);
    const execute = (carry) => {
      delete carry.action;
      if (index >= this.stack.length) {
        return carry;
      }
      const { handler, action } = this.stack[index++];
      let response = handler({ ...carry, action, pipeline: this }, execute);
      if (response === execute) {
        return execute(carry);
      }
      return response;
    };
    return execute(this.initial);
  }
  createState() {
    var _a2;
    return ((_a2 = this.run()) == null ? void 0 : _a2.state) || {};
  }
}
class ActionFactory {
  constructor(keys, state) {
    const actions2 = {};
    const fusionProvidedActions2 = {};
    keys.forEach((key) => {
      const actionFunction = function() {
        let recentlyFailedTimeout;
        let recentlySucceededTimeout;
        let recentlyFinishedTimeout;
        const status = reactive({
          processing: false,
          failed: false,
          recentlyFailed: false,
          succeeded: false,
          recentlySucceeded: false,
          finished: false,
          recentlyFinished: false,
          error: null,
          errors: []
        });
        const fn = async function(args = {}, body = {}) {
          var _a2;
          status.processing = true;
          status.failed = false;
          status.recentlyFailed = false;
          status.succeeded = false;
          status.recentlySucceeded = false;
          status.finished = false;
          status.recentlyFinished = false;
          status.error = null;
          status.errors = [];
          clearTimeout(recentlyFailedTimeout);
          clearTimeout(recentlySucceededTimeout);
          clearTimeout(recentlyFinishedTimeout);
          if (args instanceof Event) {
            args = {};
          }
          let fusion2 = {
            args,
            state: {}
          };
          Object.keys(state).forEach((key2) => {
            fusion2.state[key2] = unref(state[key2]);
          });
          body.fusion = fusion2;
          try {
            const response = await axios.post("", body, {
              headers: {
                "X-Fusion-Action-Request": "true",
                "X-Fusion-Action-Handler": key
              }
            });
            status.succeeded = true;
            status.recentlySucceeded = true;
            recentlySucceededTimeout = setTimeout(() => {
              status.recentlySucceeded = false;
            }, 3500);
            const newState = new Pipeline(((_a2 = response.data) == null ? void 0 : _a2.fusion) || {}).createState();
            Object.keys(newState).forEach((key2) => {
              if (key2 in state && isRef(state[key2])) {
                state[key2].value = unref(newState[key2]);
              }
            });
            return response.data;
          } catch (error) {
            if (error.response && error.response.status === 422) {
              status.error = error.response.data.message;
              status.errors = error.response.data.errors ?? {};
            }
            status.failed = true;
            status.recentlyFailed = true;
            recentlyFailedTimeout = setTimeout(() => {
              status.recentlyFailed = false;
            }, 3500);
            throw error;
          } finally {
            status.finished = true;
            status.recentlyFinished = true;
            recentlyFinishedTimeout = setTimeout(() => {
              status.recentlyFinished = false;
            }, 3500);
            status.processing = false;
          }
        };
        return new Proxy(fn, {
          get(target, prop, receiver) {
            if (prop === "getStatus") {
              return () => status;
            }
            if (Object.prototype.hasOwnProperty.call(status, prop)) {
              return status[prop];
            }
            return Reflect.get(target, prop, receiver);
          },
          set(target, prop, value) {
            if (Object.prototype.hasOwnProperty.call(status, prop)) {
              status[prop] = value;
              return true;
            }
            return Reflect.set(target, prop, value);
          }
        });
      }();
      if (key.startsWith("fusion")) {
        const trimmed = key.slice("fusion".length);
        const newKey = trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
        fusionProvidedActions2[newKey] = actionFunction;
      } else {
        actions2[key] = actionFunction;
      }
    });
    actions2.fusion = fusionProvidedActions2;
    return actions2;
  }
}
const actions$1 = ["favorite"];
const fusionActions$1 = ["fusionSync"];
let cachedState$1;
function useFusion$1(keys = [], props = {}, useCachedState = false) {
  const state = useCachedState && cachedState$1 ? cachedState$1 : new Pipeline(props).createState();
  if (!useCachedState) {
    cachedState$1 = state;
  }
  const all = {
    ...state,
    ...new ActionFactory([...actions$1, ...fusionActions$1], state)
  };
  const shouldExport = {};
  for (const key of keys) {
    if (key in all) {
      shouldExport[key] = all[key];
    }
  }
  return shouldExport;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    useFusion$1(["search", "podcasts", "favorite", "fusion"], __props.fusion);
    const { podcastsRaw, name } = useFusion$1(["podcastsRaw", "name"], __props.fusion, true);
    const podcastsWithSlug = computed(() => {
      return podcastsRaw.value.map((podcast) => ({
        ...podcast,
        slug: podcast.image.split("/").pop().replace(".jpg", "")
        // /art/art-of-product.jpg
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLayout = _sfc_main$2;
      _push(ssrRenderComponent(_component_AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="py-16 bg-stone-50"${_scopeId}><div class="container mx-auto px-4"${_scopeId}><h2 class="text-4xl font-serif text-stone-800 mb-12 text-center"${_scopeId}> Latest From Our Blog </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(unref(podcastsWithSlug), (podcast, index) => {
              _push2(`<article class="bg-white rounded-lg shadow-md overflow-hidden"${_scopeId}><div class="flex h-60"${_scopeId}><img${ssrRenderAttr("src", podcast.image)} class="object-cover w-full"${_scopeId}></div><div class="p-6"${_scopeId}><p class="text-orange-600 text-sm mb-2"${_scopeId}>${ssrInterpolate(new Date(podcast.updated_at).toDateString())}</p><h3 class="text-xl font-serif text-stone-800 mb-3"${_scopeId}>${ssrInterpolate(podcast.title)}</h3><p class="text-stone-600 mb-4"${_scopeId}> Discover the secrets behind creating the perfect pour-over coffee, from selecting the right beans to mastering the technique. </p>`);
              _push2(ssrRenderComponent(unref(Link), {
                class: "inline-block text-orange-600 hover:text-orange-700",
                href: podcast.slug
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Read More →`);
                  } else {
                    return [
                      createTextVNode("Read More →")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></article>`);
            });
            _push2(`<!--]--></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "py-16 bg-stone-50" }, [
                createVNode("div", { class: "container mx-auto px-4" }, [
                  createVNode("h2", { class: "text-4xl font-serif text-stone-800 mb-12 text-center" }, " Latest From Our Blog "),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(podcastsWithSlug), (podcast, index) => {
                      return openBlock(), createBlock("article", {
                        class: "bg-white rounded-lg shadow-md overflow-hidden",
                        key: index
                      }, [
                        createVNode("div", { class: "flex h-60" }, [
                          createVNode("img", {
                            src: podcast.image,
                            class: "object-cover w-full"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "p-6" }, [
                          createVNode("p", { class: "text-orange-600 text-sm mb-2" }, toDisplayString(new Date(podcast.updated_at).toDateString()), 1),
                          createVNode("h3", { class: "text-xl font-serif text-stone-800 mb-3" }, toDisplayString(podcast.title), 1),
                          createVNode("p", { class: "text-stone-600 mb-4" }, " Discover the secrets behind creating the perfect pour-over coffee, from selecting the right beans to mastering the technique. "),
                          createVNode(unref(Link), {
                            class: "inline-block text-orange-600 hover:text-orange-700",
                            href: podcast.slug
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Read More →")
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const actions = [];
const fusionActions = ["fusionSync"];
let cachedState;
function useFusion(keys = [], props = {}, useCachedState = false) {
  const state = useCachedState && cachedState ? cachedState : new Pipeline(props).createState();
  if (!useCachedState) {
    cachedState = state;
  }
  const all = {
    ...state,
    ...new ActionFactory([...actions, ...fusionActions], state)
  };
  const shouldExport = {};
  for (const key of keys) {
    if (key in all) {
      shouldExport[key] = all[key];
    }
  }
  return shouldExport;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[Podcast]",
  __ssrInlineRender: true,
  setup(__props) {
    useFusion(["fusion"], __props.fusion);
    const { podcastsRaw, slug } = useFusion(["podcastsRaw", "slug"], __props.fusion, true);
    const podcastsWithSlug = computed(() => {
      return podcastsRaw.value.map((podcast2) => ({
        ...podcast2,
        slug: podcast2.image.split("/").pop().replace(".jpg", "")
        // /art/art-of-product.jpg
      }));
    });
    const podcast = computed(() => {
      return podcastsWithSlug.value.find(
        (podcast2) => podcast2.slug === slug.value
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLayout = _sfc_main$2;
      _push(ssrRenderComponent(_component_AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="max-w-4xl mx-auto px-4 py-12 lg:py-16"${_scopeId}><div class="space-y-8"${_scopeId}><img${ssrRenderAttr("src", unref(podcast).image)}${ssrRenderAttr("alt", unref(podcast).title)} class="w-full h-[400px] object-cover rounded-lg shadow-lg"${_scopeId}><div class="space-y-4"${_scopeId}><div class="flex items-center gap-4 text-gray-600"${_scopeId}><span class="text-sm"${_scopeId}>${ssrInterpolate(new Date(unref(podcast).updated_at).toDateString())}</span><span class="text-sm"${_scopeId}>By ${ssrInterpolate(unref(podcast).author)}</span></div><h1 class="text-4xl lg:text-5xl font-serif font-bold text-gray-900"${_scopeId}>${ssrInterpolate(unref(podcast).title)}</h1><div class="prose max-w-none text-gray-800"${_scopeId}><p class="text-lg text-gray-700 leading-relaxed"${_scopeId}> Experience the perfect blend of East meets West at Cafe Tee Kaapi, where traditional Indian spices dance with contemporary Melbourne coffee culture. Our master baristas craft the perfect cup of single-origin coffee while our chai specialists blend aromatic masalas for that authentic taste of India. This week, we&#39;re featuring our signature Masala Cold Brew - a refreshing fusion that combines smooth cold-extracted coffee with subtle notes of cardamom, cinnamon, and star anise. Pair it with our popular Butter Chicken Croissant for a truly cross-cultural culinary adventure. </p></div></div></div></article>`);
          } else {
            return [
              createVNode("article", { class: "max-w-4xl mx-auto px-4 py-12 lg:py-16" }, [
                createVNode("div", { class: "space-y-8" }, [
                  createVNode("img", {
                    src: unref(podcast).image,
                    alt: unref(podcast).title,
                    class: "w-full h-[400px] object-cover rounded-lg shadow-lg"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "flex items-center gap-4 text-gray-600" }, [
                      createVNode("span", { class: "text-sm" }, toDisplayString(new Date(unref(podcast).updated_at).toDateString()), 1),
                      createVNode("span", { class: "text-sm" }, "By " + toDisplayString(unref(podcast).author), 1)
                    ]),
                    createVNode("h1", { class: "text-4xl lg:text-5xl font-serif font-bold text-gray-900" }, toDisplayString(unref(podcast).title), 1),
                    createVNode("div", { class: "prose max-w-none text-gray-800" }, [
                      createVNode("p", { class: "text-lg text-gray-700 leading-relaxed" }, " Experience the perfect blend of East meets West at Cafe Tee Kaapi, where traditional Indian spices dance with contemporary Melbourne coffee culture. Our master baristas craft the perfect cup of single-origin coffee while our chai specialists blend aromatic masalas for that authentic taste of India. This week, we're featuring our signature Masala Cold Brew - a refreshing fusion that combines smooth cold-extracted coffee with subtle notes of cardamom, cinnamon, and star anise. Pair it with our popular Butter Chicken Croissant for a truly cross-cultural culinary adventure. ")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/[Podcast].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k2 = S2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3.arrayFormat in l ? e3.arrayFormat : "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
const fusion = {
  install(app, options) {
    app.mixin({
      props: {
        fusion: Object
      }
    });
  }
};
createServer(
  (page) => createInertiaApp({
    title: (title) => `Fusion`,
    page,
    render: renderToString,
    resolve: (name) => resolvePageComponent(
      `./Pages/${name}.vue`,
      /* @__PURE__ */ Object.assign({ "./Pages/Index.vue": __vite_glob_0_0, "./Pages/[Podcast].vue": __vite_glob_0_1 })
    ),
    setup({ el, App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(k).use(fusion).mount(el);
    },
    progress: {
      color: "#4B5563"
    }
  })
);
