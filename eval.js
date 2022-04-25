var container = document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault();
    var names = document.getElementById("poke").value;
})

var url = "https://pokeapi.co/api/v2/pokemon"

async function getData(){

    try{
        var res = await fetch(url);
        var data = await res.json();
    localStorage.setItem("pockdata",JSON.stringify(data.results));
    var pockdata = JSON.parse(localStorage.getItem("pockdata")) || [];
    displayData(pockdata);
       
       
    }catch(err){
        console.log(err)
    }

}
getData();


  


var table = document.querySelector("#table");
var tbody = document.querySelector("#tbody");

function displayData(pockdata){
    pockdata.forEach(function(data){

        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.innerHTML = data.name;
        // console.log(td)

        tr.append(td);
        tbody.append(tr);
        table.append(tbody)
        

        
    })
}
var arr = []

var url2 = "https://pokeapi.co/api/v2/pokemon/ditto";

async function getData1(){

    try{
        var res = await fetch(url2);
        var data = await res.json();
        // console.log(data)

        displayData1(data);
       
       
    }catch(err){
        console.log(err)
    }

}
getData1();

var container = document.querySelector("#container");

function displayData1(gettingData){
    console.log(gettingData)
var div = document.createElement("div");
var id = document.createElement("p");
id.innerText = "id"+ "  " +gettingData.id;

var height = document.createElement("p");
height.innerText = gettingData.height;

var weight = document.createElement("p");
weight.innerText = gettingData.weight;

gettingData.abilities.forEach(function(d){
    var ability =  document.createElement("p");
    ability.innerHTML = d.ability.name;
div.append(id,height,weight,ability,ability);
container.append(div)


})





}