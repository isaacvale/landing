import { a1 as useComponentProps, a8 as useLocale, $ as useClipboard, Y as useAppConfig, ah as vue_exports, X as tv, U as server_renderer_exports, p as _sfc_main$24 } from '../virtual/entry.mjs';
import _sfc_main$1 from './CodeIcon-BnFHhhjw.mjs';
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

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fpre.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fpre_default = {
	"slots": {
		"root": "relative my-5 group",
		"header": "flex items-center gap-1.5 border border-muted bg-default border-b-0 relative rounded-t-md px-4 py-3",
		"filename": "text-default text-sm/6",
		"icon": "size-4 shrink-0",
		"copy": "absolute top-[11px] end-[11px] lg:opacity-0 lg:group-hover:opacity-100 lg:focus-visible:opacity-100 transition",
		"base": "group font-mono text-sm/6 border border-muted bg-muted rounded-md px-4 py-3 whitespace-pre-wrap wrap-break-word overflow-x-auto outline-primary/25 focus-visible:outline-3 focus-visible:border-primary **:[.line]:block **:[.line.highlight]:-mx-4 **:[.line.highlight]:px-4 **:[.line.highlight]:bg-accented/50!"
	},
	"variants": { "filename": { "true": { "root": "[&>pre]:rounded-t-none [&>pre]:my-0 my-5" } } }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue
var _sfc_main = {
	__name: "ProsePre",
	__ssrInlineRender: true,
	props: {
		icon: {
			type: null,
			required: false
		},
		code: {
			type: String,
			required: false
		},
		language: {
			type: String,
			required: false
		},
		filename: {
			type: String,
			required: false
		},
		highlights: {
			type: Array,
			required: false
		},
		hideHeader: {
			type: Boolean,
			required: false
		},
		meta: {
			type: String,
			required: false
		},
		copy: {
			type: [Boolean, Object],
			required: false,
			default: true
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
		const props = useComponentProps("prose.pre", __props);
		const { t } = useLocale();
		const { copy: copyToClipboard, copied } = useClipboard();
		const appConfig = useAppConfig();
		const baseRef = (0, vue_exports.useTemplateRef)("baseRef");
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fpre_default,
			...appConfig.ui?.prose?.pre || {}
		})());
		function copyCode() {
			const code = props.code ?? baseRef.value?.textContent ?? "";
			copyToClipboard(code);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: ui.value.root({
				class: [(0, vue_exports.unref)(props).ui?.root],
				filename: !!(0, vue_exports.unref)(props).filename
			}) }, _attrs))}>`);
			if ((0, vue_exports.unref)(props).filename && !(0, vue_exports.unref)(props).hideHeader) {
				_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header }))}">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
					icon: (0, vue_exports.unref)(props).icon,
					filename: (0, vue_exports.unref)(props).filename,
					class: ui.value.icon({ class: (0, vue_exports.unref)(props).ui?.icon })
				}, null, _parent));
				_push(`<span class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.filename({ class: (0, vue_exports.unref)(props).ui?.filename }))}">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).filename)}</span></div>`);
			} else _push(`<!---->`);
			if ((0, vue_exports.unref)(props).copy) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$24, (0, vue_exports.mergeProps)({
				icon: (0, vue_exports.unref)(copied) ? (0, vue_exports.unref)(appConfig).ui.icons.copyCheck : (0, vue_exports.unref)(appConfig).ui.icons.copy,
				color: "neutral",
				variant: "outline",
				size: "sm",
				"aria-label": (0, vue_exports.unref)(t)("prose.pre.copy")
			}, typeof (0, vue_exports.unref)(props).copy === "object" ? (0, vue_exports.unref)(props).copy : {}, {
				class: ui.value.copy({ class: (0, vue_exports.unref)(props).ui?.copy }),
				onClick: copyCode
			}), null, _parent));
			else _push(`<!---->`);
			_push(`<pre${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				ref_key: "baseRef",
				ref: baseRef,
				class: ui.value.base({ class: [(0, vue_exports.unref)(props).ui?.base, (0, vue_exports.unref)(props).class] })
			}, _ctx.$attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</pre></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Pre-B5Zo-00V.mjs.map
