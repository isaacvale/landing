import { ah as vue_exports, a1 as useComponentProps, Y as useAppConfig, u as createReusableTemplate, X as tv, U as server_renderer_exports, k as _sfc_main$1, a0 as useCollection, i as Primitive, af as useTypeahead, a2 as useDirection, ag as useVModel, R as RovingFocusGroup_default, r as createContext, F as handleAndDispatchCustomEvent$1, z as getActiveElement, t as createEventHook, M as MAP_KEY_TO_FOCUS_INTENT } from '../virtual/entry.mjs';
import { R as RovingFocusItem_default } from './RovingFocusItem-DRLTg4ht.mjs';
import _sfc_main$2 from './CodeIcon-BnFHhhjw.mjs';
import { q as isEqual } from '../nitro/nitro.mjs';
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

//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/shared/arrays.js
/**
* The function `findValuesBetween` takes an array and two values, then returns a subarray containing
* elements between the first occurrence of the start value and the first occurrence of the end value
* in the array.
* @param {T[]} array - The `array` parameter is an array of values of type `T`.
* @param {T} start - The `start` parameter is the value that marks the beginning of the range you want
* to find in the array.
* @param {T} end - The `end` parameter in the `findValuesBetween` function represents the end value
* that you want to find in the array. This function will return a subarray of values that are between
* the `start` and `end` values in the original array.
* @returns The `findValuesBetween` function returns an array of values from the input array that are
* between the `start` and `end` values (inclusive). If either the `start` or `end` values are not
* found in the input array, an empty array is returned.
*/
function findValuesBetween(array, start, end) {
	const startIndex = array.findIndex((i) => isEqual(i, start));
	const endIndex = array.findIndex((i) => isEqual(i, end));
	if (startIndex === -1 || endIndex === -1) return [];
	const [minIndex, maxIndex] = [startIndex, endIndex].sort((a, b) => a - b);
	return array.slice(minIndex, maxIndex + 1);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/shared/useSelectionBehavior.js
function useSelectionBehavior(modelValue, props) {
	const firstValue = (0, vue_exports.ref)();
	const onSelectItem = (val, condition) => {
		if (props.multiple && Array.isArray(modelValue.value)) if (props.selectionBehavior === "replace") {
			modelValue.value = [val];
			firstValue.value = val;
		} else {
			const index = modelValue.value.findIndex((v) => condition(v));
			if (index !== -1) modelValue.value = modelValue.value.filter((_, i) => i !== index);
			else modelValue.value = [...modelValue.value, val];
		}
		else if (props.selectionBehavior === "replace") modelValue.value = { ...val };
		else if (!Array.isArray(modelValue.value) && condition(modelValue.value)) modelValue.value = void 0;
		else modelValue.value = { ...val };
		return modelValue.value;
	};
	function handleMultipleReplace(intent, currentElement, getItems, options) {
		if (!firstValue?.value || !props.multiple || !Array.isArray(modelValue.value)) return;
		const lastValue = getItems().filter((i) => i.ref.dataset.disabled !== "").find((i) => i.ref === currentElement)?.value;
		if (!lastValue) return;
		let value = null;
		switch (intent) {
			case "prev":
			case "next":
				value = findValuesBetween(options, firstValue.value, lastValue);
				break;
			case "first":
				value = findValuesBetween(options, firstValue.value, options?.[0]);
				break;
			case "last": value = findValuesBetween(options, firstValue.value, options.at(-1));
		}
		modelValue.value = value;
	}
	return {
		firstValue,
		onSelectItem,
		handleMultipleReplace
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Tree/utils.js
function flatten(items) {
	return items.reduce((acc, item) => {
		acc.push(item);
		if (item.children) acc.push(...flatten(item.children));
		return acc;
	}, []);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Tree/TreeRoot.js
var [injectTreeRootContext, provideTreeRootContext] = /*#__PURE__*/ createContext("TreeRoot");
var TreeRoot_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "TreeRoot",
	props: {
		modelValue: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		items: {
			type: Array,
			required: false
		},
		expanded: {
			type: Array,
			required: false
		},
		defaultExpanded: {
			type: Array,
			required: false
		},
		getKey: {
			type: Function,
			required: true
		},
		getChildren: {
			type: Function,
			required: false,
			default: (val) => val.children
		},
		selectionBehavior: {
			type: String,
			required: false,
			default: "toggle"
		},
		multiple: {
			type: Boolean,
			required: false,
			skipCheck: true
		},
		dir: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		propagateSelect: {
			type: Boolean,
			required: false
		},
		bubbleSelect: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "ul"
		}
	},
	emits: ["update:modelValue", "update:expanded"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { items, multiple, disabled, propagateSelect, dir: propDir, bubbleSelect } = (0, vue_exports.toRefs)(props);
		const { handleTypeaheadSearch } = useTypeahead();
		const dir = useDirection(propDir);
		const rovingFocusGroupRef = (0, vue_exports.ref)();
		const isVirtual = (0, vue_exports.ref)(false);
		const virtualKeydownHook = createEventHook();
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
			passive: true,
			deep: true
		});
		const expanded = useVModel(props, "expanded", emits, {
			defaultValue: props.defaultExpanded ?? [],
			passive: props.expanded === void 0,
			deep: true
		});
		const { onSelectItem, handleMultipleReplace } = useSelectionBehavior(modelValue, props);
		const selectedKeys = (0, vue_exports.computed)(() => {
			if (multiple.value && Array.isArray(modelValue.value)) return modelValue.value.map((i) => props.getKey(i));
			else return [props.getKey(modelValue.value ?? {})];
		});
		function flattenItems(items$1, level = 1, parentItem) {
			return items$1.reduce((acc, item, index) => {
				const key = props.getKey(item);
				const children = props.getChildren(item);
				const isExpanded = expanded.value.includes(key);
				const flattenedItem = {
					_id: key,
					value: item,
					index,
					level,
					parentItem,
					hasChildren: !!children,
					bind: {
						"value": item,
						level,
						"aria-setsize": items$1.length,
						"aria-posinset": index + 1
					}
				};
				acc.push(flattenedItem);
				if (children && isExpanded) acc.push(...flattenItems(children, level + 1, item));
				return acc;
			}, []);
		}
		const expandedItems = (0, vue_exports.computed)(() => {
			const items$1 = props.items;
			expanded.value.map((i) => i);
			return flattenItems(items$1 ?? []);
		});
		function handleKeydown(event) {
			if (isVirtual.value) virtualKeydownHook.trigger(event);
			else {
				const collections = rovingFocusGroupRef.value?.getItems() ?? [];
				handleTypeaheadSearch(event.key, collections);
			}
		}
		function handleKeydownNavigation(event) {
			if (isVirtual.value) return;
			const intent = MAP_KEY_TO_FOCUS_INTENT[event.key];
			(0, vue_exports.nextTick)(() => {
				handleMultipleReplace(intent, getActiveElement(), rovingFocusGroupRef.value?.getItems, expandedItems.value.map((i) => i.value));
			});
		}
		function handleBubbleSelect(item) {
			if (item.parentItem != null && Array.isArray(modelValue.value) && props.multiple) {
				const parentItem = expandedItems.value.find((i) => {
					return item.parentItem != null && props.getKey(i.value) === props.getKey(item.parentItem);
				});
				if (parentItem != null) {
					if (props.getChildren(parentItem.value)?.every((i) => modelValue.value.find((v) => props.getKey(v) === props.getKey(i)))) modelValue.value = [...modelValue.value, parentItem.value];
					else modelValue.value = modelValue.value.filter((v) => props.getKey(v) !== props.getKey(parentItem.value));
					handleBubbleSelect(parentItem);
				}
			}
		}
		provideTreeRootContext({
			modelValue,
			selectedKeys,
			onSelect: (val) => {
				const condition = (baseValue) => props.getKey(baseValue ?? {}) === props.getKey(val);
				const exist = props.multiple && Array.isArray(modelValue.value) ? modelValue.value?.findIndex(condition) !== -1 : void 0;
				onSelectItem(val, condition);
				if (props.bubbleSelect && props.multiple && Array.isArray(modelValue.value)) {
					const item = expandedItems.value.find((i) => {
						return props.getKey(i.value) === props.getKey(val);
					});
					if (item != null) handleBubbleSelect(item);
				}
				if (props.propagateSelect && props.multiple && Array.isArray(modelValue.value)) {
					const children = flatten(props.getChildren(val) ?? []);
					if (exist) modelValue.value = [...modelValue.value].filter((i) => !children.some((child) => props.getKey(i ?? {}) === props.getKey(child)));
					else modelValue.value = [...modelValue.value, ...children];
				}
			},
			expanded,
			onToggle(val) {
				if (!(val ? props.getChildren(val) : void 0)) return;
				const key = props.getKey(val) ?? val;
				if (expanded.value.includes(key)) expanded.value = expanded.value.filter((val$1) => val$1 !== key);
				else expanded.value = [...expanded.value, key];
			},
			getKey: props.getKey,
			getChildren: props.getChildren,
			items,
			expandedItems,
			disabled,
			multiple,
			dir,
			propagateSelect,
			bubbleSelect,
			isVirtual,
			virtualKeydownHook,
			handleMultipleReplace
		});
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(RovingFocusGroup_default), {
				ref_key: "rovingFocusGroupRef",
				ref: rovingFocusGroupRef,
				"as-child": "",
				orientation: "vertical",
				dir: (0, vue_exports.unref)(dir)
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Primitive), {
					role: "tree",
					as: _ctx.as,
					"as-child": _ctx.asChild,
					"aria-multiselectable": (0, vue_exports.unref)(multiple) ? true : void 0,
					onKeydown: [handleKeydown, (0, vue_exports.withKeys)((0, vue_exports.withModifiers)(handleKeydownNavigation, ["shift"]), ["up", "down"])]
				}, {
					default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
						flattenItems: expandedItems.value,
						modelValue: (0, vue_exports.unref)(modelValue),
						expanded: (0, vue_exports.unref)(expanded)
					})]),
					_: 3
				}, 8, [
					"as",
					"as-child",
					"aria-multiselectable",
					"onKeydown"
				])]),
				_: 3
			}, 8, ["dir"]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.10.1_vue@3.5.40_typescript@6.0.3_/node_modules/reka-ui/dist/Tree/TreeItem.js
