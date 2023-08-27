const tabs = document.querySelectorAll('.tabs__title');
const panes = document.querySelectorAll('.tabs__panes');

const tabActive = document.querySelector('.tabs__title.active');

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    console.log(index + 1)
    document.querySelector('.tabs__title.active').classList.remove('active');
    document.querySelector('.tabs__panes.active').classList.remove('active');

    this.classList.add('active');
    pane.classList.add('active');
  };
});
