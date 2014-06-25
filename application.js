var tabList = document.getElementsByClassName('tab-links')[0]
tabList.addEventListener('click', function(event){
  item = event.target;
  chrome.windows.create({url : item.dataset.tabhref});
});