// Ch1 Q1 and Q2
// If any one operands is String means we can concatenate
let x ='111'
let y=2224
console.log(x+y)
console.log(typeof( x+y))

let xa ='111'
let ya=2224
console.log(ya+xa)
console.log(typeof (ya+xa))

// Ch1 Q3
// We can't change entire obj but we can add new value and update existant
// The reason is DIR is Ref Var which is storing Address of that object. 
//So we can't change dir but we can make changes in object.
const dir= {name : 'Gaurav',
            age : 23 }

// Ch1 Q4
dir['city'] = 'Mumbai'
dir['age'] = 24
console.log(dir)