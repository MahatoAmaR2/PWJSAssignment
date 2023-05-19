console.log("Radhe Radhe");
const image = document.getElementById('image');
let xPos = 0;
let yPos = 0;

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      yPos -= 10;
      break;
    case 'ArrowDown':
      yPos += 10;
      break;
    case 'ArrowLeft':
      xPos -= 10;
      break;
    case 'ArrowRight':
      xPos += 10;
      break;
    default:
      return;
  }

  image.style.transform = `translate(${xPos}px, ${yPos}px)`;
});