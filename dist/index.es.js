import e,{useState as t,useEffect as o}from"react";import n from"prop-types";function r({children:n,isOpen:r,titleText:i,closeText:a,style:l}){const[s,c]=t(!1);o((()=>{c(r)}),[r]);const d=()=>{c((e=>!e))},{content:m,logo:p,title:f,closeContainer:g,button:h}=l,x={...m},u={...p},y={...f},b={...g},k={...h};return s&&e.createElement("div",{className:"modal-overlay",onClick:d},e.createElement("div",{className:"modal-content",style:x,onClick:e=>e.stopPropagation()},e.createElement("div",{className:"image",style:u},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e.createElement("g",{strokeWidth:"0",id:"SVGRepo_bgCarrier"}),e.createElement("g",{strokeLinejoin:"round",strokeLinecap:"round",id:"SVGRepo_tracerCarrier"}),e.createElement("g",{id:"SVGRepo_iconCarrier"}," ",e.createElement("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",stroke:"#000000",d:"M20 7L9.00004 18L3.99994 13"})," "))),e.createElement("h1",{className:"modal-title",style:y},i),n,e.createElement("div",{className:"modal-close-container",style:b},e.createElement("button",{className:"modal-close",style:k,onClick:d},a))))}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".modal-overlay{background-color:rgba(0,0,0,.5);height:100%;justify-content:center;left:0;position:fixed;top:0}.modal-content,.modal-overlay{align-items:center;display:flex;width:100%}.modal-content{background-color:#fff;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.2);flex-direction:column;font-family:Franklin Gothic;gap:1.5rem;max-width:300px;padding-block:1.5rem}.modal-content p,h1{margin:0}.modal-title{border-bottom:2px solid #52c0db;padding:0 0 2px}.modal-close-container{display:flex;justify-content:center}.modal-close{background-color:#52c0db;border:none;border-radius:8px;color:#fff;cursor:pointer;font-family:Franklin Gothic;font-size:20px;line-height:1;padding:8px;transition:all .3s ease}.modal-close:hover{color:#000}.image{align-items:center;animation:animate .6s linear infinite alternate-reverse;background-color:#52c0db;border-radius:9999px;display:flex;flex-shrink:0;height:3rem;justify-content:center;transition:.6s ease;width:3rem}.image svg{height:2rem;width:2rem}@keyframes animate{0%{transform:scale(1)}to{transform:scale(1.09)}}"),r.propTypes={children:n.node,isOpen:n.bool.isRequired,titleText:n.string,closeText:n.string},r.defaultProps={titleText:"Title",closeText:"Close"};export{r as Modal};
//# sourceMappingURL=index.es.js.map
