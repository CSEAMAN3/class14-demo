const catButton = document.getElementById("catbutton");

const handleButtonClick = function () {
  const catsFromLS = JSON.parse(localStorage.cats);
  for (let i = 0; i < catsFromLS.length; i++) {
    const newCat = new Cat(catsFromLS[i].name);
    allCats.push(newCat);
    newCat.render();
  }
};

catButton.addEventListener("click", handleButtonClick);
