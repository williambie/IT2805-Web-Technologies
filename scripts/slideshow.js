let counter = 1
setInterval(function () {
  document.getElementById('button' + counter).checked = true
  counter++
  if (counter > 5) {
    counter = 1
  }
}, 5000)