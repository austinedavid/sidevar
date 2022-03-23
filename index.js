const btnEl = document.querySelector(".btn-icon");
const ulEl = document.querySelector(".btn-toggle");

btnEl.addEventListener("click", function(){
    let visibility = ulEl.getAttribute("data-visibility")
    if(visibility === "false"){
        ulEl.setAttribute("data-visibility", true)
    }
    else{
        ulEl.setAttribute("data-visibility", false)
    }
})
