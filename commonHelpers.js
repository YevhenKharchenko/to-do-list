(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),i=document.querySelector(".form-input"),u=document.querySelector(".list");document.querySelector(".form-btn");l.addEventListener("submit",d);function d(c){if(c.preventDefault(),i.value){let t=function(){r.remove()};var n=t;const r=document.createElement("li");r.classList.add("list-item");const o=document.createElement("button");o.classList.add("item-delete-btn"),r.textContent=i.value;const e=document.createElement("img");e.setAttribute("src","./images/Trash.svg"),e.classList.add("delete-btn-icon"),o.append(e),r.append(o),u.append(r),l.reset(),o.addEventListener("click",t)}}
//# sourceMappingURL=commonHelpers.js.map