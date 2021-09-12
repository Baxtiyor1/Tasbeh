const elNumber = document.querySelector('#number');
// const elBtn_reset = document.querySelector('#btn-reset');
// const elBtn_add = document.querySelector('#btn-add');
const elBtns = document.querySelectorAll('#btn')

let count = 0;

elBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('btn-add')){
            count++;
            
        }
        else if(styles.contains('btn-reset')){
            count = 0
        }
        // if(count > 0){
        //     value.style.color = "green";
        // }
        // if(count < 0){
        //     value.style.color = "red"
        // }
        // if(count === 0){
        //     value.style.color = "#222"
        // }
        elNumber.textContent = count;
    })
    // console.log(btn)
})