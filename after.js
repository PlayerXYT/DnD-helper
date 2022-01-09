const probon = document.getElementById("probon");
const img = document.getElementById("img");
const imgsrc = document.getElementById("imgsrc");
var pro = document.getElementsByTagName("checkbox");
for(var i=0;i<pro.length;i++) {
 var inner = pro[i].innerHTML;
 var id = pro[i].id;
 var name = pro[i].getAttribute("name");
 pro[i].setAttribute("name", "");
 pro[i].id = "";
 pro[i].innerHTML = "<label class=\"checkbox\" onclick=\"prof('"+id+"')\"><input type=\"checkbox\" id=\""+("cb"+id)+"\"><span class=\"mark\"></span></label><input type=\"number\" placeholder=\""+inner+"\" id=\""+id+"\" name=\""+name+"\"><span class=\"dval\">"+inner+"</span> <font color='grey'>"+name+"</font>";
}
var dat = document.getElementsByName("auto");
for(var i=0;i<dat.length;i++) {
 var inner = dat[i].innerHTML.split(",");
 dat[i].innerHTML = "";
 for(var j=0;j<inner.length;j++) {
  dat[i].innerHTML += "<option>"+inner[j]+"</option>";
 }
}
mod('str');
mod('dex');
mod('con');
mod('int');
mod('wis');
mod('cha');