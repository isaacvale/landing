import { ah as vue_exports, a1 as useComponentProps, a8 as useLocale, $ as useClipboard, Y as useAppConfig, X as tv, U as server_renderer_exports, k as _sfc_main$1, p as _sfc_main$24, E as getSlotChildrenText } from '../virtual/entry.mjs';
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

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fprompt.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fprompt_default = { "slots": {
	"root": "relative flex flex-wrap items-center gap-2 border border-muted bg-muted rounded-md px-4 py-3 my-5 last:mb-0",
	"icon": "size-4 shrink-0 text-highlighted",
	"content": "min-w-0",
	"description": "text-sm/6 text-default font-medium",
	"actions": "flex flex-wrap items-center gap-1.5 ms-auto"
} };
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Prompt.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "ProsePrompt",
	__ssrInlineRender: true,
	props: {
		description: {
			type: String,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		actions: {
			type: Array,
			required: false,
			default: () => []
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
		const props = useComponentProps("prose.prompt", _props);
		const { t } = useLocale();
		const { copy, copied } = useClipboard();
		const appConfig = useAppConfig();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fprompt_default,
			...appConfig.ui?.prose?.prompt || {}
		})());
		const actions = (0, vue_exports.computed)(() => [.../* @__PURE__ */ new Set(["copy", ...props.actions])]);
		function getPromptText() {
			const children = slots.default?.();
			return children ? getSlotChildrenText(children).trim() : "";
		}
		function copyPrompt() {
			copy(getPromptText());
		}
		function openInCursor() {
			(void 0).open(`cursor://anysphere.cursor-deeplink/prompt?text=${encodeURIComponent(getPromptText())}`, "_self");
		}
		function openInWindsurf() {
			(void 0).open(`windsurf://cascade/newChat?prompt=${encodeURIComponent(getPromptText())}`, "_self");
		}
		function openInClaude() {
			(void 0).open(`claude://code/new?q=${encodeURIComponent(getPromptText())}`, "_self");
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] }) }, _ctx.$attrs, _attrs))}>`);
			if ((0, vue_exports.unref)(props).icon) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
				name: (0, vue_exports.unref)(props).icon,
				class: ui.value.icon({ class: (0, vue_exports.unref)(props).ui?.icon })
			}, null, _parent));
			else _push(`<!---->`);
			_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.content({ class: (0, vue_exports.unref)(props).ui?.content }))}">`);
			if ((0, vue_exports.unref)(props).description) _push(`<p class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.description({ class: (0, vue_exports.unref)(props).ui?.description }))}">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(props).description)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.actions({ class: (0, vue_exports.unref)(props).ui?.actions }))}">`);
			if (actions.value.includes("copy")) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$24, {
				icon: (0, vue_exports.unref)(copied) ? (0, vue_exports.unref)(appConfig).ui.icons.copyCheck : (0, vue_exports.unref)(appConfig).ui.icons.copy,
				size: "sm",
				label: (0, vue_exports.unref)(t)("prose.prompt.copy"),
				onClick: copyPrompt
			}, null, _parent));
			else _push(`<!---->`);
			if (actions.value.includes("cursor")) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$24, {
				icon: "i-simple-icons-cursor",
				color: "neutral",
				variant: "outline",
				size: "sm",
				label: (0, vue_exports.unref)(t)("prose.prompt.openIn", { name: "Cursor" }),
				onClick: openInCursor
			}, null, _parent));
			else _push(`<!---->`);
			if (actions.value.includes("windsurf")) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$24, {
				icon: "i-simple-icons-windsurf",
				color: "neutral",
				variant: "outline",
				size: "sm",
				label: (0, vue_exports.unref)(t)("prose.prompt.openIn", { name: "Windsurf" }),
				onClick: openInWindsurf
			}, null, _parent));
			else _push(`<!---->`);
			if (actions.value.includes("claude")) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$24, {
				icon: "i-simple-icons-claude",
				color: "neutral",
				variant: "outline",
				size: "sm",
				label: (0, vue_exports.unref)(t)("prose.prompt.openIn", { name: "Claude" }),
				onClick: openInClaude
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</div></div>`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Prompt.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Prompt-B2HjyGK-.mjs.map
