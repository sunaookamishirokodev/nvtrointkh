const tabs = document.querySelectorAll('.tabs__title')
const panes = document.querySelectorAll('.tabs__panes')

tabs.forEach((tab, index) => {
  const pane = panes[index]

  tab.onclick = function () {
    document.querySelector('.tabs__title.active').classList.remove('active')
    document.querySelector('.tabs__panes.active').classList.remove('active')

    this.classList.add('active')
    pane.classList.add('active')
  }
})
