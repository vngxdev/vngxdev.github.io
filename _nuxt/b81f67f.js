(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(t,e,n){"use strict";n.r(e);var r=n(27),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"flex justify-center mt-32 mb-6"},[n("p",{staticClass:"font-serif text-sm font-normal text-brown"},[t._v("Dibuat menggunakan "),n("span",{staticClass:"font-sans"},[t._v("NuxtJS")]),t._v(" dan "),n("span",{staticClass:"font-sans"},[t._v("Tailwind CSS")]),t._v(".")])])}],!1,null,null,null);e.default=component.exports},182:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("48e91e5d",content,!0,{sourceMap:!1})},202:function(t,e,n){"use strict";var r={name:"MyDefault",components:{TheFooter:n(136).default},data:function(){return{loadDone:!1}},head:function(){return{link:[{rel:"canonical",href:this.$route.path}]}},mounted:function(){var t=this;document.onreadystatechange=function(){"complete"===document.readyState&&(t.loadDone=!0)}}},o=(n(275),n(27)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"fixed top-0 left-0 z-50 w-full h-full transition duration-500 bg-camel",class:t.loadDone?"-translate-x-full":"translate-x-0"}),t._v(" "),n("TheHeader"),t._v(" "),n("Nuxt"),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{TheHeader:n(288).default,TheFooter:n(136).default})},205:function(t,e,n){n(206),t.exports=n(207)},271:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("9d54a558",content,!0,{sourceMap:!1})},272:function(t,e,n){var r=n(68)((function(i){return i[1]}));r.push([t.i,"/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: Graphik, sans-serif; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.container{width:100%;padding-right:1rem;padding-left:1rem;}@media (min-width: 650px){.container{max-width:650px;padding-right:2rem;padding-left:2rem;}}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1080px){.container{max-width:1080px;padding-right:15px;padding-left:15px;}}@media (min-width: 1120px){.container{max-width:1120px;}}.pointer-events-none{pointer-events:none;}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.sticky{position:-webkit-sticky;position:sticky;}.top-0{top:0px;}.left-0{left:0px;}.top-1\\/2{top:50%;}.left-1\\/2{left:50%;}.z-40{z-index:40;}.z-50{z-index:50;}.mx-auto{margin-left:auto;margin-right:auto;}.my-10{margin-top:2.5rem;margin-bottom:2.5rem;}.my-6{margin-top:1.5rem;margin-bottom:1.5rem;}.mt-32{margin-top:8rem;}.mb-6{margin-bottom:1.5rem;}.mt-14{margin-top:3.5rem;}.mt-1\\.5{margin-top:0.375rem;}.mt-1{margin-top:0.25rem;}.mb-10{margin-bottom:2.5rem;}.mb-4{margin-bottom:1rem;}.mt-4{margin-top:1rem;}.flex{display:flex;}.grid{display:grid;}.aspect-square{aspect-ratio:1 / 1;}.h-full{height:100%;}.w-full{width:100%;}.w-1\\/2{width:50%;}.w-5{width:1.25rem;}.w-fit{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.-translate-x-full{--tw-translate-x:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.translate-x-0{--tw-translate-x:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.flex-wrap{flex-wrap:wrap;}.justify-center{justify-content:center;}.gap-10{gap:2.5rem;}.whitespace-nowrap{white-space:nowrap;}.border-2{border-width:2px;}.border{border-width:1px;}.border-b{border-bottom-width:1px;}.border-dashed{border-style:dashed;}.border-cameldark{--tw-border-opacity:1;border-color:rgb(236 201 121 / var(--tw-border-opacity));}.border-brownlight{--tw-border-opacity:1;border-color:rgb(69 67 59 / var(--tw-border-opacity));}.border-brown{--tw-border-opacity:1;border-color:rgb(41 40 35 / var(--tw-border-opacity));}.bg-cameldark{--tw-bg-opacity:1;background-color:rgb(236 201 121 / var(--tw-bg-opacity));}.bg-camel{--tw-bg-opacity:1;background-color:rgb(245 228 188 / var(--tw-bg-opacity));}.bg-browndark{--tw-bg-opacity:1;background-color:rgb(14 13 12 / var(--tw-bg-opacity));}.bg-opacity-40{--tw-bg-opacity:0.4;}.bg-opacity-20{--tw-bg-opacity:0.2;}.p-2{padding:0.5rem;}.py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.px-10{padding-left:2.5rem;padding-right:2.5rem;}.pb-6{padding-bottom:1.5rem;}.text-center{text-align:center;}.font-serif{font-family:Vollkorn, serif;}.font-sans{font-family:Graphik, sans-serif;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.font-bold{font-weight:700;}.font-normal{font-weight:400;}.font-medium{font-weight:500;}.font-semibold{font-weight:600;}.font-light{font-weight:300;}.tracking-tight{letter-spacing:-0.025em;}.tracking-wide{letter-spacing:0.025em;}.text-brown{--tw-text-opacity:1;color:rgb(41 40 35 / var(--tw-text-opacity));}.text-browndark{--tw-text-opacity:1;color:rgb(14 13 12 / var(--tw-text-opacity));}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline;}.opacity-30{opacity:0.3;}.opacity-0{opacity:0;}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-100{transition-duration:100ms;}.duration-300{transition-duration:300ms;}.duration-500{transition-duration:500ms;}.duration-150{transition-duration:150ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.ease-in{transition-timing-function:cubic-bezier(0.4, 0, 1, 1);}.hover\\:z-10:hover{z-index:10;}.hover\\:border-browndark:hover{--tw-border-opacity:1;border-color:rgb(14 13 12 / var(--tw-border-opacity));}.hover\\:border-cameldark:hover{--tw-border-opacity:1;border-color:rgb(236 201 121 / var(--tw-border-opacity));}.hover\\:bg-opacity-70:hover{--tw-bg-opacity:0.7;}.hover\\:bg-opacity-40:hover{--tw-bg-opacity:0.4;}.hover\\:opacity-100:hover{opacity:1;}.group:hover .group-hover\\:scale-\\[1\\.03\\]{--tw-scale-x:1.03;--tw-scale-y:1.03;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.group:hover .group-hover\\:sepia-0{--tw-sepia:sepia(0);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}@media (min-width: 768px){.md\\:my-14{margin-top:3.5rem;margin-bottom:3.5rem;}.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.md\\:gap-6{gap:1.5rem;}.md\\:text-6xl{font-size:3.75rem;line-height:1;}.md\\:text-2xl{font-size:1.5rem;line-height:2rem;}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem;}}@media (min-width: 1024px){.lg\\:w-1\\/4{width:25%;}.lg\\:gap-10{gap:2.5rem;}.lg\\:text-7xl{font-size:4.5rem;line-height:1;}.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem;}}",""]),r.locals={},t.exports=r},275:function(t,e,n){"use strict";n(182)},276:function(t,e,n){var r=n(68)((function(i){return i[1]}));r.push([t.i,".bg-texture, body{--tw-bg-opacity:1;background-color:rgb(245 228 188 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(41 40 35 / var(--tw-text-opacity))}.bg-texture,body{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath fill='%23ecc979' fill-opacity='.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'/%3E%3C/svg%3E\")}",""]),r.locals={},t.exports=r},288:function(t,e,n){"use strict";n.r(e);var r=n(27),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"sticky top-0 z-40 bg-texture"},[n("div",{staticClass:"container py-4 mx-auto text-center"},[n("h1",{staticClass:"font-serif text-2xl font-medium pointer-events-none"},[t._v("vngxdev.")])])])}],!1,null,null,null);e.default=component.exports}},[[205,5,1,6]]]);