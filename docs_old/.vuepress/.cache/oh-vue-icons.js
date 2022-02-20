import {
  computed,
  defineComponent,
  h,
  onMounted,
  onUpdated,
  reactive,
  ref,
  toRefs
} from "./chunk-JKYNMV7Q.js";
import "./chunk-ZWBXF3JF.js";
import {
  __spreadProps,
  __spreadValues,
  init_define_GISCUS_OPTIONS,
  init_define_MZ_ZOOM_OPTIONS,
  init_define_SITE_LOCALES
} from "./chunk-G7NV52D4.js";

// dep:oh-vue-icons
init_define_GISCUS_OPTIONS();
init_define_MZ_ZOOM_OPTIONS();
init_define_SITE_LOCALES();

// node_modules/oh-vue-icons/dist/index.esm.min.js
init_define_GISCUS_OPTIONS();
init_define_MZ_ZOOM_OPTIONS();
init_define_SITE_LOCALES();

// node_modules/oh-vue-icons/node_modules/vue-demi/lib/index.mjs
init_define_GISCUS_OPTIONS();
init_define_MZ_ZOOM_OPTIONS();
init_define_SITE_LOCALES();
var isVue2 = false;

// node_modules/oh-vue-icons/dist/index.esm.min.js
var l = (n, o) => Object.prototype.hasOwnProperty.call(n, o);
var h2 = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "&": "&amp;" };
var p = 0;
var f = (n, ...o) => (o.forEach((o2) => {
  for (const e in o2)
    e !== "name" && l(o2, e) && (n[e] = o2[e]);
}), n);
var u = (n, o) => {
  o ? o.constructor.super.util.warn(n, o) : console.error(n);
};
var m = (n) => n.replace(/[<>"&]/g, (n2) => h2[n2] || n2);
var c = (n) => n + p++;
var d = {};
var g = (n) => {
  const { name: o, paths: e = [], d: t, polygons: v = [], points: r } = n;
  t && e.push({ d: t }), r && v.push({ points: r }), d[o] = f({}, n, { paths: e, polygons: v }), d[o].minX || (d[o].minX = 0), d[o].minY || (d[o].minY = 0);
};
var w = (...n) => {
  for (const o of n)
    g(o);
};
var y = () => d;
var b = defineComponent({ name: "OhVueIcon", props: { name: { type: String, validator: (n) => !n || n in d || (u(`Invalid prop: prop "name" is referring to an unregistered icon "${n}".
Please make sure you have imported this icon before using it.`, void 0), false) }, title: String, fill: String, scale: { type: [Number, String], default: 1 }, animation: { validator: (n) => ["spin", "spin-pulse", "wrench", "ring", "pulse", "flash", "float"].includes(n) }, hover: Boolean, flip: { validator: (n) => ["horizontal", "vertical", "both"].includes(n) }, speed: { validator: (n) => n === "fast" || n === "slow" }, label: String, inverse: Boolean }, setup(n) {
  const a = ref([]), s = reactive({ outerScale: 1.2, x: null, y: null }), l2 = reactive({ width: 0, height: 0 }), h3 = computed(() => {
    const o = Number(n.scale);
    return isNaN(o) || o <= 0 ? (u('Invalid prop: prop "scale" should be a number over 0.', this), s.outerScale) : o * s.outerScale;
  }), p2 = computed(() => ({ "ov-icon": true, "ov-inverse": n.inverse, "ov-flip-horizontal": n.flip === "horizontal", "ov-flip-vertical": n.flip === "vertical", "ov-flip-both": n.flip === "both", "ov-spin": n.animation === "spin", "ov-spin-pulse": n.animation === "spin-pulse", "ov-wrench": n.animation === "wrench", "ov-ring": n.animation === "ring", "ov-pulse": n.animation === "pulse", "ov-flash": n.animation === "flash", "ov-float": n.animation === "float", "ov-hover": n.hover, "ov-fast": n.speed === "fast", "ov-slow": n.speed === "slow" })), f2 = computed(() => n.name ? d[n.name] : null), m2 = computed(() => f2.value ? `${f2.value.minX} ${f2.value.minY} ${f2.value.width} ${f2.value.height}` : `0 0 ${w2.value} ${y2.value}`), g2 = computed(() => {
    if (!f2.value)
      return 1;
    const { width: n2, height: o } = f2.value;
    return Math.max(n2, o) / 16;
  }), w2 = computed(() => l2.width || f2.value && f2.value.width / g2.value * h3.value || 0), y2 = computed(() => l2.height || f2.value && f2.value.height / g2.value * h3.value || 0), b2 = computed(() => h3.value !== 1 && { fontSize: h3.value + "em" }), $2 = computed(() => {
    if (!f2.value || !f2.value.raw)
      return null;
    const n2 = {};
    let o = f2.value.raw;
    return o = o.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g, (o2, e, t) => {
      const v = c("vat-");
      return n2[t] = v, ` id="${v}"`;
    }), o = o.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (o2, e, t, v) => {
      const r = e || v;
      return r && n2[r] ? `#${n2[r]}` : o2;
    }), o;
  }), x = computed(() => f2.value && f2.value.attr ? f2.value.attr : {}), k = () => {
    if (!n.name && n.name !== null && a.value.length === 0)
      return void u('Invalid prop: prop "name" is required.', this);
    if (f2.value)
      return;
    let o = 0, e = 0;
    a.value.forEach((n2) => {
      n2.outerScale = h3.value, o = Math.max(o, n2.width), e = Math.max(e, n2.height);
    }), l2.width = o, l2.height = e, a.value.forEach((n2) => {
      n2.x = (o - n2.width) / 2, n2.y = (e - n2.height) / 2;
    });
  };
  return onMounted(() => {
    k();
  }), onUpdated(() => {
    k();
  }), __spreadProps(__spreadValues({}, toRefs(s)), { children: a, icon: f2, klass: p2, style: b2, width: w2, height: y2, box: m2, attribs: x, raw: $2 });
}, created() {
  const n = this.$parent;
  n && n.children && n.children.push(this);
}, render() {
  const n = Object.assign({ role: this.$attrs.role || (this.label || this.title ? "img" : null), "aria-label": this.label || null, "aria-hidden": !(this.label || this.title), width: this.width, height: this.height, viewBox: this.box }, this.attribs);
  this.attribs.stroke ? n.stroke = this.fill ? this.fill : "currentColor" : n.fill = this.fill ? this.fill : "currentColor", this.x && (n.x = this.x.toString()), this.y && (n.y = this.y.toString());
  let o = { class: this.klass, style: this.style };
  if (isVue2 ? o.attrs = n : o = Object.assign(o, n), this.raw) {
    const n2 = this.title ? `<title>${m(this.title)}</title>${this.raw}` : this.raw;
    isVue2 ? o.domProps = { innerHTML: n2 } : o.innerHTML = n2;
  }
  const e = this.title ? [h("title", this.title)] : [], t = (n2, o2, e2) => h(n2, isVue2 ? { attrs: o2, key: `${n2}-${e2}` } : __spreadProps(__spreadValues({}, o2), { key: `${n2}-${e2}` }));
  return h("svg", o, this.raw ? void 0 : e.concat([this.$slots.default ? isVue2 ? this.$slots.default : this.$slots.default() : this.icon ? [...this.icon.paths.map((n2, o2) => t("path", n2, o2)), ...this.icon.polygons.map((n2, o2) => t("polygon", n2, o2))] : []]));
} });
function $(n, o) {
  o === void 0 && (o = {});
  var e = o.insertAt;
  if (n && typeof document != "undefined") {
    var t = document.head || document.getElementsByTagName("head")[0], v = document.createElement("style");
    v.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(v, t.firstChild) : t.appendChild(v), v.styleSheet ? v.styleSheet.cssText = n : v.appendChild(document.createTextNode(n));
  }
}
$(".ov-icon {\n  display: inline-block;\n  overflow: visible;\n  vertical-align: -0.2em;\n}\n");
$("/* ---------------- spin ---------------- */\n.ov-spin:not(.ov-hover),\n.ov-spin.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-spin {\n  animation: ov-spin 1s linear infinite;\n}\n\n.ov-spin:not(.ov-hover).ov-fast,\n.ov-spin.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-spin.ov-fast {\n  animation: ov-spin 0.7s linear infinite;\n}\n\n.ov-spin:not(.ov-hover).ov-slow,\n.ov-spin.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-spin.ov-slow {\n  animation: ov-spin 2s linear infinite;\n}\n\n/* ---------------- spin-pulse ---------------- */\n\n.ov-spin-pulse:not(.ov-hover),\n.ov-spin-pulse.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse {\n  animation: ov-spin 1s infinite steps(8);\n}\n\n.ov-spin-pulse:not(.ov-hover).ov-fast,\n.ov-spin-pulse.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {\n  animation: ov-spin 0.7s infinite steps(8);\n}\n\n.ov-spin-pulse:not(.ov-hover).ov-slow,\n.ov-spin-pulse.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {\n  animation: ov-spin 2s infinite steps(8);\n}\n\n@keyframes ov-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* ---------------- wrench ---------------- */\n.ov-wrench:not(.ov-hover),\n.ov-wrench.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-wrench {\n  animation: ov-wrench 2.5s ease infinite;\n}\n\n.ov-wrench:not(.ov-hover).ov-fast,\n.ov-wrench.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {\n  animation: ov-wrench 1.2s ease infinite;\n}\n\n.ov-wrench:not(.ov-hover).ov-slow,\n.ov-wrench.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {\n  animation: ov-wrench 3.7s ease infinite;\n}\n\n@keyframes ov-wrench {\n  0% {\n    transform: rotate(-12deg);\n  }\n\n  8% {\n    transform: rotate(12deg);\n  }\n\n  10%, 28%, 30%, 48%, 50%, 68% {\n    transform: rotate(24deg);\n  }\n\n  18%, 20%, 38%, 40%, 58%, 60% {\n    transform: rotate(-24deg);\n  }\n\n  75%, 100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* ---------------- ring ---------------- */\n.ov-ring:not(.ov-hover),\n.ov-ring.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-ring {\n  animation: ov-ring 2s ease infinite;\n}\n\n.ov-ring:not(.ov-hover).ov-fast,\n.ov-ring.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-ring.ov-fast {\n  animation: ov-ring 1s ease infinite;\n}\n\n.ov-ring:not(.ov-hover).ov-slow,\n.ov-ring.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-ring.ov-slow {\n  animation: ov-ring 3s ease infinite;\n}\n\n@keyframes ov-ring {\n  0% {\n    transform: rotate(-15deg);\n  }\n\n  2% {\n    transform: rotate(15deg);\n  }\n\n  4%, 12% {\n    transform: rotate(-18deg);\n  }\n\n  6% {\n    transform: rotate(18deg);\n  }\n\n  8% {\n    transform: rotate(-22deg);\n  }\n\n  10% {\n    transform: rotate(22deg);\n  }\n\n  12% {\n    transform: rotate(-18deg);\n  }\n\n  14% {\n    transform: rotate(18deg);\n  }\n\n  16% {\n    transform: rotate(-12deg);\n  }\n\n  18% {\n    transform: rotate(12deg);\n  }\n\n  20%, 100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* ---------------- pulse ---------------- */\n.ov-pulse:not(.ov-hover),\n.ov-pulse.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-pulse {\n  animation: ov-pulse 2s linear infinite;\n}\n\n.ov-pulse:not(.ov-hover).ov-fast,\n.ov-pulse.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {\n  animation: ov-pulse 1s linear infinite;\n}\n\n.ov-pulse:not(.ov-hover).ov-slow,\n.ov-pulse.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {\n  animation: ov-pulse 3s linear infinite;\n}\n\n@keyframes ov-pulse {\n  0% {\n    transform: scale(1.1);\n  }\n\n  50% {\n    transform: scale(0.8);\n  }\n\n  100% {\n    transform: scale(1.1);\n  }\n}\n\n/* ---------------- flash ---------------- */\n.ov-flash:not(.ov-hover),\n.ov-flash.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-flash {\n  animation: ov-flash 2s ease infinite;\n}\n\n.ov-flash:not(.ov-hover).ov-fast,\n.ov-flash.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-flash.ov-fast {\n  animation: ov-flash 1s ease infinite;\n}\n\n.ov-flash:not(.ov-hover).ov-slow,\n.ov-flash.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-flash.ov-slow {\n  animation: ov-flash 3s ease infinite;\n}\n\n@keyframes ov-flash {\n  0%, 100%, 50%{\n    opacity: 1;\n  }\n  25%, 75%{\n    opacity: 0;\n  }\n}\n\n/* ---------------- float ---------------- */\n.ov-float:not(.ov-hover),\n.ov-float.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-float {\n  animation: ov-float 2s linear infinite;\n}\n\n.ov-float:not(.ov-hover).ov-fast,\n.ov-float.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-float.ov-fast {\n  animation: ov-float 1s linear infinite;\n}\n\n.ov-float:not(.ov-hover).ov-slow,\n.ov-float.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-float.ov-slow {\n  animation: ov-float 3s linear infinite;\n}\n\n@keyframes ov-float {\n  0%, 100% {\n    transform: translateY(-3px);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n}\n");
$(".ov-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.ov-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.ov-flip-both {\n  transform: scale(-1, -1);\n}\n\n.ov-inverse {\n  color: #fff;\n}\n");
export {
  b as OhVueIcon,
  w as addIcons,
  y as listIcons
};
//# sourceMappingURL=oh-vue-icons.js.map
