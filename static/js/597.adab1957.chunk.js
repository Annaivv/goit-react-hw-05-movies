"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(t,n,e){e.r(n);var c=e(439),a=e(791),r=e(689),i=e(390),o=e(184);n.default=function(){var t=(0,r.UO)().movieId,n=(0,a.useState)(null),e=(0,c.Z)(n,2),u=e[0],s=e[1],d=(0,a.useState)(!1),f=(0,c.Z)(d,2),l=f[0],p=f[1];return(0,a.useEffect)((function(){p(!0),(0,i.eH)(t).then((function(t){var n=t.data;s(n.cast)})).finally((function(){p(!1)}))}),[t]),!u&&l?(0,o.jsx)("p",{children:"Loading..."}):(0,o.jsx)("div",{children:u&&u.length>0?(0,o.jsx)("ul",{children:u.map((function(t){return(0,o.jsxs)("li",{style:{padding:"12px 0"},children:[(0,o.jsx)("img",{style:{height:"200px",marginBottom:"8px"},src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:""}),(0,o.jsx)("p",{children:t.name}),(0,o.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))}):"No cast"})}},390:function(t,n,e){e.d(n,{Mc:function(){return o},ZR:function(){return i},eH:function(){return u},mv:function(){return d},oJ:function(){return s}});var c=e(243),a="https://api.themoviedb.org/3/",r="cda61bda9f0a12d6d66e74a80f877dd6",i=function(){return c.Z.get("".concat(a,"/trending/all/day?api_key=").concat(r))},o=function(t){return c.Z.get("".concat(a,"/movie/").concat(t,"?api_key=").concat(r))},u=function(t){return c.Z.get("".concat(a,"/movie/").concat(t,"/credits?api_key=").concat(r))},s=function(t){return c.Z.get("".concat(a,"/movie/").concat(t,"/reviews?api_key=").concat(r))},d=function(t){return c.Z.get("".concat(a,"/search/movie?api_key=").concat(r,"&query=").concat(t))}}}]);
//# sourceMappingURL=597.adab1957.chunk.js.map