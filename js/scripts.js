//Function expression to select elements

const selectElement = (s) => document.querySelector(s);

//Öffnet das Menü bei Click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Schließt das Menü bei Click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

