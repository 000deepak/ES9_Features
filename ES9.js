//Rest properties for object destructuring assignment.

let { fname, lname, ...rest } = { fname: "Hemanth", lname: "HM", location: "Earth", type: "Human" };
fname; //"Hemanth"
rest; // {location: "Earth", type: "Human"}