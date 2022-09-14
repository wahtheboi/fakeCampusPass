const cardElement = document.getElementById("card-wrapper");
const accessPass = cardElement.querySelector(".campus-access-pass");

const accessPassDateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

function updateAccessPassDate(inputDate) {
  accessPass.querySelector(".valid-until span[data-frame='0'").innerHTML =
    inputDate.toLocaleDateString("en-ZA", accessPassDateOptions);
  accessPass.querySelector(".valid-until span[data-frame='1'").innerHTML =
    inputDate
      .toLocaleDateString("zh-HK", accessPassDateOptions)
      .replace("年", " 年 ")
      .replace("月", " 月 ")
      .replace("日", " 日 ");
}

updateAccessPassDate(new Date());

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

const renderDate = document.getElementById("render-date");
const dateOptions = {
  hour12: false,
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};
const currentDate = new Date();
const currentDateString = currentDate
  .toLocaleDateString("en-US", dateOptions)
  .replace(",", "")
  .replace(":", "");
renderDate.innerHTML = currentDateString;

let currentFrame = 0;
setInterval(() => {
  cardElement.querySelector(
    `.valid-until span[data-frame="${1 - (currentFrame % 2)}"]`
  ).style.opacity = 0;
  cardElement.querySelector(
    `.valid-until span[data-frame="${currentFrame % 2}"]`
  ).style.opacity = 1;

  currentFrame++;
}, 1000);

accessPass.addEventListener("click", () => {
  const today = new Date();
  const inputDateString = prompt(
    "Please enter date.",
    today.toLocaleDateString("en-ZA")
  );
  const inputDate = new Date(inputDateString);
  updateAccessPassDate(inputDate);
});
