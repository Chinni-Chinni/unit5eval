
const getData = async() =>{
    try {
        const res = await fetch(`http://localhost:3000/tasks`);
        const data = await res.json();
        updateDom(data);
        
    } catch (error) {
        console.log(error);
    }
    
}
getData();

const ADDDATA = async ()=>{
    try {
        let  body = {
      title : document.querySelector("#inputtype").value,
      status : document.querySelector("#checkbox").checked,
        
    }
    const res = await fetch(`http://localhost:3000/tasks`,{
        method:"POST",
        body : JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }

    });
    const data = await res.json();
        
    } catch (error) {
        console.log(error);
        
    }
  
}

function updateDom(data){
        data.forEach(function(text){
            console.log(text);
            let div=document.createElement('div');

            div.setAttribute('id',"row_div")
            let tr=document.createElement('h3');
            tr.setAttribute('id',"row")
            if(text.status==true){
                tr.style.color="green";
            }else{
                tr.style.color="red";
            }
            
            
            tr.innerText=text.title;

            div.append(tr);
            document.querySelector('#mainContainer').append(div);

        });
    }