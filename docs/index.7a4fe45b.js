const t=document.getElementById("world"),e=document.getElementById("politics"),o=document.getElementById("business"),n=document.getElementById("technology"),s=document.getElementById("sports");t.addEventListener("click",function(){window.location.hash="#world",l()}),e.addEventListener("click",function(){window.location.hash="#politics",c()}),o.addEventListener("click",function(){window.location.hash="#business",d()}),n.addEventListener("click",function(){window.location.hash="#technology",u()}),s.addEventListener("click",function(){window.location.hash="#sports",h()});const r=document.querySelectorAll("nav ul li a");function a(){!function(){let t=window.location.hash||"#world";r.forEach(t=>{t.classList.remove("active")});let e=document.querySelector(`nav ul li a[href="${t}"]`);e&&e.classList.add("active")}();let t=window.location.hash||"#world";"#politics"===t?c():"#business"===t?d():"#technology"===t?u():"#sports"===t?h():(l(),m())}async function i(t){let e=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${t}&begin_date=20230901&sort=newest&api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I`;try{let t=await fetch(e);if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let o=await t.json();"OK"===o.status?displaySearchResults(o.response.docs):console.error("Failed to fetch news:",o)}catch(t){console.error("Error fetching search results:",t.message)}}async function l(){try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I");if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let e=await t.json();"OK"===e.status?(y(e.results[0]),p(e.results),g(e.copyright)):(console.error("Failed to fetch news:",e),document.getElementById("articles-section").innerHTML="<p>Failed to load articles. Please try again later.</p>")}catch(t){console.error("Error fetching local news:",t.message)}}async function c(){try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I");if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let e=await t.json();"OK"===e.status?(y(e.results[0]),p(e.results),g(e.copyright)):(console.error("Failed to fetch news:",e),document.getElementById("articles-section").innerHTML="<p>Failed to load articles. Please try again later.</p>")}catch(t){console.error("Error fetching local news:",t.message)}}async function d(){try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I");if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let e=await t.json();"OK"===e.status?(y(e.results[0]),p(e.results),g(e.copyright)):(console.error("Failed to fetch news:",e),document.getElementById("articles-section").innerHTML="<p>Failed to load articles. Please try again later.</p>")}catch(t){console.error("Error fetching local news:",t.message)}}async function u(){try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I");if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let e=await t.json();"OK"===e.status?(y(e.results[0]),p(e.results),g(e.copyright)):(console.error("Failed to fetch news:",e),document.getElementById("articles-section").innerHTML="<p>Failed to load articles. Please try again later.</p>")}catch(t){console.error("Error fetching local news:",t.message)}}async function h(){try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I");if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let e=await t.json();"OK"===e.status?(y(e.results[0]),p(e.results),g(e.copyright)):(console.error("Failed to fetch news:",e),document.getElementById("articles-section").innerHTML="<p>Failed to load articles. Please try again later.</p>")}catch(t){console.error("Error fetching local news:",t.message)}}async function m(){try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=y2RVjaIsgoQ8t5eGEzi5KuSGmYOAwr9I");if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let e=await t.json();"OK"===e.status?function(t){let e=document.getElementById("opinionSection");e.innerHTML="<h2>Opinion</h2><br>",t.forEach(t=>{let o=document.createElement("article");o.innerHTML=`
            <a href="${t.url}" target="_blank">
                ${t.multimedia&&t.multimedia.length>0?`<img src="${t.multimedia.find(t=>"Large Thumbnail"===t.format).url}" alt="${t.title}" style="width: 300px;">`:""}
                <p>${t.byline}</p>
                <h2><a href="${t.url}" target="_blank">${t.title}</a></h2>
            </a>
        `,e.appendChild(o)})}(e.results):(console.error("Failed to fetch news:",e),document.getElementById("articles-section").innerHTML="<p>Failed to load articles. Please try again later.</p>")}catch(t){console.error("Error fetching local news:",t.message)}}function y(t){let e=document.getElementById("headline-title"),o=document.getElementById("headline-description"),n=document.getElementById("headline-author"),s=document.getElementById("headline-image"),r=document.getElementById("headline-link");if(e.textContent=t.title,o.textContent=t.abstract,r.href=t.url,n.textContent=t.byline,t.multimedia&&t.multimedia.length>0){let e=t.multimedia?t.multimedia.find(t=>"Super Jumbo"===t.format)?.url:"";s.src=e,s.style.display="block"}else s.style.display="none"}function p(t){let e=document.getElementById("articles-section");e.innerHTML="",t.slice(1).forEach(t=>{let o=document.createElement("article");o.innerHTML=`
            <a href="${t.url}" target="_blank">
                ${t.multimedia&&t.multimedia.length>0?`<img src="${t.multimedia.find(t=>"threeByTwoSmallAt2X"===t.format).url}" alt="${t.title}" style="width: 300px;">`:""}
                <h5>${t.byline}</h5>
                <h2><a href="${t.url}" target="_blank">${t.title}</a></h2>
                <p>${t.abstract}</p><br>
                <button type="button"><a href="${t.url}" target="_blank">Read more</a></button>
            </a>
        `,e.appendChild(o)})}function g(t){document.getElementById("copyright").textContent=t}document.getElementById("search-container").addEventListener("click",function(t){t.preventDefault();let e=document.getElementById("search-query").value.trim();e&&i(e)}),window.addEventListener("DOMContentLoaded",a),window.addEventListener("hashchange",a);
//# sourceMappingURL=index.7a4fe45b.js.map
