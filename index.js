// Code your solution in this file!
const returnFirstTwoDrivers = ()  => {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
   return (drivers.slice(0, 2))
}
returnFirstTwoDrivers ()
 
const returnLastTwoDrivers = () => {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return (drivers.slice(-2))
}
returnLastTwoDrivers()

const selectingDrivers = [  returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = fare =>
    function fareMultiplier (multiplier) {  
        return fare * multiplier
    }

 function fareDoubler(fare)  {
     return fare*2
 }

function fareTripler (fare) {
    return fare * 3}


function selectDifferentDrivers (drivers, myFunc){
return myFunc(drivers);

}
    





