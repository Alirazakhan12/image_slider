let flag = 0;

function slideshow(num) {
  let slide = document.getElementsByClassName("slide");
  for (let y of slide) {
    y.style.display = "none";
  }
  if (num == slide.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slide.length - 1;
    num = slide.length - 1;
  }
  slide[num].style.display = "block";
}

slideshow(flag);

function control(x) {
  flag = flag + x;
  slideshow(flag);
}
