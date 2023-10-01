let btn = document.getElementsByClassName("anime_btn")[0]
let animations = document.getElementsByClassName("animations")[0]

function createAnimation(element, parameters) {
    this.element = element
    this.parameters = parameters

    this.animation = function() {
        const {finished} = anime({
            targets: this.element,
            duration: 2000,
            easing: "linear",
            ...this.parameters
        })

        return finished.then(() => {
            console.log("Свойства объекта")
            console.log(this.parameters)
            this.element.remove()
        })
    }
}

const randomAnimation = [
    {
        backgroundColor: '#FF69B4' ,
        translateY: -337,
        translateX: 158,
        borderRadius: '75%'
    },
    {
        backgroundColor: '#FF69B4' ,
        translateY: -432,
        translateX: -235,
        scale: 3,
    },
    {     
        backgroundColor: '#00BFFF',
        translateY: -100,
        translateX: -500,
        direction: 'alternate',
        loop: 3,
    }
]

btn.addEventListener("click", () => {
    let element = document.createElement("div")
    element.classList.add("animations__element")
    animations.appendChild(element)
    new createAnimation(element, randomAnimation[Math.floor(Math.random()* 3)]).animation()
})