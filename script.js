let el = document.documentElement;
el.addEventListener("mousemove", (e) => {
  let hw = el.clientWidth / 2;
  let hh = el.clientHeight / 2;
  el.style.setProperty("--x", (e.clientX - hw) / hw);
  el.style.setProperty("--y", (e.clientY - hh) / hh);
});