"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[811],{811:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var c=e(439),r=e(87),a=e(689),i=e(989),o=e(277),u=e(184),d=function(n){var t=n.items,e=(0,a.TH)();return(0,u.jsx)("ul",{children:t.map((function(n){var t;return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{style:{margin:"10px 0",display:"block"},to:(0,i.Gn)(o.a.movie,{movieId:n.id}),state:{prevPage:e.pathname},children:null!==(t=n.title)&&void 0!==t?t:n.name})},n.id)}))})},s=e(791),f=e(390),l=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,s.useEffect)((function(){(0,f.ZR)().then((function(n){var t=n.data;r(t.results)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{style:{padding:"18px 0"},children:"Trending today"}),(0,u.jsx)(d,{items:e})]})}},390:function(n,t,e){e.d(t,{Mc:function(){return o},ZR:function(){return i},eH:function(){return u},mv:function(){return s},oJ:function(){return d}});var c=e(243),r="https://api.themoviedb.org/3/",a="cda61bda9f0a12d6d66e74a80f877dd6",i=function(){return c.Z.get("".concat(r,"/trending/all/day?api_key=").concat(a))},o=function(n){return c.Z.get("".concat(r,"/movie/").concat(n,"?api_key=").concat(a))},u=function(n){return c.Z.get("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(a))},d=function(n){return c.Z.get("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(a))},s=function(n){return c.Z.get("".concat(r,"/search/movie?api_key=").concat(a,"&query=").concat(n))}}}]);
//# sourceMappingURL=811.0629224c.chunk.js.map