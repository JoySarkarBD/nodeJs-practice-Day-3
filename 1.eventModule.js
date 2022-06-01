// In nodeJs we get class when we require events.

const Event = require("events");
const events = new Event();

/* ===================================================================================== */

// For server, first we need to listen then we need to emit it. Without this we can't get proper response.

// #Example One

// listening events by name
/* events.on("getData", (data) => {
    console.log(data);
}); */

// creating events by emit() method.
/* events.emit("getData", "Hello, I am from nodeJs.") */

/* ===================================================================================== */

// #Example Two

// listening events by name
/* events.on("getData2", (data) => {
    console.log(data);
}); */

// creating events by emit() method.
/* events.emit("getData2", {name: "nodeJS", birthday: "2009", creator: "Ryan Daley"}) */

/* ===================================================================================== */