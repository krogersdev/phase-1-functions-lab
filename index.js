const hqBlock = 42
const feet = 264 

function distanceFromHqInBlocks(start) {
    return Math.abs(start - hqBlock);
}

function distanceFromHqInFeet(start) {
    return (distanceFromHqInBlocks(start) * feet)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * feet;
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination)

    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return ((distanceTravelled - 400) * 0.02); 
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25; 
    } else if (distanceTravelled > 2500) {
        return 'cannot travel that far';
    }
}