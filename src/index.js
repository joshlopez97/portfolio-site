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
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    console.log("down");
    document.getElementById("bottom").classList.remove("show");
    document.getElementById("top").classList.remove("show");
    document.getElementById("bottom").classList.add("hide");
    document.getElementById("top").classList.add("hide");
  } else {
    document.getElementById("bottom").classList.remove("hide");
    document.getElementById("top").classList.remove("hide");
    document.getElementById("bottom").classList.add("show");
    document.getElementById("top").classList.add("show");
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
