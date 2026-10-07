
const lessons = [
{
 id:"safety", title:"Safety and PPE", icon:"🦺", level:"Foundation",
 summary:"Learn the hazards, protective equipment, and safe work sequence.",
 flow:["Identify hazard","Disconnect power","Verify zero energy","Diagnose","Repair","Test"],
 sections:[
  ["Main hazards","HVAC work can expose you to electrical shock, arc flash, pressurized refrigerant, frostbite, combustion gases, sharp sheet metal, hot surfaces, rotating equipment, and falls."],
  ["Personal protective equipment","Use safety glasses, gloves suitable for the task, protective footwear, and hearing protection when required. Use insulated electrical tools and properly rated meters."],
  ["Lockout and verification","Turn off the correct disconnect or breaker, lock and tag it when required, and verify power is actually off with a properly functioning meter."],
  ["Safety controls","Never permanently bypass a pressure switch, rollout switch, high limit, flame safeguard, float switch, door switch, or overload. These controls are protecting people and equipment."]
 ]
},
{
 id:"cycle", title:"Refrigeration Cycle", icon:"❄️", level:"Core Theory",
 summary:"Understand how refrigerant moves heat through four major components.",
 flow:["Compressor","Condenser","Metering device","Evaporator"],
 sections:[
  ["Compressor","The compressor pulls in low-pressure superheated vapor and compresses it into a high-pressure, high-temperature vapor."],
  ["Condenser","The condenser rejects heat to outdoor air. The refrigerant first loses superheat, then condenses into liquid, and may become subcooled."],
  ["Metering device","The metering device creates a pressure drop and controls refrigerant entering the evaporator. Common types include capillary tubes, fixed orifices, pistons, and TXVs."],
  ["Evaporator","The evaporator absorbs heat from indoor air. Refrigerant boils inside the coil and leaves as superheated vapor."],
  ["Superheat and subcooling","Superheat protects the compressor from liquid refrigerant. Subcooling helps confirm that solid liquid is reaching the metering device. Always use the equipment manufacturer’s charging method."]
 ]
},
{
 id:"airflow", title:"Airflow and Ductwork", icon:"💨", level:"Core Theory",
 summary:"Learn CFM, filters, blowers, static pressure, and temperature split.",
 flow:["Return grille","Filter","Blower","Indoor coil","Supply duct","Room"],
 sections:[
  ["Airflow path","Return air travels through the filter, blower, heating or cooling section, supply ducts, and registers before returning to the space."],
  ["Static pressure","Static pressure is resistance to airflow. Dirty filters, blocked coils, closed dampers, undersized ducts, or restrictive grilles can create excessive pressure."],
  ["Blower performance","Airflow depends on blower design, speed setting, motor condition, wheel cleanliness, and system resistance."],
  ["Temperature split","Supply-to-return temperature difference can be useful, but it cannot diagnose a system by itself. The system must be stable and airflow must be considered."]
 ]
},
{
 id:"electrical", title:"Electrical Fundamentals", icon:"⚡", level:"Essential",
 summary:"Voltage, current, resistance, power, capacitors, and controls.",
 flow:["Power source","Switch/control","Load","Return path"],
 sections:[
  ["Voltage, current, and resistance","Voltage is electrical pressure, current is the flow of charge, and resistance opposes current. Ohm’s Law is V = I × R."],
  ["Line and control voltage","Residential HVAC equipment commonly uses line voltage for motors and compressors and 24 VAC for thermostat and control circuits."],
  ["Common components","Transformers, fuses, breakers, contactors, relays, capacitors, motors, pressure switches, limit switches, and control boards are common parts of HVAC circuits."],
  ["Meter safety","Never measure resistance or capacitance on an energized circuit. Inspect your meter and leads, select the correct setting, and verify the meter before and after critical voltage tests."]
 ]
},
{
 id:"cooling", title:"Air Conditioning", icon:"🧊", level:"Systems",
 summary:"Learn split-system cooling operation and common service checks.",
 flow:["Thermostat call","Contactor energized","Compressor and fan run","Indoor blower runs","Heat is removed"],
 sections:[
  ["Cooling call","The thermostat sends a cooling signal. The indoor blower starts and the outdoor contactor energizes the compressor and condenser fan."],
  ["Heat transfer","The indoor coil absorbs sensible and latent heat. Moisture condenses on the coil and drains away. The outdoor coil rejects the collected heat."],
  ["Basic checks","Confirm thermostat settings, filter condition, blower operation, coil cleanliness, drain condition, outdoor fan, compressor operation, voltage, current, temperatures, and pressures as appropriate."],
  ["Do not guess refrigerant charge","Low airflow, dirty coils, sensor errors, metering restrictions, compressor problems, and incorrect refrigerant charge can produce similar symptoms. Measure before adjusting charge."]
 ]
},
{
 id:"heatpump", title:"Heat Pumps", icon:"🔁", level:"Systems",
 summary:"Heating mode, reversing valves, defrost, and auxiliary heat.",
 flow:["Outdoor coil absorbs heat","Compressor raises temperature","Indoor coil releases heat","Refrigerant expands"],
 sections:[
  ["Heating operation","A heat pump transfers heat from outdoor air into the building. The reversing valve changes the direction of refrigerant flow."],
  ["Reversing valve","Some systems energize the valve in cooling and others in heating. Always check the wiring diagram and manufacturer sequence."],
  ["Defrost","The outdoor coil can frost during heating. The defrost control temporarily changes operation to warm the outdoor coil."],
  ["Auxiliary heat","Electric heat strips or another heat source may assist during low outdoor temperatures, large thermostat setbacks, or defrost."]
 ]
},
{
 id:"gasheat", title:"Gas Furnace Basics", icon:"🔥", level:"Heating",
 summary:"Learn the sequence of operation and major furnace safety controls.",
 flow:["Call for heat","Inducer","Pressure switch","Igniter","Gas valve","Flame proven","Blower"],
 sections:[
  ["Sequence of operation","A typical modern furnace starts the inducer, proves draft, energizes the igniter, opens the gas valve, proves flame, and starts the circulation blower."],
  ["Safety controls","Pressure switches, flame sensors, high limits, rollout switches, and control-board timing all protect the furnace and occupants."],
  ["Combustion safety","Blocked venting, poor combustion, incorrect gas pressure, or a damaged heat exchanger can create carbon monoxide risk. Combustion testing requires proper instruments and training."],
  ["No-heat diagnosis","Read the fault code and follow the sequence. Confirm power, thermostat call, inducer operation, pressure-switch conditions, ignition, gas supply, flame sensing, and limit status."]
 ]
},
{
 id:"troubleshooting", title:"Troubleshooting Process", icon:"🔍", level:"Technician",
 summary:"Use a repeatable method instead of replacing parts by guesswork.",
 flow:["Listen","Verify symptom","Inspect","Measure","Compare","Repair","Retest"],
 sections:[
  ["Understand the complaint","Ask what the system is doing, when the problem began, whether it is constant, and whether any work or changes happened recently."],
  ["Verify the symptom","Operate the system and confirm the problem. Check thermostat settings, airflow, sounds, odors, fault codes, and visible damage."],
  ["Use the sequence of operation","Follow the wiring diagram and expected sequence to find the exact step where operation stops."],
  ["Measure before replacing","Use voltage, current, resistance, capacitance, temperature, static pressure, and refrigerant readings only where appropriate and safe."],
  ["Confirm the repair","Restore all covers and safeties, run a full cycle, check for secondary issues, and record final readings."]
 ]
}
];

