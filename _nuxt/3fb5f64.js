(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{295:function(t,e,n){var map={"./perumdam.webp":296,"./website.webp":297};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=295},296:function(t,e,n){t.exports=n.p+"img/perumdam.3f46efc.webp"},297:function(t,e,n){t.exports=n.p+"img/website.65a2980.webp"},298:function(t,e,n){"use strict";n.r(e);var r={props:{article:{type:Object,required:!0}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rounded-lg fade-up border border-[#333336] bg-[#1D1D1F] shadow-md"},[r("div",{staticClass:"relative"},[r("img",{staticClass:"object-cover w-full rounded-t-lg",attrs:{src:n(295)("./"+t.article.img),alt:t.article.alt}}),t._v(" "),r("div",{staticClass:"absolute bottom-0 right-0 bg-black px-2 py-[.1rem] text-sm font-semibold text-white"},[t._v(t._s(t.article.time))])]),t._v(" "),r("div",{staticClass:"p-4 md:py-6 md:px-8"},[r("p",{staticClass:"mb-1 text-sm font-bold text-[#8e8e93]"},[t._v(t._s(t.article.label))]),t._v(" "),r("h5",{staticClass:"mb-4 text-xl font-semibold tracking-tight text-white"},[t._v(t._s(t.article.title))]),t._v(" "),r("nuxt-content",{staticClass:"font-normal text-white",attrs:{document:t.article}})],1)])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("1749fc10",content,!0,{sourceMap:!1})},303:function(t,e,n){t.exports=n.p+"img/profile.ffd4168.png"},304:function(t,e,n){"use strict";n(300)},305:function(t,e,n){var r=n(49)((function(i){return i[1]}));r.push([t.i,".line-divider{height:1px}.nuxt-content p{margin-top:0.75rem;font-weight:400;letter-spacing:0.025em;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.nuxt-content a{font-weight:400;--tw-text-opacity:1;color:rgb(41 151 255 / var(--tw-text-opacity));-webkit-text-decoration-line:underline;text-decoration-line:underline;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms}.nuxt-content a:hover{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},319:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col flex-wrap justify-center flex-1"},[e("div",{staticClass:"w-2/3 m-auto"},[e("img",{staticClass:"w-full border border-opacity-50 rounded-xl border-glyphwhite",attrs:{src:n(303),alt:"vngxdev profile"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"mb-6 text-4xl font-semibold md:text-4xl lg:text-5xl"},[n("span",{staticClass:"opacity-0 stagger"},[t._v("Hai, ")]),n("span",{staticClass:"opacity-0 stagger"},[t._v("saya")]),t._v(" "),n("span",{staticClass:"opacity-0 stagger"},[t._v("Anggi.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-12 md:py-16",attrs:{id:"kontak"}},[n("div",{staticClass:"container mx-auto"},[n("h5",{staticClass:"mx-auto mb-8 text-3xl font-semibold md:text-4xl w-fit md:mb-14 fade-up"},[t._v("Kontak")]),t._v(" "),n("div",{staticClass:"mx-auto w-fit rounded-lg border border-[#333336] bg-[#1D1D1F] shadow-md"},[n("div",{staticClass:"p-6 text-center"},[n("h5",{staticClass:"mb-3 text-xl font-semibold tracking-tight text-white"},[t._v("Anggi Firmansyah")]),t._v(" "),n("p",{staticClass:"mb-3 font-normal text-white"},[t._v("\n            Jl Joko Kendil, Kenanten, Puri,"),n("br"),t._v("\n            Kabupaten Mojokerto, Jawa Timur.\n          ")]),t._v(" "),n("a",{staticClass:"font-normal underline text-glyphblue hover:text-blue-500",attrs:{href:"mailto:vngxdev@gmail.com"}},[t._v("vngxdev@gmail.com")]),t._v(" "),n("br"),t._v(" "),n("a",{staticClass:"font-normal underline text-glyphblue hover:text-blue-500",attrs:{href:"https://www.dicoding.com/users/vngxdev",target:"_blank",rel:"nofollow"}},[t._v("Dicoding Profile")])])])])])}],o=n(9),l=(n(14),n(29),n(47),{name:"IndexPage",components:{PortoCard:n(298).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{yearCount:0,currentDate:0,experience:[{title:"Pameran Produk Kreatif dan IT Mahasiswa oleh Universitas Dr. Soetomo Surabaya",time:"Tahun 2019",desc:"Memenangkan juara 1, sebagai UI/UX Designer dalam tim, dengan konsep aplikasi sebagai perantara antara toko atau warung dengan konsumen."},{title:"Hackathon “Smart City Challenge” 2018 oleh APTIKOM & Universitas Brawijaya",time:"Tahun 2018",desc:"Memenangkan juara 3, sebagai UI/UX Designer dalam tim, dengan konsep bisnis aplikasi perantara antara pemateri atau narasumber dengan panitia penyelenggara suatu event (workshop/seminar)."},{title:"Indonesia Next Apps 4.0 – Tizen Smartphone Challenge",time:"Tahun 2017",desc:"Memenangkan Dicoding Challange dengan 3 submit game yaitu Tap Trash, Fauna Match, Garuda Guardian."},{title:"Tizen Tematik Challenge : Hari Anak Nasional",time:"Tahun 2017",desc:"Memenangkan Dicoding Challange dengan submit game Fauna Match."},{title:"Tizen Tematik Challenge : Hari Lahir Pancasila",time:"Tahun 2017",desc:"Memenangkan Dicoding Challange dengan submit game Garuda Guardian."},{title:"Freelance Desinger",time:"Tahun 2017-2019",desc:"Menerima pesanan desain meliputi desain poster, banner dan logo dari organisasi kampus dan beberapa perusahaan, juga perna mendesain keperluan publikasi pada salah satu event konser Fourtwnty."},{title:"Asisten Dosen",time:"Tahun 2017-2018",desc:"Mengajar praktikum mata kuliah pemrograman dasar (Java) dan basis data."},{title:"Himpunan Mahasiswa Teknik Informatika Unitomo",time:"Tahun 2016-2018",desc:"Anggota divisi media informasi dan komunikasi pada 2016 dan menjabat sebagai wakil ketua pada 2017. Ikut serta sebagai panitia menyelenggarakan berbagai seminar dan workshop IT."}],skillAndroid:["Java (Android Studio)","Kotlin (Sedang Mempelajari)","Material Design","REST API"],skillWeb:["Dasar Web","Wordpress (Menengah)","jQuery","VueJS","Tailwind","SEO / Web Optimizer (Dasar)"],skillDesign:["Adobe Photoshop"," Affinity Designer","Figma","Adobe Illustrator"]}},mounted:function(){this.currentDate=new Date,this.yearCount=this.currentDate.getFullYear()-2020,this.GSAPHandle()},methods:{GSAPHandle:function(){var t=this,e=this.$gsap;e.utils.toArray(".fade-up").forEach((function(section){e.from(section,{scrollTrigger:section,opacity:0,y:30,duration:1})})),e.utils.toArray(".stagger").forEach((function(n,i){var r=e.fromTo(n,{opacity:0,y:30},{duration:1.2,opacity:1,y:0,delay:.5+.5*i});t.$ScrollTrigger.create({trigger:n,animation:r,toggleActions:"play none none none",once:!0})})),e.utils.toArray(".stagger2").forEach((function(n,i){var r=e.fromTo(n,{opacity:0,y:30},{duration:.6,opacity:1,y:0,delay:.5+.5*i});t.$ScrollTrigger.create({trigger:n,animation:r,toggleActions:"play none none none",once:!0})}))}}}),d=(n(304),n(27)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"bg-[#004694] bg-[url('@/assets/images/bg-img.png')] pt-16 md:pt-0",attrs:{id:"tentang"}},[n("div",{staticClass:"container flex flex-col gap-12 py-16 mx-auto md:h-screen md:flex-row"},[t._m(0),t._v(" "),n("div",{staticClass:"flex flex-col justify-center flex-1 text-center md:text-left"},[t._m(1),t._v(" "),n("p",{staticClass:"mb-5 text-lg font-normal opacity-0 stagger2 md:text-xl lg:text-xl"},[t._v("Novice front-end developer yang gemar bereksperimen dengan pengembangan web, Android dan video game. Memperhatikan desain visual terutama UI/UX.")]),t._v(" "),n("p",{staticClass:"text-lg font-normal opacity-0 stagger2 md:text-xl lg:text-xl"},[t._v("Berpengalaman selama "),n("span",{staticClass:"font-medium "},[t._v(t._s(t.yearCount)+" tahun")]),t._v(" dalam sisi front-end, dengan proyek pertama sebagai freelance "),n("span",{staticClass:"font-medium "},[t._v("Android developer")]),t._v(" dan berlanjut ke "),n("span",{staticClass:"font-medium "},[t._v("Wordpress developer")]),t._v(" menggunakan "),n("span",{staticClass:"font-medium "},[t._v("jQuery")]),t._v(", terkadang mengerjakan proyek sambilan menggunakan "),n("span",{staticClass:"font-medium "},[t._v("VueJS")]),t._v(" dan "),n("span",{staticClass:"font-medium "},[t._v("Tailwind")]),t._v(".")])])])]),t._v(" "),n("section",{staticClass:"py-16 md:mt-16",attrs:{id:"pekerjaan"}},[n("div",{staticClass:"container mx-auto"},[n("h5",{staticClass:"mx-auto text-3xl font-semibold md:text-4xl w-fit mb-14 fade-up"},[t._v("Riwayat Pekerjaan")]),t._v(" "),n("ul",{staticClass:"grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 lg:gap-6"},t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("PortoCard",{attrs:{article:article}})],1)})),0)])]),t._v(" "),n("section",{staticClass:"py-12 md:py-16",attrs:{id:"pengalaman"}},[n("div",{staticClass:"container mx-auto"},[n("h5",{staticClass:"mx-auto mb-8 text-3xl font-semibold md:text-4xl w-fit md:mb-14 fade-up"},[t._v("Pengalaman")]),t._v(" "),n("div",{staticClass:"container flex flex-col justify-center gap-4 mx-auto"},t._l(t.experience,(function(e){return n("div",{key:e.title,staticClass:"border-b border-[#444] fade-up"},[n("div",{staticClass:"py-3 md:px-6"},[n("h5",{staticClass:"text-xl font-bold tracking-tight text-white"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text-sm font-normal text-[#aaa]"},[t._v(t._s(e.time))]),t._v(" "),n("p",{staticClass:"font-normal text-white"},[t._v(t._s(e.desc))])])])})),0)])]),t._v(" "),n("section",{staticClass:"py-12 md:py-16",attrs:{id:"keahlian"}},[n("div",{staticClass:"container mx-auto"},[n("h5",{staticClass:"mx-auto mb-8 text-3xl font-semibold md:text-4xl w-fit md:mb-14 fade-up"},[t._v("Keahlian")]),t._v(" "),n("div",{staticClass:"container flex flex-col justify-center gap-6 mx-auto md:flex-row"},[n("div",[n("h2",{staticClass:"mb-3 text-xl font-medium text-white"},[t._v("Android")]),t._v(" "),n("div",{staticClass:"flex w-fit flex-col justify-center gap-2 rounded-lg border border-[#333336] bg-[#1D1D1F] py-3 shadow-md"},t._l(t.skillAndroid,(function(data){return n("div",{key:data,staticClass:"border-b fade-up border-[#444] px-6 pb-2 last-of-type:border-0 last-of-type:pb-0"},[n("h5",{staticClass:"text-base font-light tracking-wide text-white"},[t._v(t._s(data))])])})),0)]),t._v(" "),n("div",[n("h2",{staticClass:"mb-3 text-xl font-medium text-white"},[t._v("Web")]),t._v(" "),n("div",{staticClass:"flex w-fit flex-col justify-center gap-2 rounded-lg border border-[#333336] bg-[#1D1D1F] py-3 shadow-md"},t._l(t.skillWeb,(function(data){return n("div",{key:data,staticClass:"border-b fade-up border-[#444] px-6 pb-2 last-of-type:border-0 last-of-type:pb-0"},[n("h5",{staticClass:"text-base font-light tracking-wide text-white"},[t._v(t._s(data))])])})),0)]),t._v(" "),n("div",[n("h2",{staticClass:"mb-3 text-xl font-medium text-white"},[t._v("Design")]),t._v(" "),n("div",{staticClass:"flex w-fit flex-col justify-center gap-2 rounded-lg border border-[#333336] bg-[#1D1D1F] py-3 shadow-md"},t._l(t.skillDesign,(function(data){return n("div",{key:data,staticClass:"border-b fade-up border-[#444] px-6 pb-2 last-of-type:border-0 last-of-type:pb-0"},[n("h5",{staticClass:"text-base font-light tracking-wide text-white"},[t._v(t._s(data))])])})),0)])])])]),t._v(" "),t._m(2)])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{PortoCard:n(298).default})}}]);