function createSnow(){
    const snowFlake = document.createElement("i");

    snowFlake.classList.add("far");
    snowFlake.classList.add("fa-snowflake");

    snowFlake.style.left = Math.random()*window.innerWidth +"px";
    snowFlake.style.animationDuration = Math.random() * 3 + 2 +"s";

    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = Math.random()*10 + 10 +"px"; 

    document.body.appendChild(snowFlake);
 
    setTimeout(() => {
        this.remove();
    }, 5000);

    snowFlake.addEventListener("mouseover",function(){
        snowFlake.remove();
        console.log("remove");
    })

} 
setInterval(createSnow,100);

