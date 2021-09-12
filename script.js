const elNumber = document.querySelector('#number');
const elBtn_reset = document.querySelector('#btn-reset');
const elBtn_add = document.querySelector('#btn-add');
// const elBtns = document.querySelectorAll('.btn')

let count = 0;

elBtn_add.addEventListener("click", function (e) {
    // e.preventDefault();
    count++
    elNumber.textContent = count;
})
elBtn_reset.addEventListener("click", function (e) {
    // e.preventDefault();
    count = 0;
    elNumber.textContent = count;
})
console.log(count)