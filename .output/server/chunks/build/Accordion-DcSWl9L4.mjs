import { ah as vue_exports, a1 as useComponentProps, Y as useAppConfig, X as tv, U as server_renderer_exports, V as transformUI, a5 as useForwardProps, Q as reactivePick, b as AccordionRoot_default, a as AccordionItem_default, y as get, c as AccordionTrigger_default, k as _sfc_main$2, A as AccordionContent_default, H as injectAccordionRootContext, G as injectAccordionItemContext, a4 as useForwardExpose, i as Primitive } from '../virtual/entry.mjs';
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

//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Accordion/AccordionHeader.js
var AccordionHeader_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "AccordionHeader",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "h3"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectAccordionRootContext();
		const itemContext = injectAccordionItemContext();
		useForwardExpose();
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), {
				as: props.as,
				"as-child": props.asChild,
				"data-orientation": (0, vue_exports.unref)(rootContext).orientation,
				"data-state": (0, vue_exports.unref)(itemContext).dataState.value,
				"data-disabled": (0, vue_exports.unref)(itemContext).dataDisabled.value
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-orientation",
				"data-state",
				"data-disabled"
			]);
		};
	}
});
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Faccordion.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Faccordion_default = {
	"slots": {
		"root": "w-full",
		"item": "border-b border-default last:border-b-0",
		"header": "flex",
		"trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 outline-primary/25 focus-visible:outline-3 min-w-0 rounded-md",
		"content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=closed]:overflow-hidden focus:outline-none",
		"body": "text-sm pb-3.5",
		"leadingIcon": "shrink-0 size-5",
		"trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
		"label": "text-start break-words"
	},
	"variants": { "disabled": { "true": { "trigger": "cursor-not-allowed opacity-75" } } }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue
var _sfc_main$1 = {
	__name: "UAccordion",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		items: {
			type: Array,
			required: false
		},
		trailingIcon: {
			type: null,
			required: false
		},
		valueKey: {
			type: null,
			required: false,
			default: "value"
		},
		labelKey: {
			type: null,
			required: false,
			default: "label"
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		collapsible: {
			type: Boolean,
			required: false,
			default: true
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		type: {
			type: String,
			required: false,
			default: "single"
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
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("accordion", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide"), emits);
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Faccordion_default,
			...appConfig.ui?.accordion || {}
		})({ disabled: props.disabled }));
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(AccordionRoot_default), (0, vue_exports.mergeProps)((0, vue_exports.unref)(rootProps), {
				type: (0, vue_exports.unref)(props).type,
				"data-slot": "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).items, (item, index) => {
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(AccordionItem_default), {
								key: (0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).valueKey) ?? index,
								value: (0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).valueKey) ?? String(index),
								disabled: item.disabled,
								"data-slot": "item",
								class: ui.value.item({ class: [
									(0, vue_exports.unref)(props).ui?.item,
									item.ui?.item,
									item.class
								] })
							}, {
								default: (0, vue_exports.withCtx)(({ open }, _push, _parent, _scopeId) => {
									if (_push) {
										_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(AccordionHeader_default), {
											as: "div",
											"data-slot": "header",
											class: ui.value.header({ class: [(0, vue_exports.unref)(props).ui?.header, item.ui?.header] })
										}, {
											default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
												if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(AccordionTrigger_default), {
													"data-slot": "trigger",
													class: ui.value.trigger({
														class: [(0, vue_exports.unref)(props).ui?.trigger, item.ui?.trigger],
														disabled: item.disabled
													})
												}, {
													default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
														if (_push) {
															(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "leading", {
																item,
																index,
																open,
																ui: ui.value
															}, () => {
																if (item.icon) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
																	name: item.icon,
																	"data-slot": "leadingIcon",
																	class: ui.value.leadingIcon({ class: [(0, vue_exports.unref)(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
																}, null, _parent, _scopeId));
																else _push(`<!---->`);
															}, _push, _parent, _scopeId);
															if ((0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey) || !!slots.default) {
																_push(`<span data-slot="label" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.label({ class: [(0, vue_exports.unref)(props).ui?.label, item.ui?.label] }))}"${_scopeId}>`);
																(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {
																	item,
																	index,
																	open
																}, () => {
																	_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey))}`);
																}, _push, _parent, _scopeId);
																_push(`</span>`);
															} else _push(`<!---->`);
															(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "trailing", {
																item,
																index,
																open,
																ui: ui.value
															}, () => {
																_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
																	name: item.trailingIcon || (0, vue_exports.unref)(props).trailingIcon || (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
																	"data-slot": "trailingIcon",
																	class: ui.value.trailingIcon({ class: [(0, vue_exports.unref)(props).ui?.trailingIcon, item.ui?.trailingIcon] })
																}, null, _parent, _scopeId));
															}, _push, _parent, _scopeId);
														} else return [
															(0, vue_exports.renderSlot)(_ctx.$slots, "leading", {
																item,
																index,
																open,
																ui: ui.value
															}, () => [item.icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$2, {
																key: 0,
																name: item.icon,
																"data-slot": "leadingIcon",
																class: ui.value.leadingIcon({ class: [(0, vue_exports.unref)(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
															}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)]),
															(0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey) || !!slots.default ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
																key: 0,
																"data-slot": "label",
																class: ui.value.label({ class: [(0, vue_exports.unref)(props).ui?.label, item.ui?.label] })
															}, [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
																item,
																index,
																open
															}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey)), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
															(0, vue_exports.renderSlot)(_ctx.$slots, "trailing", {
																item,
																index,
																open,
																ui: ui.value
															}, () => [(0, vue_exports.createVNode)(_sfc_main$2, {
																name: item.trailingIcon || (0, vue_exports.unref)(props).trailingIcon || (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
																"data-slot": "trailingIcon",
																class: ui.value.trailingIcon({ class: [(0, vue_exports.unref)(props).ui?.trailingIcon, item.ui?.trailingIcon] })
															}, null, 8, ["name", "class"])])
														];
													}),
													_: 2
												}, _parent, _scopeId));
												else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(AccordionTrigger_default), {
													"data-slot": "trigger",
													class: ui.value.trigger({
														class: [(0, vue_exports.unref)(props).ui?.trigger, item.ui?.trigger],
														disabled: item.disabled
													})
												}, {
													default: (0, vue_exports.withCtx)(() => [
														(0, vue_exports.renderSlot)(_ctx.$slots, "leading", {
															item,
															index,
															open,
															ui: ui.value
														}, () => [item.icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$2, {
															key: 0,
															name: item.icon,
															"data-slot": "leadingIcon",
															class: ui.value.leadingIcon({ class: [(0, vue_exports.unref)(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
														}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)]),
														(0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey) || !!slots.default ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
															key: 0,
															"data-slot": "label",
															class: ui.value.label({ class: [(0, vue_exports.unref)(props).ui?.label, item.ui?.label] })
														}, [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
															item,
															index,
															open
														}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey)), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
														(0, vue_exports.renderSlot)(_ctx.$slots, "trailing", {
															item,
															index,
															open,
															ui: ui.value
														}, () => [(0, vue_exports.createVNode)(_sfc_main$2, {
															name: item.trailingIcon || (0, vue_exports.unref)(props).trailingIcon || (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
															"data-slot": "trailingIcon",
															class: ui.value.trailingIcon({ class: [(0, vue_exports.unref)(props).ui?.trailingIcon, item.ui?.trailingIcon] })
														}, null, 8, ["name", "class"])])
													]),
													_: 2
												}, 1032, ["class"])];
											}),
											_: 2
										}, _parent, _scopeId));
										if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(AccordionContent_default), {
											"data-slot": "content",
											class: ui.value.content({ class: [(0, vue_exports.unref)(props).ui?.content, item.ui?.content] })
										}, {
											default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
												if (_push) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, item.slot || "content", {
													item,
													index,
													open,
													ui: ui.value
												}, () => {
													_push(`<div data-slot="body" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.body({ class: [(0, vue_exports.unref)(props).ui?.body, item.ui?.body] }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
														item,
														index,
														open,
														ui: ui.value
													}, () => {
														_push(`${(0, server_renderer_exports.ssrInterpolate)(item.content)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												}, _push, _parent, _scopeId);
												else return [(0, vue_exports.renderSlot)(_ctx.$slots, item.slot || "content", {
													item,
													index,
													open,
													ui: ui.value
												}, () => [(0, vue_exports.createVNode)("div", {
													"data-slot": "body",
													class: ui.value.body({ class: [(0, vue_exports.unref)(props).ui?.body, item.ui?.body] })
												}, [(0, vue_exports.renderSlot)(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
													item,
													index,
													open,
													ui: ui.value
												}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(item.content), 1)])], 2)])];
											}),
											_: 2
										}, _parent, _scopeId));
										else _push(`<!---->`);
									} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(AccordionHeader_default), {
										as: "div",
										"data-slot": "header",
										class: ui.value.header({ class: [(0, vue_exports.unref)(props).ui?.header, item.ui?.header] })
									}, {
										default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(AccordionTrigger_default), {
											"data-slot": "trigger",
											class: ui.value.trigger({
												class: [(0, vue_exports.unref)(props).ui?.trigger, item.ui?.trigger],
												disabled: item.disabled
											})
										}, {
											default: (0, vue_exports.withCtx)(() => [
												(0, vue_exports.renderSlot)(_ctx.$slots, "leading", {
													item,
													index,
													open,
													ui: ui.value
												}, () => [item.icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$2, {
													key: 0,
													name: item.icon,
													"data-slot": "leadingIcon",
													class: ui.value.leadingIcon({ class: [(0, vue_exports.unref)(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
												}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)]),
												(0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey) || !!slots.default ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
													key: 0,
													"data-slot": "label",
													class: ui.value.label({ class: [(0, vue_exports.unref)(props).ui?.label, item.ui?.label] })
												}, [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
													item,
													index,
													open
												}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey)), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
												(0, vue_exports.renderSlot)(_ctx.$slots, "trailing", {
													item,
													index,
													open,
													ui: ui.value
												}, () => [(0, vue_exports.createVNode)(_sfc_main$2, {
													name: item.trailingIcon || (0, vue_exports.unref)(props).trailingIcon || (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
													"data-slot": "trailingIcon",
													class: ui.value.trailingIcon({ class: [(0, vue_exports.unref)(props).ui?.trailingIcon, item.ui?.trailingIcon] })
												}, null, 8, ["name", "class"])])
											]),
											_: 2
										}, 1032, ["class"])]),
										_: 2
									}, 1032, ["class"]), item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(AccordionContent_default), {
										key: 0,
										"data-slot": "content",
										class: ui.value.content({ class: [(0, vue_exports.unref)(props).ui?.content, item.ui?.content] })
									}, {
										default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, item.slot || "content", {
											item,
											index,
											open,
											ui: ui.value
										}, () => [(0, vue_exports.createVNode)("div", {
											"data-slot": "body",
											class: ui.value.body({ class: [(0, vue_exports.unref)(props).ui?.body, item.ui?.body] })
										}, [(0, vue_exports.renderSlot)(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
											item,
											index,
											open,
											ui: ui.value
										}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(item.content), 1)])], 2)])]),
										_: 2
									}, 1032, ["class"])) : (0, vue_exports.createCommentVNode)("", true)];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]-->`);
					} else return [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).items, (item, index) => {
						return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(AccordionItem_default), {
							key: (0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).valueKey) ?? index,
							value: (0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).valueKey) ?? String(index),
							disabled: item.disabled,
							"data-slot": "item",
							class: ui.value.item({ class: [
								(0, vue_exports.unref)(props).ui?.item,
								item.ui?.item,
								item.class
							] })
						}, {
							default: (0, vue_exports.withCtx)(({ open }) => [(0, vue_exports.createVNode)((0, vue_exports.unref)(AccordionHeader_default), {
								as: "div",
								"data-slot": "header",
								class: ui.value.header({ class: [(0, vue_exports.unref)(props).ui?.header, item.ui?.header] })
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(AccordionTrigger_default), {
									"data-slot": "trigger",
									class: ui.value.trigger({
										class: [(0, vue_exports.unref)(props).ui?.trigger, item.ui?.trigger],
										disabled: item.disabled
									})
								}, {
									default: (0, vue_exports.withCtx)(() => [
										(0, vue_exports.renderSlot)(_ctx.$slots, "leading", {
											item,
											index,
											open,
											ui: ui.value
										}, () => [item.icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$2, {
											key: 0,
											name: item.icon,
											"data-slot": "leadingIcon",
											class: ui.value.leadingIcon({ class: [(0, vue_exports.unref)(props).ui?.leadingIcon, item?.ui?.leadingIcon] })
										}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)]),
										(0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey) || !!slots.default ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
											key: 0,
											"data-slot": "label",
											class: ui.value.label({ class: [(0, vue_exports.unref)(props).ui?.label, item.ui?.label] })
										}, [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
											item,
											index,
											open
										}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(get)(item, (0, vue_exports.unref)(props).labelKey)), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
										(0, vue_exports.renderSlot)(_ctx.$slots, "trailing", {
											item,
											index,
											open,
											ui: ui.value
										}, () => [(0, vue_exports.createVNode)(_sfc_main$2, {
											name: item.trailingIcon || (0, vue_exports.unref)(props).trailingIcon || (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
											"data-slot": "trailingIcon",
											class: ui.value.trailingIcon({ class: [(0, vue_exports.unref)(props).ui?.trailingIcon, item.ui?.trailingIcon] })
										}, null, 8, ["name", "class"])])
									]),
									_: 2
								}, 1032, ["class"])]),
								_: 2
							}, 1032, ["class"]), item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(AccordionContent_default), {
								key: 0,
								"data-slot": "content",
								class: ui.value.content({ class: [(0, vue_exports.unref)(props).ui?.content, item.ui?.content] })
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, item.slot || "content", {
									item,
									index,
									open,
									ui: ui.value
								}, () => [(0, vue_exports.createVNode)("div", {
									"data-slot": "body",
									class: ui.value.body({ class: [(0, vue_exports.unref)(props).ui?.body, item.ui?.body] })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
									item,
									index,
									open,
									ui: ui.value
								}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(item.content), 1)])], 2)])]),
								_: 2
							}, 1032, ["class"])) : (0, vue_exports.createCommentVNode)("", true)]),
							_: 2
						}, 1032, [
							"value",
							"disabled",
							"class"
						]);
					}), 128))];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Faccordion.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Faccordion_default = { "slots": {
	"root": "my-5",
	"trigger": "text-base"
} };
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Accordion.vue
var _sfc_main = {
	__name: "ProseAccordion",
	__ssrInlineRender: true,
	props: {
		type: {
			type: String,
			required: false,
			default: "multiple"
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
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("prose.accordion", _props);
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Faccordion_default,
			...appConfig.ui?.prose?.accordion || {}
		}));
		const rerenderCount = (0, vue_exports.ref)(1);
		const items = (0, vue_exports.computed)(() => {
			rerenderCount.value;
			return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [];
		});
		function transformSlot(slot, index) {
			if (typeof slot.type === "symbol") return slot.children?.map(transformSlot);
			return {
				index,
				label: slot.props?.label || `${index}`,
				description: slot.props?.description,
				icon: slot.props?.icon,
				component: slot
			};
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, (0, vue_exports.mergeProps)({
				type: (0, vue_exports.unref)(props).type,
				items: items.value,
				"unmount-on-hide": false,
				class: (0, vue_exports.unref)(props).class,
				ui: (0, vue_exports.unref)(transformUI)(ui.value(), (0, vue_exports.unref)(props).ui)
			}, _attrs), {
				content: (0, vue_exports.withCtx)(({ item }, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)(item.component), null, null), _parent, _scopeId);
					else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)(item.component)))];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Accordion.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Accordion-DcSWl9L4.mjs.map
