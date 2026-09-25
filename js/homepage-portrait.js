(() => {
  const portrait = document.getElementById("homepage-portrait");

  if (!portrait) return;

  const selectPortrait = () => {
    const random = Math.random();
    const photoNumber = random < 0.5 ? 1 : random < 0.75 ? 2 : 3;
    portrait.dataset.photo = String(photoNumber);
    portrait.src = `/images/photo${photoNumber}-web.jpg`;
  };

  selectPortrait();
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) selectPortrait();
  });
})();