const quiz = [
 {q:"Which component raises refrigerant pressure and temperature?",a:["Evaporator","Compressor","Metering device","Filter"],c:1},
 {q:"What should happen before measuring resistance?",a:["Turn the thermostat up","Verify the circuit is de-energized","Add refrigerant","Close the return grille"],c:1},
 {q:"What can cause high static pressure?",a:["Clean filter","Blocked or undersized duct","Open damper","Correct blower speed"],c:1},
 {q:"What is superheat?",a:["Liquid below saturation temperature","Vapor above saturation temperature","Outdoor temperature minus indoor temperature","Motor temperature"],c:1},
 {q:"Which furnace component proves flame?",a:["Contactor","Flame sensor","Capacitor","Float switch"],c:1},
 {q:"What is the best troubleshooting method?",a:["Replace the most common part","Bypass the safety","Measure and compare with specifications","Add refrigerant until the line is cold"],c:2},
 {q:"What does the evaporator do in cooling mode?",a:["Rejects indoor heat outside","Absorbs indoor heat","Raises refrigerant pressure","Stores refrigerant"],c:1},
 {q:"Why is a heat pump defrost cycle needed?",a:["To cool the indoor air","To melt frost on the outdoor coil","To charge the battery","To clean the filter"],c:1}
];

let completed = JSON.parse(localStorage.getItem("hvac_completed") || "[]");
let best = Number(localStorage.getItem("hvac_best") || 0);
let notes = JSON.parse(localStorage.getItem("hvac_notes") || "[]");
let qi = 0, score = 0, locked = false;

