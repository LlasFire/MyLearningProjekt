var testSelect = document.getElementById('selectOne');
testSelect.addEventListener('change', testing);

function testing() {
    var test = document.getElementById('selectOne').selectedIndex;
    var options = document.getElementById('selectOne').options;
    console.log('Выбрана позиция ' + options[test].text);
}

var testRange = document.getElementById('newRange');
testRange.addEventListener('input', testingRange);

function testingRange() {
    var temp = document.getElementById('newRange').value;
    var testDiv = document.getElementById('testDiv');

    testDiv.style.height = temp + 'px';
    testDiv.style.width = temp + 'px';
    console.clear();
    console.log('Значение ползунка ' + temp);
}