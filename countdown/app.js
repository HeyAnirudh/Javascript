const enddate ="10 April 2023 16:53:12"

document.getElementById("end-date").innerHTML=enddate;


const input = document.querySelectorAll("Input")

function time(){
    const end= new Date(enddate);
    const now =new Date();
    input[0].value=Math.floor((end-now)/1000/3600/24);
    input[1].value=Math.floor(((end-now)/1000/3600)%24);
    input[2].value=Math.floor(((end-now)/1000/60)%60);
    input[3].value=Math.floor(((end-now)/1000)%60);

    if (now>=end){
        console.log("yaaaaaaaay");
       
    }

    

}

time()

setInterval(
    ()=>{
        time()
    }, 1000
)