//0 é domingo e 6 é sabado

const day = new Date().getDay();

switch (day) {
    case 0:
        console.log("It's Sunday, time to relax!");
        break; 
    case 1:
        console.log("Happy Monday!");
        break; 
    case 2:
        console.log("It's Tuesday. You got this!");
        break; 
    case 3:
        console.log("Hump day already!");
        break; 
    case 4:
        console.log("Just one more day 'til the weekend!");
        break; 
    case 5:
        console.log("Happy Friday!");
        break; 
    case 6:
        console.log("Have a wonderful Saturday!");
        break; 
    default:
}       console.log("Sometime went horribly wrong...")