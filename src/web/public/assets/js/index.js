(function start() {
  time()
  day()
})()

function time() {
  let time = new Date()
  let hour = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()

  if (hour < 10) {
    hour = `0${hour}`
  }
  if (minute < 10) {
    minute = `0${minute}`
  }
  if (second < 10) {
    second = `0${second}`
  }
  document.getElementById('real-time').innerHTML = `${hour}:${minute}:${second}`
  setTimeout("time()", 1000)
}

function day() {
  let time = new Date()
  let day = time.getDay()
  let date = time.getDate()
  let month = time.getMonth()
  let year = time.getFullYear()

  if (day == 0) {
    day = "Chủ nhật"
  }
  if (day < 7) {
    day = `Thứ ${day + 1}`
  }
  if (date < 10) {
    date = `0${date}`
  }
  if (month < 10) {
    month = `0${month + 1}`
  }
  document.getElementById('real-day').innerHTML = `${day}, ${date}/${month}/${year}`
  setTimeout("day()", 3600000)
}


