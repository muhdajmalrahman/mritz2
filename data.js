const data = [
    {
        id: 1,
        date: "23 September 2020",
        reading_duration: "2 mins read",
        title: "How to make a website look more attractive with llustrations",
        image: "images/nb1.png",
        content: `<div>
      <div>Leverage agile frameworks to provide a robust synopsis for high level overviews.
      Iterative approaches to corporate strategy foster collaborative thinking to further the
      overall value proposition. Organically grow the holistic world view of disruptive
      innovation via workplace diversity and empowerment.
      </div>
      <div>
      Overall value proposition. Organically grow the holistic world view of disruptive
      innovation via workplace diversity and empowerment.
      </div>
      
    </div>`,
        category: "DEVELOPMENT",
        year: 2022
    },
    {
        id: 2,
        date: "23 September 2020",
        reading_duration: "2 mins read",
        title: "How to make a website look more attractive with llustrations",
        image: "images/nb1.png",
        content: `<div>
      <div>Leverage agile frameworks to provide a robust synopsis for high level overviews.
      Iterative approaches to corporate strategy foster collaborative thinking to further the
      overall value proposition. Organically grow the holistic world view of disruptive
      innovation via workplace diversity and empowerment.
      </div>
      <div>
      Overall value proposition. Organically grow the holistic world view of disruptive
      innovation via workplace diversity and empowerment.
      </div>
      
    </div>`,
        category: "DEVELOPMENT",
        year: 2022
    },
]

// const data=["cty","koo"]
let news_box=document.querySelector(".news_box")
let newsL=document.querySelector(".newsL")
let news_cty=document.querySelector(".news_cty")
let news_date=document.querySelector(".news_date")
let news_title=document.querySelector(".news_title")


// for(let i=0;i<data.length;i++){
//     let div= document.createElement("div");
//     div.innerText=data[i];
//    news.appendChild(div);
// }
data.map((i)=>{
    // let divMain= document.createElement("div");
    // divMain.innerHTML=i
    // news_box.appendChild(divMain);
    let divImg= document.createElement("div");
    divImg.innerHTML=i.image
    newsL.appendChild(divImg);
    let div= document.createElement("div");
    div.innerText=i.category;
   news_cty.appendChild(div);
   let divDate= document.createElement("div");
   divDate.innerText=i.date;
  news_date.appendChild(divDate);
  let divTitle= document.createElement("div");
  divTitle.innerText=i.title;
 news_title.appendChild(divTitle);
})