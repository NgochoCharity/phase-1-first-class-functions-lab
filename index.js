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

const createFareMultiplier = (fare)  => {
const fareMultiplier = () => createFareMultiplier (2)
return fareMultiplier*m
}