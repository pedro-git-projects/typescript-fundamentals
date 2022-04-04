/* string */
let myString = 'John' /* Types are inferred thus name is now a string */
console.log(myString)
// myString = 42 will error out because of the type

/* number */
let aNumber = 24
console.log(aNumber)

/* boolean */
let myBool = true
console.log(myBool)

/* inferring type as any */
let typeAny 
typeAny = 42 
console.log(typeof typeAny)
typeAny = '42'
console.log(typeof typeAny)

/* Explicit typing */
let explicitString : string = 'Pedro' 
let explicitNumber : number = 42
let explcitBool : boolean = false

console.log(explicitString, explicitNumber, explcitBool)

/* Arrays */
let sus : string[] = ["the wock", "john xina"]

/* Touples */
let address : [string, number] = ["deckard", 50]

/* Enums */
enum Color {
	Red, // 0
	Green, // 1
	Blue // 2
}

let myColor : Color = Color.Blue
console.log(myColor)

/* Functions */
function returnMyName() : string {
	return myString
}
console.log(returnMyName())

function myVoid() : void {
	console.log("Hello void")
}
myVoid()

function multiply(a : number, b : number) : number {
	return a * b
}
console.log(multiply(20, 30.2))

/* function type */
let sayHello : () => void  
sayHello = myVoid
sayHello()

let calculate : (x : number, y: number) => number 
calculate = multiply
console.log(calculate(42, 69))

/* Object type */
let myObject : {name : string, age : number} = {
	name: "Djalma",
	age : 50
}

myObject = {name: "Rick Deckard", age: 50}
console.log(myObject)

/* Alias */
type Employee =  { supervisors : string[], checkout : (time : number) => string}
 
function checkoutStatus(time : number) {
	if(time <= 8) {
		return "In time"
	} else 
		return "Out of bounds"
}
let checkout = checkoutStatus
let supervisors : string[] = ["Pedro", "Tati"]
let employee1 : Employee = {supervisors, checkout}

console.log(employee1.checkout(7))
console.log(employee1.supervisors)

/* Union Types */
let mark: number | string = 10
console.log(`I scored ${mark}!`)
mark = '10'
console.log("I scored " + mark + "!")

/* Never */
function fail(msg: string) : never {
	throw new Error(msg)
} // no reacheble endpoint, either an error or a infinite loop
 
const product = {
	name: 'beer',
	price: -1,
	validateProduct() {
		if(!this.name || this.name.trim().length == 0) {
			fail('Needs a name')
		}
	}
}

product.validateProduct()
