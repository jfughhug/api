async function getData(){
     const resp=await fetch("https://randomuser.me/api/");
     const data= await resp.json();
     odamChizish(data.results[0]);
}




const caed=document.getElementById("card");
const btn=document.getElementById("btn");

function odamChizish(odam){
    caed.innerHTML=`
     <div class="header"></div>
        <img class="profile-img" src="${odam.picture.large}" alt="User">
        <div class="info">
            <h2>${odam.name.title}${odam.name.first}${odam.name.last}</h2>
            <p><strong>Frontend Developer</strong></p>
            <hr>
            <p>Phone: ${odam.phone}</p>
            <p>Manzil: ${odam.location.country}</p>
            <p>Yosh: ${odam.dob.age}</p>
            <p>Email: ${odam.email}</p>
        </div>
    `
}

btn.addEventListener("click",()=>{
    getData()
})




