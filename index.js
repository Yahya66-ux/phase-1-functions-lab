let headQuatersLocation = 42;

function distanceFromHqInBlocks(pickupLocation){
    let numberOfBlocks = 0;
    if(pickupLocation > headQuatersLocation){
        numberOfBlocks = pickupLocation - headQuatersLocation;
    }else if(headQuatersLocation > pickupLocation){
        numberOfBlocks = headQuatersLocation - pickupLocation;
    }
    return numberOfBlocks;

}

function distanceFromHqInFeet(pickupLocation){
    let distanceInFeet = distanceFromHqInBlocks(pickupLocation) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    let distanceTravelled = 0;
    if(start > destination){
        distanceTravelled = (start - destination) * 264;
    }
    else if(destination > start){
        distanceTravelled = (destination - start) * 264;
    }
    return distanceTravelled;
}

function calculatesFarePrice(start, destination){
    let fairPrice = 0;
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400 ){
        fairPrice = 0;
    }
    else if(distance > 400 && distance <= 2000){
        fairPrice = ((distance * 2) - (400 * 2)) / 100;
    }
    else if(distance > 2000 && distance <= 2500){
        fairPrice = 25;
    }else{
        return 'cannot travel that far';
    }

    return fairPrice;
}

