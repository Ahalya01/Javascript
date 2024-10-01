//QUESTION ONE
console.log("----***Question one***-----");
console.log("1.Printing of Weeks using Switch Case:")
var day=2;
var dayname;
switch(day){
    case 1:
        dayname="Monday";
        break;
        case 2:
            dayname="Tuesday";
            break;
            case 3:
                dayname="wednesday";
                break;
                case 4:
                    dayname="Thrusday";
                    break;
                    case 5:
                        dayname="Friday";
                        break;
                        case 6:
                            dayname="Saturday";
                            break;
                            case 7:
                                dayname="Sunday";
                                break;
                            default:
                                dayname="Invalid day Number";
}
console.log("The day of the week is:",dayname);
//QUESTION 02
console.log("----***Question Two***-----");
console.log("2.Printing of Weeks using Switch Case:")
let monthNumber = 8;
let month;
switch (monthNumber)
{
    case 1:
        month = "January";
        break;
        case 2:
            month = "February";
            break;
            case 3:
                month = "March";
                break;
                case 4:
                    month = "April";
                    break;
                    case 5:
                        month = "May";
                        break;
                        case 6:
                            month = "June";
                            break;
                            case 7:
                                month = "July";
                                break;
                                case 8:
                                    month = "August";
                                    break;
                                    case 9:
                                        month = "September";
                                        break;
                                        case 10:
                                            month = "October";
                                            break;
                                            case 11:
                                                month = "November";
                                                break;
                                                case 12:
                                                    month = "December";
                                                    break;
                                                    default:
                                                        month = "Invalid month number";
}
console.log("The month of the year is: " + month);
//QUESTION 03
console.log("----***Question Three***-----");
console.log("3.Even numbers in the first 10 numbers:");
let num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
//QUESTION 04
console.log("----***Question Four***-----");
console.log("3.Countdown timer (starting from 10):");
let countdown = 10;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}
console.log("Now The countdown is over");
