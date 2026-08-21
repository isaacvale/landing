import { a1 as useComponentProps, Y as useAppConfig, ad as useRuntimeConfig, ah as vue_exports, X as tv, U as server_renderer_exports, k as _sfc_main$1 } from '../virtual/entry.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'nostics';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'devalue';
import 'tailwindcss/colors';

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fh3.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fh3_default = { "slots": {
	"base": ["relative text-xl text-highlighted font-bold mt-8 mb-3 scroll-mt-[calc(32px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(32px+var(--ui-header-height))] [&>a]:rounded-sm [&>a]:outline-primary/25 [&>a]:focus-visible:outline-3 [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-lg/6 [&>a>code]:font-bold", "[&>a>code]:transition-colors"],
	"leading": ["absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated group-hover:text-primary group-focus:text-primary rounded-md hidden lg:flex text-muted", "transition"],
	"leadingIcon": "size-4 shrink-0",
	"link": "group lg:after:absolute lg:after:inset-y-0 lg:after:-inset-s-2 lg:after:w-2"
} };
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/H3.vue
var _sfc_main = {
	__name: "ProseH3",
	__ssrInlineRender: true,
	props: {
		id: {
			type: String,
			required: false
		},
		anchor: {
			type: Boolean,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const props = useComponentProps("prose.h3", __props);
		const appConfig = useAppConfig();
		const { headings } = useRuntimeConfig().public?.mdc || {};
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fh3_default,
			...appConfig.ui?.prose?.h3 || {}
		})());
		const generate = (0, vue_exports.computed)(() => props.id && (props.anchor ?? (typeof headings?.anchorLinks === "boolean" ? headings.anchorLinks : headings?.anchorLinks?.h3) ?? false));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<h3${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				id: (0, vue_exports.unref)(props).id,
				class: ui.value.base({ class: [(0, vue_exports.unref)(props).ui?.base, (0, vue_exports.unref)(props).class] })
			}, _attrs))}>`);
			if ((0, vue_exports.unref)(props).id && generate.value) {
				_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", `#${(0, vue_exports.unref)(props).id}`)} class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.link({ class: (0, vue_exports.unref)(props).ui?.link }))}"><span class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.leading({ class: (0, vue_exports.unref)(props).ui?.leading }))}">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
					name: (0, vue_exports.unref)(appConfig).ui.icons.hash,
					class: ui.value.leadingIcon({ class: (0, vue_exports.unref)(props).ui?.leadingIcon })
				}, null, _parent));
				_push(`</span>`);
				(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</a>`);
			} else (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</h3>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/H3.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=H3-DVA0jN2b.mjs.map
