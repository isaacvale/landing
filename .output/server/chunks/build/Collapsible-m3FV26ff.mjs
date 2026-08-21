import { a1 as useComponentProps, a8 as useLocale, Y as useAppConfig, ah as vue_exports, X as tv, U as server_renderer_exports, V as transformUI, k as _sfc_main$2, a5 as useForwardProps, Q as reactivePick, d as CollapsibleRoot_default, e as CollapsibleTrigger_default, C as CollapsibleContent_default } from '../virtual/entry.mjs';
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

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fcollapsible.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fcollapsible_default = { "slots": {
	"root": "",
	"content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] data-[state=closed]:overflow-hidden"
} };
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue
var _sfc_main$1 = {
	__name: "UCollapsible",
	__ssrInlineRender: true,
	props: {
		as: {
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
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		unmountOnHide: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("collapsible", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fcollapsible_default,
			...appConfig.ui?.collapsible || {}
		})());
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(CollapsibleRoot_default), (0, vue_exports.mergeProps)((0, vue_exports.unref)(rootProps), {
				"data-slot": "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)(({ open }, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.default) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(CollapsibleTrigger_default), { "as-child": "" }, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", { open }, null, _push, _parent, _scopeId);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default", { open })];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(CollapsibleContent_default), {
							"data-slot": "content",
							class: ui.value.content({ class: (0, vue_exports.unref)(props).ui?.content })
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "content", {}, null, _push, _parent, _scopeId);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "content")];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [!!slots.default ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(CollapsibleTrigger_default), {
						key: 0,
						"as-child": ""
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", { open })]),
						_: 2
					}, 1024)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.createVNode)((0, vue_exports.unref)(CollapsibleContent_default), {
						"data-slot": "content",
						class: ui.value.content({ class: (0, vue_exports.unref)(props).ui?.content })
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "content")]),
						_: 3
					}, 8, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fcollapsible.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcollapsible_default = { "slots": {
	"root": "my-5",
	"trigger": ["group relative rounded-xs inline-flex items-center gap-1.5 text-muted hover:text-default text-sm outline-primary/25 focus-visible:outline-3", "transition-colors"],
	"triggerIcon": "size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
	"triggerLabel": "truncate",
	"content": "*:first:mt-2.5 *:last:mb-0 *:my-1.5"
} };
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Collapsible.vue
var _sfc_main = {
	__name: "ProseCollapsible",
	__ssrInlineRender: true,
	props: {
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
	},
	setup(__props) {
		const props = useComponentProps("prose.collapsible", __props);
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcollapsible_default,
			...appConfig.ui?.prose?.collapsible || {}
		})());
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, (0, vue_exports.mergeProps)({
				"unmount-on-hide": false,
				class: (0, vue_exports.unref)(props).class,
				ui: (0, vue_exports.unref)(transformUI)(ui.value, (0, vue_exports.unref)(props).ui)
			}, _attrs), {
				default: (0, vue_exports.withCtx)(({ open }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<button class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.trigger({ class: (0, vue_exports.unref)(props).ui?.trigger }))}"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
							name: (0, vue_exports.unref)(props).icon || (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
							class: ui.value.triggerIcon({ class: (0, vue_exports.unref)(props).ui?.triggerIcon })
						}, null, _parent, _scopeId));
						_push(`<span class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.triggerLabel({ class: (0, vue_exports.unref)(props).ui?.triggerLabel }))}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(open ? (0, vue_exports.unref)(props).closeText || (0, vue_exports.unref)(t)("prose.collapsible.closeText") : (0, vue_exports.unref)(props).openText || (0, vue_exports.unref)(t)("prose.collapsible.openText"))} ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).name || (0, vue_exports.unref)(t)("prose.collapsible.name"))}</span></button>`);
					} else return [(0, vue_exports.createVNode)("button", { class: ui.value.trigger({ class: (0, vue_exports.unref)(props).ui?.trigger }) }, [(0, vue_exports.createVNode)(_sfc_main$2, {
						name: (0, vue_exports.unref)(props).icon || (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
						class: ui.value.triggerIcon({ class: (0, vue_exports.unref)(props).ui?.triggerIcon })
					}, null, 8, ["name", "class"]), (0, vue_exports.createVNode)("span", { class: ui.value.triggerLabel({ class: (0, vue_exports.unref)(props).ui?.triggerLabel }) }, (0, vue_exports.toDisplayString)(open ? (0, vue_exports.unref)(props).closeText || (0, vue_exports.unref)(t)("prose.collapsible.closeText") : (0, vue_exports.unref)(props).openText || (0, vue_exports.unref)(t)("prose.collapsible.openText")) + " " + (0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).name || (0, vue_exports.unref)(t)("prose.collapsible.name")), 3)], 2)];
				}),
				content: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Collapsible.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Collapsible-m3FV26ff.mjs.map
