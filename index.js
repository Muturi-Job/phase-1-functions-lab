// Code your solution in this file!
function distanceFromHqInBlocks (num1){
 return Math.abs(num1-42); 
}
function distanceFromHqInFeet(num1){
    distanceFromHqInBlocks(num1);
    return Math.abs((num1-42)*264); 
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start-destination)*264);
}
function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination)
    switch (true){
        case Math.abs((start-destination)*264) <= 400:
            return 0
        break;
        case Math.abs((start-destination)*264) >400 && Math.abs((start-destination)*264) <=2000:
            return Math.abs((((start-destination)*264)-400)*0.02)
        break;
        case Math.abs((start-destination)*264) > 2000 && Math.abs((start-destination)*264) <= 2500:
            return 25   
        break;
        case Math.abs((start-destination)*264) >2500 :
            return 'cannot travel that far'
    }
}