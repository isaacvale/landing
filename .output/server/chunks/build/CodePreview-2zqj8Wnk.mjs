import { ah as vue_exports, a1 as useComponentProps, Y as useAppConfig, X as tv, U as server_renderer_exports } from '../virtual/entry.mjs';
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

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fcode-preview.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_preview_default = {
	"slots": {
		"root": "my-5",
		"preview": "flex justify-center border border-muted relative p-4 rounded-md",
		"code": "[&>div>pre]:rounded-t-none [&>div]:my-0"
	},
	"variants": { "code": { "true": { "preview": "border-b-0 rounded-b-none" } } }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/CodePreview.vue
var _sfc_main = {
	__name: "ProseCodePreview",
	__ssrInlineRender: true,
	props: {
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
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("prose.codePreview", _props);
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_preview_default,
			...appConfig.ui?.prose?.codePreview || {}
		})({ code: !!slots.code }));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] }) }, _attrs))}><div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.preview({ class: [(0, vue_exports.unref)(props).ui?.preview] }))}">`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
			if (!!slots.code) {
				_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.code({ class: [(0, vue_exports.unref)(props).ui?.code] }))}">`);
				(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "code", {}, null, _push, _parent);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/CodePreview.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodePreview-2zqj8Wnk.mjs.map
