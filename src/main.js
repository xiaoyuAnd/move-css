import styleCode from './draw.js'

const style = document.querySelector('#style')
const text = document.querySelector('#text')
const textContainer = document.querySelector('#text-container')
const btnPlayPause = document.querySelector('#btnPlayPause')
const btnSlow = document.querySelector('#btnSlow')
const btnNormal = document.querySelector('#btnNormal')
const btnFast = document.querySelector('#btnFast')


const player = {
  n: 0,
  styleText: '',
  timerId: undefined,
  intervalTime: 100,
  playState: 0,
  init: () => {
    player.play()
    player.bindEvents()
  },
  bindEvents: () => {
    btnPlayPause.onclick = () => {
      if (player.playState === 1) {
        player.pause()
      } else {
        player.play()
      }
    }
    btnSlow.onclick = () => {
      player.btnDeactivate()
      btnSlow.classList.add('activated')
      player.slow()
    }
    btnNormal.onclick = () => {
      player.btnDeactivate()
      btnNormal.classList.add('activated')
      player.normal()
    }
    btnFast.onclick = () => {
      player.btnDeactivate()
      btnFast.classList.add('activated')
      player.fast()
    }
  },
  btnDeactivate: () => {
    btnSlow.classList.remove('activated')
    btnNormal.classList.remove('activated')
    btnFast.classList.remove('activated')
  },
  run: () => {
    if (styleCode[player.n] === '\n') {
      player.styleText += '<br>'
    } else if (styleCode[player.n] === ' ') {
      player.styleText += '&nbsp'
    } else {
      player.styleText += styleCode[player.n]
    }
    style.innerHTML = styleCode.substring(0, player.n + 1)
    text.innerHTML = player.styleText
    textContainer.scrollTop = textContainer.scrollHeight
    player.n++
    if (player.n >= styleCode.length) {
      clearInterval(player.timerId)
    }
  },
  play: () => {
    if (player.n < styleCode.length) {
      player.timerId = setInterval(player.run, player.intervalTime)
      player.playState = 1
      btnPlayPause.innerHTML = btnPlayPause.innerHTML.replace('play', 'pause')
    }
  },
  pause: () => {
    player.playState = 0
    btnPlayPause.innerHTML = btnPlayPause.innerHTML.replace('pause', 'play')
    clearInterval(player.timerId)
  },
  slow: () => {
    player.pause()
    player.intervalTime = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.intervalTime = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.intervalTime = 0
    player.play()
  }
}


player.init()


