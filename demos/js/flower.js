/* jshint esnext:true */

const $controls = document.getElementsByClassName('controls')[0],
      $bub = document.getElementById('bub'),
      $submit = document.getElementById('submit'),
      $steps = document.getElementById('steps'),
      $hexRadio = document.getElementById('hex-format'),
      $rgbRadio = document.getElementById('rgb-format'),
      $colorOne = document.getElementById('color-1'),
      $colorTwo = document.getElementById('color-2'),
      $hexOne = document.getElementById('color-1-hex'),
      $hexTwo = document.getElementById('color-2-hex'),
      $rgbOne = document.getElementById('color-1-rgb'),
      $rgbTwo = document.getElementById('color-2-rgb')
      ;

// used to detatch nodes
const detatch = function(node) {
    let parent = node.parentNode;
    let next = node.nextSibling;
    // No parent node? Abort!
    if (!parent) { return; }
    // Detach node from DOM.
    return parent.removeChild(node);
}

// used to switch color formats
const formatChange = function() {
    
    // switching from RGB to HEX mode
    if ( $hexRadio.checked ) {
        console.log('from rgb to hex');
        
        // get RGB values from form
        let rgbArrs = getRGBValues();
        
        // remove RGB form elements and save them for later
        floatingRGBNodes[0] = detatch( $rgbOne );
        floatingRGBNodes[1] = detatch( $rgbTwo );
        
        // add HEX form element
        $colorOne.appendChild( floatingHexNodes[0] );
        $colorTwo.appendChild( floatingHexNodes[1] );
        
        // get values converted from RGB to hex
        let hexValOne = rgbToHex( rgbArrs[0] );
        let hexValTwo = rgbToHex( rgbArrs[1] );
        
        // add hex value to form element
        document.getElementById('hex-1').setAttribute("value", hexValOne);
        document.getElementById('hex-2').setAttribute("value", hexValTwo);
        
    // switching from HEX to RGB mode
    } else {
        
        // get HEX values from form
        console.log('from hex to rgb');
        let hexValues = getHEXValues();
        
        // remove HEX form elements and save them for later
        floatingHexNodes[0] = detatch( $hexOne );
        floatingHexNodes[1] = detatch( $hexTwo );
        
        // add RGB form elements
        $colorOne.appendChild( floatingRGBNodes[0] );
        $colorTwo.appendChild( floatingRGBNodes[1] );
        
        // convert HEX to RGB
        let rgbArrs = [
            hexToRGB( hexValues[0] ),
            hexToRGB( hexValues[1] )
        ]
        
        // add RGB values to form element
        let rgbNodesArr = document.getElementsByClassName('inputVal');
        for ( let k = 0; k < 2; k++ ) {
            for ( let l = 0; l < 3; l++ ) {
                rgbNodesArr[(k*3) + l].setAttribute("value", rgbArrs[k][l]);
            }
        }
        
    }
    
    // toggle hex and rgb classes
    $controls.classList.toggle('hex');
    $controls.classList.toggle('rgb');
    
}

// get values from RGB fields in form
const getRGBValues = function() {
    // if we aren't in RGB mode, abort
    if ( $controls.classList.contains('rgb') ) {
        let rgbNodesArr = document.getElementsByClassName('inputVal');
        let rgbArrs = [[],[]];
        for ( let i = 0; i < 2; i++ ) {
            for ( let j = 0; j < 3; j++ ) {
                rgbArrs[i].push( parseInt(rgbNodesArr[(i*3) + j].value) );
            }
        }
        return rgbArrs;
    } else {
        // console.log('Cannot get rgb values; not in rgb mode');
        return false;
    }
}

// get values from HEX fields in form
const getHEXValues = function(){
    if ( $controls.classList.contains('hex') ) {
        let hexValues = [];
        hexValues.push(document.getElementById('hex-1').value);
        hexValues.push(document.getElementById('hex-2').value);
        return hexValues;
    } else {
        // console.log('Cannot get hex values; not in hex mode');
        return false;
    }
}

