let button = document.querySelector(".submit");


button.addEventListener("click", function(){
    var search = document.querySelector("#search").value;
    console.log(search)
    window.localStorage.setItem('search',search);

    console.log("clicado");
    window.location.href ="pokemon.html";
})