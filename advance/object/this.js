//case 1
// console.log(this)  //window

//case 2
function testThis() {
  console.log(this)
}

// testThis()  //window

//case 3
let tryObj = {
  naam: "vijay",
  testThis: function () {
    console.log(this)
  }
}

// let res = tryObj.testThis  // we are not calling directly like a method
// res()  //window


/****
//  
// let res = function () {
//   console.log(this)
// }

*/

//case4
let obj = {
  naam: "vijay",
  lastName: "singh",
  testThis: function () {
    console.log(this)

  }
}

// obj.testThis() //obj


//case5
function TestThis(fName, lName) {
  this.fName = fName
  this.lName = lName
  console.log(this.fName + " " + this.lName)
  // console.log(this)
}

// let result = new TestThis("vijay", "singh") //object
// let result1 = new TestThis("java", "script")




let diffObj = {
  naam: "vijay",
  testThis: function () {
    // console.log(this)

    let diffObj = {
      naam: "vijaySingh",
      // testThisLowe: () => {
      testThisLowe: function () {
        console.log(this)
      }
    }

    diffObj.testThisLowe()
    // return diffObj.testThisLowe


  }
}

// let res = diffObj.testThis()
// console.log(res)
// res()



/**






 * 
 */


