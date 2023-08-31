const tabs = document.querySelectorAll('.container__tab')
const panes = document.querySelectorAll('.container__pane')

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    document.querySelector('.container__tab.active').classList.remove('active')
    this.classList.add('active')
    panes.forEach((paneRemove) => {
      paneRemove.classList.add('inactive')
    })
    console.log(index)
    switch (index) {
      case 1:
        document.querySelectorAll('.container__pane.role-bgh').forEach((pane) => {
          pane.classList.remove('inactive')
        })
        break;
      case 2:
        document.querySelectorAll('.container__pane.role-cbd').forEach((pane) => {
          pane.classList.remove('inactive')
        })
        break;
      case 3:
        document.querySelectorAll('.container__pane.role-bchcd').forEach((pane) => {
          pane.classList.remove('inactive')
        })
        break;
      case 4:
        document.querySelectorAll('.container__pane.role-dtn').forEach((pane) => {
          pane.classList.remove('inactive')
        })
        break;
      case 5:
        document.querySelectorAll('.container__pane.role-btthcmhs').forEach((pane) => {
          pane.classList.remove('inactive')
        })
        break;
      default:
        document.querySelectorAll('.container__pane').forEach((pane) => {
          pane.classList.remove('inactive')
        })
    }
  }
})