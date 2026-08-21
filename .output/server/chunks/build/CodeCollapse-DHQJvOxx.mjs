import { a1 as useComponentProps, ah as vue_exports, a8 as useLocale, Y as useAppConfig, X as tv, U as server_renderer_exports, p as _sfc_main$24 } from '../virtual/entry.mjs';
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

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fcode-collapse.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_collapse_default = {
	"slots": {
		"root": "relative my-5 bg-muted [&>div]:my-0 [&_pre]:max-h-[80vh] [&_pre]:pb-12",
		"footer": "h-16 absolute inset-x-px bottom-px rounded-b-md flex items-center justify-center",
		"trigger": "group",
		"triggerIcon": "group-data-[state=open]:rotate-180"
	},
	"variants": { "open": {
		"true": { "root": "rounded-md" },
		"false": {
			"root": "max-h-[200px] overflow-hidden rounded-b-md [&_pre]:overflow-hidden",
			"footer": "inset-x-0 bottom-0 border border-t-0 border-muted bg-linear-to-t from-muted"
		}
	} }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeCollapse.vue
var _sfc_main = {
	__name: "ProseCodeCollapse",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ (0, vue_exports.mergeModels)({
		icon: {
			type: null,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		openText: {
			type: String,
			required: false
		},
		closeText: {
			type: String,
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
	}, {
		"open": {
			type: Boolean,
			default: false
		},
		"openModifiers": {}
	}),
	emits: ["update:open"],
	setup(__props) {
		const props = useComponentProps("prose.codeCollapse", __props);
		const open = (0, vue_exports.useModel)(__props, "open", {
			type: Boolean,
			default: false
		});
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_collapse_default,
			...appConfig.ui?.prose?.codeCollapse || {}
		})({ open: open.value }));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] }) }, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer }))}">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$24, {
				icon: (0, vue_exports.unref)(props).icon || (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
				color: "neutral",
				variant: "outline",
				"data-state": open.value ? "open" : "closed",
				label: `${open.value ? (0, vue_exports.unref)(props).closeText || (0, vue_exports.unref)(t)("prose.codeCollapse.closeText") : (0, vue_exports.unref)(props).openText || (0, vue_exports.unref)(t)("prose.codeCollapse.openText")} ${(0, vue_exports.unref)(props).name || (0, vue_exports.unref)(t)("prose.codeCollapse.name")}`,
				class: ui.value.trigger({ class: (0, vue_exports.unref)(props).ui?.trigger }),
				ui: { leadingIcon: ui.value.triggerIcon({ class: (0, vue_exports.unref)(props).ui?.triggerIcon }) },
				onClick: ($event) => open.value = !open.value
			}, null, _parent));
			_push(`</div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeCollapse.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeCollapse-DHQJvOxx.mjs.map