function showPage(id){
 document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));
 document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
 window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));

function renderLessons(filter=""){
 const grid = document.getElementById("lessonGrid");
 grid.innerHTML = "";
 lessons.filter(l=>(l.title+" "+l.summary).toLowerCase().includes(filter.toLowerCase())).forEach(l=>{
  const el = document.createElement("div");
  el.className = "card lesson-card";
  el.innerHTML = `<div class="lesson-visual">${l.icon}</div><span class="tag">${l.level}</span><h3>${l.title}</h3><p>${l.summary}</p><small>${completed.includes(l.id)?"✅ Completed":"Tap to open"}</small>`;
  el.onclick = ()=>openLesson(l);
  grid.appendChild(el);
 });
}

function openLesson(l){
 const flow = l.flow.map((x,i)=>`${i?'<span>→</span>':''}<div>${x}</div>`).join("");
 document.getElementById("lessonContent").innerHTML =
 `<span class="tag">${l.level}</span><h2>${l.icon} ${l.title}</h2><p>${l.summary}</p>
  <div class="diagram">${flow}</div>
  ${l.sections.map(s=>`<h3>${s[0]}</h3><p>${s[1]}</p>`).join("")}
  <div class="tip"><b>Technician rule:</b> Compare your readings to the equipment nameplate, wiring diagram, manufacturer service data, and local code.</div>
  <button class="primary" onclick="completeLesson('${l.id}')">${completed.includes(l.id)?"Completed ✓":"Mark lesson complete"}</button>`;
 showPage("lessonView");
}

window.completeLesson = function(id){
 if(!completed.includes(id)){
  completed.push(id);
  localStorage.setItem("hvac_completed",JSON.stringify(completed));
 }
 renderLessons(document.getElementById("lessonSearch").value);
 updateStats();
 document.querySelector("#lessonContent .primary").textContent = "Completed ✓";
};

document.getElementById("backToLessons").onclick = ()=>showPage("learn");
document.getElementById("lessonSearch").oninput = e=>renderLessons(e.target.value);

