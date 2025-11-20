
letcontrastToggle = false;
function toggleContrast() {
    document.body.classList.toggle('dark-theme');
  }

// function toggleContrast() {
//      contrastToggle = !contrastToggle;
//     if (contrastToggle) {
//         document.body.classList += ' dark-theme ';
//     } else {
//         document.body.classList.remove('dark-theme');
//     }
// }


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    emailjs
        .sendForm(
            "service_0ftxemd",
            "template_s3chdi9",
            event.target,
            "nFc76Hl3bqPzcs1sI"
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible ';
        }).catch(() => {   
            loading.classList.remove('modal__overlay--visible');
            alert(
                'The email service is temporarily unavailable. Please contact me directly on elir62698@gmail.com'
            );
        })

    loading.classList += ' modal__overlay--visible ';
    setTimeout(() => {
     
        console.log('it worked 1')
    }, 1000);
}

// let isModalOpen = false;
// function toggleModal() {
//     isModalOpen = !isModalOpen;
//     if (isModalOpen) {
//         // isModalOpen = false;
//         return document.body.classList.remove('modal--open');
//     }
//     // isModalOpen = true;
//     document.body.classList += ' modal--open ';
// }

function toggleModal() {
    document.body.classList.toggle('modal--open');
}