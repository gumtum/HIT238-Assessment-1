window.onload = () => {
  const transition_el = document.querySelector('.transition');
  setTimeout (() => {
    transition_el.classList.remove('active');
  }, 300);
}

for (let i = 0; i < anchors.length; i++) {
  const anchor = anchors[i];

  anchor.addEventListener('click', e => {
    e.preventDefault();
    let varTarget = e.target.href;

    transition_el.classList.add('active');

    setTimeout(() => {
      window.location.href = varTarget;
    }, 400)
  })
}
