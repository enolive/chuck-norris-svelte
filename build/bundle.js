var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function $(t){h=t}function m(){if(!h)throw new Error("Function called outside component initialization");return h}const g=[],b=[],k=[],v=[],x=Promise.resolve();let y=!1;function _(t){k.push(t)}let j=!1;const T=new Set;function w(){if(!j){j=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];$(n),E(n.$$)}for($(null),g.length=0;b.length;)b.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];T.has(n)||(T.add(n),n())}k.length=0}while(g.length);for(;v.length;)v.pop()();y=!1,j=!1,T.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const C=new Set;let L;function A(t,n){t&&t.i&&(C.delete(t),t.i(n))}function N(t,n,e,o){if(t&&t.o){if(C.has(t))return;C.add(t),L.c.push((()=>{C.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function M(t,n){const e=n.token={};function r(t,r,c,u){if(n.token!==e)return;n.resolved=u;let s=n.ctx;void 0!==c&&(s=s.slice(),s[c]=u);const i=t&&(n.current=t)(s);let l=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==r&&t&&(L={r:0,c:[],p:L},N(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),L.r||o(L.c),L=L.p)})):n.block.d(1),i.c(),A(i,1),i.m(n.mount(),n.anchor),l=!0),n.block=i,n.blocks&&(n.blocks[r]=i),l&&w()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const e=m();if(t.then((t=>{$(e),r(n.then,1,n.value,t),$(null)}),(t=>{if($(e),r(n.catch,2,n.error,t),$(null),!n.hasCatch)throw t})),n.current!==n.pending)return r(n.pending,0),!0}else{if(n.current!==n.then)return r(n.then,1,n.value,t),!0;n.resolved=t}var c}function H(t,e,c,u){const{fragment:s,on_mount:i,on_destroy:l,after_update:a}=t.$$;s&&s.m(e,c),u||_((()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(_)}function O(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function P(t,n){-1===t.$$.dirty[0]&&(g.push(t),y||(y=!0,x.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function z(n,r,c,u,s,l,a=[-1]){const f=h;$(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:e(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&P(n,t)),e})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!u&&u(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(i)}else d.fragment&&d.fragment.c();r.intro&&A(n.$$.fragment),H(n,r.target,r.anchor,r.customElement),w()}$(f)}class S{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=t=>200===t.status?Promise.resolve(t):Promise.reject(t.statusText),B=()=>fetch("https://api.chucknorris.io/jokes/random?category=dev").then(q).then((t=>t.json())).then((t=>t.value));function D(t){let n,e,o,r=t[2]+"";return{c(){n=l("div"),e=a("Unable to fetch joke: "),o=a(r),d(n,"class","alert alert-danger")},m(t,r){s(t,n,r),u(n,e),u(n,o)},p(t,n){1&n&&r!==(r=t[2]+"")&&p(o,r)},d(t){t&&i(n)}}}function F(t){let n,e,o,r,c=t[1]+"";return{c(){n=a("Did you know?\n    "),e=l("br"),o=f(),r=a(c)},m(t,c){s(t,n,c),s(t,e,c),s(t,o,c),s(t,r,c)},p(t,n){1&n&&c!==(c=t[1]+"")&&p(r,c)},d(t){t&&i(n),t&&i(e),t&&i(o),t&&i(r)}}}function R(n){let e;return{c(){e=l("div"),e.innerHTML='<span class="invisible">Loading...</span>',d(e,"class","spinner-border")},m(t,n){s(t,e,n)},p:t,d(t){t&&i(e)}}}function U(n){let e,o,r={ctx:n,current:null,token:null,hasCatch:!0,pending:R,then:F,catch:D,value:1,error:2};return M(o=n[0],r),{c(){e=l("div"),r.block.c(),d(e,"role","status")},m(t,n){s(t,e,n),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(t,[e]){if(n=t,r.ctx=n,1&e&&o!==(o=n[0])&&M(o,r));else{const t=n.slice();t[1]=t[2]=r.resolved,r.block.p(t,e)}},i:t,o:t,d(t){t&&i(e),r.block.d(),r.token=null,r=null}}}function G(t,n,e){let{jokeText$:o}=n;return t.$$set=t=>{"jokeText$"in t&&e(0,o=t.jokeText$)},[o]}class I extends S{constructor(t){super(),z(this,t,G,U,c,{jokeText$:0})}}function J(t){let n,e,o,r,c,a,p,h,$,m,g,b;return p=new I({props:{jokeText$:t[0]}}),{c(){var t;n=l("header"),n.innerHTML="<h1>👊 Chuck Norris App 👊</h1>",e=f(),o=l("main"),r=l("figure"),r.innerHTML='<img src="chuck-norris-logo.jpg" alt="Chuck Norris approves!"/>',c=f(),a=l("div"),(t=p.$$.fragment)&&t.c(),h=f(),$=l("button"),$.textContent="Refresh",d(a,"class","joke-content svelte-jp3pxz"),d($,"class","btn btn-primary")},m(i,l){var f,d,k,v;s(i,n,l),s(i,e,l),s(i,o,l),u(o,r),u(o,c),u(o,a),H(p,a,null),u(o,h),u(o,$),m=!0,g||(f=$,d="click",k=t[1],f.addEventListener(d,k,v),b=()=>f.removeEventListener(d,k,v),g=!0)},p(t,[n]){const e={};1&n&&(e.jokeText$=t[0]),p.$set(e)},i(t){m||(A(p.$$.fragment,t),m=!0)},o(t){N(p.$$.fragment,t),m=!1},d(t){t&&i(n),t&&i(e),t&&i(o),O(p),g=!1,b()}}}function K(t,n,e){let o=B();return[o,()=>e(0,o=B())]}return new class extends S{constructor(t){super(),z(this,t,K,J,c,{})}}({target:document.body,props:{}})}();
