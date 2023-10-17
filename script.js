let lightbulb1 = document.querySelector("#lightbulb1")
let lightbulb2 = document.querySelector("#lightbulb2")
let lightbulb3 = document.querySelector("#lightbulb3")
let subtitle = document.querySelector("h3.subtitle")
let count = 0
let lightbulbs = document.querySelectorAll(".lightbulb")

lightbulb1.addEventListener("click", function(){
    count++
    lightbulb1.classList.toggle("active")
    if(count !== 1){
        subtitle.innerHTML = `You've clicked the lights ${count} times`
    }
    else{
        subtitle.innerHTML = `You've clicked the lights 1 time`
    }
})
for(i=0; i < lightbulbs.length; i++){
    let lightbulb = lightbulbs[i] // if i didn't do this and instead just tried to use lightbulbs[i] in the loop it didn't work, idk why
    lightbulb.addEventListener("mouseenter", function(){
        count++
        lightbulb.classList.toggle("active")
        if(count !== 1){
            subtitle.innerHTML = `You've clicked the lights ${count} times`
        }
        else{
            subtitle.innerHTML = `You've clicked the lights 1 time`
        }
    })
    lightbulb.addEventListener("mouseleave", function(){
        lightbulb.classList.toggle("active")
    })
}

     
/*
lightbulb2.addEventListener("mouseenter", function(){
    count++
    lightbulb2.classList.toggle("active")
    if(count !== 1){
        subtitle.innerHTML = `You've clicked the lights ${count} times`
    }
    else{
        subtitle.innerHTML = `You've clicked the lights 1 time`
    }
})
lightbulb2.addEventListener("mouseleave", function(){
    lightbulb2.classList.toggle("active")
})
lightbulb3.addEventListener("click", function(){
    count++
    lightbulb3.classList.toggle("active")
    if(count !== 1){
        subtitle.innerHTML = `You've clicked the lights ${count} times`
    }
    else{
        subtitle.innerHTML = `You've clicked the lights 1 time`
    }
})*/