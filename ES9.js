//ES9 features are
//1.Asynchronous Iteration: 
//2.Promise.prototype.finally:
//3.Rest/Spread Properties



//----------------------------------------Asynchronous Iteration: 
//EcmaScript 2018 introduced asynchronous iterators and iterables. 
//This will help in reading text from an HTTP connection very effortlessly. 
//A new IterationStatement known as for–await–of was introduced that also adds syntax that can help in creating async generator functions.



//----------------------------------------Promise.prototype.finally:
// As we know, promises make the execution of the callback function much easier. 
//Numerous promise libraries have a method called “finally” by which we can run the code and 
//it won’t matter how the Promise gives a resolution. When a promise gets fulfilled or denied, 
//it registers a callback that gets invoked and that callback can be called in the finally block. E.g.
let myPromise = new Promise();
myPromise.then();
myPromise.catch();
myPromise.finally();



//---------------------------------------Rest properties for object destructuring assignment.
//after assigning ,the remaining properties are assigned to last element.
let { fname, lname, ...rest } = { fname: "Hemanth", lname: "HM", location: "Earth", type: "Human" };
fname; //"Hemanth"
rest; // {location: "Earth", type: "Human"}