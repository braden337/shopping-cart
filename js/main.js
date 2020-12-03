class Course{constructor(e,i,t,a,o,r,n){this.id=e,this.price=i,this.instructor=t,this.availableSpaces=a,this.title=o,this.description=r,this.image=n}}const cartEle=document.querySelector(".popover"),coursesEle=document.querySelector(".courses");cartEle.addEventListener("click",(function(){document.querySelector(".cart-inner").classList.toggle("hide")}));const courses=[new Course("SD100",154.99,"Chris MacDonald",15,"Introduction to Web Development","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","html_and_css.jpg"),new Course("SD110",223.01,"Chris MacDonald",3,"JavaScript Basics","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","js-basics.png"),new Course("SD120",99.99,"Chris MacDonald",10,"Object Oriented JavaScript","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","advanced-javascript.png"),new Course("SD145",49.99,"Chris MacDonald",30,"JavaScript Testing","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","testing.png"),new Course("SD260",149.99,"Chris MacDonald",5,"Introduction to React","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","react.jpg"),new Course("SD130",149.99,"Chris MacDonald",15,"Tools and Automation","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","tools.png")];class Cart{constructor(){this.courses=[],this.length=0,this.updateCart()}addCourse(e){let i=courses.find((function(i){return i.id===e}));i.availableSpaces>0&&(i.availableSpaces--,this.courses.push(i),this.updateCart(),updateCourses())}removeCourse(e){this.courses.splice(e,1).pop().availableSpaces++,this.updateCart(),updateCourses()}subTotal(){let e=0;return this.courses.forEach(i=>{e+=i.price}),e.toFixed(2)}total(){return(1.13*this.subTotal()).toFixed(2)}updateCart(){let e=document.querySelector("#cart ul");e.innerHTML="",e.previousElementSibling.innerHTML=`You have ${this.courses.length} Items in your cart.`;let i=e.nextElementSibling.querySelector("#subtotal-amount");i.innerHTML="$"+this.subTotal(),i.parentElement.nextElementSibling.querySelector("#total-amount").innerHTML="$"+this.total(),this.courses.forEach((i,t)=>{e.innerHTML+=`<li data-item-no="${t}"\n      data-course-id="${i.id}">\n    <img src="images/${i.image}">  \n    <div id="cart-title">${i.title}</div>\n    <div id="cart-price">$${i.price}</div>\n    <div id="delete">\n      <i class="far fa-times-circle"></i>\n    </div>\n    </li>`})}}function updateCourses(){coursesEle.innerHTML="",courses.forEach((function(e){coursesEle.insertAdjacentHTML("afterbegin",`\n      <li data-course-id="${e.id}">\n        <img src="images/${e.image}">\n        <div class="info">\n          <h3 id="item-title">${e.title}</h3>\n          <p id="item-description">\n            ${e.description}\n          </p>\n          <div id="price">\n            <h4>Price:</h4> \n            <span>$${e.price}</span>\n          </div>\n          <div id="instructor">\n            <h4>Instructor</h4>\n            <span>${e.instructor}</span>\n          </div>\n          <button id="add-to-cart">Add To Cart</button>\n          <div id="spaces-remaining"><span>${e.availableSpaces}</span> spaces remaining</div>\n        </div>\n      </li>`)}))}let cart=new Cart,ul=document.querySelector("ul.courses");ul.addEventListener("click",(function(e){let i=e.target.closest("li").dataset.courseId;cart.addCourse(i)}));let cartList=document.querySelector("#cart ul");cartList.addEventListener("click",(function(e){let i=e.target.closest("li").dataset.itemNo;cart.removeCourse(i)})),updateCourses();
//# sourceMappingURL=main.js.map
