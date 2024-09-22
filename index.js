let newX, newY, oldX, oldY;

const card = document.getElementsByClassName("movable-container")[0];

card.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  oldX = e.clientX;
  oldY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  // Calculate the difference in position
  newX = e.clientX - oldX;
  newY = e.clientY - oldY;

  // Update the position of the container
  card.style.top = card.offsetTop - newY + "px";
  card.style.left = card.offsetLeft - newX + "px";

  // Update oldX and oldY to the new coordinates
  oldX = e.clientX;
  oldY = e.clientY;
}

function mouseUp() {
  // Remove event listeners when the mouse is released
  document.removeEventListener("mousemove", mouseMove);
  document.removeEventListener("mouseup", mouseUp);
}