function renderQuiz(){
 const box = document.getElementById("quizContent");
 if(qi >= quiz.length){
  const pct = Math.round(score/quiz.length*100);
  if(pct > best){best=pct;localStorage.setItem("hvac_best",String(best));}
  updateStats();
  box.innerHTML = `<h3>Your score: ${score}/${quiz.length} (${pct}%)</h3>
  <p>${pct>=75?"Good job. Review any missed questions and keep practicing.":"Review the lessons and try again."}</p>
  <button class="primary" onclick="restartQuiz()">Try again</button>`;
  return;
 }
 const item = quiz[qi]; locked=false;
 box.innerHTML = `<p>Question ${qi+1} of ${quiz.length}</p><h3>${item.q}</h3>
 ${item.a.map((a,i)=>`<button class="option" onclick="answerQuiz(${i},this)">${a}</button>`).join("")}
 <div id="feedback"></div>`;
}
window.answerQuiz = function(i){
 if(locked) return;
 locked = true;
 const item = quiz[qi];
 document.querySelectorAll(".option").forEach((b,n)=>{
  if(n===item.c) b.classList.add("correct");
  else if(n===i) b.classList.add("wrong");
 });
 if(i===item.c) score++;
 document.getElementById("feedback").innerHTML = `<p>${i===item.c?"Correct.":"That answer is incorrect."}</p><button class="primary" onclick="nextQuestion()">Next</button>`;
};
window.nextQuestion = ()=>{qi++;renderQuiz()};
window.restartQuiz = ()=>{qi=0;score=0;renderQuiz()};

window.calcOhms = function(){
 let v=parseFloat(voltage.value), i=parseFloat(current.value), r=parseFloat(resistance.value);
 const count=[v,i,r].filter(Number.isFinite).length;
 if(count!==2){ohmsResult.textContent="Enter exactly two values.";return}
 if(!Number.isFinite(v)) v=i*r;
 else if(!Number.isFinite(i)) i=v/r;
 else r=v/i;
 ohmsResult.textContent=`Voltage: ${v.toFixed(2)} V • Current: ${i.toFixed(2)} A • Resistance: ${r.toFixed(2)} Ω`;
};
window.calcSuperheat = function(){
 const a=parseFloat(suctionTemp.value), b=parseFloat(evapSat.value);
 superheatResult.textContent = Number.isFinite(a)&&Number.isFinite(b) ? `Superheat: ${(a-b).toFixed(1)}°F` : "Enter both temperatures.";
};
window.calcSubcooling = function(){
 const a=parseFloat(condSat.value), b=parseFloat(liquidTemp.value);
 subcoolResult.textContent = Number.isFinite(a)&&Number.isFinite(b) ? `Subcooling: ${(a-b).toFixed(1)}°F` : "Enter both temperatures.";
};
window.calcAirflow = function(){
 const t=parseFloat(tons.value);
 airflowResult.textContent = Number.isFinite(t) ? `Estimated airflow: ${(t*400).toFixed(0)} CFM` : "Enter system tonnage.";
};

function renderNotes(){
 const list=document.getElementById("notesList");
 list.innerHTML = notes.length ? notes.map((n,i)=>`<div class="card note-item"><h3>${escapeHtml(n.title||"Untitled note")}</h3><p>${escapeHtml(n.body)}</p><div class="note-actions"><button class="danger" onclick="deleteNote(${i})">Delete</button></div></div>`).join("") : `<div class="card"><p>No notes saved yet.</p></div>`;
 updateStats();
}
document.getElementById("saveNote").onclick = ()=>{
 const title=document.getElementById("noteTitle").value.trim();
 const body=document.getElementById("noteBody").value.trim();
 if(!body) return;
 notes.unshift({title,body,date:new Date().toISOString()});
 localStorage.setItem("hvac_notes",JSON.stringify(notes));
 document.getElementById("noteTitle").value="";
 document.getElementById("noteBody").value="";
 renderNotes();
};
window.deleteNote = i=>{
 notes.splice(i,1);
 localStorage.setItem("hvac_notes",JSON.stringify(notes));
 renderNotes();
};
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function updateStats(){
 document.getElementById("completedCount").textContent=completed.length;
 document.getElementById("bestScore").textContent=best+"%";
 document.getElementById("noteCount").textContent=notes.length;
}
document.getElementById("themeBtn").onclick=()=>{
 document.body.classList.toggle("dark");
 localStorage.setItem("hvac_theme",document.body.classList.contains("dark")?"dark":"light");
};
if(localStorage.getItem("hvac_theme")==="dark") document.body.classList.add("dark");

if("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js");

renderLessons();renderQuiz();renderNotes();updateStats();
