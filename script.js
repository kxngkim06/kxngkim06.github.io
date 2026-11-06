const pages=[["index.html","Home"],["about.html","About me"],["resume.html","Resume"],["goals.html","Career goals"],["projects.html","Projects"],["open-wake-switch.html","Open Wake Switch","sub"],["experience.html","Experience"],["skills.html","Skills"],["coursework.html","Course work"],["contact.html","Contact"]];
const here=location.pathname.split("/").pop()||"index.html";
const nav=document.createElement("nav");nav.className="side";nav.id="nav";nav.setAttribute("aria-label","Main");
nav.innerHTML="<b>Kanghyun Kim<i>.</i></b>"+pages.map(([h,t,c])=>`<a href="${h}" class="${c||""} ${h===here?"on":""}">${t}</a>`).join("");
const mb=document.createElement("button");mb.id="mb";mb.textContent="Menu";mb.setAttribute("aria-controls","nav");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
document.body.prepend(nav);document.body.prepend(mb);
document.querySelectorAll("img").forEach(i=>i.addEventListener("error",()=>{const d=document.createElement("div");d.className="ph";d.textContent="Add image: "+i.getAttribute("src");i.replaceWith(d)}));

const ic={"index.html":"👋","about.html":"🙋","resume.html":"📄","goals.html":"🎯","projects.html":"🛠️","open-wake-switch.html":"💡","experience.html":"💼","skills.html":"⚙️","coursework.html":"📚","contact.html":"✉️"};
const mn=document.querySelector("main"),cv=document.createElement("div"),ie=document.createElement("div");cv.className="cover";ie.className="icon";ie.setAttribute("aria-hidden","true");ie.textContent=ic[here]||"📁";mn.prepend(ie);mn.prepend(cv);

const fl=document.createElement("link");fl.rel="stylesheet";fl.href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=DM+Sans:wght@400;500;700&display=swap";document.head.appendChild(fl);
const ft=document.createElement("footer");ft.className="ft";ft.innerHTML='<b>kxngkim06@gmail.com</b><a href="https://linkedin.com/in/kanghyunkim-ee">LinkedIn</a><a href="resume.pdf">Resume</a><p>2026 Kanghyun Kim. Electrical Engineering, Georgia Tech.</p>';mn.append(ft);

mn.id="main";const sk=document.createElement("a");sk.className="skip";sk.href="#main";sk.textContent="Skip to content";document.body.prepend(sk);

const rt=document.documentElement;let th="light";try{th=localStorage.getItem("th")||"light"}catch(e){}
const tg=document.createElement("button");tg.className="tg";
const setT=v=>{rt.dataset.theme=v;tg.textContent=v==="dark"?"Switch to light":"Switch to dark";tg.setAttribute("aria-pressed",v==="dark");try{localStorage.setItem("th",v)}catch(e){}};
tg.onclick=()=>setT(rt.dataset.theme==="dark"?"light":"dark");nav.append(tg);setT(th);
const P=(d,o="")=>`<path d="${d}" ${o}/>`,C=(x,y,r=4)=>`<circle cx="${x}" cy="${y}" r="${r}"/>`;
const sine=(a,ph,len=1200,per=220,y=80)=>{let d="";for(let x=0;x<=len;x+=8)d+=(x?"L":"M")+x+" "+(y+a*Math.sin(x/per*6.283+ph)).toFixed(1)+" ";return P(d)};
const tile=(w,h,s)=>`<defs><pattern id="t" width="${w}" height="${h}" patternUnits="userSpaceOnUse">${s}</pattern></defs><rect width="100%" height="100%" fill="url(#t)"/>`;
const chip=x=>`<rect x="${x}" y="40" width="96" height="80" rx="4"/>`+[0,1,2,3,4].map(i=>P(`M${x-12} ${52+i*14}H${x}`)+P(`M${x+96} ${52+i*14}H${x+108}`)).join("");
const art={
index:tile(240,160,P("M0 40H90V100H170M40 160V130H120M170 100V60H240M120 130H200V160")+C(90,40)+C(170,100)+C(120,130)+C(240,60)),
about:sine(34,0)+sine(22,2,1200,300),
resume:[0,1,2,3,4,5,6,7].map(i=>P(`M0 ${20+i*17}H1200`)).join(""),
goals:P("M0 140L300 120L600 90L900 55L1200 20")+C(300,120,6)+C(600,90,6)+C(900,55,6),
projects:tile(36,36,C(18,18,2.2))+chip(280)+chip(760),
"open-wake-switch":[30,60,90].map(r=>P(`M${900+r*Math.cos(-.785)} ${80+r*Math.sin(-.785)}A${r} ${r} 0 0 1 ${900+r*Math.cos(.785)} ${80+r*Math.sin(.785)}`)).join("")+P("M900 80L995 135")+P("M900 80H1010",'stroke-dasharray="3 6"')+C(900,80,7)+[0,1,2,3,4,5,6,7].map(i=>`<rect x="${60+i*22}" y="110" width="14" height="14"/>`).join(""),
experience:[0,1,2,3,4,5].map(i=>sine(10+i*2,i*.7,1200,260+i*20,30+i*20)).join(""),
skills:tile(240,160,P("M0 80H40L48 60L64 100L80 60L96 100L112 60L120 80H160M160 80H195M195 60V100M205 60V100M205 80H240")),
coursework:sine(40,0,1200,240)+Array.from({length:41},(_,i)=>{const x=i*30,y=80+40*Math.sin(x/240*6.283);return P(`M${x} 80V${y.toFixed(1)}`)+C(x,y.toFixed(1),3.5)}).join("")
};
const pk=here.replace(".html","")||"index";
cv.setAttribute("aria-hidden","true");
cv.innerHTML=`<svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 160" fill="none" stroke="var(--a)" stroke-width="2" style="opacity:.3;display:block">${art[pk]||""}</svg>`;
const cim=new Image();cim.onload=()=>{cv.innerHTML="";cv.style.cssText="background:url(images/cover-"+pk+".jpg) center/cover"};cim.src="images/cover-"+pk+".jpg";
