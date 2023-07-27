let myPop = document.querySelector(".pop-box");
const l1 = document.querySelector('.selected-lang')
const l2 = document.querySelector('.lang-mobile')



let blogContainer = document.querySelector(".cards-blog")


function fetchData() {
    let result = {"cards" : [
        {
            "title"       : "111111The Best tourist destination",
            "desc" : "111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium cupiditate suscipit consectetur quo ipsa cum illum omnis ad! Ab enim consequatur minima odio aut error ipsum est sequi vitae!",
            "title_ar"       : "111111افضل وجهة سياحية",
            "desc_ar" : "111111هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة",
            img     :  "/assets/img/bolgImgs/12.png",
            id : 1
        },
        {
            "title"       : "222222The Best tourist destination",
            "desc" : "222222Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium cupiditate suscipit consectetur quo ipsa cum illum omnis ad! Ab enim consequatur minima odio aut error ipsum est sequi vitae!",
            "title_ar"       : "222222افضل وجهة سياحية",
            "desc_ar" : "2222222هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة",
            img     :  "/assets/img/bolgImgs/12.png",
            id : 2
        },
        {
            "title"       : "3333The Best tourist destination",
            "desc" : "3333Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium cupiditate suscipit consectetur quo ipsa cum illum omnis ad! Ab enim consequatur minima odio aut error ipsum est sequi vitae!",
            "title_ar"       : "3333افضل وجهة سياحية",
            "desc_ar" : "333333هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة",
            img     :  "/assets/img/bolgImgs/12.png",
            id : 3
        },
        {
            "title"       : "444444The Best tourist destination",
            "desc" : "444444Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium cupiditate suscipit consectetur quo ipsa cum illum omnis ad! Ab enim consequatur minima odio aut error ipsum est sequi vitae!",
            "title_ar"       : "444444افضل وجهة سياحية",
            "desc_ar" : "444444هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة",
            img     :  "/assets/img/bolgImgs/12.png",
            id : 4
        },
        {
            "title"       : "555555The Best tourist destination",
            "desc" : "555555Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium cupiditate suscipit consectetur quo ipsa cum illum omnis ad! Ab enim consequatur minima odio aut error ipsum est sequi vitae!",
            "title_ar"       : "555555افضل وجهة سياحية",
            "desc_ar" : "555555هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة",
            img     :  "/assets/img/bolgImgs/12.png",
            id : 5
        },
        {
            "title"       : "666666The Best tourist destination",
            "desc" : "666666Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium cupiditate suscipit consectetur quo ipsa cum illum omnis ad! Ab enim consequatur minima odio aut error ipsum est sequi vitae! Ab enim consequatur minima odio aut error ipsum est sequi vitae!Ab enim consequatur minima odio aut error ipsum est sequi vitae!Ab enim consequatur minima odio aut error ipsum est sequi vitae!Ab enim consequatur minima odio aut error ipsum est sequi vitae!Ab enim consequatur minima odio aut error ipsum est sequi vitae!Ab enim consequatur minima odio aut error ipsum est sequi vitae!",
            "title_ar"       : "666666افضل وجهة سياحية",
            "desc_ar" : "666666هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة هذ النص وهمي يمكن استبداله حسب البيانات المتاحة",
            img     :  "/assets/img/bolgImgs/12.png",
            id : 6
        },

      ]};
    myInfo = result.cards;

    // console.log(myInfo[1].id)
          showData(myInfo);   
          
         

    }

    fetchData()

function showData(array) {
    for (let i = 0; i < array.length; i++) {
        blogContainer.innerHTML += `
        <div class="col-lg-4 col-md-6" >
        <div class= "card${i == 0 ? " active-card"  : "" } ${i == 1 ? " next-card"  : "" }" draggable = "true">
          <img src = ${array[i].img} alt="tower" />
          <div class="text">
            <h4 data-tr="blog-1-title">
            ${(l1.value == "en" || l2.value == "en")? array[i].title : array[i].title_ar}
            </h4>
            <div class="date" data-tr="blog-1-date">July 17, 2023</div>
            <p data-tr="blog-1-content">
            ${(l1.value == "en" || l2.value == "en")? array[i].desc : array[i].desc_ar}
            </p>
            <div class="sites" data-tr="blog-1-tags">#Tourism, #Dubai</div>
            <div class="link">
            <button data-tr="view-more" id=${i+1}>
            ${(l1.value == "en" || l2.value == "en")? "view more" : "عرض المزيد"}
              <i class="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
                           `;
      }

      document.querySelectorAll(".blogs .cards-blog .card .text .link button").forEach((link) => {
        link.addEventListener("click", () => {
          showPopUp(myInfo);
          console.log(this.event.target.id)
          console.log(document.querySelector(".pop .pop__card .Myclose-icon"));
          let closeBtn = document.querySelector(".pop .pop__card .Myclose-icon");
          closeBtn.addEventListener("click" , () =>{
            console.log("dfdfdfdf")
          })
        });
    });
    
    
}






function showPopUp(array) {
    // myPop.innerHTML = null;
  
    for (let i = 0; i < array.length; i++) {
      if (this.event.target.id == array[i].id) {
        myPop.innerHTML += `
        <div class="pop">

        <div class= "pop__card">
        <div class="Myclose-icon">
        <i class="fa-solid fa-close"></i>
   </div>
          <img src = ${array[i].img} alt="tower" />
          <div class="pop__title">
            <h1 class="pop__title-h1">
            ${(l1.value == "en" || l2.value == "en")? array[i].title : array[i].title_ar}
            </h1>
            <span class="pop__title-date">17/4/2023</span>
          </div>
          <div class="pop__info">
           <p>
           ${(l1.value == "en" || l2.value == "en")? array[i].desc : array[i].desc_ar}
           
           </p>
          </div>
          <span class="pop__tail">#tourism # dubai</span>
        </div>
      </div>
             `;
      }
    }



    document.querySelector(".pop .pop__card .Myclose-icon").addEventListener("click" , () => {
        myPop.innerHTML = "";
    })

  
  }
  