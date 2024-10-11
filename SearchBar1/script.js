const sampleData = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew Melon",
    "Indian Fig",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli Fruit",
    "Vanilla",
    "Watermelon",
    "Xigua",
    "Yellow Passion Fruit",
    "Zucchini"
];

document.getElementById('search_input').addEventListener('keyup', () => {
    const searchInput = document.getElementById('search_input').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''

    //Filter the data based on the search input
    const filteredData = sampleData.filter(item => item.toLowerCase().includes(searchInput));

    //Display the results

    filteredData.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.textContent = item;
        searchResults.appendChild(resultItem);
    });

    //if no results found show message

    if(filteredData.length === 0 && searchInput !== ''){
        searchResults.innerHTML = '<p>No results found...</p>'
    }
});