const country = document.querySelector("#country");
const category= document.querySelector("#catogery");
const searchbtn = document.querySelector(".searchbtn");
const newsbody = document.querySelector(".newsbody");
const news1 = document.querySelector("#news1");
const news2 = document.querySelector("#news2");
const news3 = document.querySelector("#news3");
const news4 = document.querySelector("#news4");
const news5 = document.querySelector("#news5");
const news6 = document.querySelector("#news6");
async function newssearch(){
    const api_key="5e3c37fe915443619c46b3fd57a931aa";
    const url = `https://newsapi.org/v2/top-headlines?country=${country.value}&category=${category.value}&apiKey=${api_key}`
    const data = await fetch(`${url}`).then(Response=>Response.json());
    console.log(data);
    if(data.articles.length === 0){
        alert("No News Found");
        return;
    }
    let newses = [news1,news2,news3,news4,news5,news6];
    for(let i=0;i<newses.length;i++){
        const h2 = document.querySelector(`#${newses[i].id} h2`);
        const p = document.querySelector(`#${newses[i].id} p`);
        const link = document.querySelector(`#${newses[i].id} a`)
        h2.innerHTML = `${data.articles[i].title}`;
        p.innerHTML = `${data.articles[i].description || "not much info avaliable"}`;
        link.setAttribute("href", `${data.articles[i].url}` );
    }
    newsbody.style.display="grid";

}
searchbtn.addEventListener("click",()=>{
    newssearch();
})