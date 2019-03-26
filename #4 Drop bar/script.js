const bar = document.querySelector('nav');
bar.addEventListener('mouseover', (event)=>{

    // Таргетирование - определение нахождения блока в котором listener отреагировал на событие.
    // В данном случае ловим собитие на "всплытии"
    let target = event.target;

    // определение нахождения курсора в блоках bar и их дочерних элементах
    while(target !== this){
        if (target.className === "bar") {
            // нашли элемент, который нас интересует!
            hideAndShow(target);
            return;
        }
        //parentNode - поднятие в ссылке вверх по иерархии родителей
        target = target.parentNode;
    }
});

//функция открытия определённого подблока в зависимости от нахождения мыши
function hideAndShow(target) {
    let temp = target.getElementsByClassName('bar-item');
    hideMenu();
    activeElement("none");
    temp[0].style.display = "block";
}

//определение всех элементов documeht
const allHides = document.getElementsByTagName("*");

//перебор элементов и скрытие при нахождении курсора мыши вне блока nav
for (let i = 0; i < allHides.length; i++){
    allHides[i].addEventListener('mouseover', (event) =>{
        let target = event.target;
        if(target.className !== "bar" && target.className !== "bar-item" && target.tagName !== "P"){
            hideMenu();
        }
    });
}

// скрывает все блоки подменю
function hideMenu() {
    let barItems = Array.from(document.getElementsByClassName('bar-item'));
    for (let i = 0; i < barItems.length; i++){
        barItems[i].style.display = "none";
    }
    activeElement("block");
}

// меняем видимость в блоке с ID "active", передавая значение строковым параметром
function activeElement(hide) {
    let barActive = document.getElementById('active');
    barActive.style.display = hide;
}