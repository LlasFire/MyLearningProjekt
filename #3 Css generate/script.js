const inputBoxes = Array.from(document.querySelectorAll('.block > .val'));
const ranges = Array.from(document.querySelectorAll('.block > .rngs'));
var arrCorner = [0,0,0,0];

ranges.forEach((range, index) => {
    range.addEventListener('input', (event) => {
        let value = event.target.value;
        inputBoxes[index].value = value;
        arrCorner[index] = value + "px ";
        GetCorners(arrCorner);
})
});

inputBoxes.forEach((inputBox, index) => {
    inputBox.addEventListener('input', (event) => {
        let value = event.target.value;
        ranges[index].value = value;
        arrCorner[index] = value + "px ";
        GetCorners(arrCorner);
    })
});

function GetCorners(corners){
    let exampleBlock = document.getElementById('example');
    exampleBlock.style.borderRadius = corners[0] + corners[1] + corners[2] + corners[3];

    let exTxtBlock = document.getElementById('txtExample');
    exTxtBlock.style.display = "block";

    let exampleText = document.getElementById('exampleBorder');
    exampleText.innerHTML = "border-radius:" + corners[0] + " " + corners[1] + " " + corners[2] + " " + corners[3] + ";";
}
