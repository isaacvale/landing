import { a1 as useComponentProps, Y as useAppConfig, ah as vue_exports, X as tv, U as server_renderer_exports } from '../virtual/entry.mjs';
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

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fcode.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_default = {
	"base": "px-1.5 py-0.5 text-sm font-mono font-medium rounded-md inline-block",
	"variants": { "color": {
		"primary": "border border-primary/25 bg-primary/10 text-primary",
		"secondary": "border border-secondary/25 bg-secondary/10 text-secondary",
		"success": "border border-success/25 bg-success/10 text-success",
		"info": "border border-info/25 bg-info/10 text-info",
		"warning": "border border-warning/25 bg-warning/10 text-warning",
		"error": "border border-error/25 bg-error/10 text-error",
		"neutral": "border border-muted text-highlighted bg-muted"
	} },
	"defaultVariants": { "color": "neutral" }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Code.vue
var _sfc_main = {
	__name: "ProseCode",
	__ssrInlineRender: true,
	props: {
		lang: {
			type: String,
			required: false
		},
		color: {
			type: null,
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
		const props = useComponentProps("prose.code", __props);
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_default,
			...appConfig.ui?.prose?.code || {}
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<code${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: ui.value({
				class: [(0, vue_exports.unref)(props).ui?.base, ((0, vue_exports.unref)(props).class || "").split(",").join(" ")],
				color: (0, vue_exports.unref)(props).color
			}) }, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</code>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Code.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Code-H39P-Dik.mjs.map
