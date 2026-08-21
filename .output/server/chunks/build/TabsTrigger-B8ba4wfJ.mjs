import { ah as vue_exports, a2 as useDirection, a4 as useForwardExpose, ag as useVModel, a7 as useId, i as Primitive, R as RovingFocusGroup_default, ac as useResizeObserver, P as Presence_default, r as createContext, aa as useMounted } from '../virtual/entry.mjs';
import { R as RovingFocusItem_default } from './RovingFocusItem-DRLTg4ht.mjs';

//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Tabs/TabsRoot.js
var [injectTabsRootContext, provideTabsRootContext] = /*#__PURE__*/ createContext("TabsRoot");
var TabsRoot_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "TabsRoot",
	props: {
		defaultValue: {
			type: null,
			required: false
		},
		orientation: {
			type: String,
			required: false,
			default: "horizontal"
		},
		dir: {
			type: String,
			required: false
		},
		activationMode: {
			type: String,
			required: false,
			default: "automatic"
		},
		modelValue: {
			type: null,
			required: false
		},
		unmountOnHide: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { orientation, unmountOnHide, dir: propDir } = (0, vue_exports.toRefs)(props);
		const dir = useDirection(propDir);
		useForwardExpose();
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue,
			passive: props.modelValue === void 0
		});
		const tabsList = (0, vue_exports.ref)();
		const contentIds = (0, vue_exports.shallowRef)(/* @__PURE__ */ new Set());
		provideTabsRootContext({
			modelValue,
			changeModelValue: (value) => {
				modelValue.value = value;
			},
			orientation,
			dir,
			unmountOnHide,
			activationMode: props.activationMode,
			baseId: useId(void 0, "reka-tabs"),
			tabsList,
			contentIds,
			registerContent: (value) => {
				contentIds.value = /* @__PURE__ */ new Set([...contentIds.value, value]);
			},
			unregisterContent: (value) => {
				const newSet = new Set(contentIds.value);
				newSet.delete(value);
				contentIds.value = newSet;
			}
		});
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), {
				dir: (0, vue_exports.unref)(dir),
				"data-orientation": (0, vue_exports.unref)(orientation),
				"as-child": _ctx.asChild,
				as: _ctx.as
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", { modelValue: (0, vue_exports.unref)(modelValue) })]),
				_: 3
			}, 8, [
				"dir",
				"data-orientation",
				"as-child",
				"as"
			]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Tabs/utils.js
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Tabs/TabsContent.js
var TabsContent_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "TabsContent",
	props: {
		value: {
			type: [String, Number],
			required: true
		},
		forceMount: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef } = useForwardExpose();
		const rootContext = injectTabsRootContext();
		const triggerId = (0, vue_exports.computed)(() => makeTriggerId(rootContext.baseId, props.value));
		const contentId = (0, vue_exports.computed)(() => makeContentId(rootContext.baseId, props.value));
		const isSelected = (0, vue_exports.computed)(() => props.value === rootContext.modelValue.value);
		const isMountAnimationPreventedRef = (0, vue_exports.ref)(isSelected.value);
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Presence_default), {
				present: _ctx.forceMount || isSelected.value,
				"force-mount": ""
			}, {
				default: (0, vue_exports.withCtx)(({ present }) => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Primitive), {
					id: contentId.value,
					ref: (0, vue_exports.unref)(forwardRef),
					"as-child": _ctx.asChild,
					as: _ctx.as,
					role: "tabpanel",
					"data-state": isSelected.value ? "active" : "inactive",
					"data-orientation": (0, vue_exports.unref)(rootContext).orientation.value,
					"aria-labelledby": triggerId.value,
					hidden: !present,
					tabindex: "0",
					style: (0, vue_exports.normalizeStyle)({ animationDuration: isMountAnimationPreventedRef.value ? "0s" : void 0 })
				}, {
					default: (0, vue_exports.withCtx)(() => [((0, vue_exports.unref)(rootContext).unmountOnHide.value ? present : true) ? (0, vue_exports.renderSlot)(_ctx.$slots, "default", { key: 0 }) : (0, vue_exports.createCommentVNode)("v-if", true)]),
					_: 2
				}, 1032, [
					"id",
					"as-child",
					"as",
					"data-state",
					"data-orientation",
					"aria-labelledby",
					"hidden",
					"style"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Tabs/TabsIndicator.js
var TabsIndicator_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "TabsIndicator",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const context = injectTabsRootContext();
		__expose({ updateIndicatorStyle });
		useForwardExpose();
		const isMounted = useMounted();
		const indicatorStyle = (0, vue_exports.ref)({
			size: null,
			thickness: null,
			position: null
		});
		const tabs = (0, vue_exports.ref)([]);
		(0, vue_exports.watch)(() => [context.modelValue.value, context?.dir.value], () => {
			updateIndicatorStyle();
		}, {
			immediate: true,
			flush: "post"
		});
		(0, vue_exports.watchPostEffect)(() => {
			tabs.value = Array.from(context.tabsList.value?.querySelectorAll("[role=\"tab\"]") || []);
		});
		useResizeObserver((0, vue_exports.computed)(() => [context.tabsList.value, ...tabs.value]), updateIndicatorStyle);
		function updateIndicatorStyle() {
			const activeTab = context.tabsList.value?.querySelector("[role=\"tab\"][data-state=\"active\"]");
			if (!activeTab) return;
			if (context.orientation.value === "horizontal") indicatorStyle.value = {
				size: activeTab.offsetWidth,
				thickness: activeTab.offsetHeight,
				position: activeTab.offsetLeft
			};
			else indicatorStyle.value = {
				size: activeTab.offsetHeight,
				thickness: activeTab.offsetWidth,
				position: activeTab.offsetTop
			};
		}
		return (_ctx, _cache) => {
			return (0, vue_exports.unref)(isMounted) && typeof indicatorStyle.value.size === "number" ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)({ key: 0 }, props, { style: {
				"--reka-tabs-indicator-size": `${indicatorStyle.value.size}px`,
				"--reka-tabs-indicator-thickness": `${indicatorStyle.value.thickness}px`,
				"--reka-tabs-indicator-position": `${indicatorStyle.value.position}px`
			} }), {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["style"])) : (0, vue_exports.createCommentVNode)("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Tabs/TabsList.js
var TabsList_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "TabsList",
	props: {
		loop: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const { loop } = (0, vue_exports.toRefs)(__props);
		const { forwardRef, currentElement } = useForwardExpose();
		const context = injectTabsRootContext();
		context.tabsList = currentElement;
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(RovingFocusGroup_default), {
				"as-child": "",
				orientation: (0, vue_exports.unref)(context).orientation.value,
				dir: (0, vue_exports.unref)(context).dir.value,
				loop: (0, vue_exports.unref)(loop)
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Primitive), {
					ref: (0, vue_exports.unref)(forwardRef),
					role: "tablist",
					"as-child": _ctx.asChild,
					as: _ctx.as,
					"aria-orientation": (0, vue_exports.unref)(context).orientation.value
				}, {
					default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"as-child",
					"as",
					"aria-orientation"
				])]),
				_: 3
			}, 8, [
				"orientation",
				"dir",
				"loop"
			]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Tabs/TabsTrigger.js
