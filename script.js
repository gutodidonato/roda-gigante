function selectItem(itemNumber) {
    const corpoMenu = document.querySelector('.corpo_menu');
    const items = document.querySelectorAll('.item');

    // Adiciona a classe "animating" ao corpoMenu quando uma animação inicia
    corpoMenu.classList.add('animating');

    items.forEach(item => {
        item.classList.remove('selected', 'active');
    });

    const selectedItem = document.querySelector(`.item:nth-child(${itemNumber})`);
    if (selectedItem) {
        selectedItem.classList.add('selected', 'active');
    }
}

document.body.addEventListener('click', function (event) {
    const corpoMenu = document.querySelector('.corpo_menu');
    const items = document.querySelectorAll('.item');
    const isClickedOnItem = Array.from(items).some(item => item.contains(event.target));

    if (!isClickedOnItem) {
        // Remove a classe "animating" após o clique fora de um item
        corpoMenu.classList.remove('animating');

        items.forEach(item => item.classList.remove('active'));
    }
});
