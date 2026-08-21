import { ah as vue_exports } from '../virtual/entry.mjs';
import { f as flatUnwrap } from './ssrSlot-Ix4Uittx.mjs';

//#region node_modules/.pnpm/@nuxtjs+mdc@0.22.2_magic-string@1.1.0_magicast@0.5.4_oxc-parser@0.139.0_rolldown@1.2.1__e2d56cf3c7ee8402e0a681212ec49164/node_modules/@nuxtjs/mdc/dist/runtime/utils/slot.js
var renderSlot = (slots, name, props, ...rest) => {
	if (slots[name]) return (0, vue_exports.renderSlot)({
		...slots,
		[name]: () => flatUnwrap(slots[name](), props?.unwrap || props?.mdcUnwrap)
	}, name, props, ...rest);
	return (0, vue_exports.renderSlot)(slots, name, props, ...rest);
};

export { renderSlot as r };
//# sourceMappingURL=slot-D8jiLovS.mjs.map
