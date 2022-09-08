window.onload = function () {

var needed = document.getElementById("addNeed");
var ent = document.getElementById("entered_Value");
var need_list = document.getElementById("needed_list");
var have = document.getElementById("addHave");
var hvlist = document.getElementById("have_list")

needed.onclick = function () {
    
    document.getElementById('need_list').innerHTML += ('<li>'+ent+'</li>');

}

}