var TREE_SELECT = "tree.select";
var TREE_TOGGLE = "tree.toggle";
var TreeItem_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	inheritAttrs: false,
	__name: "TreeItem",
	props: {
		value: {
			type: null,
			required: true
		},
		level: {
			type: Number,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "li"
		}
	},
	emits: ["select", "toggle"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectTreeRootContext();
		const { getItems } = useCollection();
		const hasChildren = (0, vue_exports.computed)(() => !!rootContext.getChildren(props.value));
		const isExpanded = (0, vue_exports.computed)(() => {
			const key = rootContext.getKey(props.value);
			return rootContext.expanded.value.includes(key);
		});
		const isSelected = (0, vue_exports.computed)(() => {
			const key = rootContext.getKey(props.value);
			return rootContext.selectedKeys.value.includes(key);
		});
		const isIndeterminate = (0, vue_exports.computed)(() => {
			if (rootContext.bubbleSelect.value && hasChildren.value && Array.isArray(rootContext.modelValue.value)) {
				const children = flatten(rootContext.getChildren(props.value) || []);
				return children.some((child) => rootContext.modelValue.value.find((v) => rootContext.getKey(v) === rootContext.getKey(child))) && !children.every((child) => rootContext.modelValue.value.find((v) => rootContext.getKey(v) === rootContext.getKey(child)));
			} else if (rootContext.propagateSelect.value && isSelected.value && hasChildren.value && Array.isArray(rootContext.modelValue.value)) return !flatten(rootContext.getChildren(props.value) || []).every((child) => rootContext.modelValue.value.find((v) => rootContext.getKey(v) === rootContext.getKey(child)));
			else return void 0;
		});
		const isDisabled = (0, vue_exports.computed)(() => rootContext.disabled.value || props.disabled);
		function handleKeydownRight(ev) {
			if (isDisabled.value) return;
			if (!hasChildren.value) return;
			if (isExpanded.value) {
				const collection = getItems().map((i) => i.ref);
				const currentElement = getActiveElement();
				const currentIndex = collection.indexOf(currentElement);
				const nextElement = [...collection].slice(currentIndex).find((el) => Number(el.getAttribute("data-indent")) === props.level + 1);
				if (nextElement) nextElement.focus();
			} else handleToggleCustomEvent(ev);
		}
		function handleKeydownLeft(ev) {
			if (isDisabled.value) return;
			if (isExpanded.value) handleToggleCustomEvent(ev);
			else {
				const collection = getItems().map((i) => i.ref);
				const currentElement = getActiveElement();
				const currentIndex = collection.indexOf(currentElement);
				const parentElement = [...collection].slice(0, currentIndex).reverse().find((el) => Number(el.getAttribute("data-indent")) === props.level - 1);
				if (parentElement) parentElement.focus();
			}
		}
		async function handleSelect(ev) {
			if (isDisabled.value) return;
			emits("select", ev);
			if (ev?.defaultPrevented) return;
			rootContext.onSelect(props.value);
		}
		async function handleToggle(ev) {
			if (isDisabled.value) return;
			emits("toggle", ev);
			if (ev?.defaultPrevented) return;
			rootContext.onToggle(props.value);
		}
		async function handleSelectCustomEvent(ev) {
			if (!ev) return;
			const eventDetail = {
				originalEvent: ev,
				value: props.value,
				isExpanded: isExpanded.value,
				isSelected: isSelected.value
			};
			handleAndDispatchCustomEvent$1(TREE_SELECT, handleSelect, eventDetail);
		}
		async function handleToggleCustomEvent(ev) {
			if (!ev) return;
			const eventDetail = {
				originalEvent: ev,
				value: props.value,
				isExpanded: isExpanded.value,
				isSelected: isSelected.value
			};
			handleAndDispatchCustomEvent$1(TREE_TOGGLE, handleToggle, eventDetail);
		}
		__expose({
			isExpanded,
			isSelected,
			isIndeterminate,
			isDisabled,
			handleToggle: () => rootContext.onToggle(props.value),
			handleSelect: () => rootContext.onSelect(props.value)
		});
		return (_ctx, _cache) => {
			return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(RovingFocusItem_default), {
				"as-child": "",
				value: _ctx.value,
				"allow-shift-key": "",
				focusable: !isDisabled.value
			}, {
				default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Primitive), (0, vue_exports.mergeProps)(_ctx.$attrs, {
					role: "treeitem",
					as: _ctx.as,
					"as-child": _ctx.asChild,
					"aria-selected": isSelected.value,
					"aria-expanded": hasChildren.value ? isExpanded.value : void 0,
					"aria-level": _ctx.level,
					"aria-disabled": isDisabled.value ? true : void 0,
					"data-indent": _ctx.level,
					"data-selected": isSelected.value ? "" : void 0,
					"data-expanded": isExpanded.value ? "" : void 0,
					"data-disabled": isDisabled.value ? "" : void 0,
					onKeydown: [
						(0, vue_exports.withKeys)((0, vue_exports.withModifiers)(handleSelectCustomEvent, ["self", "prevent"]), ["enter", "space"]),
						_cache[0] || (_cache[0] = (0, vue_exports.withKeys)((0, vue_exports.withModifiers)((ev) => (0, vue_exports.unref)(rootContext).dir.value === "ltr" ? handleKeydownRight(ev) : handleKeydownLeft(ev), ["prevent"]), ["right"])),
						_cache[1] || (_cache[1] = (0, vue_exports.withKeys)((0, vue_exports.withModifiers)((ev) => (0, vue_exports.unref)(rootContext).dir.value === "ltr" ? handleKeydownLeft(ev) : handleKeydownRight(ev), ["prevent"]), ["left"]))
					],
					onClick: _cache[2] || (_cache[2] = (0, vue_exports.withModifiers)((ev) => {
						handleSelectCustomEvent(ev);
						handleToggleCustomEvent(ev);
					}, ["stop"]))
				}), {
					default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default", {
						isExpanded: isExpanded.value,
						isSelected: isSelected.value,
						isIndeterminate: isIndeterminate.value,
						isDisabled: isDisabled.value,
						handleSelect: () => (0, vue_exports.unref)(rootContext).onSelect(_ctx.value),
						handleToggle: () => (0, vue_exports.unref)(rootContext).onToggle(_ctx.value)
					})]),
					_: 3
				}, 16, [
					"as",
					"as-child",
					"aria-selected",
					"aria-expanded",
					"aria-level",
					"aria-disabled",
					"data-indent",
					"data-selected",
					"data-expanded",
					"data-disabled",
					"onKeydown"
				])]),
				_: 3
			}, 8, ["value", "focusable"]);
		};
	}
});
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprose%2Fcode-tree.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_tree_default = {
	"slots": {
		"root": "relative lg:h-[450px] my-5 grid lg:grid-cols-3 border border-muted rounded-md",
		"list": "isolate relative p-2 border-b lg:border-b-0 lg:border-e border-muted overflow-y-auto",
		"item": "",
		"listWithChildren": "ms-4.5 border-s border-default",
		"itemWithChildren": "ps-1.5 -ms-px",
		"link": "relative group peer w-full px-2.5 py-1.5 before:inset-y-px before:inset-x-0 flex items-center gap-1.5 text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none before:outline-primary/25 focus-visible:before:outline-3",
		"linkLeadingIcon": "size-4 shrink-0",
		"linkLabel": "truncate",
		"linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
		"linkTrailingIcon": "size-5 transform transition-transform duration-200 shrink-0 group-data-expanded:rotate-180",
		"content": "overflow-hidden lg:col-span-2 flex flex-col [&>div]:my-0 [&>div]:flex-1 [&>div]:flex [&>div]:flex-col [&>div>div]:border-0 [&>div>pre]:border-b-0 [&>div>pre]:border-s-0 [&>div>pre]:border-e-0 [&>div>pre]:rounded-s-none [&>div>pre]:flex-1 [&>div]:overflow-y-auto"
	},
	"variants": { "active": {
		"true": { "link": "text-highlighted before:bg-elevated" },
		"false": { "link": ["hover:text-highlighted hover:before:bg-elevated/50", "transition-colors before:transition-colors"] }
	} }
};
//#endregion
//#region node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeTree.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "ProseCodeTree",
	__ssrInlineRender: true,
	props: {
		items: {
			type: Array,
			required: false
		},
		modelValue: {
			type: String,
			required: false
		},
		defaultValue: {
			type: String,
			required: false
		},
		expandAll: {
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
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = (0, vue_exports.useSlots)();
		const props = useComponentProps("prose.codeTree", _props);
		const appConfig = useAppConfig();
		const [DefineTreeTemplate, ReuseTreeTemplate] = createReusableTemplate();
		const ui = (0, vue_exports.computed)(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprose_2Fcode_tree_default,
			...appConfig.ui?.prose?.codeTree || {}
		})());
		const initialPath = props.modelValue ?? props.defaultValue;
		const model = (0, vue_exports.ref)(initialPath ? { path: initialPath } : void 0);
		const lastSelectedItem = (0, vue_exports.ref)();
		(0, vue_exports.watch)(model, (value) => {
			if (value?.path !== props.modelValue) emits("update:modelValue", value?.path);
		});
		(0, vue_exports.watch)(() => props.modelValue, (value) => {
			if (value === model.value?.path) return;
			model.value = value ? { path: value } : void 0;
			const pathsToExpand = getExpandedPaths(value);
			for (const path of pathsToExpand) if (!expanded.value.includes(path)) expanded.value.push(path);
		});
		const rerenderCount = (0, vue_exports.ref)(1);
		const flatItems = (0, vue_exports.computed)(() => {
			rerenderCount.value;
			return props.items || slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [];
		});
		const items = (0, vue_exports.computed)(() => buildTree(flatItems.value));
		function buildTree(items2) {
			const map = /* @__PURE__ */ new Map();
			const root = [];
			items2.forEach((item) => {
				const parts = item.label.split("/");
				let path = "";
				parts.forEach((part, i) => {
					path = path ? `${path}/${part}` : part;
					if (!map.has(path)) {
						const node = {
							label: part,
							path,
							...i < parts.length - 1 && { children: [] }
						};
						map.set(path, node);
						if (i === 0) root.push(node);
						else map.get(parts.slice(0, i).join("/"))?.children?.push(node);
					}
				});
			});
			const sort = (nodes) => nodes.sort((a, b) => !!a.children === !!b.children ? a.label.localeCompare(b.label) : b.children ? 1 : -1).map((n) => ({
				...n,
				children: n.children && sort(n.children)
			}));
			return sort(root);
		}
		function transformSlot(slot, index) {
			if (typeof slot.type === "symbol") return slot.children?.map(transformSlot);
			return {
				label: slot.props?.filename || slot.props?.label || `${index}`,
				icon: slot.props?.icon,
				component: slot
			};
		}
		function getExpandedPaths(path) {
			if (props.expandAll) {
				const allPaths = /* @__PURE__ */ new Set();
				flatItems.value.forEach((item) => {
					const parts2 = item.label.split("/");
					for (let i = 1; i < parts2.length; i++) allPaths.add(parts2.slice(0, i).join("/"));
				});
				return Array.from(allPaths);
			}
			if (!path) return [];
			const parts = path.split("/");
			return parts.slice(0, -1).map((_, index) => parts.slice(0, index + 1).join("/"));
		}
		const expanded = (0, vue_exports.ref)(getExpandedPaths(model.value?.path));
		(0, vue_exports.watch)(flatItems, (newItems, oldItems) => {
			if (!props.expandAll) return;
			if (newItems.map((i) => i.label).join("\n") !== (oldItems?.map((i) => i.label).join("\n") ?? "")) expanded.value = getExpandedPaths();
		});
		(0, vue_exports.watch)(model, (value) => {
			const item = flatItems.value.find((item2) => value?.path === item2.label);
			if (item?.component) lastSelectedItem.value = item;
		}, { immediate: true });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(DefineTreeTemplate), null, {
				default: (0, vue_exports.withCtx)(({ items, level }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						(0, server_renderer_exports.ssrRenderList)(items, (item, index) => {
							_push(`<li role="presentation" class="${(0, server_renderer_exports.ssrRenderClass)(level > 1 ? ui.value.itemWithChildren({ class: (0, vue_exports.unref)(props).ui?.itemWithChildren }) : ui.value.item({ class: (0, vue_exports.unref)(props).ui?.item }))}"${_scopeId}>`);
							_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(TreeItem_default), {
								level,
								value: item,
								"as-child": ""
							}, {
								default: (0, vue_exports.withCtx)(({ isExpanded, isSelected }, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<button type="button" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.link({
											class: (0, vue_exports.unref)(props).ui?.link,
											active: isSelected
										}))}"${_scopeId}>`);
										if (item.children?.length) _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
											name: isExpanded ? (0, vue_exports.unref)(appConfig).ui.icons.folderOpen : (0, vue_exports.unref)(appConfig).ui.icons.folder,
											class: ui.value.linkLeadingIcon({ class: (0, vue_exports.unref)(props).ui?.linkLeadingIcon })
										}, null, _parent, _scopeId));
										else _push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$2, {
											filename: item.label,
											class: ui.value.linkLeadingIcon({ class: (0, vue_exports.unref)(props).ui?.linkLeadingIcon })
										}, null, _parent, _scopeId));
										_push(`<span class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.linkLabel({ class: (0, vue_exports.unref)(props).ui?.linkLabel }))}"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(item.label)}</span>`);
										if (item.children?.length) {
											_push(`<span class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.linkTrailing({ class: (0, vue_exports.unref)(props).ui?.linkTrailing }))}"${_scopeId}>`);
											_push((0, server_renderer_exports.ssrRenderComponent)(_sfc_main$1, {
												name: (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
												class: ui.value.linkTrailingIcon({ class: (0, vue_exports.unref)(props).ui?.linkTrailingIcon })
											}, null, _parent, _scopeId));
											_push(`</span>`);
										} else _push(`<!---->`);
										_push(`</button>`);
										if (item.children?.length && isExpanded) {
											_push(`<ul role="group" class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.listWithChildren({ class: (0, vue_exports.unref)(props).ui?.listWithChildren }))}"${_scopeId}>`);
											_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ReuseTreeTemplate), {
												items: item.children,
												level: level + 1
											}, null, _parent, _scopeId));
											_push(`</ul>`);
										} else _push(`<!---->`);
									} else return [(0, vue_exports.createVNode)("button", {
										type: "button",
										class: ui.value.link({
											class: (0, vue_exports.unref)(props).ui?.link,
											active: isSelected
										})
									}, [
										item.children?.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$1, {
											key: 0,
											name: isExpanded ? (0, vue_exports.unref)(appConfig).ui.icons.folderOpen : (0, vue_exports.unref)(appConfig).ui.icons.folder,
											class: ui.value.linkLeadingIcon({ class: (0, vue_exports.unref)(props).ui?.linkLeadingIcon })
										}, null, 8, ["name", "class"])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$2, {
											key: 1,
											filename: item.label,
											class: ui.value.linkLeadingIcon({ class: (0, vue_exports.unref)(props).ui?.linkLeadingIcon })
										}, null, 8, ["filename", "class"])),
										(0, vue_exports.createVNode)("span", { class: ui.value.linkLabel({ class: (0, vue_exports.unref)(props).ui?.linkLabel }) }, (0, vue_exports.toDisplayString)(item.label), 3),
										item.children?.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
											key: 2,
											class: ui.value.linkTrailing({ class: (0, vue_exports.unref)(props).ui?.linkTrailing })
										}, [(0, vue_exports.createVNode)(_sfc_main$1, {
											name: (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
											class: ui.value.linkTrailingIcon({ class: (0, vue_exports.unref)(props).ui?.linkTrailingIcon })
										}, null, 8, ["name", "class"])], 2)) : (0, vue_exports.createCommentVNode)("", true)
									], 2), item.children?.length && isExpanded ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("ul", {
										key: 0,
										role: "group",
										class: ui.value.listWithChildren({ class: (0, vue_exports.unref)(props).ui?.listWithChildren })
									}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseTreeTemplate), {
										items: item.children,
										level: level + 1
									}, null, 8, ["items", "level"])], 2)) : (0, vue_exports.createCommentVNode)("", true)];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</li>`);
						});
						_push(`<!--]-->`);
					} else return [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(items, (item, index) => {
						return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("li", {
							key: `${level}-${index}`,
							role: "presentation",
							class: level > 1 ? ui.value.itemWithChildren({ class: (0, vue_exports.unref)(props).ui?.itemWithChildren }) : ui.value.item({ class: (0, vue_exports.unref)(props).ui?.item })
						}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(TreeItem_default), {
							level,
							value: item,
							"as-child": ""
						}, {
							default: (0, vue_exports.withCtx)(({ isExpanded, isSelected }) => [(0, vue_exports.createVNode)("button", {
								type: "button",
								class: ui.value.link({
									class: (0, vue_exports.unref)(props).ui?.link,
									active: isSelected
								})
							}, [
								item.children?.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$1, {
									key: 0,
									name: isExpanded ? (0, vue_exports.unref)(appConfig).ui.icons.folderOpen : (0, vue_exports.unref)(appConfig).ui.icons.folder,
									class: ui.value.linkLeadingIcon({ class: (0, vue_exports.unref)(props).ui?.linkLeadingIcon })
								}, null, 8, ["name", "class"])) : ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)(_sfc_main$2, {
									key: 1,
									filename: item.label,
									class: ui.value.linkLeadingIcon({ class: (0, vue_exports.unref)(props).ui?.linkLeadingIcon })
								}, null, 8, ["filename", "class"])),
								(0, vue_exports.createVNode)("span", { class: ui.value.linkLabel({ class: (0, vue_exports.unref)(props).ui?.linkLabel }) }, (0, vue_exports.toDisplayString)(item.label), 3),
								item.children?.length ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("span", {
									key: 2,
									class: ui.value.linkTrailing({ class: (0, vue_exports.unref)(props).ui?.linkTrailing })
								}, [(0, vue_exports.createVNode)(_sfc_main$1, {
									name: (0, vue_exports.unref)(appConfig).ui.icons.chevronDown,
									class: ui.value.linkTrailingIcon({ class: (0, vue_exports.unref)(props).ui?.linkTrailingIcon })
								}, null, 8, ["name", "class"])], 2)) : (0, vue_exports.createCommentVNode)("", true)
							], 2), item.children?.length && isExpanded ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("ul", {
								key: 0,
								role: "group",
								class: ui.value.listWithChildren({ class: (0, vue_exports.unref)(props).ui?.listWithChildren })
							}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseTreeTemplate), {
								items: item.children,
								level: level + 1
							}, null, 8, ["items", "level"])], 2)) : (0, vue_exports.createCommentVNode)("", true)]),
							_: 2
						}, 1032, ["level", "value"])], 2);
					}), 128))];
				}),
				_: 1
			}, _parent));
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)(_ctx.$attrs, { class: ui.value.root({ class: [(0, vue_exports.unref)(props).ui?.root, (0, vue_exports.unref)(props).class] }) }))}>`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(TreeRoot_default), {
				modelValue: model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				expanded: expanded.value,
				"onUpdate:expanded": ($event) => expanded.value = $event,
				class: ui.value.list({ class: (0, vue_exports.unref)(props).ui?.list }),
				items: items.value,
				"get-key": (item2) => item2.path
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ReuseTreeTemplate), {
						items: items.value,
						level: 1
					}, null, _parent, _scopeId));
					else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(ReuseTreeTemplate), {
						items: items.value,
						level: 1
					}, null, 8, ["items"])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)(ui.value.content({ class: (0, vue_exports.unref)(props).ui?.content }))}">`);
			(0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)(lastSelectedItem.value?.component), null, null), _parent);
			_push(`</div></div><!--]-->`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.10.0_6c14042453dccfcc45d18f7f75345c04/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeTree.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeTree-yglZWIZ_.mjs.map
