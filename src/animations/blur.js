export const blur = (value, idLabel) => {
  var id = document.getElementById(idLabel);

  if (value.length > 0) {
    id.style.bottom = "40px";
    id.style.fontSize = "14px";
  } else {
    id.style.bottom = "";
    id.style.fontSize = "";
  }
};

