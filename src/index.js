import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
setInterval(()=>{
  let cursor = document.getElementById("blink");
  if (!!cursor && cursor.style.visibility !== "hidden")
    cursor.style.visibility = "hidden";
  else if (!!cursor)
    cursor.style.visibility = "visible";
}, 500);
let lastScrollTop = 0;
window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (document.getElementById("scroll-status").value === "scrolling") {
    hideNavbar();
  }
  else if (lastScrollTop - scrollTop > 2 && !footerVisible()){
    showNavbar();
  } else if  (scrollTop - lastScrollTop > 2) {
    hideNavbar();
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

function footerVisible()
{
  let topOfFooter = document.getElementsByClassName("footer")[0].getBoundingClientRect().top;
  return topOfFooter - window.innerHeight <= 0;
}

function showNavbar()
{
  document.getElementById("bottom").classList.remove("hide");
  document.getElementById("top").classList.remove("hide");
  document.getElementById("bottom").classList.add("show");
  document.getElementById("top").classList.add("show");
}

function hideNavbar()
{
  document.getElementById("bottom").classList.remove("show");
  document.getElementById("top").classList.remove("show");
  document.getElementById("bottom").classList.add("hide");
  document.getElementById("top").classList.add("hide");
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
