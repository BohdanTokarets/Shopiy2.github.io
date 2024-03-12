const navigation = document.querySelector('.header-navigation');

const burgerButton = document.querySelector('.burger-menu');
const burgerButtonClose = navigation.querySelector('.close__button');

burgerButton.addEventListener('click', function(){
    navigation.classList.toggle('header-navigation-active');
});

burgerButtonClose.addEventListener('click', function(){
    navigation.classList.remove('header-navigation-active');
});

document.addEventListener('mousedown', function(e){
    if(e.target.closest('.navigation') === null){
        navigation.classList.remove('header-navigation-active');
    }
});

/*Arrow up button*/
const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 700) {
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
};

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

/*Element Animation*/

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

/*Modal window*/
const registerBtn = document.getElementById("register");
const container = document.getElementById("container");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener('click', () => {
    container.classList.add("active-modal");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active-modal");
});

document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("sign-in-wrapper").classList.add("open")
});

document.getElementById("close-my-modal-btn").addEventListener("click", function(){
    document.getElementById("sign-in-wrapper").classList.remove("open")
});

/*Night Topic Btn*/ 
const NightTopicBtn = document.getElementById("night-topic-btn");
const topic = localStorage.getItem("topic");

if(topic){
    document.body.classList.add(topic);
}

NightTopicBtn.addEventListener('click', function(){
    document.body.classList.toggle("night-topic");

    const topic = localStorage.getItem("topic");
    
    if(topic === "night-topic"){
        localStorage.setItem("topic","");
    }else{
        localStorage.setItem("topic","night-topic");
    }
});




