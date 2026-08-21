import { U as server_renderer_exports } from '../virtual/entry.mjs';

//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-string@1.1.0_magicast@0.5.4_oxc-parser@0.139.0_rolldown@1.2.1__e2d56cf3c7ee8402e0a681212ec49164/node_modules/@nuxtjs/mdc/dist/runtime/utils/node.js
var TEXT_TAGS = [
	"p",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"li"
];
function isTag(vnode, tag) {
	if (vnode.type === tag) return true;
	if (typeof vnode.type === "object" && vnode.type.tag === tag) return true;
	if (vnode.tag === tag) return true;
	return false;
}
function isText(vnode) {
	return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
	if (Array.isArray(node.children) || typeof node.children === "string") return node.children;
	if (typeof node.children?.default === "function") return node.children.default();
	return [];
}
function nodeTextContent(node) {
	if (!node) return "";
	if (Array.isArray(node)) return node.map(nodeTextContent).join("");
	if (isText(node)) return node.value || node.children || "";
	const children = nodeChildren(node);
	if (Array.isArray(children)) return children.map(nodeTextContent).filter(Boolean).join("");
	return "";
}
function unwrap(vnode, tags = []) {
	if (Array.isArray(vnode)) return vnode.flatMap((node) => unwrap(node, tags));
	let result = vnode;
	if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
		result = nodeChildren(vnode) || vnode;
		if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) result = [result];
	}
	return result;
}
function _flatUnwrap(vnodes, tags = []) {
	vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
	if (!tags.length) return vnodes;
	return vnodes.flatMap((vnode) => _flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
function flatUnwrap(vnodes, tags = []) {
	if (typeof tags === "string") tags = tags.split(/[,\s]/).map((tag) => tag.trim()).filter(Boolean);
	if (!tags.length) return vnodes;
	return _flatUnwrap(vnodes, tags).reduce((acc, item) => {
		if (isText(item)) if (typeof acc[acc.length - 1] === "string") acc[acc.length - 1] += item.children;
		else acc.push(item.children);
		else acc.push(item);
		return acc;
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-string@1.1.0_magicast@0.5.4_oxc-parser@0.139.0_rolldown@1.2.1__e2d56cf3c7ee8402e0a681212ec49164/node_modules/@nuxtjs/mdc/dist/runtime/utils/ssrSlot.js
var ssrRenderSlot = (slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId) => {
	if (slots[name]) return (0, server_renderer_exports.ssrRenderSlot)({
		...slots,
		[name]: () => flatUnwrap(slots[name](), props?.unwrap || props?.mdcUnwrap)
	}, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
	return (0, server_renderer_exports.ssrRenderSlot)(slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
};

export { flatUnwrap as f, ssrRenderSlot as s };
//# sourceMappingURL=ssrSlot-Ix4Uittx.mjs.map
