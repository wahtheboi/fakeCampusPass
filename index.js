const cardElement = document.getElementById("card-wrapper");
const card = cardElement.getBoundingClientRect();
const cardWidth = card.width;

"load resize maximize minimize orientationchange"
  .split(" ")
  .forEach((event) => {
    window.addEventListener(event, () => {
      const sizerElement = document.getElementById("card-sizer");
      const sizer = sizerElement.getBoundingClientRect();
      const newWidth = sizer.width;
      cardElement.style.transform = `scale( ${newWidth / cardWidth} )`;
    });
  });
