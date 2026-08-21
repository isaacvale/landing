import { ah as vue_exports, a1 as useComponentProps, Y as useAppConfig, X as tv, U as server_renderer_exports, l as _sfc_main$1, k as _sfc_main$2 } from '../virtual/entry.mjs';
import { s as ssrRenderSlot } from './ssrSlot-Ix4Uittx.mjs';
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

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fcard.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcard_default = {
	"slots": {
		"base": ["group relative block my-5 p-4 sm:p-6 border border-default rounded-md bg-default", "transition-colors"],
		"icon": "size-6 mb-2 block",
		"title": "text-highlighted font-semibold",
		"description": "text-[15px] text-muted *:first:mt-0 *:last:mb-0 *:my-1",
		"externalIcon": ["size-4 align-top absolute end-2 top-2 text-dimmed pointer-events-none", "transition-colors"]
	},
	"variants": {
		"color": {
			"primary": { "icon": "text-primary" },
			"secondary": { "icon": "text-secondary" },
			"success": { "icon": "text-success" },
			"info": { "icon": "text-info" },
			"warning": { "icon": "text-warning" },
			"error": { "icon": "text-error" },
			"neutral": { "icon": "text-highlighted" }
		},
		"to": { "true": "" },
		"title": { "true": { "description": "mt-1" } }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"to": true,
			"class": {
				"base": "hover:bg-primary/10 hover:border-primary outline-primary/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-primary",
				"externalIcon": "group-hover:text-primary"
			}
		},
		{
			"color": "secondary",
			"to": true,
			"class": {
				"base": "hover:bg-secondary/10 hover:border-secondary outline-secondary/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-secondary",
				"externalIcon": "group-hover:text-secondary"
			}
		},
		{
			"color": "success",
			"to": true,
			"class": {
				"base": "hover:bg-success/10 hover:border-success outline-success/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-success",
				"externalIcon": "group-hover:text-success"
			}
		},
		{
			"color": "info",
			"to": true,
			"class": {
				"base": "hover:bg-info/10 hover:border-info outline-info/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-info",
				"externalIcon": "group-hover:text-info"
			}
		},
		{
			"color": "warning",
			"to": true,
			"class": {
				"base": "hover:bg-warning/10 hover:border-warning outline-warning/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-warning",
				"externalIcon": "group-hover:text-warning"
			}
		},
		{
			"color": "error",
			"to": true,
			"class": {
				"base": "hover:bg-error/10 hover:border-error outline-error/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-error",
				"externalIcon": "group-hover:text-error"
			}
		},
		{
			"color": "neutral",
			"to": true,
			"class": {
				"base": "hover:bg-elevated/50 hover:border-inverted outline-inverted/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-inverted",
				"externalIcon": "group-hover:text-highlighted"
			}
		}
	],
	"defaultVariants": { "color": "primary" }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Card.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "ProseCard",
	__ssrInlineRender: true,
	props: {
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
		const _props = __props;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("prose.card", _props);
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcard_default,
			...appConfig.ui?.prose?.card || {}
		})({
			color: props.color,
			to: !!props.to,
			title: !!props.title
		}));
		const target = (0, vue_exports.computed)(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
		const ariaLabel = (0, vue_exports.computed)(() => (props.title || "Card link").trim());
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)(!(0, vue_exports.unref)(props).to ? _ctx.$attrs : {}, { class: ui.value.base({ class: [(0, vue_exports.unref)(props).ui?.base, (0, vue_exports.unref)(props).class] }) }, _attrs))}>`);
			if ((0, vue_exports.unref)(props).to) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, (0, vue_exports.mergeProps)({ "aria-label": ariaLabel.value }, {
				to: (0, vue_exports.unref)(props).to,
				target: target.value,
				..._ctx.$attrs
			}, {
				class: "focus:outline-none",
				raw: ""
			}), {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
					else return [(0, vue_exports.createVNode)("span", {
						class: "absolute inset-0",
						"aria-hidden": "true"
					})];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			if ((0, vue_exports.unref)(props).icon) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				name: (0, vue_exports.unref)(props).icon,
				class: ui.value.icon({ class: (0, vue_exports.unref)(props).ui?.icon })
			}, null, _parent));
			else _push(`<!---->`);
			if (!!(0, vue_exports.unref)(props).to && target.value === "_blank") _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
				name: (0, vue_exports.unref)(appConfig).ui.icons.external,
				class: ui.value.externalIcon({ class: (0, vue_exports.unref)(props).ui?.externalIcon })
			}, null, _parent));
			else _push(`<!---->`);
			if ((0, vue_exports.unref)(props).title || !!slots.title) {
				_push(`<p class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.title({ class: (0, vue_exports.unref)(props).ui?.title }))}">`);
				ssrRenderSlot(_ctx.$slots, "title", { mdcUnwrap: "p" }, () => {
					_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).title)}`);
				}, _push, _parent);
				_push(`</p>`);
			} else _push(`<!---->`);
			if (!!slots.default) {
				_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description }))}">`);
				(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, () => {
					_push(`${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).description)}`);
				}, _push, _parent);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Card.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Card-CLvaCPWT.mjs.map