// used to create the petals and apply color to them using createStepsRGBs below
const makePetals = function(){
    $bub.innerHTML = "";
    // this is the number of flower petal rounds
    let rounds = parseInt($steps.value);
    let colorValues = getHEXValues() || getRGBValues();
    if ( typeof colorValues[0] == "string" ){
        colorValues[0] = hexToRGB( colorValues[0] );
        colorValues[1] = hexToRGB( colorValues[1] );
    }
    let rgbs = createStepsRGBs( colorValues[0], colorValues[1], rounds );
    
    for ( let i = 0; i < rounds; i++ ) {
        
        // this is how far the petals shift outward via CSS translate per round
        let translationPx = ( i * 2 );
        
        // 
        let list = document.createElement('ul');
        
        // j is the number of petals per cycle
        let petals = ((6 + i) + 2*i);
        
        for (let j = 0; j < petals; j++) {
            // console.log(6+i);
        
            let li = document.createElement("li");
            
            // I would like to have this be +/- 20 deg from 60 deg
            let rotationDegrees = (j * (360/(6+i))) + ~~(Math.random() * (360 / petals));
            
            // Set the petal style based on the number of degress to rotate and the rotation round
            let elementStyleString = 'transform: rotateZ(' + rotationDegrees + 'deg) translate(' + translationPx + 'vw, ' + translationPx + 'vw); background-color:' + rgbs[i] ;
            
            li.setAttribute("style", elementStyleString );
            
            // console.log(elementStyleString);
            
            list.appendChild(li);
        }
        list.setAttribute("style", "z-index:" + (99 - i)  );
        $bub.appendChild(list);
    }
}


// used to find a number of equidistant between two RGB values
const createStepsRGBs = function(arr1, arr2, steps){
    let stepsArr = []
      , outputArr = []
      ;

    // get the differences between array values and put them in order into an array
    for (let i = 0; i < arr1.length; i++ ){
        stepsArr.push(Math.abs(arr1[i] - arr2[i]) / (steps - 1));
    }

    // for each step
    for (let j = 0; j < steps; j++) {

        // create an array for the RGB value of that step
        let anonArr = [];

        // loop through the steps array
        for (let k = 0; k < stepsArr.length; k++) {

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
    let rgbArr = [];
    for ( let l = 0; l < outputArr.length; l++ ) {
        let rgbText = 'rgb(' + outputArr[l].toString() + ')';
        rgbArr.push(rgbText);
    }
    // build and return an object with the relevant data
    let bub = { "steps" : steps,
                "eachStep" : stepsArr,
                "outputRGBs": outputArr
              };
    return rgbArr;
}

// accepts a hex string and returns an equivalent RGB array
const hexToRGB = function (hex){
    let cleanHex = hex.replace('#','');
    let r = parseInt(cleanHex.substring(0,2), 16);
    let g = parseInt(cleanHex.substring(2,4), 16);
    let b = parseInt(cleanHex.substring(4,6), 16);
    let results = [];
    results.push(r);
    results.push(g);
    results.push(b);
    //'rgba('+r+','+g+','+b+','+opacity/100+')';
    return results;
}

// accepts an RGB array and returns an equivalent hex value
const rgbToHex = function(rgb){
    var newHex = "#";
    newHex += ("0" + parseInt(rgb[0],10).toString(16)).slice(-2);
    newHex += ("0" + parseInt(rgb[1],10).toString(16)).slice(-2);
    newHex += ("0" + parseInt(rgb[2],10).toString(16)).slice(-2);
    return newHex;
}

// 
const addEnterListeners = function () {
    let inputs = document.getElementsByTagName('input');
    for ( let i = 0; i < inputs.length; i++ ) {
        inputs[i].addEventListener( 'keydown', enterListener );
    }
}

// listen for the enter key and fire rebuild
const enterListener = function (e) {
  if (13 == e.keyCode) {
     makePetals();
  }
}

// initialize junk
const init = function(){
    // set up enter keys
    addEnterListeners();
    
    // detatch hex inputs
    window.floatingHexNodes = [ detatch($hexOne), detatch($hexTwo) ];
    window.floatingRGBNodes = [];
    
    // run the first time
    makePetals();
    
    // attach DOM events
    $submit.addEventListener("click", makePetals );
    $hexRadio.addEventListener("change", formatChange );
    $rgbRadio.addEventListener("change", formatChange );

}()