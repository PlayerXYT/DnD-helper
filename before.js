var did = false;
var bonus = 2;
var rbon = [0, 0, 0, 0, 0, 0];

function prof(id) {
 if(did) {
  var el = document.getElementById(id);
  var val = parseInt(el.value);
  var cb = document.getElementById("cb"+id);
  if(cb.checked) {
   el.value = val+bonus;
   if(cb.value="highlight") {document.getElementById("pskill").innerHTML = parseInt(document.getElementById("pskill").innerHTML)-1;}
  }
  else {
   el.value= val-bonus;
   if(cb.value="highlight") {document.getElementById("pskill").innerHTML = parseInt(document.getElementById("pskill").innerHTML)+1;}
  }
 }
 did = !did;
}
function stat(name) {
 var m = document.getElementsByName(name);
 var f = parseInt(document.getElementById("m"+name).value);
 for(var i=0;i<m.length;i++) {
  if(m[i].previousSibling.getElementsByTagName("input")[0].checked) {f+=bonus;}
  m[i].value = f;
 }
}
function mod(id) {
 var f = parseInt(document.getElementById(id).value);
 var m = document.getElementById("m"+id);
 var p = document.getElementById("p"+id);
 p.innerHTML = calc(f);
 if(p.innerHTML=="NaN") {p.innerHTML = "<font color='red'>Value unset</font>";}
 f = parseInt((f-10)/2);
 var index = 0;
 if(id=="dex") {index=1;} else if(id=="con") {index=2;} else if(id=="int") {index=3;} else if(id=="wis") {index=4;} else if(id=="cha") {index=5;}
 f += rbon[index];
 document.getElementById("b"+id).value = rbon[index];
 m.value = f;
 stat(id);
 var b = document.getElementsByClassName("bblock");
 var t = 0;
 for(var i=0;i<b.length;i++) {
  t += calc(parseInt(b[i].value));
 }
 var ptot = document.getElementById("ptot");
 ptot.innerHTML = t;
 if(t>27) {ptot.style.color = "#FF0000";}
 else {ptot.style.color = "#000000";}
}
function upbon(id, index) {
 rbon[index] = parseInt(document.getElementById("b"+id).value);
 mod(id);
}
function calc(b) {if(b<13) {return b-8;}else {return (b-13+1)*2+3;}}
function align(type) {
 document.getElementById("altext").value = type;
}
function racbon(name, data) {
 var b = document.getElementById("rtext");
 b.value = name;
 data = data.split("");
 
 for(var i=0;i<6;i++) {rbon[i] = parseInt(data[i]);}
 
 mod('str');
 mod('dex');
 mod('con');
 mod('int');
 mod('wis');
 mod('cha');
}
function showimg(url="") {
 var src = url.substring(url.split(".")[0].length+1).split("/")[0];
 img.src = url;
 imgsrc.innerHTML = "Source from <a href='"+url+"'>"+src+"</a>";
}
function suggest() {
 var name = document.getElementById("ctext").value;
 var cls = document.getElementById("class").getElementsByTagName("option");
 var count = 0;
 var ids = [];
 for(var i=0;i<cls.length;i++) {
  if(cls[i].innerHTML==name) {
   count = cls[i].getAttribute("count");
   ids = cls[i].getAttribute("ids").split(",");
   break;
  }
 }
 document.getElementById("pskill").innerHTML = count;
 for(var i=0;i<ids.length;i++) {document.getElementById("cb"+ids[i]).value="highlight";}
}