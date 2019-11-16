let recipies = {};
let linkImage = "./images/";

let imageList = {
    "burger.jpg": { prefix: "./images/", img: "burger2.jpg" },
    "burger2.jpg": { prefix: "./images/", img: "burger.jpg" },
    "burger3.jpg": { prefix: "./images/", img: "burger4.jpg" },
    "burger4.jpg": { prefix: "./images/", img: "burger3.jpg" },
    "burger5.jpg": { prefix: "./images/", img: "burger6.jpg" },
    "burger6.jpg": { prefix: "./images/", img: "burger5.jpg" }
} 

registerRecipie('FirstImage');
registerRecipie('SecondImage');
registerRecipie('ThirdImage');

function removeRecipie(e, id) {
    e.stopPropagation();
    unregisterRecipie(id);
    let node = document.getElementById(id);
    $(node).fadeOut("slow");
}

function getDataFromForm() {
    let dish = document.getElementById("dish").value;
    let primaryImage = document.getElementById("primaryImage").value;
    let secondaryImage = document.getElementById("secondaryImage").value;
    let recipie = document.getElementById("recipie").value;
    let algorithm = document.getElementById("algorithm").value;
    return { dish, primaryImage, secondaryImage, recipie, algorithm };
}

function createListElements(list) {
    return list.split('\n').map(el => `<li>${el}</li>`).join("\n");
}

function addNewRecipieToList(e , elements) {
    e.preventDefault();
    
    const {dish, primaryImage, secondaryImage, recipie, algorithm} = elements;

    if(formIsEmpty(elements))return;
    if(!urlIsCorrect(primaryImage)) return;
    if(!urlIsCorrect(secondaryImage)) return;


    let form = document.getElementById("Menu");

    imageList[removeImagePrefix(primaryImage)] = { prefix: getImagePrefix(secondaryImage), img: removeImagePrefix(secondaryImage)};
    imageList[removeImagePrefix(secondaryImage)] = { prefix: getImagePrefix(primaryImage), img: removeImagePrefix(primaryImage)};

    let div = document.createElement("div");
    div.classList.add("grid");
    div.id = dish;
    registerRecipie(div.id);

    div.addEventListener('click', () => changeCurrentRecipie(div.id));
    div.innerHTML += `
        <div>
            <img src="${primaryImage}" class="imageInMenu">
            <p class="ReciptHeader">${dish}</p>
            <ul class="ReciptList">
                ${createListElements(recipie)}
            </ul> 

            <p class="HiddenHeader">Algorytm :</p>
            <ol class="HiddenList">
                ${createListElements(algorithm)}
            </ol> 
        </div>
        <div class="miniFooter">
                <button>More!</button>
                <span class="close" onclick="removeRecipie(event, '${div.id}')" >&times;</span>
        </div>    
    `;

    document.getElementById("Menu").appendChild(div);
    closeNav();
}

function dropDownMenuFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function registerRecipie(id) {
    recipies[id] = false;
}

function unregisterRecipie(id) {
    delete recipies[id];
}

function getImagePrefix(img) {
    const imgLengtrh = img.split("/").length;
    return img.split("/").map((el, i) => {
        if (imgLengtrh !== i + 1) {
            return el;
        }
    }).join("/");
}

function removeImagePrefix(src) {
    return src.split("/").pop();
}

function mirrorImage(img) {
    const { prefix, img: imgSrc } = imageList[removeImagePrefix(img.src)];
    return prefix + imgSrc;
}

function getRecipieElements(id) {
    let element = document.getElementById(id);
    let HiddenHeader = document.getElementById(id).getElementsByClassName("HiddenHeader")[0];
    let HiddenList = document.getElementById(id).getElementsByClassName("HiddenList")[0];
    let ReciptHeader = document.getElementById(id).getElementsByClassName("ReciptHeader")[0];
    let ReciptList = document.getElementById(id).getElementsByClassName("ReciptList")[0];
    let img = document.getElementById(id).getElementsByClassName("imageInMenu")[0];

    return { HiddenList, HiddenHeader, ReciptList, ReciptHeader, img }
}

function animateMirrorImageChange(id, img, elements) {
    $(document.getElementById(id)).fadeOut("slow", () => {
        $(document.getElementById(id).getElementsByClassName("imageInMenu")[0]).attr('src', mirrorImage(img));
        const { HiddenList, HiddenHeader, ReciptList, ReciptHeader } = elements;

        let isDispalyed = HiddenHeader.style.display === "block";
        HiddenList.style.display = HiddenHeader.style.display = isDispalyed ? "none" : "block";
        ReciptList.style.display = ReciptHeader.style.display = isDispalyed ? "block" : "none";
    }).fadeIn("slow");
}

function changeCurrentRecipie(id) {
    for (let recipieId in recipies) {
        if (id !== recipieId && recipies[recipieId] === true) {
            const { img, ...elements } = getRecipieElements(recipieId);
            animateMirrorImageChange(recipieId, img, elements);
            recipies[recipieId] = false;
            break;
        }
    }
    const { img, ...elements } = getRecipieElements(id);
    animateMirrorImageChange(id, img, elements);
    recipies[id] = !recipies[id];
}