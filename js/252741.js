var AsvguaKs = '<path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />'
var AsvgdaKs = "<path fill='none' class='aKspth4' /><path class='aKspth5' />"
var Asvgc1aKs = '<path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />'
var Asvgc2aKs = "<path class='aKspth1' /><path class='aKspth2' />"
function aKsdisA(id) {
var aKsa = document.getElementById(id);
if (aKsa.style.display === "none") {
aKsa.style.display = "block";
}else{
aKsa.style.display = "none";
}}
function aKsdisB(id) {
var aKsb = document.getElementById(id);
if (aKsb.style.display === "block") {
aKsb.innerHTML = AsvgdaKs;
aKsb.style.display = "flex";
}else{
aKsb.innerHTML = AsvguaKs;
aKsb.style.display = "block";
}}
function aKsdisC(id) {
var aKsc = document.getElementById(id);
if (aKsc.style.display === "block") {
aKsc.innerHTML = AsvguaKs;
aKsc.style.display = "flex";
}else{
aKsc.innerHTML = AsvgdaKs;
aKsc.style.display = "block";
}}
$(document).ready(function() {
$(document).on("click", ".msg252741", function() {
var $this = $(this);
$this.addClass("tooltipped tooltipped-w ClipboardButton--success");
$this.find(".msg252742").html(Asvgc1aKs);
setTimeout(function() {
$this.removeClass("tooltipped tooltipped-w ClipboardButton--success");
$this.find(".msg252742").html(Asvgc2aKs);
}, 3000);
});});
function aKsshoA(id) {
	var modal = document.getElementById(id);
	modal.style.display="block";
}
function aKshidA(id){
	var close = document.getElementById(id);
	close.style.display="none";
}
function aKscpyA(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


