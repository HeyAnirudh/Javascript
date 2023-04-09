colorgen =()=>{
    const rand=Math.floor(Math.random()*16777215);
    const Hex="#"+rand.toString(16);
    document.body.style.backgroundColor=Hex;
    document.getElementById("color-code").innerText=Hex;
    navigator.clipboard.writeText(Hex)

}


document.getElementById("btn").addEventListener(
    "click", colorgen
)

