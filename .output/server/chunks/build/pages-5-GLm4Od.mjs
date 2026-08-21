import { ah as vue_exports, Z as useAsyncData, s as createError$1, ae as useSeoMeta$1, $ as useClipboard, U as server_renderer_exports, h as Motion, p as _sfc_main$24, q as _sfc_main$7$1, m as _sfc_main$1$1, S as ServerPlaceholder, W as tryUseNuxtApp, a1 as useComponentProps, Y as useAppConfig, X as tv, i as Primitive, o as _sfc_main$18, u as createReusableTemplate, j as _sfc_main$8, k as _sfc_main$9, _ as _plugin_vue_export_helper_default, L as pausableFilter, ab as useMouseInElement, E as getSlotChildrenText, l as _sfc_main$a } from '../virtual/entry.mjs';
import { F as withoutTrailingSlash, k as getRequestHeaders } from '../nitro/nitro.mjs';
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

//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/composables/usePrefix.js
function usePrefix() {
	const prefix = useAppConfig().ui?.prefix;
	return (classString) => {
		if (!prefix || !classString) return classString;
		return classString.split(/\s+/).filter(Boolean).map((cls) => `${prefix}:${cls}`).join(" ");
	};
}
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpage-hero.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_hero_default = {
	"slots": {
		"root": "relative isolate",
		"container": "flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",
		"wrapper": "",
		"header": "",
		"headline": "mb-4",
		"title": "text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted",
		"description": "text-lg sm:text-xl/8 text-muted",
		"body": "mt-10",
		"footer": "mt-10",
		"links": "flex flex-wrap gap-x-6 gap-y-3"
	},
	"variants": {
		"orientation": {
			"horizontal": {
				"container": "lg:grid-cols-2 lg:items-center",
				"description": "text-pretty"
			},
			"vertical": {
				"container": "",
				"headline": "justify-center",
				"wrapper": "text-center",
				"description": "text-balance",
				"links": "justify-center"
			}
		},
		"reverse": { "true": { "wrapper": "order-last" } },
		"headline": { "true": { "headline": "font-semibold text-primary flex items-center gap-1.5" } },
		"title": { "true": { "description": "mt-6" } }
	}
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageHero.vue
var _sfc_main$7 = {
	__name: "UPageHero",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		headline: {
			type: String,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		links: {
			type: Array,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		reverse: {
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
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("pageHero", _props);
		const appConfig = useAppConfig();
		const prefix = usePrefix();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_hero_default,
			...appConfig.ui?.pageHero || {}
		})({
			orientation: props.orientation,
			reverse: props.reverse,
			title: !!props.title || !!slots.title
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
				as: (0, vue_exports.unref)(props).as,
				"data-orientation": (0, vue_exports.unref)(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "top", {}, null, _push, _parent, _scopeId);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$18, {
							"data-slot": "container",
							class: ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container })
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (!!slots.header || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.body || !!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links) {
										_push(`<div data-slot="wrapper" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper }))}"${_scopeId}>`);
										if (!!slots.header || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description) {
											_push(`<div data-slot="header" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header }))}"${_scopeId}>`);
											(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "header", {}, () => {
												if ((0, vue_exports.unref)(props).headline || !!slots.headline) {
													_push(`<div data-slot="headline" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.headline({
														class: (0, vue_exports.unref)(props).ui?.headline,
														headline: !slots.headline
													}))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "headline", {}, () => {
														_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).headline)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if ((0, vue_exports.unref)(props).title || !!slots.title) {
													_push(`<h1 data-slot="title" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "title", {}, () => {
														_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).title)}`);
													}, _push, _parent, _scopeId);
													_push(`</h1>`);
												} else _push(`<!---->`);
												if ((0, vue_exports.unref)(props).description || !!slots.description) {
													_push(`<div data-slot="description" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "description", {}, () => {
														_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).description)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.body) {
											_push(`<div data-slot="body" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body }))}"${_scopeId}>`);
											(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "body", {}, null, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links) {
											_push(`<div data-slot="footer" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer }))}"${_scopeId}>`);
											(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "footer", {}, () => {
												if ((0, vue_exports.unref)(props).links?.length || !!slots.links) {
													_push(`<div data-slot="links" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.links({ class: (0, vue_exports.unref)(props).ui?.links }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "links", {}, () => {
														_push(`<!--[-->`);
														(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).links, (link, index) => {
															_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$24, (0, vue_exports.mergeProps)({
																key: index,
																size: "xl"
															}, { ref_for: true }, link), null, _parent, _scopeId));
														});
														_push(`<!--]-->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										_push(`</div>`);
									} else _push(`<!---->`);
									if (!!slots.default) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
									else if ((0, vue_exports.unref)(props).orientation === "horizontal") _push(`<div class="${(0, server_renderer_exports.ssrRenderClass)((0, vue_exports.unref)(prefix)("hidden lg:block"))}"${_scopeId}></div>`);
									else _push(`<!---->`);
								} else return [!!slots.header || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.body || !!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 0,
									"data-slot": "wrapper",
									class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
								}, [
									!!slots.header || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 0,
										"data-slot": "header",
										class: ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "header", {}, () => [
										(0, vue_exports.unref)(props).headline || !!slots.headline ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
											key: 0,
											"data-slot": "headline",
											class: ui.value.headline({
												class: (0, vue_exports.unref)(props).ui?.headline,
												headline: !slots.headline
											})
										}, [(0, vue_exports.renderSlot)(_ctx.$slots, "headline", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).headline), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
										(0, vue_exports.unref)(props).title || !!slots.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("h1", {
											key: 1,
											"data-slot": "title",
											class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
										}, [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
										(0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
											key: 2,
											"data-slot": "description",
											class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
										}, [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
									])], 2)) : (0, vue_exports.createCommentVNode)("", true),
									!!slots.body ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 1,
										"data-slot": "body",
										class: ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "body")], 2)) : (0, vue_exports.createCommentVNode)("", true),
									!!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 2,
										"data-slot": "footer",
										class: ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "footer", {}, () => [(0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 0,
										"data-slot": "links",
										class: ui.value.links({ class: (0, vue_exports.unref)(props).ui?.links })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "links", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).links, (link, index) => {
										return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$24, (0, vue_exports.mergeProps)({
											key: index,
											size: "xl"
										}, { ref_for: true }, link), null, 16);
									}), 128))])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
								], 2)) : (0, vue_exports.createCommentVNode)("", true), !!slots.default ? (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, void 0, 1) : (0, vue_exports.unref)(props).orientation === "horizontal" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 2,
									class: (0, vue_exports.unref)(prefix)("hidden lg:block")
								}, null, 2)) : (0, vue_exports.createCommentVNode)("", true)];
							}),
							_: 3
						}, _parent, _scopeId));
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "bottom", {}, null, _push, _parent, _scopeId);
					} else return [
						(0, vue_exports.renderSlot)(_ctx.$slots, "top"),
						(0, vue_exports.createVNode)(_sfc_main$18, {
							"data-slot": "container",
							class: ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container })
						}, {
							default: (0, vue_exports.withCtx)(() => [!!slots.header || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.body || !!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 0,
								"data-slot": "wrapper",
								class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
							}, [
								!!slots.header || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 0,
									"data-slot": "header",
									class: ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "header", {}, () => [
									(0, vue_exports.unref)(props).headline || !!slots.headline ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 0,
										"data-slot": "headline",
										class: ui.value.headline({
											class: (0, vue_exports.unref)(props).ui?.headline,
											headline: !slots.headline
										})
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "headline", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).headline), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
									(0, vue_exports.unref)(props).title || !!slots.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("h1", {
										key: 1,
										"data-slot": "title",
										class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
									(0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 2,
										"data-slot": "description",
										class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
								])], 2)) : (0, vue_exports.createCommentVNode)("", true),
								!!slots.body ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 1,
									"data-slot": "body",
									class: ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "body")], 2)) : (0, vue_exports.createCommentVNode)("", true),
								!!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 2,
									"data-slot": "footer",
									class: ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "footer", {}, () => [(0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 0,
									"data-slot": "links",
									class: ui.value.links({ class: (0, vue_exports.unref)(props).ui?.links })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "links", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).links, (link, index) => {
									return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$24, (0, vue_exports.mergeProps)({
										key: index,
										size: "xl"
									}, { ref_for: true }, link), null, 16);
								}), 128))])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
							], 2)) : (0, vue_exports.createCommentVNode)("", true), !!slots.default ? (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, void 0, 1) : (0, vue_exports.unref)(props).orientation === "horizontal" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 2,
								class: (0, vue_exports.unref)(prefix)("hidden lg:block")
							}, null, 2)) : (0, vue_exports.createCommentVNode)("", true)]),
							_: 3
						}, 8, ["class"]),
						(0, vue_exports.renderSlot)(_ctx.$slots, "bottom")
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$9 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageHero.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
//#endregion
//#region app/components/GradientGlow.vue
var _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
		class: "pointer-events-none absolute left-1/2 -translate-x-1/2",
		style: { "background": "radial-gradient(ellipse at center, color-mix(in oklch, var(--ui-primary) 6%, transparent) 0%, transparent 70%)" }
	}, _attrs))}></div>`);
}
var _sfc_setup$8 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GradientGlow.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var GradientGlow_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]), { __name: "GradientGlow" });
//#endregion
//#region app/components/HeroTerminal.vue?vue&type=script&setup=true&lang.ts
var HeroTerminal_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "HeroTerminal",
	__ssrInlineRender: true,
	props: { lines: {} },
	setup(__props) {
		const segmentStyles = {
			"prompt": "text-muted",
			"cmd": "text-highlighted",
			"flag": "text-primary",
			"dim": "text-muted",
			"success": "text-success",
			"url": "text-info",
			"metric-good": "text-primary"
		};
		function lineMotion(index) {
			return {
				initial: {
					opacity: 0,
					x: -4
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .4,
					delay: 1.4 + index * .4
				}
			};
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Motion = Motion;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "overflow-hidden rounded-xl border border-default bg-elevated/50 backdrop-blur ring-1 ring-white/2" }, _attrs))}><div class="flex items-center gap-1.5 border-b border-default p-4 sm:px-6"><span class="size-2.5 rounded-full border border-default bg-muted"></span><span class="size-2.5 rounded-full border border-default bg-muted"></span><span class="size-2.5 rounded-full border border-default bg-muted"></span></div><div class="min-h-[200px] p-5 font-mono text-[13px] leading-[1.8] sm:p-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(__props.lines, (line, lineIndex) => {
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ key: lineIndex }, { ref_for: true }, lineMotion(lineIndex)), {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(line.segments, (segment, segIndex) => {
								_push(`<span class="${(0, server_renderer_exports.ssrRenderClass)(segmentStyles[segment.style])}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(segment.text)}</span>`);
							});
							_push(`<!--]-->`);
						} else return [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(line.segments, (segment, segIndex) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
								key: segIndex,
								class: segmentStyles[segment.style]
							}, (0, vue_exports.toDisplayString)(segment.text), 3);
						}), 128))];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
