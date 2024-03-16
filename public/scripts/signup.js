
    let firstForm = document.getElementById('Form1');
    let secondForm = document.getElementById('Form2');

    let nextButton = document.getElementById('Next');
    let previousButton = document.getElementById('Previous');

    nextButton.addEventListener('click', () =>{
        firstForm.style.right = "100%";
        secondForm.style.left = "0%";
    })
    previousButton.addEventListener('click', () =>{
        firstForm.style.right = "0%";
        secondForm.style.left = "100%";
    })