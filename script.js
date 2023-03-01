(() => {
  const icon = document.getElementById("icon");
  document.getElementById("shape").addEventListener("click", (event) => {
    console.log(event);
    if (event.target.style.animationPlayState === "paused") {
      event.target.style.animationPlayState = "running";
    } else {
      event.target.style.animationPlayState = "paused";
    }
  });
  document.body.addEventListener("mousemove", (event) => {
    icon.style.left = `${event.pageX}px`;
    icon.style.top = `${event.pageY}px`;
  });
  document.body.addEventListener("click", (event) => {
    icon.classList.add("spin");
    setTimeout(() => {
      icon.classList.remove("spin");
    }, 550);
    // icon.style.transform = "rotate(360deg)";
  });
})();
