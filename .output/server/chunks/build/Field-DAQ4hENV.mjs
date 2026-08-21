import { ah as vue_exports, a1 as useComponentProps, Y as useAppConfig, X as tv, U as server_renderer_exports, i as Primitive } from '../virtual/entry.mjs';
import { s as ssrRenderSlot } from './ssrSlot-Ix4Uittx.mjs';
import { r as renderSlot } from './slot-D8jiLovS.mjs';
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

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Ffield.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Ffield_default = { "slots": {
	"root": "my-5",
	"container": "flex items-center gap-3 font-mono text-sm",
	"name": "font-semibold text-primary",
	"wrapper": "flex-1 flex items-center gap-1.5 text-xs",
	"required": "rounded-sm bg-error/10 text-error px-1.5 py-0.5",
	"type": "rounded-sm bg-elevated text-toned px-1.5 py-0.5",
	"description": "mt-3 text-muted text-sm [&_code]:text-xs/4"
} };
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue
var _sfc_main = {
	__name: "ProseField",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		type: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		required: {
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
		const props = useComponentProps("prose.field", _props);
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Ffield_default,
			...appConfig.ui?.prose?.field || {}
		})());
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({
				as: (0, vue_exports.unref)(props).as,
				class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] })
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container }))}"${_scopeId}>`);
						if ((0, vue_exports.unref)(props).name) _push(`<span class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.name({ class: (0, vue_exports.unref)(props).ui?.name }))}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).name)}</span>`);
						else _push(`<!---->`);
						if ((0, vue_exports.unref)(props).type || (0, vue_exports.unref)(props).required) {
							_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper }))}"${_scopeId}>`);
							if ((0, vue_exports.unref)(props).type) _push(`<span class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.type({ class: (0, vue_exports.unref)(props).ui?.type }))}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).type)}</span>`);
							else _push(`<!---->`);
							if ((0, vue_exports.unref)(props).required) _push(`<span class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.required({ class: (0, vue_exports.unref)(props).ui?.required }))}"${_scopeId}> required </span>`);
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if (!!slots.default || (0, vue_exports.unref)(props).description) {
							_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => {
								_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).description)}`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [(0, vue_exports.createVNode)("div", { class: ui.value.container({ class: (0, vue_exports.unref)(props).ui?.container }) }, [(0, vue_exports.unref)(props).name ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
						key: 0,
						class: ui.value.name({ class: (0, vue_exports.unref)(props).ui?.name })
					}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).name), 3)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.unref)(props).type || (0, vue_exports.unref)(props).required ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
						key: 1,
						class: ui.value.wrapper({ class: (0, vue_exports.unref)(props).ui?.wrapper })
					}, [(0, vue_exports.unref)(props).type ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
						key: 0,
						class: ui.value.type({ class: (0, vue_exports.unref)(props).ui?.type })
					}, (0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).type), 3)) : (0, vue_exports.createCommentVNode)("", true), (0, vue_exports.unref)(props).required ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
						key: 1,
						class: ui.value.required({ class: (0, vue_exports.unref)(props).ui?.required })
					}, " required ", 2)) : (0, vue_exports.createCommentVNode)("", true)], 2)) : (0, vue_exports.createCommentVNode)("", true)], 2), !!slots.default || (0, vue_exports.unref)(props).description ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
						key: 0,
						class: ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description })
					}, [renderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)((0, vue_exports.unref)(props).description), 1)])], 2)) : (0, vue_exports.createCommentVNode)("", true)];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Field-DAQ4hENV.mjs.map
