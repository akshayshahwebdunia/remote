$(document).ready(function(){

var c1=0;
$("#Contestant1").click(function() {
    c1++;
    $("#div1").html("Contestant1 has got"+c1+"votes");
})
var c2=0;
$("#Contestant2").click(function() {
    c2++;
    $("#div2").html("Contestant2 has got"+c2+"votes");
})

var c3=0;
$("#Contestant3").click(function() {
    c3++;
    $("#div3").html("Contestant3 has got"+c3+"votes");
})

var c4=0;
$("#Contestant4").click(function() {
    c4++;
    $("#div4").html("Contestant4 has got  " +c4+" votes");
})
var c5=0;
$("#Contestant5").click(function() {
    c5++;
    $("#div5").html("Contestant5 has got"+c5+"votes");
})


});
