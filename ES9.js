//ES9 features are
//1.Asynchronous Iteration: 
//2.Promise.prototype.finally:
//3.Rest/Spread(...) Properties

//---------------------------------synchronoush iteration
/* Synchronous iteration was introduced with ES6 and have the following components
Iterable: Is an object that can be iterated via a method with key Symbol.iterator
Iterator: An object returned by [Symbol.iterator](). It has a method .next() that returns the next element.
NextElement: Is the object returned by .next() that has 2 properties:
value: Contains the value to be used.
done: Is a boolean that becomes true after the last element. */

for (const coinValue of fetchCoinValues(['ETH','XMR','BTC','LTC','BAT'])) {
  console.log(coinValue);
}

//----------------------------------------Asynchronous Iteration: 
// previously iterating is synchronous, it doesn’t work for asynchronous sources
/* es9 specifies a new protocol for async iteration:
Async iterables are marked via Symbol.asyncIterator.
Method .next() of an async iterator returns a Promise or NextElement.
With this new protocol, we are able to await for an asynchronous fetched coinValue */


/* - Specifies an asynchronous version of the "for-of"loop.
 * -"for-await-of" loop allows to iterate promises and return them on the order that they were called. 
 */


/**
 * Let's imagine that we have 3 promises that they will 
 * be resolved in different times each one
 *  */
 function promise1 () {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('Hello promise 1');
          resolve(1);
      }, 2000)
  });
} // resolve in 2 seconds -> third

function promise2 () {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('Hello promise 2');
          resolve(2);
      }, 3000)
  });
} // resolve in 3 seconds -> fourth

function promise3 () {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('Hello promise 3');
          resolve(3);
      }, 500)
  });
} // resolve in 0.5 seconds -> second

/**
* And I want to iterate all of them, 
* but for any reason I need the results on the order that I specified.
*/
async function testAsynchronousIterator() {
  const arrayPromises = [promise1(), promise2(), promise3()];
  for await (const item of arrayPromises) {
      console.log(item); 
   }
}

testAsynchronousIterator();
// 1, 2, 3, 4
// Obs: the console.log on each promise will be showed 
// as they are resolved, but they will be returned on the order 
// that they was specified on the array
//----------------------------

async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function() {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
//------------------------------------


//----------------------------------------Promise.prototype.finally:
// As we know, promises make the execution of the callback function much easier. 
//Numerous promise libraries have a method called “finally” by which we can run the code and 
//it won’t matter how the Promise gives a resolution. When a promise gets fulfilled or denied, 
//it registers a callback that gets invoked and that callback can be called in the finally block. E.g.
let myPromise = new Promise();
myPromise.then();
myPromise.catch();
myPromise.finally();

//Promise API is extended by an optional finally block which is called 
//in any case (after the Promise is resolved or is rejected).

function testFinally() {
  return new Promise((resolve,reject) => resolve())
}

testFinally().then(() => console.debug("resolved"))
.finally(() => console.debug("finally"))
//O/P-
// resolved
// finally

//.finally is useful when you need to do some clean up 
//after the operation has finished regardless  succeeded or not,for example to close a connection.



//---------------------------------------Rest properties for object destructuring assignment.
//after assigning ,the remaining properties are assigned to last element.
let { fname, lname, ...rest } = { fname: "Hemanth", lname: "HM", location: "Earth", type: "Human" };
fname; //"Hemanth"
rest; // {location: "Earth", type: "Human"}
