import { ah as vue_exports, a1 as useComponentProps, Y as useAppConfig, X as tv, U as server_renderer_exports } from '../virtual/entry.mjs';
import { c as TabsRoot_default, b as TabsList_default, a as TabsIndicator_default, d as TabsTrigger_default, T as TabsContent_default } from './TabsTrigger-B8ba4wfJ.mjs';
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
import './RovingFocusItem-DRLTg4ht.mjs';

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fcode-group.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_group_default = { "slots": {
	"root": "relative group *:not-first:my-0! *:not-first:static! my-5",
	"list": "relative flex items-center gap-1 border border-muted bg-default border-b-0 rounded-t-md overflow-x-auto p-2",
	"indicator": "absolute left-0 inset-y-2 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[translate,width] duration-200 bg-elevated rounded-md shadow-xs",
	"trigger": ["relative inline-flex items-center gap-1.5 text-default data-[state=active]:text-highlighted hover:bg-elevated/50 px-2 py-1.5 text-sm rounded-md disabled:cursor-not-allowed disabled:opacity-75 outline-primary/25 focus-visible:outline-3", "transition-colors"],
	"triggerIcon": "size-4 shrink-0",
	"triggerLabel": "truncate"
} };
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeGroup.vue
var _sfc_main = {
	__name: "ProseCodeGroup",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ (0, vue_exports.mergeModels)({
		defaultValue: {
			type: String,
			required: false,
			default: "0"
		},
		sync: {
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
		"modelValue": { type: String },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("prose.codeGroup", _props);
		const model = (0, vue_exports.useModel)(__props, "modelValue");
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_group_default,
			...appConfig.ui?.prose?.codeGroup || {}
		})());
		const rerenderCount = (0, vue_exports.ref)(1);
		const items = (0, vue_exports.computed)(() => {
			rerenderCount.value;
			return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [];
		});
		function transformSlot(slot, index) {
			if (typeof slot.type === "symbol") return slot.children?.map(transformSlot);
			return {
				label: slot.props?.filename || slot.props?.label || `${index}`,
				icon: slot.props?.icon,
				component: slot
			};
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(TabsRoot_default), (0, vue_exports.mergeProps)({
				modelValue: model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"default-value": (0, vue_exports.unref)(props).defaultValue,
				"unmount-on-hide": false,
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(TabsList_default), { class: ui.value.list({ class: (0, vue_exports.unref)(props).ui?.list }) }, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(TabsIndicator_default), { class: ui.value.indicator({ class: (0, vue_exports.unref)(props).ui?.indicator }) }, null, _parent, _scopeId));
									_push(`<!--[-->`);
									(0, server_renderer_exports.ssrRenderList)(items.value, (item, index) => {
										_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(TabsTrigger_default), {
											key: index,
											value: String(index),
											class: ui.value.trigger({ class: (0, vue_exports.unref)(props).ui?.trigger })
										}, {
											default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
														icon: item.icon,
														filename: item.label,
														class: ui.value.triggerIcon({ class: (0, vue_exports.unref)(props).ui?.triggerIcon })
													}, null, _parent, _scopeId));
													_push(`<span class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.triggerLabel({ class: (0, vue_exports.unref)(props).ui?.triggerLabel }))}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(item.label)}</span>`);
												} else return [(0, vue_exports.createVNode)(_sfc_main$1, {
													icon: item.icon,
													filename: item.label,
													class: ui.value.triggerIcon({ class: (0, vue_exports.unref)(props).ui?.triggerIcon })
												}, null, 8, [
													"icon",
													"filename",
													"class"
												]), (0, vue_exports.createVNode)("span", { class: ui.value.triggerLabel({ class: (0, vue_exports.unref)(props).ui?.triggerLabel }) }, (0, vue_exports.toDisplayString)(item.label), 3)];
											}),
											_: 2
										}, _parent, _scopeId));
									});
									_push(`<!--]-->`);
								} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(TabsIndicator_default), { class: ui.value.indicator({ class: (0, vue_exports.unref)(props).ui?.indicator }) }, null, 8, ["class"]), ((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(items.value, (item, index) => {
									return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(TabsTrigger_default), {
										key: index,
										value: String(index),
										class: ui.value.trigger({ class: (0, vue_exports.unref)(props).ui?.trigger })
									}, {
										default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_sfc_main$1, {
											icon: item.icon,
											filename: item.label,
											class: ui.value.triggerIcon({ class: (0, vue_exports.unref)(props).ui?.triggerIcon })
										}, null, 8, [
											"icon",
											"filename",
											"class"
										]), (0, vue_exports.createVNode)("span", { class: ui.value.triggerLabel({ class: (0, vue_exports.unref)(props).ui?.triggerLabel }) }, (0, vue_exports.toDisplayString)(item.label), 3)]),
										_: 2
									}, 1032, ["value", "class"]);
								}), 128))];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(items.value, (item, index) => {
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(TabsContent_default), {
								key: index,
								value: String(index),
								"as-child": ""
							}, {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)(item.component), {
										"hide-header": "",
										tabindex: "-1"
									}, null), _parent, _scopeId);
									else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)(item.component), {
										"hide-header": "",
										tabindex: "-1"
									}))];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]-->`);
					} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(TabsList_default), { class: ui.value.list({ class: (0, vue_exports.unref)(props).ui?.list }) }, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(TabsIndicator_default), { class: ui.value.indicator({ class: (0, vue_exports.unref)(props).ui?.indicator }) }, null, 8, ["class"]), ((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(items.value, (item, index) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(TabsTrigger_default), {
								key: index,
								value: String(index),
								class: ui.value.trigger({ class: (0, vue_exports.unref)(props).ui?.trigger })
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_sfc_main$1, {
									icon: item.icon,
									filename: item.label,
									class: ui.value.triggerIcon({ class: (0, vue_exports.unref)(props).ui?.triggerIcon })
								}, null, 8, [
									"icon",
									"filename",
									"class"
								]), (0, vue_exports.createVNode)("span", { class: ui.value.triggerLabel({ class: (0, vue_exports.unref)(props).ui?.triggerLabel }) }, (0, vue_exports.toDisplayString)(item.label), 3)]),
								_: 2
							}, 1032, ["value", "class"]);
						}), 128))]),
						_: 1
					}, 8, ["class"]), ((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(items.value, (item, index) => {
						return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(TabsContent_default), {
							key: index,
							value: String(index),
							"as-child": ""
						}, {
							default: (0, vue_exports.withCtx)(() => [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)(item.component), {
								"hide-header": "",
								tabindex: "-1"
							}))]),
							_: 2
						}, 1032, ["value"]);
					}), 128))];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeGroup.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeGroup-swUzq4xY.mjs.map
