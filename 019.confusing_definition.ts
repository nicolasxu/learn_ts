const var1 = (a: number, b: string): ((s: number)=> number) => {
    return () => 10
}

// define a variable var1, 
// assign a function to var1
// the function(f1) take 2 params: a, which is a number, b, which is a string
// the function return another value, which is a function (f2)
// the function signature is take s, number and return a number
// function f1 return a function f3
// f3 takes nothing, then return number 10