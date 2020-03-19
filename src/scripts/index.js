// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "regenerator-runtime/runtime";
import "materialize-css/dist/css/materialize.css";

const darkButton = document.querySelector("dark");
const lightButton= document.querySelector("light");

const darkThemeColor = localStorage.getItem("theme");

 if (darkThemeColor) {
     document.querySelector("body").style.textColor = "white";
 } else {
     
 }
darkButton.addEventListener("click", (e) => {

    localStorage.setItem("theme", darkTheme)
})