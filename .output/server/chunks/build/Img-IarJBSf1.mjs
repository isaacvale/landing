import { a1 as useComponentProps, Y as useAppConfig, u as createReusableTemplate, ah as vue_exports, X as tv, T as resolveBaseURL, ad as useRuntimeConfig, a3 as useEventListener, U as server_renderer_exports, f as DialogRoot_default, g as DialogTrigger_default, h as Motion, D as DialogPortal_default, O as provideAnimatePresence, a9 as useMotionConfig, x as frame, K as mountedStates, J as motionGlobalConfig } from '../virtual/entry.mjs';
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

//#region node_modules/.pnpm/motion-v@2.4.0_@vueuse+core@14.4.0_vue@3.5.40_typescript@6.0.3___vue@3.5.40_typescript@6.0.3_/node_modules/motion-v/dist/es/components/animate-presence/use-pop-layout.mjs
var popId = 0;
function usePopLayout(props) {
	const styles = /* @__PURE__ */ new WeakMap();
	const config = useMotionConfig();
	function addPopStyle(element) {
		if (props.mode !== "popLayout") return;
		const parent = element.offsetParent;
		const parentWidth = parent instanceof HTMLElement ? parent.offsetWidth || 0 : 0;
		const size = {
			height: element.offsetHeight || 0,
			width: element.offsetWidth || 0,
			top: element.offsetTop,
			left: element.offsetLeft,
			right: 0
		};
		size.right = parentWidth - size.width - size.left;
		const x = props.anchorX === "left" ? `left: ${size.left}px` : `right: ${size.right}px`;
		const elementPopId = `pop-${popId++}`;
		element.dataset.motionPopId = elementPopId;
		const style = (void 0).createElement("style");
		if (config.value.nonce) style.nonce = config.value.nonce;
		styles.set(element, style);
		(void 0).head.appendChild(style);
		if (style.sheet) style.sheet.insertRule(`
    [data-motion-pop-id="${elementPopId}"] {
      position: absolute !important;
      width: ${size.width}px !important;
      height: ${size.height}px !important;
      top: ${size.top}px !important;
      ${x} !important;
      }
      `);
	}
	function removePopStyle(element) {
		const style = styles.get(element);
		if (!style) return;
		styles.delete(element);
		frame.render(() => {
			(void 0).head.removeChild(style);
		});
	}
	return {
		addPopStyle,
		removePopStyle
	};
}
//#endregion
//#region node_modules/.pnpm/motion-v@2.4.0_@vueuse+core@14.4.0_vue@3.5.40_typescript@6.0.3___vue@3.5.40_typescript@6.0.3_/node_modules/motion-v/dist/es/components/animate-presence/use-presence-container.mjs
var apId = 0;
function usePresenceContainer(props) {
	const presenceId = String(apId++);
	const exitSessions = /* @__PURE__ */ new Map();
	const { addPopStyle, removePopStyle } = usePopLayout(props);
	function findMotionStates(container) {
		const states = [];
		const selfState = mountedStates.get(container);
		if (selfState && container.getAttribute(motionGlobalConfig.motionAttribute) === presenceId) states.push(selfState);
		const elements = Array.from(container.querySelectorAll(`[${motionGlobalConfig.motionAttribute}="${presenceId}"]`));
		for (const el of elements) {
			const s = mountedStates.get(el);
			if (s) states.push(s);
		}
		return states;
	}
	function onMotionExitComplete(container, state) {
		const session = exitSessions.get(container);
		if (!session) return;
		session.remaining.delete(state);
		if (session.remaining.size === 0) finalizeExit(session);
	}
	const presenceContext = {
		initial: props.initial,
		custom: props.custom,
		presenceId,
		onMotionExitComplete
	};
	provideAnimatePresence(presenceContext);
	function finalizeExit(session) {
		removePopStyle(session.el);
		session.states.forEach((state) => {
			state.getSnapshot(state.options, false);
		});
		session.done();
		exitSessions.delete(session.el);
		if (!session.el?.isConnected) session.states.forEach((state) => {
			state.unmount();
		});
		else session.states[0]?.didUpdate();
		props.onExitComplete?.();
	}
	function enter(el, done) {
		findMotionStates(el).forEach((state) => {
			state.setActive("exit", false);
			state.getSnapshot(state.options, true);
		});
		done();
	}
	function exit(el, done) {
		presenceContext.custom = props.custom;
		const container = el;
		const states = findMotionStates(container);
		if (states.length === 0) {
			done();
			props.onExitComplete?.();
			return;
		}
		const session = {
			remaining: new Set(states),
			states,
			done,
			el: container
		};
		exitSessions.set(container, session);
		addPopStyle(container);
		states.forEach((state) => {
			state.presenceContainer = container;
			state.setActive("exit", true);
			state.getSnapshot(state.options, false);
		});
		states[0]?.didUpdate();
	}
	return {
		enter,
		exit
	};
}
//#endregion
//#region node_modules/.pnpm/motion-v@2.4.0_@vueuse+core@14.4.0_vue@3.5.40_typescript@6.0.3___vue@3.5.40_typescript@6.0.3_/node_modules/motion-v/dist/es/components/animate-presence/AnimatePresence.mjs
var AnimatePresence_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	name: "AnimatePresence",
	inheritAttrs: true,
	__name: "AnimatePresence",
	props: {
		mode: { default: "sync" },
		initial: {
			type: Boolean,
			default: true
		},
		as: {},
		custom: {},
		onExitComplete: {},
		anchorX: { default: "left" }
	},
	setup(__props) {
		const props = __props;
		const { enter, exit } = usePresenceContainer(props);
		const transitionProps = (0, vue_exports.computed)(() => {
			if (props.mode !== "wait") return { tag: props.as };
			return { mode: props.mode === "wait" ? "out-in" : void 0 };
		});
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)(_ctx.mode === "wait" ? vue_exports.Transition : vue_exports.TransitionGroup), (0, vue_exports.mergeProps)(transitionProps.value, {
				appear: "",
				css: false,
				onLeave: (0, vue_exports.unref)(exit),
				onEnter: (0, vue_exports.unref)(enter)
			}), {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["onLeave", "onEnter"]);
		};
	}
});
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fimg.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fimg_default = {
	"slots": {
		"base": "rounded-md",
		"overlay": "fixed inset-0 bg-default/75 backdrop-blur-sm will-change-opacity",
		"content": "fixed inset-0 flex items-center justify-center cursor-zoom-out focus:outline-none",
		"zoomedImage": "w-full h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md"
	},
	"variants": {
		"zoom": { "true": "will-change-transform" },
		"open": { "true": "" },
		"width": { "false": "w-full" }
	},
	"compoundVariants": [{
		"zoom": true,
		"open": false,
		"class": "cursor-zoom-in"
	}]
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Img.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "ProseImg",
	__ssrInlineRender: true,
	props: {
		src: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		},
		width: {
			type: [String, Number],
			required: false
		},
		height: {
			type: [String, Number],
			required: false
		},
		class: {
			type: null,
			required: false
		},
		zoom: {
			type: Boolean,
			required: false,
			default: true
		},
		ui: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const props = useComponentProps("prose.img", __props);
		const appConfig = useAppConfig();
		const [DefineImageTemplate, ReuseImageTemplate] = createReusableTemplate();
		const [DefineZoomedImageTemplate, ReuseZoomedImageTemplate] = createReusableTemplate();
		const open = (0, vue_exports.ref)(false);
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fimg_default,
			...appConfig.ui?.prose?.img || {}
		})({
			zoom: props.zoom,
			open: open.value,
			width: !!props.width
		}));
		const refinedSrc = (0, vue_exports.computed)(() => resolveBaseURL(props.src, useRuntimeConfig().app.baseURL));
		const layoutId = (0, vue_exports.computed)(() => `${refinedSrc.value}::${(0, vue_exports.useId)()}`);
		if (props.zoom) {
			useEventListener(void 0, "scroll", () => {
				open.value = false;
			});
			useEventListener(void 0, "keydown", (e) => {
				if (e.key === "Escape" && open.value) open.value = false;
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(DefineImageTemplate), null, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)("img")), (0, vue_exports.mergeProps)({
						src: refinedSrc.value,
						alt: (0, vue_exports.unref)(props).alt,
						width: (0, vue_exports.unref)(props).width,
						height: (0, vue_exports.unref)(props).height
					}, _ctx.$attrs, { class: ui.value.base({ class: [(0, vue_exports.unref)(props).ui?.base, (0, vue_exports.unref)(props).class] }) }), null), _parent, _scopeId);
					else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)("img")), (0, vue_exports.mergeProps)({
						src: refinedSrc.value,
						alt: (0, vue_exports.unref)(props).alt,
						width: (0, vue_exports.unref)(props).width,
						height: (0, vue_exports.unref)(props).height
					}, _ctx.$attrs, { class: ui.value.base({ class: [(0, vue_exports.unref)(props).ui?.base, (0, vue_exports.unref)(props).class] }) }), null, 16, [
						"src",
						"alt",
						"width",
						"height",
						"class"
					]))];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(DefineZoomedImageTemplate), null, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) (0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)("img")), (0, vue_exports.mergeProps)({
						src: refinedSrc.value,
						alt: (0, vue_exports.unref)(props).alt
					}, _ctx.$attrs, { class: ui.value.zoomedImage({ class: [(0, vue_exports.unref)(props).ui?.zoomedImage] }) }), null), _parent, _scopeId);
					else return [((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.resolveDynamicComponent)((0, vue_exports.unref)("img")), (0, vue_exports.mergeProps)({
						src: refinedSrc.value,
						alt: (0, vue_exports.unref)(props).alt
					}, _ctx.$attrs, { class: ui.value.zoomedImage({ class: [(0, vue_exports.unref)(props).ui?.zoomedImage] }) }), null, 16, [
						"src",
						"alt",
						"class"
					]))];
				}),
				_: 1
			}, _parent));
			if ((0, vue_exports.unref)(props).zoom) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(DialogRoot_default), {
				open: open.value,
				"onUpdate:open": ($event) => open.value = $event,
				modal: false
			}, {
				default: (0, vue_exports.withCtx)(({ close }, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(DialogTrigger_default), { "as-child": "" }, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Motion), {
									"layout-id": layoutId.value,
									"as-child": "",
									transition: {
										type: "spring",
										bounce: .15,
										duration: .5,
										ease: "easeInOut"
									}
								}, {
									default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ReuseImageTemplate), null, null, _parent, _scopeId));
										else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseImageTemplate))];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(Motion), {
									"layout-id": layoutId.value,
									"as-child": "",
									transition: {
										type: "spring",
										bounce: .15,
										duration: .5,
										ease: "easeInOut"
									}
								}, {
									default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseImageTemplate))]),
									_: 1
								}, 8, ["layout-id"])];
							}),
							_: 2
						}, _parent, _scopeId));
						_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(DialogPortal_default), null, {
							default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
								if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(AnimatePresence_default), null, {
									default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (open.value) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Motion), {
												initial: { opacity: 0 },
												animate: { opacity: 1 },
												exit: { opacity: 0 },
												class: ui.value.overlay({ class: [(0, vue_exports.unref)(props).ui?.overlay] })
											}, null, _parent, _scopeId));
											else _push(`<!---->`);
											if (open.value) {
												_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.content({ class: [(0, vue_exports.unref)(props).ui?.content] }))}"${_scopeId}>`);
												_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Motion), {
													"as-child": "",
													"layout-id": layoutId.value,
													transition: {
														type: "spring",
														bounce: .15,
														duration: .5,
														ease: "easeInOut"
													}
												}, {
													default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
														if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ReuseZoomedImageTemplate), null, null, _parent, _scopeId));
														else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseZoomedImageTemplate))];
													}),
													_: 2
												}, _parent, _scopeId));
												_push(`</div>`);
											} else _push(`<!---->`);
										} else return [open.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Motion), {
											key: 0,
											initial: { opacity: 0 },
											animate: { opacity: 1 },
											exit: { opacity: 0 },
											class: ui.value.overlay({ class: [(0, vue_exports.unref)(props).ui?.overlay] })
										}, null, 8, ["class"])) : (0, vue_exports.createCommentVNode)("", true), open.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
											key: 1,
											class: ui.value.content({ class: [(0, vue_exports.unref)(props).ui?.content] }),
											onClick: close
										}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(Motion), {
											"as-child": "",
											"layout-id": layoutId.value,
											transition: {
												type: "spring",
												bounce: .15,
												duration: .5,
												ease: "easeInOut"
											}
										}, {
											default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseZoomedImageTemplate))]),
											_: 1
										}, 8, ["layout-id"])], 10, ["onClick"])) : (0, vue_exports.createCommentVNode)("", true)];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(AnimatePresence_default), null, {
									default: (0, vue_exports.withCtx)(() => [open.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Motion), {
										key: 0,
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										exit: { opacity: 0 },
										class: ui.value.overlay({ class: [(0, vue_exports.unref)(props).ui?.overlay] })
									}, null, 8, ["class"])) : (0, vue_exports.createCommentVNode)("", true), open.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
										key: 1,
										class: ui.value.content({ class: [(0, vue_exports.unref)(props).ui?.content] }),
										onClick: close
									}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(Motion), {
										"as-child": "",
										"layout-id": layoutId.value,
										transition: {
											type: "spring",
											bounce: .15,
											duration: .5,
											ease: "easeInOut"
										}
									}, {
										default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseZoomedImageTemplate))]),
										_: 1
									}, 8, ["layout-id"])], 10, ["onClick"])) : (0, vue_exports.createCommentVNode)("", true)]),
									_: 2
								}, 1024)];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(DialogTrigger_default), { "as-child": "" }, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Motion), {
							"layout-id": layoutId.value,
							"as-child": "",
							transition: {
								type: "spring",
								bounce: .15,
								duration: .5,
								ease: "easeInOut"
							}
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseImageTemplate))]),
							_: 1
						}, 8, ["layout-id"])]),
						_: 1
					}), (0, vue_exports.createVNode)((0, vue_exports.unref)(DialogPortal_default), null, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(AnimatePresence_default), null, {
							default: (0, vue_exports.withCtx)(() => [open.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Motion), {
								key: 0,
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								class: ui.value.overlay({ class: [(0, vue_exports.unref)(props).ui?.overlay] })
							}, null, 8, ["class"])) : (0, vue_exports.createCommentVNode)("", true), open.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 1,
								class: ui.value.content({ class: [(0, vue_exports.unref)(props).ui?.content] }),
								onClick: close
							}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(Motion), {
								"as-child": "",
								"layout-id": layoutId.value,
								transition: {
									type: "spring",
									bounce: .15,
									duration: .5,
									ease: "easeInOut"
								}
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseZoomedImageTemplate))]),
								_: 1
							}, 8, ["layout-id"])], 10, ["onClick"])) : (0, vue_exports.createCommentVNode)("", true)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024)];
				}),
				_: 1
			}, _parent));
			else _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ReuseImageTemplate), null, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/Img.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Img-IarJBSf1.mjs.map
