const pages=[["index.html","Home"],["about.html","About me"],["resume.html","Resume"],["goals.html","Career goals"],["projects.html","Projects"],["open-wake-switch.html","Open Wake Switch","sub"],["experience.html","Experience"],["skills.html","Skills"],["coursework.html","Course work"],["contact.html","Contact"]];
const here=location.pathname.split("/").pop()||"index.html";
const nav=document.createElement("nav");nav.className="side";nav.id="nav";nav.setAttribute("aria-label","Main");
nav.innerHTML="<b>Kanghyun Kim</b>"+pages.map(([h,t,c])=>`<a href="${h}" class="${c||""} ${h===here?"on":""}">${t}</a>`).join("");
const mb=document.createElement("button");mb.id="mb";mb.textContent="Menu";mb.setAttribute("aria-controls","nav");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
document.body.prepend(nav);document.body.prepend(mb);
document.querySelectorAll("img").forEach(i=>i.addEventListener("error",()=>{const d=document.createElement("div");d.className="ph";d.textContent="Add image: "+i.getAttribute("src");i.replaceWith(d)}));

const ic={"index.html":"👋","about.html":"🙋","resume.html":"📄","goals.html":"🎯","projects.html":"🛠️","open-wake-switch.html":"💡","experience.html":"💼","skills.html":"⚙️","coursework.html":"📚","contact.html":"✉️"};
const mn=document.querySelector("main"),cv=document.createElement("div"),ie=document.createElement("div");cv.className="cover";ie.className="icon";ie.setAttribute("aria-hidden","true");ie.textContent=ic[here]||"📁";mn.prepend(ie);mn.prepend(cv);
