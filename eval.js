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


    
document.querySelector('form').addEventListener('submit',function(){
    event.preventDefault();
    var names=document.getElementById('poke').value;
    fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res)=>{
            res.json().then((res)=>{
               console.log(res);
            function displaySecond(res){
                var box=document.createElement("div");
                var id1=document.createElement('h3');
                id1.innerText=res.id;
                var name=document.createElement('h3');
                name.innerText=res.name;
                var weight=document.createElement('h3');
                weight.innerText=res.weight;
                var height=document.createElement('h3');
                height.innerText=res.height;
                box.append(name,id1,weight,height);
                document.querySelector("#container").append(box);
            }
            displaySecond(res);
    var dummy=pokeData1;
    //console.log(pokeData1,"kk")
            function searchMe(names){
                  //  console.log(names);
                    if(names==''){
                    }else{
                        var searchData=dummy.filter(function(mv){
                        if(mv.name.includes(names)){
                            return true;
                        }else{
                            return false;
                        }
                    });
                    return searchData;
                }
            }
            var searchedData=searchMe(names);
            //displaySecond(searchedData)
        });
    });
    });
    