function handleCatSubmit(event) {
  event.preventDefault();
  const newCat = new Cat(event.target.newcatinput.value);
  allCats.push(newCat);
  catForm.reset();
  newCat.render();
  localStorage.setItem("cats", JSON.stringify(allCats));
}

catForm.addEventListener("submit", handleCatSubmit);

if (localStorage.cats) {
  catsFromLS = JSON.parse(localStorage.cats);
  for (let i = 0; i < catsFromLS.length; i++) {
    let newCat = new Cat(catsFromLS[i].name);
    allCats.push(newCat);
    allCats[i].render();
  }
}
