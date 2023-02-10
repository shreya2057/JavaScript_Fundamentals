let day = "Saturday"

switch(day){
    case "Sunday":
        console.log("8am")
        break
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("6am")
        break
    case "Saturday":
        console.log("9am")
        break
    default:
        console.log("8am")
}