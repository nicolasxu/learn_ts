

// example 1
let stuff: {[key: string]: string} = {}
stuff['a'] = 'hellow'
// note: in ES6, key can be a variable in object, just use [] oprator

/*
e.g.:
    var obj = {
        [var1]: 'hello world'  // var1 is variable
    }
    obj[var1] to access the val of this variable key


*/

// example 2
export interface IFeatureResult {
    [key: string]: number
}




