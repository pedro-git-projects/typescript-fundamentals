/* Challenge: create an Employee object that has:
*  - An array of strings with the name of his supervisors
*  - A checkout function that recieves the hour (number)
*    and returns a string
*   -> In time (<= 8)
*   -> Out of bounds (> 8)
* */

let Employee : { supervisors : string[], checkout : (time : number) => string}
 
function checkoutStatus(time : number) {
	if(time <= 8) {
		return "In time"
	} else 
		return "Out of bounds"
}
let checkout = checkoutStatus

let supervisors : string[] = ["Pedro", "Tati"]
Employee = {supervisors, checkout}
console.log(Employee.checkout(8))
console.log(Employee.checkout(9))
console.log(Employee.supervisors)
