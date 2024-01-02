/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
function isWeekend(day: Days){
  switch (day) {
    case Days.Monday:return true
    case Days.Tuesday:return true
    case Days.Wednesday:return true
    case Days.Thursday:return true
    case Days.Friday:return true
    case Days.Saturday:return false
    case Days.Sunday:return false
  }
}


