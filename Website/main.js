const navbarItems = document.querySelectorAll('.navbar__item');
const subMenu = document.querySelector('.navbar__subbar');


var homeButton = document.getElementById('homeButton');
var expButton = document.getElementById('expButton');
var projectsButton = document.getElementById('projectsButton');

const mainhtml = document.getElementById('homePage');


const main = document.querySelector('.main');
const mainContainer = document.querySelector('.main__container');
const sidebar = document.querySelector('.main__sidebar');

const mainContentItems = document.querySelectorAll('.main__content__container');






window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}







//adding line numbers
var lineNumbers = function(){

    var sideBar = document.getElementById("sidebar")


    sideBar.innerHTML = "";


    //var height = ( sideBar.clientHeight / 10);
    sideBar.style.minHeight = "100%";




    console.log(document.documentElement.scrollHeight + " - " +  document.documentElement.clientHeight);
    console.log(document.querySelector('.main__content__container').scrollHeight);

    var height =  Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight);
    var containerHeight = Math.max(document.querySelector('.main__content__container').scrollHeight, document.documentElement.clientHeight);

    let i = 0;

    for( i; i < height /19; i += 1){
        sideBar.innerHTML +="<br/>" + i ;
    }
}

window.onresize = lineNumbers;


var loadEvent = function(){
   lineNumbers();
}

window.onload = loadEvent;


var tabClickEvent = function() {  

   navbarItems.forEach((element) =>{
        element.firstElementChild.classList.remove("clicked");
   })

    this.classList.add("clicked");
       
    let pageid = this.innerHTML.split("</i>");
    let id = pageid[1];
    let id2 = id.split(".html");
    subMenu.innerHTML = id2[0];

    let idElement = document.getElementById(id2[0] + "Page");
    mainContentItems.forEach((element) =>{
        element.classList.add("hidden");
        //element.style.display = "none";
    })


    idElement.classList.remove("hidden");
    //idElement.style.display = "";


   lineNumbers();

}

homeButton.onclick = tabClickEvent;
projectsButton.onclick = tabClickEvent;
expButton.onclick = tabClickEvent;


