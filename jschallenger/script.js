function countingValleys(steps, path) {
    // Write your code here

    let altitude = 0;
    let valleyCrossing = 0;
    let mountainCrossing = 0;

    path.split('').forEach(step => {
        
        if (step == 'D') {
            if (altitude == 0) valleyCrossing++

            altitude--
        } else {
            if (altitude == 0) mountainCrossing++

            altitude++
        }

    });
    
    console.log(valleyCrossing, mountainCrossing);
}

console.log( countingValleys(8, 'UDDDUDUU') ); 
console.log( countingValleys(12, 'DDUUDDUDUUUD') ); 