var TabsTrigger_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "TabsTrigger",
	props: {
		value: {
			type: [String, Number],
			required: true
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef } = useForwardExpose();
		const rootContext = injectTabsRootContext();
		const triggerId = (0, vue_exports.computed)(() => makeTriggerId(rootContext.baseId, props.value));
		const contentId = (0, vue_exports.computed)(() => rootContext.contentIds.value.has(props.value) ? makeContentId(rootContext.baseId, props.value) : void 0);
		const isSelected = (0, vue_exports.computed)(() => props.value === rootContext.modelValue.value);
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(RovingFocusItem_default), {
				"as-child": "",
				focusable: !_ctx.disabled,
				active: isSelected.value
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Primitive), {
					id: triggerId.value,
					ref: (0, vue_exports.unref)(forwardRef),
					role: "tab",
					type: _ctx.as === "button" ? "button" : void 0,
					as: _ctx.as,
					"as-child": _ctx.asChild,
					"aria-selected": isSelected.value ? "true" : "false",
					"aria-controls": contentId.value,
					"data-state": isSelected.value ? "active" : "inactive",
					disabled: _ctx.disabled,
					"data-disabled": _ctx.disabled ? "" : void 0,
					"data-orientation": (0, vue_exports.unref)(rootContext).orientation.value,
					onMousedown: _cache[0] || (_cache[0] = (0, vue_exports.withModifiers)((event) => {
						if (!_ctx.disabled && event.ctrlKey === false) (0, vue_exports.unref)(rootContext).changeModelValue(_ctx.value);
						else event.preventDefault();
					}, ["left"])),
					onKeydown: _cache[1] || (_cache[1] = (0, vue_exports.withKeys)(($event) => (0, vue_exports.unref)(rootContext).changeModelValue(_ctx.value), ["enter", "space"])),
					onFocus: _cache[2] || (_cache[2] = () => {
						const isAutomaticActivation = (0, vue_exports.unref)(rootContext).activationMode !== "manual";
						if (!isSelected.value && !_ctx.disabled && isAutomaticActivation) (0, vue_exports.unref)(rootContext).changeModelValue(_ctx.value);
					})
				}, {
					default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"id",
					"type",
					"as",
					"as-child",
					"aria-selected",
					"aria-controls",
					"data-state",
					"disabled",
					"data-disabled",
					"data-orientation"
				])]),
				_: 3
			}, 8, ["focusable", "active"]);
		};
	}
});

export { TabsContent_default as T, TabsIndicator_default as a, TabsList_default as b, TabsRoot_default as c, TabsTrigger_default as d };
//# sourceMappingURL=TabsTrigger-B8ba4wfJ.mjs.map
