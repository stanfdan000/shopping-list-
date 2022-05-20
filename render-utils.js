export function renderItem(item) {
    const div = document.createElement('div');
    div.textContent = `game:${item.game} quantity:${item.quantity}`;
    if (item.bought) {
        div.classList.add('bought');
    }
    return div;

}