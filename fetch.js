let gallery = document.getElementsByClassName("gallery__grid")[0]
let toast = document.getElementsByClassName('toast')[0]
let toast_text = document.getElementsByClassName('toast__text')[0]
let toast_header = document.getElementsByClassName('toast__header')[0]
let toast_btn = document.getElementsByClassName('toast__close')[0]

let form = document.getElementsByClassName("temp__form")[0]
let form_button = document.getElementsByClassName("form__button")[0]


async function getImages() {
    gallery.innerHTML = "<span class='loader'></span>"
    let images = await fetch("http://194.67.93.117:80/images")
  
    
    
    if (images.ok) {
        let json = await images.json()
        console.log(json.length)
        if (json.length == 0) {
            gallery.innerHTML = ""
            toast_header.innerText = "Ошибка"
            toast_text.innerText = "Изображения не найдены"
            toast.classList.remove("visually-hidden")
            toast_btn.addEventListener('click', () => {
                toast.classList.add("visually-hidden")
            })
        } else {
            gallery.innerHTML = ""
            json.forEach(element => {
                let imageContainer = document.createElement("figure")
                imageContainer.classList.add("gallery__image-container")
                
                image = document.createElement("img")
                image.classList.add("gallery__image")
                image.src = element.url
                image.alt = element.alt

                description = document.createElement("p")
                description.classList.add('gallery__image-description')
                description.innerHTML = element.description

                imageContainer.appendChild(image)
                imageContainer.appendChild(description)
                gallery.appendChild(imageContainer)
            });
        }
    } else {}

    if (images.status == '500' || images == null) {
        gallery.innerHTML = ""
        toast_header.innerText = "Ошибка"
        toast_text.innerText = "Изображения не найдены"
        toast.classList.remove("visually-hidden")
        
        toast_btn.addEventListener('click', () => {
            toast.classList.add("visually-hidden")
        })
    } else {}
}
getImages()

form.onsubmit = async function sendTemperature(e) {
    e.preventDefault();
    form_button.setAttribute("disabled", "1")
    data = {}
    new FormData(form).forEach(function(value, key) {
        if (key == "temp") {
            data[key] = Number(value)
        } else {
            data[key] = value
        } 
    });
    json = JSON.stringify(data)
    let response = await fetch('http://194.67.93.117:80/temp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: json
    });
    form_button.removeAttribute("disabled", "1")
    let result = await response.json()

    if (result.status = "ok") {
        header = "Успешно!"
        toast.style.backgroundColor = "#0eca66"
        form.reset()
    }
    else {
        header = "Ошибка :("  
    }

    msg = result.message
    toast_header.innerText = header
    toast_text.innerText = msg
    toast.classList.remove("visually-hidden")
    
    toast_btn.addEventListener('click', () => {
        toast.classList.add("visually-hidden")
    })
}








