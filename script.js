const firstLi = document.querySelector('li')
console.log(firstLi)

const secondLi = document.querySelector('super-title')
console.log(secondLi)
const lastLi = document.querySelector('#last-title')
console.log(lastLi)

const allLi = document.querySelectorAll('li')
console.log(allLi)

allLi.forEach(titre => {
    console.log(titre.textContent)
})

firstLi.addEventListener('mouseover', () => {
    firstLi.textContent = "nouveau titre"
    firstLi.classList.toggle('colorRed')
})


