import { a1 as useComponentProps, Y as useAppConfig, ah as vue_exports, X as tv, U as server_renderer_exports, l as _sfc_main$1, k as _sfc_main$2 } from '../virtual/entry.mjs';
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

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fcallout.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcallout_default = {
	"slots": {
		"base": ["group relative block px-4 py-3 rounded-md text-sm/6 my-5 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-default [&_pre]:bg-default [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 *:last:mb-0! [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0", "transition-colors"],
		"icon": ["size-4 shrink-0 align-sub me-2 inline-block", "transition-colors"],
		"externalIcon": ["size-4 align-top absolute end-2 top-2 pointer-events-none", "transition-colors"]
	},
	"variants": {
		"color": {
			"primary": {
				"base": "border border-primary/25 bg-primary/10 text-primary-600 dark:text-primary-300 [&_a]:text-primary [&_a]:hover:border-primary [&_a]:outline-primary/25 [&_a]:focus-visible:outline-3 [&_a]:focus-visible:has-[>code]:outline-0 [&_code]:text-primary-600 dark:[&_code]:text-primary-300 [&_code]:border-primary/25 [&_a]:[&>code]:outline-primary/25 [&_a]:hover:[&>code]:border-primary [&_a]:hover:[&>code]:text-primary [&_a]:focus-visible:[&>code]:border-primary [&_a]:focus-visible:[&>code]:text-primary [&>ul]:marker:text-primary/50",
				"icon": "text-primary",
				"externalIcon": "text-primary-600 dark:text-primary-300"
			},
			"secondary": {
				"base": "border border-secondary/25 bg-secondary/10 text-secondary-600 dark:text-secondary-300 [&_a]:text-secondary [&_a]:hover:border-secondary [&_a]:outline-secondary/25 [&_a]:focus-visible:outline-3 [&_a]:focus-visible:has-[>code]:outline-0 [&_code]:text-secondary-600 dark:[&_code]:text-secondary-300 [&_code]:border-secondary/25 [&_a]:[&>code]:outline-secondary/25 [&_a]:hover:[&>code]:border-secondary [&_a]:hover:[&>code]:text-secondary [&_a]:focus-visible:[&>code]:border-secondary [&_a]:focus-visible:[&>code]:text-secondary [&>ul]:marker:text-secondary/50",
				"icon": "text-secondary",
				"externalIcon": "text-secondary-600 dark:text-secondary-300"
			},
			"success": {
				"base": "border border-success/25 bg-success/10 text-success-600 dark:text-success-300 [&_a]:text-success [&_a]:hover:border-success [&_a]:outline-success/25 [&_a]:focus-visible:outline-3 [&_a]:focus-visible:has-[>code]:outline-0 [&_code]:text-success-600 dark:[&_code]:text-success-300 [&_code]:border-success/25 [&_a]:[&>code]:outline-success/25 [&_a]:hover:[&>code]:border-success [&_a]:hover:[&>code]:text-success [&_a]:focus-visible:[&>code]:border-success [&_a]:focus-visible:[&>code]:text-success [&>ul]:marker:text-success/50",
				"icon": "text-success",
				"externalIcon": "text-success-600 dark:text-success-300"
			},
			"info": {
				"base": "border border-info/25 bg-info/10 text-info-600 dark:text-info-300 [&_a]:text-info [&_a]:hover:border-info [&_a]:outline-info/25 [&_a]:focus-visible:outline-3 [&_a]:focus-visible:has-[>code]:outline-0 [&_code]:text-info-600 dark:[&_code]:text-info-300 [&_code]:border-info/25 [&_a]:[&>code]:outline-info/25 [&_a]:hover:[&>code]:border-info [&_a]:hover:[&>code]:text-info [&_a]:focus-visible:[&>code]:border-info [&_a]:focus-visible:[&>code]:text-info [&>ul]:marker:text-info/50",
				"icon": "text-info",
				"externalIcon": "text-info-600 dark:text-info-300"
			},
			"warning": {
				"base": "border border-warning/25 bg-warning/10 text-warning-600 dark:text-warning-300 [&_a]:text-warning [&_a]:hover:border-warning [&_a]:outline-warning/25 [&_a]:focus-visible:outline-3 [&_a]:focus-visible:has-[>code]:outline-0 [&_code]:text-warning-600 dark:[&_code]:text-warning-300 [&_code]:border-warning/25 [&_a]:[&>code]:outline-warning/25 [&_a]:hover:[&>code]:border-warning [&_a]:hover:[&>code]:text-warning [&_a]:focus-visible:[&>code]:border-warning [&_a]:focus-visible:[&>code]:text-warning [&>ul]:marker:text-warning/50",
				"icon": "text-warning",
				"externalIcon": "text-warning-600 dark:text-warning-300"
			},
			"error": {
				"base": "border border-error/25 bg-error/10 text-error-600 dark:text-error-300 [&_a]:text-error [&_a]:hover:border-error [&_a]:outline-error/25 [&_a]:focus-visible:outline-3 [&_a]:focus-visible:has-[>code]:outline-0 [&_code]:text-error-600 dark:[&_code]:text-error-300 [&_code]:border-error/25 [&_a]:[&>code]:outline-error/25 [&_a]:hover:[&>code]:border-error [&_a]:hover:[&>code]:text-error [&_a]:focus-visible:[&>code]:border-error [&_a]:focus-visible:[&>code]:text-error [&>ul]:marker:text-error/50",
				"icon": "text-error",
				"externalIcon": "text-error-600 dark:text-error-300"
			},
			"neutral": {
				"base": "border border-muted bg-muted text-default",
				"icon": "text-highlighted",
				"externalIcon": "text-dimmed"
			}
		},
		"to": { "true": "border-dashed" }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"to": true,
			"class": {
				"base": "hover:border-primary outline-primary/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-primary",
				"externalIcon": "group-hover:text-primary"
			}
		},
		{
			"color": "secondary",
			"to": true,
			"class": {
				"base": "hover:border-secondary outline-secondary/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-secondary",
				"externalIcon": "group-hover:text-secondary"
			}
		},
		{
			"color": "success",
			"to": true,
			"class": {
				"base": "hover:border-success outline-success/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-success",
				"externalIcon": "group-hover:text-success"
			}
		},
		{
			"color": "info",
			"to": true,
			"class": {
				"base": "hover:border-info outline-info/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-info",
				"externalIcon": "group-hover:text-info"
			}
		},
		{
			"color": "warning",
			"to": true,
			"class": {
				"base": "hover:border-warning outline-warning/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-warning",
				"externalIcon": "group-hover:text-warning"
			}
		},
		{
			"color": "error",
			"to": true,
			"class": {
				"base": "hover:border-error outline-error/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-error",
				"externalIcon": "group-hover:text-error"
			}
		},
		{
			"color": "neutral",
			"to": true,
			"class": {
				"base": "hover:border-inverted outline-inverted/25 has-[>a:focus-visible]:outline-3 has-[>a:focus-visible]:border-inverted",
				"externalIcon": "group-hover:text-highlighted"
			}
		}
	],
	"defaultVariants": { "color": "neutral" }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Callout.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "ProseCallout",
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
		const props = useComponentProps("prose.callout", __props);
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcallout_default,
			...appConfig.ui?.prose?.callout || {}
		})({
			color: props.color,
			to: !!props.to
		}));
		const target = (0, vue_exports.computed)(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)(!(0, vue_exports.unref)(props).to ? _ctx.$attrs : {}, { class: ui.value.base({ class: [(0, vue_exports.unref)(props).ui?.base, (0, vue_exports.unref)(props).class] }) }, _attrs))}>`);
			if ((0, vue_exports.unref)(props).to) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, (0, vue_exports.mergeProps)({
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
			ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Callout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Callout-BcLEMEZ5.mjs.map