//#endregion
//#region app/components/HeroTerminal.vue
var _sfc_setup$7 = HeroTerminal_vue_vue_type_script_setup_true_lang_default.setup;
HeroTerminal_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroTerminal.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var HeroTerminal_default = Object.assign(HeroTerminal_vue_vue_type_script_setup_true_lang_default, { __name: "HeroTerminal" });
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fmarquee.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fmarquee_default = {
	"slots": {
		"root": "group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]",
		"content": "flex items-center shrink-0 justify-around gap-(--gap) min-w-max"
	},
	"variants": {
		"orientation": {
			"horizontal": { "content": "w-full" },
			"vertical": { "content": "h-full" }
		},
		"pauseOnHover": { "true": { "content": "group-hover:[animation-play-state:paused]" } },
		"reverse": { "true": { "content": "![animation-direction:reverse]" } },
		"overlay": { "true": { "root": "before:absolute before:pointer-events-none before:content-[\"\"] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[\"\"] after:z-2 after:from-default after:to-transparent" } }
	},
	"compoundVariants": [
		{
			"orientation": "horizontal",
			"class": {
				"root": "flex-row",
				"content": "flex-row motion-safe:animate-[marquee_var(--duration)_linear_infinite] motion-safe:rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden"
			}
		},
		{
			"orientation": "horizontal",
			"overlay": true,
			"class": { "root": "before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden" }
		},
		{
			"orientation": "vertical",
			"class": {
				"root": "flex-col",
				"content": "flex-col motion-safe:animate-[marquee-vertical_var(--duration)_linear_infinite] motion-safe:rtl:animate-[marquee-vertical-rtl_var(--duration)_linear_infinite] h-[fit-content] backface-hidden"
			}
		},
		{
			"orientation": "vertical",
			"overlay": true,
			"class": { "root": "before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden" }
		}
	]
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/Marquee.vue
var _sfc_main$5 = {
	__name: "UMarquee",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		pauseOnHover: {
			type: Boolean,
			required: false
		},
		reverse: {
			type: Boolean,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "horizontal"
		},
		repeat: {
			type: Number,
			required: false,
			default: 4
		},
		overlay: {
			type: Boolean,
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
		const props = useComponentProps("marquee", __props);
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fmarquee_default,
			...appConfig.ui?.marquee || {}
		})({
			pauseOnHover: props.pauseOnHover,
			orientation: props.orientation,
			reverse: props.reverse,
			overlay: props.overlay
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
				as: (0, vue_exports.unref)(props).as,
				"data-orientation": (0, vue_exports.unref)(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).repeat, (i) => {
							_push(`<div data-slot="content" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.content({ class: [(0, vue_exports.unref)(props).ui?.content] }))}"${_scopeId}>`);
							(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
							_push(`</div>`);
						});
						_push(`<!--]-->`);
					} else return [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).repeat, (i) => {
						return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: i,
							"data-slot": "content",
							class: ui.value.content({ class: [(0, vue_exports.unref)(props).ui?.content] })
						}, [(0, vue_exports.renderSlot)(_ctx.$slots, "default")], 2);
					}), 128))];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$6 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/Marquee.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpage-logos.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_logos_default = {
	"slots": {
		"root": "relative overflow-hidden",
		"title": "text-lg text-center font-semibold text-highlighted",
		"logos": "mt-10",
		"logo": "size-10 shrink-0"
	},
	"variants": { "marquee": { "false": { "logos": "flex items-center shrink-0 justify-around gap-(--gap) [--gap:--spacing(16)]" } } }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageLogos.vue
var _sfc_main$4 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UPageLogos",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		items: {
			type: Array,
			required: false
		},
		marquee: {
			type: [Boolean, Object],
			required: false,
			default: false
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
		const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("pageLogos", _props);
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_logos_default,
			...appConfig.ui?.pageLogos || {}
		})());
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(DefineCreateItemTemplate), null, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) if (!!slots.default) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else if ((0, vue_exports.unref)(props).items?.length) {
						_push(`<!--[-->`);
						(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).items, (item, index) => {
							_push(`<!--[-->`);
							if (typeof item === "object") _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$8, {
								src: item.src,
								alt: item.alt,
								"data-slot": "logo",
								class: ui.value.logo({ class: (0, vue_exports.unref)(props).ui?.logo })
							}, null, _parent, _scopeId));
							else _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$9, {
								name: item,
								"data-slot": "logo",
								class: ui.value.logo({ class: (0, vue_exports.unref)(props).ui?.logo })
							}, null, _parent, _scopeId));
							_push(`<!--]-->`);
						});
						_push(`<!--]-->`);
					} else _push(`<!---->`);
					else return [!!slots.default ? (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, void 0, 0) : (0, vue_exports.unref)(props).items?.length ? ((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, { key: 1 }, (0, vue_exports.renderList)((0, vue_exports.unref)(props).items, (item, index) => {
						return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(vue_exports.Fragment, { key: index }, [typeof item === "object" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$8, {
							key: 0,
							src: item.src,
							alt: item.alt,
							"data-slot": "logo",
							class: ui.value.logo({ class: (0, vue_exports.unref)(props).ui?.logo })
						}, null, 8, [
							"src",
							"alt",
							"class"
						])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$9, {
							key: 1,
							name: item,
							"data-slot": "logo",
							class: ui.value.logo({ class: (0, vue_exports.unref)(props).ui?.logo })
						}, null, 8, ["name", "class"]))], 64);
					}), 128)) : (0, vue_exports.createCommentVNode)("", true)];
				}),
				_: 3
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
				as: (0, vue_exports.unref)(props).as,
				"data-slot": "root"
			}, _ctx.$attrs, { class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] }) }), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if ((0, vue_exports.unref)(props).title) _push(`<h2 data-slot="title" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title }))}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).title)}</h2>`);
						else _push(`<!---->`);
						if ((0, vue_exports.unref)(props).marquee) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$5, (0, vue_exports.mergeProps)(typeof (0, vue_exports.unref)(props).marquee === "object" ? (0, vue_exports.unref)(props).marquee : {}, {
							"data-slot": "logos",
							class: ui.value.logos({
								class: (0, vue_exports.unref)(props).ui?.logos,
								marquee: true
							})
						}), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ReuseCreateItemTemplate), { items: (0, vue_exports.unref)(props).items }, null, _parent, _scopeId));
								else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseCreateItemTemplate), { items: (0, vue_exports.unref)(props).items }, null, 8, ["items"])];
							}),
							_: 1
						}, _parent, _scopeId));
						else {
							_push(`<div data-slot="logos" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.logos({ class: (0, vue_exports.unref)(props).ui?.logos }))}"${_scopeId}>`);
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ReuseCreateItemTemplate), { items: (0, vue_exports.unref)(props).items }, null, _parent, _scopeId));
							_push(`</div>`);
						}
					} else return [(0, vue_exports.unref)(props).title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("h2", {
						key: 0,
						"data-slot": "title",
						class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
					}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 3)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.unref)(props).marquee ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$5, (0, vue_exports.mergeProps)({ key: 1 }, typeof (0, vue_exports.unref)(props).marquee === "object" ? (0, vue_exports.unref)(props).marquee : {}, {
						"data-slot": "logos",
						class: ui.value.logos({
							class: (0, vue_exports.unref)(props).ui?.logos,
							marquee: true
						})
					}), {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseCreateItemTemplate), { items: (0, vue_exports.unref)(props).items }, null, 8, ["items"])]),
						_: 1
					}, 16, ["class"])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
						key: 2,
						"data-slot": "logos",
						class: ui.value.logos({ class: (0, vue_exports.unref)(props).ui?.logos })
					}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseCreateItemTemplate), { items: (0, vue_exports.unref)(props).items }, null, 8, ["items"])], 2))];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$5 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageLogos.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpage-feature.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_feature_default = {
	"slots": {
		"root": "relative rounded-sm",
		"wrapper": "",
		"leading": "inline-flex items-center justify-center",
		"leadingIcon": "size-5 shrink-0 text-primary",
		"title": "text-base text-pretty font-semibold text-highlighted",
		"description": "text-[15px] text-pretty text-muted"
	},
	"variants": {
		"orientation": {
			"horizontal": {
				"root": "flex items-start gap-2.5",
				"leading": "p-0.5"
			},
			"vertical": { "leading": "mb-2.5" }
		},
		"to": { "true": { "root": ["outline-primary/25 has-focus-visible:outline-3", "transition"] } },
		"title": { "true": { "description": "mt-1" } }
	}
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue
var _sfc_main$3 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UPageFeature",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "horizontal"
		},
		to: {
			type: null,
			required: false
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		onClick: {
			type: Function,
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
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("pageFeature", _props);
		const appConfig = useAppConfig();
		const prefix = usePrefix();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_feature_default,
			...appConfig.ui?.pageFeature || {}
		})({
			orientation: props.orientation,
			title: !!props.title || !!slots.title,
			to: !!props.to || !!props.onClick
		}));
		const ariaLabel = (0, vue_exports.computed)(() => {
			return (slots.title && getSlotChildrenText(slots.title()) || props.title || "Feature link").trim();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({ as: (0, vue_exports.unref)(props).as }, !(0, vue_exports.unref)(props).to ? _ctx.$attrs : {}, {
				"data-orientation": (0, vue_exports.unref)(props).orientation,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] }),
				onClick: (0, vue_exports.unref)(props).onClick
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if ((0, vue_exports.unref)(props).icon || !!slots.leading) {
							_push(`<div data-slot="leading" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.leading({ class: (0, vue_exports.unref)(props).ui?.leading }))}"${_scopeId}>`);
							(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => {
								if ((0, vue_exports.unref)(props).icon) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$9, {
									name: (0, vue_exports.unref)(props).icon,
									"data-slot": "leadingIcon",
									class: ui.value.leadingIcon({ class: (0, vue_exports.unref)(props).ui?.leadingIcon })
								}, null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div data-slot="wrapper" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper }))}"${_scopeId}>`);
						if ((0, vue_exports.unref)(props).to) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$a, (0, vue_exports.mergeProps)({ "aria-label": ariaLabel.value }, {
							"to": (0, vue_exports.unref)(props).to,
							"target": (0, vue_exports.unref)(props).target,
							..._ctx.$attrs,
							"data-slot": void 0
						}, {
							class: (0, vue_exports.unref)(prefix)("focus:outline-none peer"),
							raw: ""
						}), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span class="${(0, server_renderer_exports.ssrRenderClass)((0, vue_exports.unref)(prefix)("absolute inset-0"))}" aria-hidden="true"${_scopeId}></span>`);
								else return [(0, vue_exports.createVNode)("span", {
									class: (0, vue_exports.unref)(prefix)("absolute inset-0"),
									"aria-hidden": "true"
								}, null, 2)];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, () => {
							if ((0, vue_exports.unref)(props).title || !!slots.title) {
								_push(`<div data-slot="title" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title }))}"${_scopeId}>`);
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "title", {}, () => {
									_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).title)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							if ((0, vue_exports.unref)(props).description || !!slots.description) {
								_push(`<div data-slot="description" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description }))}"${_scopeId}>`);
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "description", {}, () => {
									_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).description)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(`</div>`);
					} else return [(0, vue_exports.unref)(props).icon || !!slots.leading ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
						key: 0,
						"data-slot": "leading",
						class: ui.value.leading({ class: (0, vue_exports.unref)(props).ui?.leading })
					}, [(0, vue_exports.renderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => [(0, vue_exports.unref)(props).icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$9, {
						key: 0,
						name: (0, vue_exports.unref)(props).icon,
						"data-slot": "leadingIcon",
						class: ui.value.leadingIcon({ class: (0, vue_exports.unref)(props).ui?.leadingIcon })
					}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.createVNode)("div", {
						"data-slot": "wrapper",
						class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
					}, [(0, vue_exports.unref)(props).to ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$a, (0, vue_exports.mergeProps)({
						key: 0,
						"aria-label": ariaLabel.value
					}, {
						"to": (0, vue_exports.unref)(props).to,
						"target": (0, vue_exports.unref)(props).target,
						..._ctx.$attrs,
						"data-slot": void 0
					}, {
						class: (0, vue_exports.unref)(prefix)("focus:outline-none peer"),
						raw: ""
					}), {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)("span", {
							class: (0, vue_exports.unref)(prefix)("absolute inset-0"),
							"aria-hidden": "true"
						}, null, 2)]),
						_: 1
					}, 16, ["aria-label", "class"])) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, () => [(0, vue_exports.unref)(props).title || !!slots.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
						key: 0,
						"data-slot": "title",
						class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
					}, [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
						key: 1,
						"data-slot": "description",
						class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
					}, [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$4 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpage-section.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_section_default = {
	"slots": {
		"root": "relative isolate",
		"container": "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",
		"wrapper": "",
		"header": "",
		"leading": "flex items-center mb-6",
		"leadingIcon": "size-10 shrink-0 text-primary",
		"headline": "mb-3",
		"title": "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted",
		"description": "text-base sm:text-lg text-muted",
		"body": "mt-8",
		"features": "grid",
		"footer": "mt-8",
		"links": "flex flex-wrap gap-x-6 gap-y-3"
	},
	"variants": {
		"orientation": {
			"horizontal": {
				"container": "lg:grid-cols-2 lg:items-center",
				"description": "text-pretty",
				"features": "gap-4"
			},
			"vertical": {
				"container": "",
				"headline": "justify-center",
				"leading": "justify-center",
				"title": "text-center",
				"description": "text-center text-balance",
				"links": "justify-center",
				"features": "sm:grid-cols-2 lg:grid-cols-3 gap-8"
			}
		},
		"reverse": { "true": { "wrapper": "order-last" } },
		"headline": { "true": { "headline": "font-semibold text-primary flex items-center gap-1.5" } },
		"title": { "true": { "description": "mt-6" } },
		"description": { "true": "" },
		"body": { "true": "" }
	},
	"compoundVariants": [
		{
			"orientation": "vertical",
			"title": true,
			"class": { "body": "mt-16" }
		},
		{
			"orientation": "vertical",
			"description": true,
			"class": { "body": "mt-16" }
		},
		{
			"orientation": "vertical",
			"body": true,
			"class": { "footer": "mt-16" }
		}
	]
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue
var _sfc_main$2 = {
	__name: "UPageSection",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false,
			default: "section"
		},
		headline: {
			type: String,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		links: {
			type: Array,
			required: false
		},
		features: {
			type: Array,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		reverse: {
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
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("pageSection", _props);
		const appConfig = useAppConfig();
		const prefix = usePrefix();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_section_default,
			...appConfig.ui?.pageSection || {}
		})({
			orientation: props.orientation,
			reverse: props.reverse,
			title: !!props.title || !!slots.title,
			description: !!props.description || !!slots.description,
			body: !!slots.body || !!props.features?.length || !!slots.features
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
				as: (0, vue_exports.unref)(props).as,
				"data-orientation": (0, vue_exports.unref)(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "top", {}, null, _push, _parent, _scopeId);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$18, {
							"data-slot": "container",
							class: ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container })
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (!!slots.header || (0, vue_exports.unref)(props).icon || !!slots.leading || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.body || (0, vue_exports.unref)(props).features?.length || !!slots.features || !!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links) {
										_push(`<div data-slot="wrapper" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper }))}"${_scopeId}>`);
										if (!!slots.header || (0, vue_exports.unref)(props).icon || !!slots.leading || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description) {
											_push(`<div data-slot="header" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header }))}"${_scopeId}>`);
											(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "header", {}, () => {
												if ((0, vue_exports.unref)(props).icon || !!slots.leading) {
													_push(`<div data-slot="leading" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.leading({ class: (0, vue_exports.unref)(props).ui?.leading }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => {
														if ((0, vue_exports.unref)(props).icon) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$9, {
															name: (0, vue_exports.unref)(props).icon,
															"data-slot": "leadingIcon",
															class: ui.value.leadingIcon({ class: (0, vue_exports.unref)(props).ui?.leadingIcon })
														}, null, _parent, _scopeId));
														else _push(`<!---->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if ((0, vue_exports.unref)(props).headline || !!slots.headline) {
													_push(`<div data-slot="headline" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.headline({
														class: (0, vue_exports.unref)(props).ui?.headline,
														headline: !slots.headline
													}))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "headline", {}, () => {
														_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).headline)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if ((0, vue_exports.unref)(props).title || !!slots.title) {
													_push(`<h2 data-slot="title" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "title", {}, () => {
														_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).title)}`);
													}, _push, _parent, _scopeId);
													_push(`</h2>`);
												} else _push(`<!---->`);
												if ((0, vue_exports.unref)(props).description || !!slots.description) {
													_push(`<div data-slot="description" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "description", {}, () => {
														_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).description)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.body || (0, vue_exports.unref)(props).features?.length || !!slots.features) {
											_push(`<div data-slot="body" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body }))}"${_scopeId}>`);
											(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "body", {}, () => {
												if ((0, vue_exports.unref)(props).features?.length || !!slots.features) {
													_push(`<ul data-slot="features" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.features({ class: (0, vue_exports.unref)(props).ui?.features }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "features", {}, () => {
														_push(`<!--[-->`);
														(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).features, (feature, index) => {
															_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$3, (0, vue_exports.mergeProps)({
																key: index,
																as: "li"
															}, { ref_for: true }, feature), null, _parent, _scopeId));
														});
														_push(`<!--]-->`);
													}, _push, _parent, _scopeId);
													_push(`</ul>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links) {
											_push(`<div data-slot="footer" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer }))}"${_scopeId}>`);
											(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "footer", {}, () => {
												if ((0, vue_exports.unref)(props).links?.length || !!slots.links) {
													_push(`<div data-slot="links" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.links({ class: (0, vue_exports.unref)(props).ui?.links }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "links", {}, () => {
														_push(`<!--[-->`);
														(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).links, (link, index) => {
															_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$24, (0, vue_exports.mergeProps)({
																key: index,
																size: "lg"
															}, { ref_for: true }, link), null, _parent, _scopeId));
														});
														_push(`<!--]-->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										_push(`</div>`);
									} else _push(`<!---->`);
									if (!!slots.default) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
									else if ((0, vue_exports.unref)(props).orientation === "horizontal") _push(`<div class="${(0, server_renderer_exports.ssrRenderClass)((0, vue_exports.unref)(prefix)("hidden lg:block"))}"${_scopeId}></div>`);
									else _push(`<!---->`);
								} else return [!!slots.header || (0, vue_exports.unref)(props).icon || !!slots.leading || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.body || (0, vue_exports.unref)(props).features?.length || !!slots.features || !!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 0,
									"data-slot": "wrapper",
									class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
								}, [
									!!slots.header || (0, vue_exports.unref)(props).icon || !!slots.leading || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 0,
										"data-slot": "header",
										class: ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "header", {}, () => [
										(0, vue_exports.unref)(props).icon || !!slots.leading ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
											key: 0,
											"data-slot": "leading",
											class: ui.value.leading({ class: (0, vue_exports.unref)(props).ui?.leading })
										}, [(0, vue_exports.renderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => [(0, vue_exports.unref)(props).icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$9, {
											key: 0,
											name: (0, vue_exports.unref)(props).icon,
											"data-slot": "leadingIcon",
											class: ui.value.leadingIcon({ class: (0, vue_exports.unref)(props).ui?.leadingIcon })
										}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
										(0, vue_exports.unref)(props).headline || !!slots.headline ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
											key: 1,
											"data-slot": "headline",
											class: ui.value.headline({
												class: (0, vue_exports.unref)(props).ui?.headline,
												headline: !slots.headline
											})
										}, [(0, vue_exports.renderSlot)(_ctx.$slots, "headline", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).headline), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
										(0, vue_exports.unref)(props).title || !!slots.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("h2", {
											key: 2,
											"data-slot": "title",
											class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
										}, [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
										(0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
											key: 3,
											"data-slot": "description",
											class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
										}, [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
									])], 2)) : (0, vue_exports.createCommentVNode)("", true),
									!!slots.body || (0, vue_exports.unref)(props).features?.length || !!slots.features ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 1,
										"data-slot": "body",
										class: ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "body", {}, () => [(0, vue_exports.unref)(props).features?.length || !!slots.features ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("ul", {
										key: 0,
										"data-slot": "features",
										class: ui.value.features({ class: (0, vue_exports.unref)(props).ui?.features })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "features", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).features, (feature, index) => {
										return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$3, (0, vue_exports.mergeProps)({
											key: index,
											as: "li"
										}, { ref_for: true }, feature), null, 16);
									}), 128))])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
									!!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 2,
										"data-slot": "footer",
										class: ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "footer", {}, () => [(0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 0,
										"data-slot": "links",
										class: ui.value.links({ class: (0, vue_exports.unref)(props).ui?.links })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "links", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).links, (link, index) => {
										return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$24, (0, vue_exports.mergeProps)({
											key: index,
											size: "lg"
										}, { ref_for: true }, link), null, 16);
									}), 128))])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
								], 2)) : (0, vue_exports.createCommentVNode)("", true), !!slots.default ? (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, void 0, 1) : (0, vue_exports.unref)(props).orientation === "horizontal" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 2,
									class: (0, vue_exports.unref)(prefix)("hidden lg:block")
								}, null, 2)) : (0, vue_exports.createCommentVNode)("", true)];
							}),
							_: 3
						}, _parent, _scopeId));
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "bottom", {}, null, _push, _parent, _scopeId);
					} else return [
						(0, vue_exports.renderSlot)(_ctx.$slots, "top"),
						(0, vue_exports.createVNode)(_sfc_main$18, {
							"data-slot": "container",
							class: ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container })
						}, {
							default: (0, vue_exports.withCtx)(() => [!!slots.header || (0, vue_exports.unref)(props).icon || !!slots.leading || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.body || (0, vue_exports.unref)(props).features?.length || !!slots.features || !!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 0,
								"data-slot": "wrapper",
								class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
							}, [
								!!slots.header || (0, vue_exports.unref)(props).icon || !!slots.leading || (0, vue_exports.unref)(props).headline || !!slots.headline || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 0,
									"data-slot": "header",
									class: ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "header", {}, () => [
									(0, vue_exports.unref)(props).icon || !!slots.leading ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 0,
										"data-slot": "leading",
										class: ui.value.leading({ class: (0, vue_exports.unref)(props).ui?.leading })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => [(0, vue_exports.unref)(props).icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$9, {
										key: 0,
										name: (0, vue_exports.unref)(props).icon,
										"data-slot": "leadingIcon",
										class: ui.value.leadingIcon({ class: (0, vue_exports.unref)(props).ui?.leadingIcon })
									}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
									(0, vue_exports.unref)(props).headline || !!slots.headline ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 1,
										"data-slot": "headline",
										class: ui.value.headline({
											class: (0, vue_exports.unref)(props).ui?.headline,
											headline: !slots.headline
										})
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "headline", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).headline), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
									(0, vue_exports.unref)(props).title || !!slots.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("h2", {
										key: 2,
										"data-slot": "title",
										class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
									(0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 3,
										"data-slot": "description",
										class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
								])], 2)) : (0, vue_exports.createCommentVNode)("", true),
								!!slots.body || (0, vue_exports.unref)(props).features?.length || !!slots.features ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 1,
									"data-slot": "body",
									class: ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "body", {}, () => [(0, vue_exports.unref)(props).features?.length || !!slots.features ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("ul", {
									key: 0,
									"data-slot": "features",
									class: ui.value.features({ class: (0, vue_exports.unref)(props).ui?.features })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "features", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).features, (feature, index) => {
									return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$3, (0, vue_exports.mergeProps)({
										key: index,
										as: "li"
									}, { ref_for: true }, feature), null, 16);
								}), 128))])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
								!!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 2,
									"data-slot": "footer",
									class: ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "footer", {}, () => [(0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 0,
									"data-slot": "links",
									class: ui.value.links({ class: (0, vue_exports.unref)(props).ui?.links })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "links", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).links, (link, index) => {
									return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$24, (0, vue_exports.mergeProps)({
										key: index,
										size: "lg"
									}, { ref_for: true }, link), null, 16);
								}), 128))])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
							], 2)) : (0, vue_exports.createCommentVNode)("", true), !!slots.default ? (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, void 0, 1) : (0, vue_exports.unref)(props).orientation === "horizontal" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 2,
								class: (0, vue_exports.unref)(prefix)("hidden lg:block")
							}, null, 2)) : (0, vue_exports.createCommentVNode)("", true)]),
							_: 3
						}, 8, ["class"]),
						(0, vue_exports.renderSlot)(_ctx.$slots, "bottom")
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$3 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpage-card.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_card_default = {
	"slots": {
		"root": "relative flex rounded-lg",
		"spotlight": "absolute inset-0 rounded-[inherit] pointer-events-none bg-default/90",
		"container": "relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6",
		"wrapper": "flex flex-col flex-1 items-start",
		"header": "mb-4",
		"body": "flex-1",
		"footer": "pt-4 mt-auto",
		"leading": "inline-flex items-center mb-2.5",
		"leadingIcon": "size-5 shrink-0 text-primary",
		"title": "text-base text-pretty font-semibold text-highlighted",
		"description": "text-[15px] text-pretty"
	},
	"variants": {
		"orientation": {
			"horizontal": { "container": "lg:grid-cols-2 lg:items-center" },
			"vertical": { "container": "" }
		},
		"reverse": { "true": { "wrapper": "order-last" } },
		"variant": {
			"solid": {
				"root": "bg-inverted text-inverted",
				"title": "text-inverted",
				"description": "text-dimmed"
			},
			"outline": {
				"root": "bg-default ring ring-default",
				"description": "text-muted"
			},
			"soft": {
				"root": "bg-elevated/50",
				"description": "text-toned"
			},
			"subtle": {
				"root": "bg-elevated/50 ring ring-default",
				"description": "text-toned"
			},
			"ghost": { "description": "text-muted" },
			"naked": {
				"container": "p-0 sm:p-0",
				"description": "text-muted"
			}
		},
		"to": { "true": { "root": ["outline-primary/25 has-[>a:focus-visible]:outline-3", "transition"] } },
		"title": { "true": { "description": "mt-1" } },
		"highlight": { "true": { "root": "ring-2" } },
		"highlightColor": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"spotlight": { "true": { "root": "[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]" } },
		"spotlightColor": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		}
	},
	"compoundVariants": [
		{
			"variant": "solid",
			"to": true,
			"class": { "root": "hover:bg-inverted/90" }
		},
		{
			"variant": "outline",
			"to": true,
			"class": { "root": "hover:bg-elevated/50" }
		},
		{
			"variant": "soft",
			"to": true,
			"class": { "root": "hover:bg-elevated" }
		},
		{
			"variant": "subtle",
			"to": true,
			"class": { "root": "hover:bg-elevated" }
		},
		{
			"variant": "subtle",
			"to": true,
			"highlight": false,
			"class": { "root": "hover:ring-accented" }
		},
		{
			"variant": ["outline", "subtle"],
			"to": true,
			"highlight": false,
			"class": { "root": "has-[>a:focus-visible]:ring-primary" }
		},
		{
			"variant": "ghost",
			"to": true,
			"class": { "root": "hover:bg-elevated/50" }
		},
		{
			"highlightColor": "primary",
			"highlight": true,
			"class": { "root": "ring-primary" }
		},
		{
			"highlightColor": "secondary",
			"highlight": true,
			"class": { "root": "ring-secondary" }
		},
		{
			"highlightColor": "success",
			"highlight": true,
			"class": { "root": "ring-success" }
		},
		{
			"highlightColor": "info",
			"highlight": true,
			"class": { "root": "ring-info" }
		},
		{
			"highlightColor": "warning",
			"highlight": true,
			"class": { "root": "ring-warning" }
		},
		{
			"highlightColor": "error",
			"highlight": true,
			"class": { "root": "ring-error" }
		},
		{
			"highlightColor": "neutral",
			"highlight": true,
			"class": { "root": "ring-inverted" }
		},
		{
			"spotlightColor": "primary",
			"spotlight": true,
			"class": { "root": "[--spotlight-color:var(--ui-primary)]" }
		},
		{
			"spotlightColor": "secondary",
			"spotlight": true,
			"class": { "root": "[--spotlight-color:var(--ui-secondary)]" }
		},
		{
			"spotlightColor": "success",
			"spotlight": true,
			"class": { "root": "[--spotlight-color:var(--ui-success)]" }
		},
		{
			"spotlightColor": "info",
			"spotlight": true,
			"class": { "root": "[--spotlight-color:var(--ui-info)]" }
		},
		{
			"spotlightColor": "warning",
			"spotlight": true,
			"class": { "root": "[--spotlight-color:var(--ui-warning)]" }
		},
		{
			"spotlightColor": "error",
			"spotlight": true,
			"class": { "root": "[--spotlight-color:var(--ui-error)]" }
		},
		{
			"spotlightColor": "neutral",
			"spotlight": true,
			"class": { "root": "[--spotlight-color:var(--ui-bg-inverted)]" }
		}
	],
	"defaultVariants": {
		"variant": "outline",
		"highlightColor": "primary",
		"spotlightColor": "primary"
	}
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageCard.vue
var _sfc_main$1 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UPageCard",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		reverse: {
			type: Boolean,
			required: false
		},
		highlight: {
			type: Boolean,
			required: false
		},
		highlightColor: {
			type: null,
			required: false
		},
		spotlight: {
			type: Boolean,
			required: false
		},
		spotlightColor: {
			type: null,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		to: {
			type: null,
			required: false
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		onClick: {
			type: Function,
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
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("pageCard", _props);
		const cardRef = (0, vue_exports.ref)();
		const motionControl = pausableFilter();
		const appConfig = useAppConfig();
		const { elementX, elementY } = useMouseInElement(cardRef, { eventFilter: motionControl.eventFilter });
		const prefix = usePrefix();
		const spotlight = (0, vue_exports.computed)(() => props.spotlight && (elementX.value !== 0 || elementY.value !== 0));
		(0, vue_exports.watch)(() => props.spotlight, (value) => {
			if (value) motionControl.resume();
			else motionControl.pause();
		}, { immediate: true });
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_card_default,
			...appConfig.ui?.pageCard || {}
		})({
			orientation: props.orientation,
			reverse: props.reverse,
			variant: props.variant,
			to: !!props.to || !!props.onClick,
			title: !!props.title || !!slots.title,
			highlight: props.highlight,
			highlightColor: props.highlightColor,
			spotlight: spotlight.value,
			spotlightColor: props.spotlightColor
		}));
		const ariaLabel = (0, vue_exports.computed)(() => {
			return (slots.title && getSlotChildrenText(slots.title()) || props.title || "Card link").trim();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
				ref_key: "cardRef",
				ref: cardRef,
				as: (0, vue_exports.unref)(props).as
			}, !(0, vue_exports.unref)(props).to ? _ctx.$attrs : {}, {
				"data-orientation": (0, vue_exports.unref)(props).orientation,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] }),
				style: spotlight.value && {
					"--spotlight-x": `${(0, vue_exports.unref)(elementX)}px`,
					"--spotlight-y": `${(0, vue_exports.unref)(elementY)}px`
				},
				onClick: (0, vue_exports.unref)(props).onClick
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						if ((0, vue_exports.unref)(props).spotlight) _push(`<div data-slot="spotlight" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.spotlight({ class: (0, vue_exports.unref)(props).ui?.spotlight }))}"${_scopeId}></div>`);
						else _push(`<!---->`);
						_push(`<div data-slot="container" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container }))}"${_scopeId}>`);
						if (!!slots.header || (0, vue_exports.unref)(props).icon || !!slots.leading || !!slots.body || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.footer) {
							_push(`<div data-slot="wrapper" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper }))}"${_scopeId}>`);
							if (!!slots.header) {
								_push(`<div data-slot="header" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header }))}"${_scopeId}>`);
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "header", {}, null, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							if ((0, vue_exports.unref)(props).icon || !!slots.leading) {
								_push(`<div data-slot="leading" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.leading({ class: (0, vue_exports.unref)(props).ui?.leading }))}"${_scopeId}>`);
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => {
									if ((0, vue_exports.unref)(props).icon) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$9, {
										name: (0, vue_exports.unref)(props).icon,
										"data-slot": "leadingIcon",
										class: ui.value.leadingIcon({ class: (0, vue_exports.unref)(props).ui?.leadingIcon })
									}, null, _parent, _scopeId));
									else _push(`<!---->`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							if (!!slots.body || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description) {
								_push(`<div data-slot="body" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body }))}"${_scopeId}>`);
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "body", {}, () => {
									if ((0, vue_exports.unref)(props).title || !!slots.title) {
										_push(`<div data-slot="title" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title }))}"${_scopeId}>`);
										(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "title", {}, () => {
											_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).title)}`);
										}, _push, _parent, _scopeId);
										_push(`</div>`);
									} else _push(`<!---->`);
									if ((0, vue_exports.unref)(props).description || !!slots.description) {
										_push(`<div data-slot="description" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description }))}"${_scopeId}>`);
										(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "description", {}, () => {
											_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).description)}`);
										}, _push, _parent, _scopeId);
										_push(`</div>`);
									} else _push(`<!---->`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							if (!!slots.footer) {
								_push(`<div data-slot="footer" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer }))}"${_scopeId}>`);
								(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "footer", {}, null, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`</div>`);
						if ((0, vue_exports.unref)(props).to) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$a, (0, vue_exports.mergeProps)({ "aria-label": ariaLabel.value }, {
							"to": (0, vue_exports.unref)(props).to,
							"target": (0, vue_exports.unref)(props).target,
							..._ctx.$attrs,
							"data-slot": void 0
						}, {
							class: (0, vue_exports.unref)(prefix)("focus:outline-none peer"),
							raw: ""
						}), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span class="${(0, server_renderer_exports.ssrRenderClass)((0, vue_exports.unref)(prefix)("absolute inset-0"))}" aria-hidden="true"${_scopeId}></span>`);
								else return [(0, vue_exports.createVNode)("span", {
									class: (0, vue_exports.unref)(prefix)("absolute inset-0"),
									"aria-hidden": "true"
								}, null, 2)];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
					} else return [
						(0, vue_exports.unref)(props).spotlight ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							"data-slot": "spotlight",
							class: ui.value.spotlight({ class: (0, vue_exports.unref)(props).ui?.spotlight })
						}, null, 2)) : (0, vue_exports.createCommentVNode)("", true),
						(0, vue_exports.createVNode)("div", {
							"data-slot": "container",
							class: ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container })
						}, [!!slots.header || (0, vue_exports.unref)(props).icon || !!slots.leading || !!slots.body || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.footer ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							"data-slot": "wrapper",
							class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
						}, [
							!!slots.header ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 0,
								"data-slot": "header",
								class: ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header })
							}, [(0, vue_exports.renderSlot)(_ctx.$slots, "header")], 2)) : (0, vue_exports.createCommentVNode)("", true),
							(0, vue_exports.unref)(props).icon || !!slots.leading ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 1,
								"data-slot": "leading",
								class: ui.value.leading({ class: (0, vue_exports.unref)(props).ui?.leading })
							}, [(0, vue_exports.renderSlot)(_ctx.$slots, "leading", { ui: ui.value }, () => [(0, vue_exports.unref)(props).icon ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$9, {
								key: 0,
								name: (0, vue_exports.unref)(props).icon,
								"data-slot": "leadingIcon",
								class: ui.value.leadingIcon({ class: (0, vue_exports.unref)(props).ui?.leadingIcon })
							}, null, 8, ["name", "class"])) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
							!!slots.body || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 2,
								"data-slot": "body",
								class: ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body })
							}, [(0, vue_exports.renderSlot)(_ctx.$slots, "body", {}, () => [(0, vue_exports.unref)(props).title || !!slots.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 0,
								"data-slot": "title",
								class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
							}, [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 1,
								"data-slot": "description",
								class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
							}, [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
							!!slots.footer ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 3,
								"data-slot": "footer",
								class: ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer })
							}, [(0, vue_exports.renderSlot)(_ctx.$slots, "footer")], 2)) : (0, vue_exports.createCommentVNode)("", true)
						], 2)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.renderSlot)(_ctx.$slots, "default")], 2),
						(0, vue_exports.unref)(props).to ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$a, (0, vue_exports.mergeProps)({
							key: 1,
							"aria-label": ariaLabel.value
						}, {
							"to": (0, vue_exports.unref)(props).to,
							"target": (0, vue_exports.unref)(props).target,
							..._ctx.$attrs,
							"data-slot": void 0
						}, {
							class: (0, vue_exports.unref)(prefix)("focus:outline-none peer"),
							raw: ""
						}), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)("span", {
								class: (0, vue_exports.unref)(prefix)("absolute inset-0"),
								"aria-hidden": "true"
							}, null, 2)]),
							_: 1
						}, 16, ["aria-label", "class"])) : (0, vue_exports.createCommentVNode)("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageCard.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpage-cta.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_cta_default = {
	"slots": {
		"root": "relative isolate rounded-xl overflow-hidden",
		"container": "flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16",
		"wrapper": "",
		"header": "",
		"title": "text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted",
		"description": "text-base sm:text-lg text-muted",
		"body": "mt-8",
		"footer": "mt-8",
		"links": "flex flex-wrap gap-x-6 gap-y-3"
	},
	"variants": {
		"orientation": {
			"horizontal": {
				"container": "lg:grid-cols-2 lg:items-center",
				"description": "text-pretty"
			},
			"vertical": {
				"container": "",
				"title": "text-center",
				"description": "text-center text-balance",
				"links": "justify-center"
			}
		},
		"reverse": { "true": { "wrapper": "order-last" } },
		"variant": {
			"solid": {
				"root": "bg-inverted text-inverted",
				"title": "text-inverted",
				"description": "text-dimmed"
			},
			"outline": {
				"root": "bg-default ring ring-default",
				"description": "text-muted"
			},
			"soft": {
				"root": "bg-elevated/50",
				"description": "text-toned"
			},
			"subtle": {
				"root": "bg-elevated/50 ring ring-default",
				"description": "text-toned"
			},
			"naked": { "description": "text-muted" }
		},
		"title": { "true": { "description": "mt-6" } }
	},
	"defaultVariants": { "variant": "outline" }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageCTA.vue
var _sfc_main = {
	__name: "UPageCTA",
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
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		reverse: {
			type: Boolean,
			required: false,
			default: false
		},
		variant: {
			type: null,
			required: false
		},
		links: {
			type: Array,
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
		const props = useComponentProps("pageCTA", _props);
		const appConfig = useAppConfig();
		const prefix = usePrefix();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_cta_default,
			...appConfig.ui?.pageCTA || {}
		})({
			variant: props.variant,
			orientation: props.orientation,
			reverse: props.reverse,
			title: !!props.title || !!slots.title
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
				as: (0, vue_exports.unref)(props).as,
				"data-orientation": (0, vue_exports.unref)(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "top", {}, null, _push, _parent, _scopeId);
						_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$18, {
							"data-slot": "container",
							class: ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container })
						}, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (!!slots.header || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.body || !!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links) {
										_push(`<div data-slot="wrapper" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper }))}"${_scopeId}>`);
										if (!!slots.header || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description) {
											_push(`<div data-slot="header" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header }))}"${_scopeId}>`);
											(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "header", {}, () => {
												if ((0, vue_exports.unref)(props).title || !!slots.title) {
													_push(`<h2 data-slot="title" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "title", {}, () => {
														_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).title)}`);
													}, _push, _parent, _scopeId);
													_push(`</h2>`);
												} else _push(`<!---->`);
												if ((0, vue_exports.unref)(props).description || !!slots.description) {
													_push(`<div data-slot="description" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "description", {}, () => {
														_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).description)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.body) {
											_push(`<div data-slot="body" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body }))}"${_scopeId}>`);
											(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "body", {}, null, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links) {
											_push(`<div data-slot="footer" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer }))}"${_scopeId}>`);
											(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "footer", {}, () => {
												if ((0, vue_exports.unref)(props).links?.length || !!slots.links) {
													_push(`<div data-slot="links" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.links({ class: (0, vue_exports.unref)(props).ui?.links }))}"${_scopeId}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "links", {}, () => {
														_push(`<!--[-->`);
														(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(props).links, (link, index) => {
															_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$24, (0, vue_exports.mergeProps)({
																key: index,
																size: "lg"
															}, { ref_for: true }, link), null, _parent, _scopeId));
														});
														_push(`<!--]-->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										_push(`</div>`);
									} else _push(`<!---->`);
									if (!!slots.default) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
									else if ((0, vue_exports.unref)(props).orientation === "horizontal") _push(`<div class="${(0, server_renderer_exports.ssrRenderClass)((0, vue_exports.unref)(prefix)("hidden lg:block"))}"${_scopeId}></div>`);
									else _push(`<!---->`);
								} else return [!!slots.header || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.body || !!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 0,
									"data-slot": "wrapper",
									class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
								}, [
									!!slots.header || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 0,
										"data-slot": "header",
										class: ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "header", {}, () => [(0, vue_exports.unref)(props).title || !!slots.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("h2", {
										key: 0,
										"data-slot": "title",
										class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 1,
										"data-slot": "description",
										class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
									!!slots.body ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 1,
										"data-slot": "body",
										class: ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "body")], 2)) : (0, vue_exports.createCommentVNode)("", true),
									!!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 2,
										"data-slot": "footer",
										class: ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "footer", {}, () => [(0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 0,
										"data-slot": "links",
										class: ui.value.links({ class: (0, vue_exports.unref)(props).ui?.links })
									}, [(0, vue_exports.renderSlot)(_ctx.$slots, "links", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).links, (link, index) => {
										return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$24, (0, vue_exports.mergeProps)({
											key: index,
											size: "lg"
										}, { ref_for: true }, link), null, 16);
									}), 128))])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
								], 2)) : (0, vue_exports.createCommentVNode)("", true), !!slots.default ? (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, void 0, 1) : (0, vue_exports.unref)(props).orientation === "horizontal" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 2,
									class: (0, vue_exports.unref)(prefix)("hidden lg:block")
								}, null, 2)) : (0, vue_exports.createCommentVNode)("", true)];
							}),
							_: 3
						}, _parent, _scopeId));
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "bottom", {}, null, _push, _parent, _scopeId);
					} else return [
						(0, vue_exports.renderSlot)(_ctx.$slots, "top"),
						(0, vue_exports.createVNode)(_sfc_main$18, {
							"data-slot": "container",
							class: ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container })
						}, {
							default: (0, vue_exports.withCtx)(() => [!!slots.header || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description || !!slots.body || !!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 0,
								"data-slot": "wrapper",
								class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
							}, [
								!!slots.header || (0, vue_exports.unref)(props).title || !!slots.title || (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 0,
									"data-slot": "header",
									class: ui.value.header({ class: (0, vue_exports.unref)(props).ui?.header })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "header", {}, () => [(0, vue_exports.unref)(props).title || !!slots.title ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("h2", {
									key: 0,
									"data-slot": "title",
									class: ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "title", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).title), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.unref)(props).description || !!slots.description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 1,
									"data-slot": "description",
									class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "description", {}, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true),
								!!slots.body ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 1,
									"data-slot": "body",
									class: ui.value.body({ class: (0, vue_exports.unref)(props).ui?.body })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "body")], 2)) : (0, vue_exports.createCommentVNode)("", true),
								!!slots.footer || (0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 2,
									"data-slot": "footer",
									class: ui.value.footer({ class: (0, vue_exports.unref)(props).ui?.footer })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "footer", {}, () => [(0, vue_exports.unref)(props).links?.length || !!slots.links ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: 0,
									"data-slot": "links",
									class: ui.value.links({ class: (0, vue_exports.unref)(props).ui?.links })
								}, [(0, vue_exports.renderSlot)(_ctx.$slots, "links", {}, () => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(props).links, (link, index) => {
									return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$24, (0, vue_exports.mergeProps)({
										key: index,
										size: "lg"
									}, { ref_for: true }, link), null, 16);
								}), 128))])], 2)) : (0, vue_exports.createCommentVNode)("", true)])], 2)) : (0, vue_exports.createCommentVNode)("", true)
							], 2)) : (0, vue_exports.createCommentVNode)("", true), !!slots.default ? (0, vue_exports.renderSlot)(_ctx.$slots, "default", {}, void 0, void 0, 1) : (0, vue_exports.unref)(props).orientation === "horizontal" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 2,
								class: (0, vue_exports.unref)(prefix)("hidden lg:block")
							}, null, 2)) : (0, vue_exports.createCommentVNode)("", true)]),
							_: 3
						}, 8, ["class"]),
						(0, vue_exports.renderSlot)(_ctx.$slots, "bottom")
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/PageCTA.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fcontent%2Fmanifest.ts
var checksums = { "content": "v3.5.0--0p8ezlmsLmqqDW88zBVZM3JumTh71hJNxj1hs38SDMo" };
var tables = {
	"content": "_content_content",
	"info": "_content_info"
};
//#endregion
//#region node_modules/.pnpm/@nuxt+content@3.15.2_@oxc-project+types@0.142.0_@valibot+to-json-schema@1.7.1_valibot@1_403b7ecb83f3767cc7a0a0068e5faeb0/node_modules/@nuxt/content/dist/runtime/internal/query.js
var buildGroup = (group, type) => {
	const conditions = group._conditions;
	return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
var collectionQueryGroup = (collection) => {
	const conditions = [];
	const query = {
		_conditions: conditions,
		where(field, operator, value) {
			let condition;
			switch (operator.toUpperCase()) {
				case "IN":
				case "NOT IN":
					if (Array.isArray(value)) {
						const values = value.map((val) => singleQuote(val)).join(", ");
						condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
					} else throw new TypeError(`Value for ${operator} must be an array`);
					break;
				case "BETWEEN":
				case "NOT BETWEEN":
					if (Array.isArray(value) && value.length === 2) condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
					else throw new Error(`Value for ${operator} must be an array with two elements`);
					break;
				case "IS NULL":
				case "IS NOT NULL":
					condition = `"${String(field)}" ${operator.toUpperCase()}`;
					break;
				case "LIKE":
				case "NOT LIKE":
					condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
					break;
				default: condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
			}
			conditions.push(`${condition}`);
			return query;
		},
		andWhere(groupFactory) {
			const group = groupFactory(collectionQueryGroup());
			conditions.push(buildGroup(group, "AND"));
			return query;
		},
		orWhere(groupFactory) {
			const group = groupFactory(collectionQueryGroup());
			conditions.push(buildGroup(group, "OR"));
			return query;
		}
	};
	return query;
};
var collectionQueryBuilder = (collection, fetch) => {
	const params = {
		conditions: [],
		selectedFields: [],
		offset: 0,
		limit: 0,
		orderBy: [],
		count: {
			field: "",
			distinct: false
		}
	};
	const query = {
		__params: params,
		andWhere(groupFactory) {
			const group = groupFactory(collectionQueryGroup());
			params.conditions.push(buildGroup(group, "AND"));
			return query;
		},
		orWhere(groupFactory) {
			const group = groupFactory(collectionQueryGroup());
			params.conditions.push(buildGroup(group, "OR"));
			return query;
		},
		path(path) {
			return query.where("path", "=", withoutTrailingSlash(path));
		},
		skip(skip) {
			params.offset = skip;
			return query;
		},
		where(field, operator, value) {
			query.andWhere((group) => group.where(String(field), operator, value));
			return query;
		},
		limit(limit) {
			params.limit = limit;
			return query;
		},
		select(...fields) {
			if (fields.length) params.selectedFields.push(...fields);
			return query;
		},
		order(field, direction) {
			params.orderBy.push(`"${String(field)}" ${direction}`);
			return query;
		},
		async all() {
			return fetch(collection, buildQuery()).then((res) => res || []);
		},
		async first() {
			return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
		},
		async count(field = "*", distinct = false) {
			return fetch(collection, buildQuery({ count: {
				field: String(field),
				distinct
			} })).then((m) => m[0].count);
		}
	};
	function buildQuery(opts = {}) {
		let query2 = "SELECT ";
		if (opts?.count) query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
		else {
			const fields = Array.from(new Set(params.selectedFields));
			query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
		}
		query2 += ` FROM ${tables[String(collection)]}`;
		if (params.conditions.length > 0) query2 += ` WHERE ${params.conditions.join(" AND ")}`;
		if (params.orderBy.length > 0) query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
		else query2 += ` ORDER BY stem ASC`;
		const limit = opts?.limit || params.limit;
		if (limit > 0) if (params.offset > 0) query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
		else query2 += ` LIMIT ${limit}`;
		return query2;
	}
	return query;
};
function singleQuote(value) {
	return `'${String(value).replace(/'/g, "''")}'`;
}
//#endregion
//#region node_modules/.pnpm/@nuxt+content@3.15.2_@oxc-project+types@0.142.0_@valibot+to-json-schema@1.7.1_valibot@1_403b7ecb83f3767cc7a0a0068e5faeb0/node_modules/@nuxt/content/dist/runtime/internal/api.js
async function fetchContent(event, collection, path, options) {
	const headers = event ? getRequestHeaders(event) : {};
	headers["accept-encoding"] = void 0;
	const url = `/__nuxt_content/${collection}/${path}`;
	const fetchOptions = {
		...options,
		headers: {
			...headers,
			...options.headers
		},
		query: {
			v: checksums[String(collection)],
			t: void 0
		}
	};
	return event ? await event.$fetch(url, fetchOptions) : await $fetch(url, fetchOptions);
}
async function fetchQuery(event, collection, sql) {
	return fetchContent(event, collection, "query", {
		headers: { "content-type": "application/json" },
		method: "POST",
		body: { sql }
	});
}
//#endregion
//#region node_modules/.pnpm/@nuxt+content@3.15.2_@oxc-project+types@0.142.0_@valibot+to-json-schema@1.7.1_valibot@1_403b7ecb83f3767cc7a0a0068e5faeb0/node_modules/@nuxt/content/dist/runtime/client.js
var queryCollection = (collection) => {
	const event = tryUseNuxtApp()?.ssrContext?.event;
	return collectionQueryBuilder(collection, (collection2, sql) => executeContentQuery(event, collection2, sql));
};
async function executeContentQuery(event, collection, sql) {
	return fetchQuery(event, String(collection), sql);
}
//#endregion
//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { data: page } = ([__temp, __restore] = (0, vue_exports.withAsyncContext)(() => useAsyncData("index", () => queryCollection("content").first())), __temp = await __temp, __restore(), __temp);
		if (!page.value) throw createError$1({
			statusCode: 404,
			statusMessage: "Page not found",
			fatal: true
		});
		const title = page.value?.seo?.title || page.value?.title;
		const description = page.value?.seo?.description || page.value?.description;
		useSeoMeta$1({
			title,
			ogTitle: title,
			description,
			ogDescription: description
		});
		const heroTitle = (0, vue_exports.computed)(() => {
			const [primary = "", ...secondaryParts] = (page.value?.title ?? "").split("\n");
			return {
				primary,
				secondary: secondaryParts.join(" ").trim()
			};
		});
		function enterMotion(delay = 0) {
			return {
				initial: {
					opacity: 0,
					y: 16
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					delay
				}
			};
		}
		function scrollMotion(delay = 0) {
			return {
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				inViewOptions: {
					once: true,
					amount: 1
				},
				transition: {
					duration: .6,
					delay
				}
			};
		}
		function staggerMotion(index = 0) {
			return {
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				inViewOptions: {
					once: true,
					amount: 1
				},
				transition: {
					duration: .6,
					delay: index * .08
				}
			};
		}
		const { copy, copied } = useClipboard();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UPageHero = _sfc_main$7;
			const _component_Motion = Motion;
			const _component_HeroShaders = ServerPlaceholder;
			const _component_GradientGlow = GradientGlow_default;
			const _component_UBadge = _sfc_main$7$1;
			const _component_UChip = _sfc_main$1$1;
			const _component_UButton = _sfc_main$24;
			const _component_HeroTerminal = HeroTerminal_default;
			const _component_UPageLogos = _sfc_main$4;
			const _component_UPageSection = _sfc_main$2;
			const _component_UPageCard = _sfc_main$1;
			const _component_UPageCTA = _sfc_main;
			if ((0, vue_exports.unref)(page)) {
				_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)(_attrs)}>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_UPageHero, { ui: {
					root: "pb-24 sm:pb-32",
					container: "relative z-10 lg:py-32",
					wrapper: "flex flex-col items-center",
					title: "sm:text-6xl lg:text-7xl xl:text-[80px] tracking-tighter leading-[1.05]",
					description: "mt-5 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-default",
					links: "gap-3"
				} }, {
					top: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, staggerMotion(0), {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_HeroShaders, { class: "absolute top-0 inset-x-0 opacity-15 h-full" }, null, _parent, _scopeId));
									else return [(0, vue_exports.createVNode)(_component_HeroShaders, { class: "absolute top-0 inset-x-0 opacity-15 h-full" })];
								}),
								_: 1
							}, _parent, _scopeId));
							_push((0, server_renderer_exports.ssrRenderComponent)(_component_GradientGlow, { class: "top-0 w-2/3 h-1/2" }, null, _parent, _scopeId));
						} else return [(0, vue_exports.createVNode)(_component_Motion, staggerMotion(0), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_component_HeroShaders, { class: "absolute top-0 inset-x-0 opacity-15 h-full" })]),
							_: 1
						}, 16), (0, vue_exports.createVNode)(_component_GradientGlow, { class: "top-0 w-2/3 h-1/2" })];
					}),
					headline: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, enterMotion(.2), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_UBadge, {
									color: "neutral",
									variant: "soft",
									label: (0, vue_exports.unref)(page).hero.headline,
									class: "rounded-full px-3 py-1.5 gap-1.5 bg-white/5 backdrop-blur"
								}, {
									leading: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_UChip, {
											inset: "",
											standalone: "",
											ui: { base: "animate-pulse ring-0" }
										}, null, _parent, _scopeId));
										else return [(0, vue_exports.createVNode)(_component_UChip, {
											inset: "",
											standalone: "",
											ui: { base: "animate-pulse ring-0" }
										})];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [(0, vue_exports.createVNode)(_component_UBadge, {
									color: "neutral",
									variant: "soft",
									label: (0, vue_exports.unref)(page).hero.headline,
									class: "rounded-full px-3 py-1.5 gap-1.5 bg-white/5 backdrop-blur"
								}, {
									leading: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_component_UChip, {
										inset: "",
										standalone: "",
										ui: { base: "animate-pulse ring-0" }
									})]),
									_: 1
								}, 8, ["label"])];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, enterMotion(.2), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_component_UBadge, {
								color: "neutral",
								variant: "soft",
								label: (0, vue_exports.unref)(page).hero.headline,
								class: "rounded-full px-3 py-1.5 gap-1.5 bg-white/5 backdrop-blur"
							}, {
								leading: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_component_UChip, {
									inset: "",
									standalone: "",
									ui: { base: "animate-pulse ring-0" }
								})]),
								_: 1
							}, 8, ["label"])]),
							_: 1
						}, 16)];
					}),
					title: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, enterMotion(.35), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(heroTitle).primary)} `);
									if ((0, vue_exports.unref)(heroTitle).secondary) _push(`<br${_scopeId}>`);
									else _push(`<!---->`);
									if ((0, vue_exports.unref)(heroTitle).secondary) _push(`<span class="animate-shimmer bg-size-[200%_auto] bg-clip-text text-transparent" style="${(0, server_renderer_exports.ssrRenderStyle)({
										backgroundImage: "linear-gradient(135deg, var(--color-primary-400), var(--color-primary-300), var(--color-primary-200), var(--color-primary-100), var(--color-primary-200), var(--color-primary-300), var(--color-primary-400))",
										animationDuration: "10s"
									})}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(heroTitle).secondary)}</span>`);
									else _push(`<!---->`);
								} else return [
									(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(heroTitle).primary) + " ", 1),
									(0, vue_exports.unref)(heroTitle).secondary ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("br", { key: 0 })) : (0, vue_exports.createCommentVNode)("", true),
									(0, vue_exports.unref)(heroTitle).secondary ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
										key: 1,
										class: "animate-shimmer bg-size-[200%_auto] bg-clip-text text-transparent",
										style: {
											backgroundImage: "linear-gradient(135deg, var(--color-primary-400), var(--color-primary-300), var(--color-primary-200), var(--color-primary-100), var(--color-primary-200), var(--color-primary-300), var(--color-primary-400))",
											animationDuration: "10s"
										}
									}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(heroTitle).secondary), 1)) : (0, vue_exports.createCommentVNode)("", true)
								];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, enterMotion(.35), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [
								(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(heroTitle).primary) + " ", 1),
								(0, vue_exports.unref)(heroTitle).secondary ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("br", { key: 0 })) : (0, vue_exports.createCommentVNode)("", true),
								(0, vue_exports.unref)(heroTitle).secondary ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
									key: 1,
									class: "animate-shimmer bg-size-[200%_auto] bg-clip-text text-transparent",
									style: {
										backgroundImage: "linear-gradient(135deg, var(--color-primary-400), var(--color-primary-300), var(--color-primary-200), var(--color-primary-100), var(--color-primary-200), var(--color-primary-300), var(--color-primary-400))",
										animationDuration: "10s"
									}
								}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(heroTitle).secondary), 1)) : (0, vue_exports.createCommentVNode)("", true)
							]),
							_: 1
						}, 16)];
					}),
					description: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, enterMotion(.5), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).description)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).description), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, enterMotion(.5), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).description), 1)]),
							_: 1
						}, 16)];
					}),
					links: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ class: "flex flex-wrap justify-center gap-6" }, enterMotion(.65)), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<!--[-->`);
									(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(page).hero.links, (link) => {
										_push((0, server_renderer_exports.ssrRenderComponent)(_component_UButton, (0, vue_exports.mergeProps)({ key: link.label }, { ref_for: true }, link), null, _parent, _scopeId));
									});
									_push(`<!--]-->`);
								} else return [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(page).hero.links, (link) => {
									return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_component_UButton, (0, vue_exports.mergeProps)({ key: link.label }, { ref_for: true }, link), null, 16);
								}), 128))];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ class: "flex flex-wrap justify-center gap-6" }, enterMotion(.65)), {
							default: (0, vue_exports.withCtx)(() => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(page).hero.links, (link) => {
								return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_component_UButton, (0, vue_exports.mergeProps)({ key: link.label }, { ref_for: true }, link), null, 16);
							}), 128))]),
							_: 1
						}, 16)];
					}),
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ "as-child": "" }, enterMotion(.85), { class: "max-w-2xl mx-auto w-full" }), {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_HeroTerminal, { lines: (0, vue_exports.unref)(page).terminal.lines }, null, _parent, _scopeId));
									else return [(0, vue_exports.createVNode)(_component_HeroTerminal, { lines: (0, vue_exports.unref)(page).terminal.lines }, null, 8, ["lines"])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ class: "max-w-lg mx-auto w-full" }, scrollMotion(.95)), {
								default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
									if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_UPageLogos, {
										title: (0, vue_exports.unref)(page).logos.title,
										items: (0, vue_exports.unref)(page).logos.items,
										ui: {
											title: "font-mono uppercase text-xs tracking-[0.12em] text-dimmed",
											logos: "gap-0",
											logo: "text-muted size-6"
										}
									}, null, _parent, _scopeId));
									else return [(0, vue_exports.createVNode)(_component_UPageLogos, {
										title: (0, vue_exports.unref)(page).logos.title,
										items: (0, vue_exports.unref)(page).logos.items,
										ui: {
											title: "font-mono uppercase text-xs tracking-[0.12em] text-dimmed",
											logos: "gap-0",
											logo: "text-muted size-6"
										}
									}, null, 8, ["title", "items"])];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ "as-child": "" }, enterMotion(.85), { class: "max-w-2xl mx-auto w-full" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_component_HeroTerminal, { lines: (0, vue_exports.unref)(page).terminal.lines }, null, 8, ["lines"])]),
							_: 1
						}, 16), (0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ class: "max-w-lg mx-auto w-full" }, scrollMotion(.95)), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_component_UPageLogos, {
								title: (0, vue_exports.unref)(page).logos.title,
								items: (0, vue_exports.unref)(page).logos.items,
								ui: {
									title: "font-mono uppercase text-xs tracking-[0.12em] text-dimmed",
									logos: "gap-0",
									logo: "text-muted size-6"
								}
							}, null, 8, ["title", "items"])]),
							_: 1
						}, 16)];
					}),
					_: 1
				}, _parent));
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_UPageSection, {
					id: "features",
					ui: {
						root: "py-24 sm:py-32 scroll-mt-(--ui-header-height)",
						container: "max-w-5xl",
						headline: "font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center",
						title: "max-w-lg mx-auto",
						description: "max-w-md mx-auto text-dimmed"
					}
				}, {
					headline: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).features.headline)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).features.headline), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).features.headline), 1)]),
							_: 1
						}, 16)];
					}),
					title: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.1), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).features.title)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).features.title), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.1), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).features.title), 1)]),
							_: 1
						}, 16)];
					}),
					description: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.2), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).features.description)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).features.description), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.2), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).features.description), 1)]),
							_: 1
						}, 16)];
					}),
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="rounded-2xl border border-default bg-default overflow-hidden"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(page).features.items, (feature, index) => {
								_push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ key: feature.title }, { ref_for: true }, staggerMotion(index)), {
									default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_UPageCard, {
											icon: feature.icon,
											title: feature.title,
											description: feature.description,
											class: "rounded-none duration-300",
											to: "#",
											ui: {
												leading: "mb-5 flex size-9 justify-center rounded-lg bg-primary/10",
												title: "text-sm tracking-tight",
												description: "text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed"
											}
										}, null, _parent, _scopeId));
										else return [(0, vue_exports.createVNode)(_component_UPageCard, {
											icon: feature.icon,
											title: feature.title,
											description: feature.description,
											class: "rounded-none duration-300",
											to: "#",
											ui: {
												leading: "mb-5 flex size-9 justify-center rounded-lg bg-primary/10",
												title: "text-sm tracking-tight",
												description: "text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed"
											}
										}, null, 8, [
											"icon",
											"title",
											"description"
										])];
									}),
									_: 2
								}, _parent, _scopeId));
							});
							_push(`<!--]--></div></div>`);
						} else return [(0, vue_exports.createVNode)("div", { class: "rounded-2xl border border-default bg-default overflow-hidden" }, [(0, vue_exports.createVNode)("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(page).features.items, (feature, index) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_component_Motion, (0, vue_exports.mergeProps)({ key: feature.title }, { ref_for: true }, staggerMotion(index)), {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_component_UPageCard, {
									icon: feature.icon,
									title: feature.title,
									description: feature.description,
									class: "rounded-none duration-300",
									to: "#",
									ui: {
										leading: "mb-5 flex size-9 justify-center rounded-lg bg-primary/10",
										title: "text-sm tracking-tight",
										description: "text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed"
									}
								}, null, 8, [
									"icon",
									"title",
									"description"
								])]),
								_: 2
							}, 1040);
						}), 128))])])];
					}),
					_: 1
				}, _parent));
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_UPageSection, {
					id: "metrics",
					ui: {
						root: "py-24 sm:py-32 scroll-mt-(--ui-header-height)",
						container: "max-w-5xl",
						headline: "font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center",
						title: "max-w-lg mx-auto",
						description: "max-w-md mx-auto text-dimmed"
					}
				}, {
					headline: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).metrics.headline)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).metrics.headline), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).metrics.headline), 1)]),
							_: 1
						}, 16)];
					}),
					title: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.1), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).metrics.title)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).metrics.title), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.1), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).metrics.title), 1)]),
							_: 1
						}, 16)];
					}),
					description: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.2), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).metrics.description)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).metrics.description), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.2), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).metrics.description), 1)]),
							_: 1
						}, 16)];
					}),
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="rounded-2xl border border-default bg-default overflow-hidden"${_scopeId}><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(page).metrics.items, (metric, index) => {
								_push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ key: metric.label }, { ref_for: true }, staggerMotion(index)), {
									default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_UPageCard, {
											title: metric.value,
											description: metric.label,
											class: "rounded-none duration-300",
											to: "#",
											ui: {
												root: "text-center",
												wrapper: "items-center",
												title: ["text-4xl font-bold tracking-tight leading-none", metric.class],
												description: "font-mono text-xs uppercase tracking-[0.06em] text-dimmed mt-3"
											}
										}, null, _parent, _scopeId));
										else return [(0, vue_exports.createVNode)(_component_UPageCard, {
											title: metric.value,
											description: metric.label,
											class: "rounded-none duration-300",
											to: "#",
											ui: {
												root: "text-center",
												wrapper: "items-center",
												title: ["text-4xl font-bold tracking-tight leading-none", metric.class],
												description: "font-mono text-xs uppercase tracking-[0.06em] text-dimmed mt-3"
											}
										}, null, 8, [
											"title",
											"description",
											"ui"
										])];
									}),
									_: 2
								}, _parent, _scopeId));
							});
							_push(`<!--]--></div></div>`);
						} else return [(0, vue_exports.createVNode)("div", { class: "rounded-2xl border border-default bg-default overflow-hidden" }, [(0, vue_exports.createVNode)("div", { class: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(page).metrics.items, (metric, index) => {
							return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_component_Motion, (0, vue_exports.mergeProps)({ key: metric.label }, { ref_for: true }, staggerMotion(index)), {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)(_component_UPageCard, {
									title: metric.value,
									description: metric.label,
									class: "rounded-none duration-300",
									to: "#",
									ui: {
										root: "text-center",
										wrapper: "items-center",
										title: ["text-4xl font-bold tracking-tight leading-none", metric.class],
										description: "font-mono text-xs uppercase tracking-[0.06em] text-dimmed mt-3"
									}
								}, null, 8, [
									"title",
									"description",
									"ui"
								])]),
								_: 2
							}, 1040);
						}), 128))])])];
					}),
					_: 1
				}, _parent));
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_UPageCTA, {
					variant: "naked",
					ui: {
						root: "py-24 sm:py-32",
						container: "max-w-3xl text-center",
						title: "lg:text-5xl tracking-tighter whitespace-pre-line",
						description: "mx-auto max-w-sm leading-relaxed text-dimmed"
					}
				}, {
					top: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_GradientGlow, { class: "bottom-0 w-2/3 h-1/2" }, null, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_GradientGlow, { class: "bottom-0 w-2/3 h-1/2" })];
					}),
					title: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).cta.title)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).cta.title), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).cta.title), 1)]),
							_: 1
						}, 16)];
					}),
					description: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.1), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(page).cta.description)}`);
								else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).cta.description), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ as: "span" }, scrollMotion(.1), { class: "inline-block" }), {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(page).cta.description), 1)]),
							_: 1
						}, 16)];
					}),
					links: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push((0, server_renderer_exports.ssrRenderComponent)(_component_Motion, (0, vue_exports.mergeProps)({ class: "flex flex-col items-center justify-center gap-6" }, scrollMotion(.2)), {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<!--[-->`);
									(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(page).cta.links, (link) => {
										_push((0, server_renderer_exports.ssrRenderComponent)(_component_UButton, (0, vue_exports.mergeProps)({ key: link.label }, { ref_for: true }, link, { size: "xl" }), null, _parent, _scopeId));
									});
									_push(`<!--]-->`);
									_push((0, server_renderer_exports.ssrRenderComponent)(_component_UButton, {
										label: (0, vue_exports.unref)(page).cta.command,
										"trailing-icon": (0, vue_exports.unref)(copied) ? "i-lucide-copy-check" : "i-lucide-copy",
										color: "neutral",
										variant: "subtle",
										class: "font-mono font-light text-toned gap-4",
										size: "xl",
										ui: { trailingIcon: "size-5" },
										onClick: ($event) => (0, vue_exports.unref)(copy)((0, vue_exports.unref)(page).cta.command)
									}, null, _parent, _scopeId));
								} else return [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(page).cta.links, (link) => {
									return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_component_UButton, (0, vue_exports.mergeProps)({ key: link.label }, { ref_for: true }, link, { size: "xl" }), null, 16);
								}), 128)), (0, vue_exports.createVNode)(_component_UButton, {
									label: (0, vue_exports.unref)(page).cta.command,
									"trailing-icon": (0, vue_exports.unref)(copied) ? "i-lucide-copy-check" : "i-lucide-copy",
									color: "neutral",
									variant: "subtle",
									class: "font-mono font-light text-toned gap-4",
									size: "xl",
									ui: { trailingIcon: "size-5" },
									onClick: ($event) => (0, vue_exports.unref)(copy)((0, vue_exports.unref)(page).cta.command)
								}, null, 8, [
									"label",
									"trailing-icon",
									"onClick"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [(0, vue_exports.createVNode)(_component_Motion, (0, vue_exports.mergeProps)({ class: "flex flex-col items-center justify-center gap-6" }, scrollMotion(.2)), {
							default: (0, vue_exports.withCtx)(() => [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(page).cta.links, (link) => {
								return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_component_UButton, (0, vue_exports.mergeProps)({ key: link.label }, { ref_for: true }, link, { size: "xl" }), null, 16);
							}), 128)), (0, vue_exports.createVNode)(_component_UButton, {
								label: (0, vue_exports.unref)(page).cta.command,
								"trailing-icon": (0, vue_exports.unref)(copied) ? "i-lucide-copy-check" : "i-lucide-copy",
								color: "neutral",
								variant: "subtle",
								class: "font-mono font-light text-toned gap-4",
								size: "xl",
								ui: { trailingIcon: "size-5" },
								onClick: ($event) => (0, vue_exports.unref)(copy)((0, vue_exports.unref)(page).cta.command)
							}, null, 8, [
								"label",
								"trailing-icon",
								"onClick"
							])]),
							_: 1
						}, 16)];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-5-GLm4Od.mjs.map
