console.log("The house always wins!")

const suitInput = document.getElementById('card')

const colorInput = document.getElementById('style')

console.log(suitInput)

function setCard(){
    const card = document.getElementById(suitInput.value)
    card.style.color = colorInput.value
}