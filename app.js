
// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// Console.log the weather data from data.js
console.log(tableData);

// // Step 1: Loop Through `data` and console.log each object in the data.js file
tableData.forEach(function(date) {
  console.log(date);
});

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
tableData.forEach(function(date) {
  console.log(date);
  var row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each cited report in the data.js file
tableData.forEach(function(date) {
  console.log(date);
  var row = tbody.append("tr");

  Object.entries(date).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// // Step 4: Use d3 to append 1 cell per citing report value (datetime, city etc...)
tableData.forEach(function(date) {
  console.log(date);
  var row = tbody.append("tr");

  Object.entries(date).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = tbody.append("td");
  });
});

// // Step 5: Use d3 to update each cell's text with
//cell per citing report value (datetime, city etc...)
tableData.forEach(function(date) {
  console.log(date);
  var row = tbody.append("tr");
  Object.entries(date).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the data.js object
    var cell = tbody.append("td");
    cell.text(value);
  });
});


var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function () {

// Get the value property of the input element
var inputValue = inputElement.property("value");
// Prevent the page from refreshing
d3.event.preventDefault();
tbody.html("");

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);

var filteredData = data.filter(sighting => sighting.datetime === inputValue);


if (filteredData.length !== 0) {
    console.log(filteredData);
}
else if (filteredData.length === 0) {
    alert("This Selection did not yield any search results! Try again!");
}

});