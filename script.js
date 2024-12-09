const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yeahhh I love you! 😘";
  gif.src =
    "https://www.bing.com/th/id/OGC.9fefa37639ca5c1c088424b59b422ebf?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fnQP3icB-t-8AAAAj%2fhasher-happy-sticker.gif&ehk=WrzjbZYLhhkrEPa7pSVj3hT9Cj5IZ54UEdRCaxO2Znw%3d";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});