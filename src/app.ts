const searchInput: HTMLInputElement = document.querySelector('.search');
const drinkList = document.querySelectorAll('li');


const searchHandler = () => {
    const text:string = searchInput.value.toLowerCase();
    drinkList.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }

    })
}

searchInput.addEventListener('keyup', searchHandler)