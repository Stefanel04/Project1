function scrollToElement(elementSelector, instance = 0, offset = 0){
    const elements = document.querySelectorAll(elementSelector);
    if (elements.lenght > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' block: 'start', inline: 'nearest', offsetTop: offset});
    }
}

const link1 = document.getElementById("Link1")
const link2 = document.getElementById("Link2")
const link3 = document.getElementById("Link3")

link1.addEventListener('click', () => {
    scrollToElement('.header' ,0 ,50)
});