const api= "https://randomuser.me/api/"


async function getData(){
    const response= await fetch(api)

    const data= await response.json()

    user=data.results[0]
    let {title,first,last}=user.name;

    var fname=title+". "+first+" "+last;
    var { gender,email,phone}=user;
    var age=user.dob.age
    var {city ,state,country}=user.location
    var image=user.picture.large;


    document.getElementById("name").innerHTML=fname;
    document.getElementById("Age").innerHTML=age;
    document.getElementById("gender").innerHTML=user.gender;
    document.getElementById("loaction").innerHTML=city;

    var img=document.createElement("img");
    var img_div=document.getElementById("user-img")
    img.src=image;
    img_div.append(img);
    



    console.log(fname)
}






getData()