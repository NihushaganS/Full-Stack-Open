let number = 15
const vari = 25

console.log(number,vari)

const arr = [1,2,3,4]
console.log(arr.length) // measure legnth of array
console.log(arr[2]) // index if each element

arr.push(1000) // add new element last in the array
console.log(arr)

arr.forEach(value => { 
  console.log(value) // access each element seperately
})

arr1 = arr.concat(12) // copy array and create new element
console.log(arr1)
console.log(arr)


let arr2 = arr1.map(value => value*2) // copy array and modify and save
console.log(arr2)


arr2.pop()
console.log(arr2)


arr2.unshift(0)
console.log(arr2)

arr2.shift()
console.log(arr2)

let arr3 = arr2.filter(value=> value % 5 === 0)
console.log(arr3)

let found = arr2.find(x => x > 7)
console.log(found)

let found1 = arr2.findIndex(x => x > 7)
console.log(found1)

arr2.reverse()
console.log(arr2)

newArr = [2,1,4,3]
newArr.sort()
console.log(newArr)

arr2.sort()
console.log(arr2)
arr2.sort()
console.log(arr2)

console.log(arr2)



let obj = {
  name: "Shagan",
  age: 23,
  degree: "BSE"
}

console.log(obj)
console.log(obj.name)
console.log(obj.age)
obj.district = "Batticaloa"
console.log(obj)

// functions

const sum = (p1,p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

console.log(sum(5,10))

const ai = {
  name: "bard",
  year: 2023,
  greet: function(){
    console.log("Hello I am " + this.name + " I was introduced in " + this.year)
  }
} 
console.log(ai)
console.log(ai.greet())