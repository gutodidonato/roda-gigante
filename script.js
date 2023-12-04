function selectItem(itemNumber) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('selected'));

    const selectedItem = document.querySelector(`.item:nth-child(${itemNumber})`);
    selectedItem.classList.add('selected');
}
