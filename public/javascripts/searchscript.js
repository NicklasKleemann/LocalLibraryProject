document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchinput');
  const searchButton = document.getElementById('searchbutton');
  const itemList = document.querySelectorAll('#List li');

  function filterItems() {
    const searchTerm = searchInput.value.toLowerCase();

    itemList.forEach(function(itemLi) {
      const itemTitle = itemLi.querySelector('a').textContent.toLowerCase();
      let itemContent = '';

      // Check if status element exists
      const itemElement = itemLi.querySelector('span');
      if (itemElement) {
        itemContent = itemElement.textContent.toLowerCase();
      }

      const combinedText = itemTitle + ' ' + itemContent;

      if (combinedText.includes(searchTerm)) {
        itemLi.style.display = 'list-item';
      } else {
        itemLi.style.display = 'none';
      }
    });
  }

  function goToElement() {
    const searchTerm = searchInput.value.toLowerCase();
    let itemURL = '';

    itemList.forEach(function(itemLi) {
      const itemTitle = itemLi.querySelector('a').textContent.toLowerCase();
      let itemContent = '';

      // Check if status element exists
      const itemElement = itemLi.querySelector('span');
      if (itemElement) {
        itemContent = itemElement.textContent.toLowerCase();
      }

      const combinedText = itemTitle + ' ' + itemContent;

      if (combinedText.includes(searchTerm)) {
        itemURL = itemLi.querySelector('a').getAttribute('href');
        return;
      }
    });

    if (itemURL) {
      location.href = itemURL;
    }
  }

  searchInput.addEventListener('input', filterItems);
  searchButton.addEventListener('click', goToElement);
});
