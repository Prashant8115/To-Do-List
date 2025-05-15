let button = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
button.addEventListener("click", () => {
    if (input.value) {
        let itemContainer = document.createElement("div");
        itemContainer.classList.add("itemContainer");
        ul.append(itemContainer);

        let item = document.createElement("li");
        item.classList.add("item");
        item.innerText = input.value;
        input.value = "";

        let delBtn = document.createElement("button");
        delBtn.classList.add("delete");
        delBtn.innerText = "delete";
        itemContainer.append(item, delBtn);
    };

})

ul.addEventListener("click", (event) => {
    if (event.target.nodeName == "BUTTON") {
        let itemList = event.target.parentElement;
        itemList.remove();
    }
})
