let tabContent;
let tab;
let showTab = document.getElementById('tabs');

//обработчик на загрузку контента, скрывает всё кроме первой вкладки
window.addEventListener('load', () => {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
});

//функция скрывающая вкладки, кроме первой
function hideTabsContent(index) {
    //поправка перехода от индекса к порядковому номеру
    const serialNumber = 1;

    for(let i = 0; i < tabContent.length; i++) {
        if (i !== (index - serialNumber)){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('whiteBorder');
        }
    }
}

//обработчик на клик, показывает объект при клике на вкладку
showTab.addEventListener('click', (event) => {
    const target = event.target;
    if(target.className === "tab") {
        for (let i = 0; i < tab.length; i++) {
            if(target === tab[i]) {
                showTabContent(i);
                break;
            }
        }
    }
});

//функция показывающая нажатую вкладку
function showTabContent(index) {
    if(tabContent[index].classList.contains('hide')) {
        hideTabsContent(0);
        tab[index].classList.add('whiteBorder');
        tabContent[index].classList.remove('hide');
        tabContent[index].classList.add('show');
    }
}