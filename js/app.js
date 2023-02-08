const body = document.querySelector('body')

class Heart {
  constructor(color, position, speed) {
    this.color = color
    this.position = position
    this.speed = speed
  }
  draw() {
    const divElement = document.createElement('div')
    divElement.classList.add('heart')
    divElement.style.left = this.position + 'px'
    divElement.style.setProperty('--c', this.color)
    body.append(divElement)
  }
}

// const redHeart = new Heart('red', 10, 200)
// console.log(redHeart)

function addHeart() {
  const randomColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16)
  const randomLeft = Math.floor(Math.random() * window.innerWidth)
  const randomSpeed = Math.floor(Math.random() * 500)

  const newHeart = new Heart(randomColor, randomLeft, randomSpeed)
  console.log(newHeart)
  newHeart.draw()
}

addHeart()
