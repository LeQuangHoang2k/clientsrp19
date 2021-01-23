export const createRoom = () => {
  let count = localStorage.getItem("count");
  const no5__room = document.getElementById("no5__room");
  const x = document.getElementsByClassName("css-yk16xz-control");

  if (!count) {
    no5__room.style.height = "60px";
    no5__room.style.opacity = "1";

    x[0].style.opacity = "1";

    localStorage.setItem("count", 1);
  } else {
    no5__room.style.height = "0px";
    no5__room.style.opacity = "0";

    x[0].style.opacity = "0";

    localStorage.removeItem("count");
  }

  no5__room.style.transition = "all 0.5s";
  x[0].style.transition = "all 0.5s";
};
