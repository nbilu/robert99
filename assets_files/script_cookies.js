"use strict";

/////////cookies////////

function setCook(item, val, day) {
  let expires = "";
  if (day) {
    let date = new Date();
    date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = item + "=" + (val || "") + expires + "; path=/";
}

function getCook(data) {
  let match = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        data.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

function checkCook() {
  const cookie = document.getElementById("cook");
  const cookieBtn = document.querySelector(".btn_cook");

  if (!getCook("cookies_policy")) {
    cookie.classList.add("show");
  }

  cookieBtn.addEventListener("click", function () {
    setCook("cookies_policy", "true", 365);
    cookie.classList.remove("show");
  });
}

checkCook();
