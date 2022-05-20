import { checkAuth, logout, buyItems, deleteItems, createItems, getListItems } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';
const logoutButton = document.getElementById('logout');
checkAuth();
logoutButton.addEventListener('click', () => {
    logout();
});
const gameForm = document.getElementById('gameForm');
const deleteButton = document.getElementById('delete');
const gameList = document.getElementById('list');

deleteButton.addEventListener('click', async () => {
    await deleteItems();
    await displayItem();
});
logoutButton.addEventListener('click', () => {
    logout();
});
window.addEventListener('load', async () => {
    displayItem();
});
gameForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(gameForm);
    const game = data.get('game');
    const quantity = data.get('quantity');
    console.log(game, quantity);
    await createItems(game, Number(quantity));
    displayItem();
    gameForm.reset();
});
async function displayItem() {
    const games = await getListItems();
    gameList.textContent = '';
    for (let item of games) {

        const lists = renderItem(item);
        lists.addEventListener('click', async (e) => {
            e.preventDefault();
            await buyItems(item);
            displayItem();
        }); 
        gameList.append(lists);
    }}
    
displayItem();
    
    

