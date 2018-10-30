/* jshint laxcomma: true */

function getRGBs (arr1, arr2, steps){
    var stepsArr = []
      , outputArr = []
      ;

    // get the differences between array values and put them in order into an array
    for (var i = 0; i < arr1.length; i++ ){
        stepsArr.push(Math.abs(arr1[i] - arr2[i]) / (steps - 1));
    }

    // for each step
    for (var j = 0; j < steps; j++) {

        // create an array for the RGB value of that step
        var anonArr = [];

        // loop through the steps array
        for (var k = 0; k < stepsArr.length; k++) {

            // determine if the first number is smaller than the second
            if (arr2[k] >= arr1[k]){

                // push to the RGB array for this step
                anonArr.push(~~(arr1[k] + (stepsArr[k] * j)));
            } else {
                anonArr.push(~~(arr1[k] - (stepsArr[k] * j)));
            }
        }

        // push the RGB step array to the final array
        outputArr.push(anonArr);
    }

    // build and return an object with the relevant data
    var bub = { "steps" : steps,
                "eachStep" : stepsArr,
                "outputRGBs": outputArr
              };
    return outputArr;
}

// var color1 = [10,91,220];
// var color2 = [201,181,35];

// console.log(getRGBs(color1, color2, 6));

function createDivs(arr1, arr2, steps){
    var rgbsArr = getRGBs(arr1, arr2, steps);
    var $cont = document.getElementById('col-array');
    $cont.innerHTML = "";
    for (var l = 0; l < steps; l++ ) {
        var newDiv = document.createElement('div');
        var colClass = "color-" + l.toString();
        newDiv.className = colClass;
        var rgbString = 'rgb(' + rgbsArr[l][0] + ',' + rgbsArr[l][1] + ',' + rgbsArr[l][2] + ')';
        newDiv.style.backgroundColor = rgbString;
        newDiv.title = rgbString;
        $cont.appendChild(newDiv);   
    }
}

function buildArr(num){
    var arr = [];
    arr.push(Number(document.getElementById('red-' + num).value));
    arr.push(Number(document.getElementById('green-' + num).value));
    arr.push(Number(document.getElementById('blue-' + num).value));
    return arr;
}

function updateDOM(){
    var steps = Number( document.getElementById('steps').value);
    console.log(steps);
    createDivs(buildArr(1),buildArr(2),steps);
    addTileListeners();
}

function listenerForI(i) {
    $colorTiles[i].addEventListener('mousedown', function() {
        copyTextToClipboard(this.title);
        console.log(this.title);
    }, false);
}

function addTileListeners(){
    $colorTiles = $('#col-array > *');
    for (var i = 0; i < $colorTiles.length; i++) {
        listenerForI( i );
    }
}

function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a flash,
    // so some of these are just precautions. However in IE the element
    // is visible whilst the popup box asking the user for permission for
    // the web page to copy to the clipboard.
    //

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';


    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
}

updateDOM();

document.getElementById('submit').addEventListener("click",function(){
    updateDOM();
});