function getSpiralCorners(size:number):number
{
    var highestNumber:number = size * size;
    var test:number[] = [0, 0,0, highestNumber]; //create an array of 4 for each of the corners. We already have the first digit.

    var array:number[] = new Array(highestNumber); //the spiral will contain the number * number digits;

    for (var i = 0; i < array.length; i++)  // fill the spiral
    {
        array[i] = highestNumber;
        highestNumber--;
    }
    
    for (var i = 1; i < 4; i++) //Only need to loop through 3 times to get the remaining corners. 
    {
        var from = size - 1;
        var to = size * i - i;
        test[i-1] = array[to];
    
    }

    return test.reduce((a, b) => a + b, 0);
}

console.log(getSpiralCorners(6))