
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


function toggleModal() {
    document.body.classList.toggle('modal--open');
}


// ANIMATIONS

const container = document.querySelector('.ellipse-container');
const particleCount = 64; // sparse = luxury

for (let i = 0; i < particleCount; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');

  // Random radii for ellipses (X wider than Y)
  const radiusX = 40 + Math.random() * 220;  // 40–260px
  const radiusY = 20 + Math.random() * 120;  // 20–140px

  p.style.setProperty('--radius-x', `${radiusX}px`);
  p.style.setProperty('--radius-y', `${radiusY}px`);

  // Random center point in the viewport
  p.style.top = Math.random() * 100 + '%';
  p.style.left = Math.random() * 100 + '%';

  // Subtle size variation for natural feel
  const size = 2 + Math.random() * 3; // 2–5px
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;

  // Random animation timing
  p.style.animationDuration = (20 + Math.random() * 18) + 's';
  p.style.animationDelay = (-Math.random() * 20) + 's';

  container.appendChild(p);
}
