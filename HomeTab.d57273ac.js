!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireb365;n.register("dNPMU",(function(e,r){var o;o=e.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),t(e.exports,"default",(function(){return l}));var i=n("aSiaI");n("exYeM");var c=n("3QeX2"),a=n("lPH7z"),u=n("9cl7j"),s=n("cttP3"),l=function(){var t=(0,a.useAuth)().isLoggedIn;return(0,i.jsxs)("div",{children:[t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.default,{}),(0,i.jsx)("h1",{children:"Bun venit pe pagina!"})]}):(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(c.NavLink,{to:"/register",children:"Registration"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c.NavLink,{to:"/login",children:"Login"})})]}),(0,i.jsx)(s.default,{})]})}})),n.register("9cl7j",(function(r,o){t(r.exports,"default",(function(){return h}));var i=n("aSiaI");n("exYeM");var c=n("8is9z"),a=n("lPH7z"),u=n("cl4J8"),s=n("dMOuB"),l=n("gM6VW"),d=n("8JKNg"),f=n("3QeX2"),p=n("1Xux3"),x=n("1JTTB"),g=n("ejkSG");e(g).Notify.init({width:"280px",position:"center-center",distance:"10px",opacity:1});var h=function(){var t,n=(0,c.useDispatch)(),r=(0,a.useAuth)().user,o=(0,f.useNavigate)(),h=(0,p.default)(),v=h.isOpen,m=h.openModal,b=h.closeModal;return(0,i.jsx)("div",{className:e(u).wrapper,children:(0,i.jsxs)("div",{className:e(u).containerHeader,children:[(0,i.jsx)("img",{src:e(d),alt:"Logo"}),(0,i.jsxs)("div",{className:e(u).content,children:[(0,i.jsx)("p",{className:e(u).user,children:(t=r.email,t.split("@")[0])}),(0,i.jsxs)("button",{type:"button",onClick:m,className:e(u).btnExit,children:[(0,i.jsx)("span",{children:(0,i.jsx)(s.IoIosLogOut,{})}),(0,i.jsx)("span",{children:"Exit"})]}),v&&(0,i.jsx)(x.default,{logOut:function(){n((0,l.signOut)()).then((function(){localStorage.clear(),o("/login")})).catch((function(t){e(g).Notify.error("Logout failed:",t)}))},closeModal:b})]})]})})}})),n.register("cl4J8",(function(e,n){var r,o,i,c,a;t(e.exports,"btnExit",(function(){return r}),(function(t){return r=t})),t(e.exports,"content",(function(){return o}),(function(t){return o=t})),t(e.exports,"user",(function(){return i}),(function(t){return i=t})),t(e.exports,"containerHeader",(function(){return c}),(function(t){return c=t})),t(e.exports,"wrapper",(function(){return a}),(function(t){return a=t})),r="_5lQtAq_btnExit",o="_5lQtAq_content",i="_5lQtAq_user",c="_5lQtAq_containerHeader",a="_5lQtAq_wrapper"})),n.register("dMOuB",(function(e,r){t(e.exports,"IoIosLogOut",(function(){return i})),n("ggq4K");var o=n("3ixdU");function i(t){return(0,o.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z"},child:[]},{tag:"path",attr:{d:"M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z"},child:[]}]})(t)}})),n.register("ggq4K",(function(e,r){t(e.exports,"GenIcon",(function(){return n("3ixdU").GenIcon})),n("f7GB0"),n("3ixdU"),n("dCODO")})),n.register("f7GB0",(function(t,e){})),n.register("3ixdU",(function(r,o){t(r.exports,"GenIcon",(function(){return g}));var i=n("l5bVx"),c=n("exYeM"),a=n("dCODO"),u=["attr","size","title"];function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{};n%2?d(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))},r=1;r<arguments.length;r++)n(r);return t}function p(t,n,r){var o;return(n="symbol"==(void 0===(o=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(n,"string"))?"undefined":e(i)(o))?o:o+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function x(t){return t&&t.map((function(t,n){return e(c).createElement(t.tag,f({key:n},t.attr),x(t.child))}))}function g(t){return function(n){return e(c).createElement(h,l({attr:f({},t.attr)},n),x(t.child))}}function h(t){var n=function(n){var r,o=t.attr,i=t.size,a=t.title,d=s(t,u),p=i||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e(c).createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,d,{className:r,style:f(f({color:t.color||n.color},n.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),a&&e(c).createElement("title",null,a),t.children)};return void 0!==a.IconContext?e(c).createElement(a.IconContext.Consumer,null,(function(t){return n(t)})):n(a.DefaultContext)}})),n.register("dCODO",(function(r,o){t(r.exports,"DefaultContext",(function(){return c})),t(r.exports,"IconContext",(function(){return a}));var i=n("exYeM"),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=e(i).createContext&&e(i).createContext(c)})),n.register("8JKNg",(function(t,e){t.exports=n("aNJCr").getBundleURL("kDarY")+n("iE7OH").resolve("3pwsT")})),n.register("1Xux3",(function(r,o){t(r.exports,"default",(function(){return a}));var i=n("1t1Wn"),c=n("exYeM"),a=function(){var t=e(i)((0,c.useState)(!1),2),n=t[0],r=t[1],o=function(){return r(!1)};return(0,c.useEffect)((function(){var t=function(t){"Escape"===t.key&&o()};return n?window.addEventListener("keydown",t):window.removeEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[n]),{isOpen:n,openModal:function(){return r(!0)},closeModal:o}}})),n.register("1JTTB",(function(r,o){t(r.exports,"default",(function(){return u}));var i=n("aSiaI");n("exYeM");var c=n("dHzBo"),a=n("8JKNg"),u=function(t){var n=t.logOut,r=t.closeModal;return(0,i.jsx)("div",{className:e(c).overlay,onClick:r,children:(0,i.jsxs)("div",{className:e(c).content,onClick:function(t){return t.stopPropagation()},children:[(0,i.jsx)("img",{src:e(a),alt:"Logo"}),(0,i.jsx)("div",{children:"Are you sure you want to log out?"}),(0,i.jsxs)("div",{className:e(c).btns,children:[(0,i.jsx)("button",{className:e(c).btnLogOut,onClick:n,children:"Logout"}),(0,i.jsx)("button",{className:e(c).btnCancel,onClick:r,children:"Cancel"})]})]})})}})),n.register("dHzBo",(function(e,n){var r,o,i,c,a;t(e.exports,"btns",(function(){return r}),(function(t){return r=t})),t(e.exports,"content",(function(){return o}),(function(t){return o=t})),t(e.exports,"overlay",(function(){return i}),(function(t){return i=t})),t(e.exports,"btnLogOut",(function(){return c}),(function(t){return c=t})),t(e.exports,"btnCancel",(function(){return a}),(function(t){return a=t})),r="AS6CSW_btns",o="AS6CSW_content",i="AS6CSW_overlay",c="AS6CSW_btnLogOut",a="AS6CSW_btnCancel"})),n.register("cttP3",(function(r,o){t(r.exports,"default",(function(){return s}));var i=n("aSiaI");n("exYeM");var c=n("5IZaX"),a=n("878n7"),u=n("kg5Y0"),s=function(){var t=a.default.length>0;return(0,i.jsx)("div",{className:e(c).wrapper,children:t?(0,i.jsxs)("table",{className:e(c).table,children:[(0,i.jsx)("thead",{className:e(c).header,children:(0,i.jsxs)("tr",{className:e(c).col,children:[(0,i.jsx)("th",{children:"Date"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Category"}),(0,i.jsx)("th",{children:"Comment"}),(0,i.jsx)("th",{children:"Sum"}),(0,i.jsx)("th",{}),(0,i.jsx)("th",{})]})}),(0,i.jsx)("tbody",{className:e(c).body,children:a.default.map((function(t){return(0,i.jsx)(u.default,{transaction:t},t.id)}))})]}):(0,i.jsx)("div",{className:e(c).placeholder,children:"No transactions"})})}})),n.register("5IZaX",(function(e,n){var r,o,i,c;t(e.exports,"body",(function(){return r}),(function(t){return r=t})),t(e.exports,"header",(function(){return o}),(function(t){return o=t})),t(e.exports,"table",(function(){return i}),(function(t){return i=t})),t(e.exports,"col",(function(){return c}),(function(t){return c=t})),r="QJFQJG_body",o="QJFQJG_header",i="QJFQJG_table",c="QJFQJG_col"})),n.register("878n7",(function(e,n){t(e.exports,"default",(function(){return r}));var r=[{id:"1",transactionDate:"2024-01-01T10:00:00Z",type:"INCOME",categoryId:"cat1",userId:"user1",comment:"Salary",amount:5e3,balanceAfter:5e3},{id:"2",transactionDate:"2024-01-02T14:30:00Z",type:"EXPENSE",categoryId:"cat2",userId:"user1",comment:"Groceries",amount:-150,balanceAfter:4850},{id:"3",transactionDate:"2024-01-03T09:00:00Z",type:"EXPENSE",categoryId:"cat3",userId:"user1",comment:"Utilities",amount:-100,balanceAfter:4750},{id:"4",transactionDate:"2024-01-04T16:00:00Z",type:"INCOME",categoryId:"cat4",userId:"user1",comment:"Freelance Work",amount:600,balanceAfter:5350},{id:"5",transactionDate:"2024-01-05T11:45:00Z",type:"EXPENSE",categoryId:"cat5",userId:"user1",comment:"Lunch",amount:-50,balanceAfter:5300}]})),n.register("kg5Y0",(function(r,o){t(r.exports,"default",(function(){return l}));var i=n("1t1Wn"),c=n("aSiaI"),a=n("exYeM"),u=n("VN2IR"),s=n("f7cnP"),l=function(t){var n=t.transaction,r=new Date(n.transactionDate),o=String(r.getDate()).padStart(2,"0"),l=String(r.getMonth()+1).padStart(2,"0"),d=r.getFullYear(),f="".concat(o,".").concat(l,".").concat(d),p="EXPENSE"===n.type?"-":"+",x=e(i)((0,a.useState)("Delete"),2),g=x[0],h=x[1];return(0,c.jsxs)("tr",{className:e(u).transactionItem,children:[(0,c.jsx)("td",{children:f}),(0,c.jsx)("td",{className:e(u).row,children:p}),(0,c.jsx)("td",{children:n.categoryId}),(0,c.jsx)("td",{children:n.comment}),(0,c.jsx)("td",{className:"".concat(e(u).row," ").concat("EXPENSE"===n.type?e(u).expense:e(u).income),children:n.amount}),(0,c.jsx)("td",{className:e(u).edit,children:(0,c.jsx)(s.MdOutlineModeEdit,{})}),(0,c.jsx)("td",{children:(0,c.jsx)("button",{type:"button",className:e(u).btn,onClick:function(){h("Deleting")},children:g})})]})}})),n.register("VN2IR",(function(e,n){var r,o,i,c,a;t(e.exports,"income",(function(){return r}),(function(t){return r=t})),t(e.exports,"edit",(function(){return o}),(function(t){return o=t})),t(e.exports,"transactionItem",(function(){return i}),(function(t){return i=t})),t(e.exports,"btn",(function(){return c}),(function(t){return c=t})),t(e.exports,"expense",(function(){return a}),(function(t){return a=t})),r="yvN0Da_income",o="yvN0Da_edit",i="yvN0Da_transactionItem",c="yvN0Da_btn",a="yvN0Da_expense"})),n.register("f7cnP",(function(e,r){t(e.exports,"MdOutlineModeEdit",(function(){return i})),n("ggq4K");var o=n("3ixdU");function i(t){return(0,o.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34z"},child:[]}]})(t)}}))}();
//# sourceMappingURL=HomeTab.d57273ac.js.map
