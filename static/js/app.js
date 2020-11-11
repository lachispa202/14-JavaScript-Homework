// from data.js
var tableData = data;

// YOUR CODE HERE!

// Code to display UFO Sighting Dataset to table

console.log(tableData);

var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");
var searchField = d3.select("#datetime");
var searchField1 = d3.select("#city");
var searchField2 = d3.select("#city");
var searchField3 = d3.select("#city");

var resetbtn = d3.select("#reset-btn");

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var upload = (UFOSightings) => {

    UFOSightings.forEach(record => {

        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(record[column])
        )
    });
}

upload(data);

// Code to search through the data by date / other variables
button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = searchField.property("value");
    // Level 2 search of other variable - by city
    var inputCity = searchField1.property("value").toLowerCase();
    // Level 2 search of other variable - by state
    var inputState = searchField2.property("value").toLowerCase();
    // Level 2 search of other variable - by shape
    var inputShape = searchField3.property("value").toLowerCase();
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputShape);
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate);
    // Level 2 search of other variable - by city
    var filterCity = data.filter(data => data.city === inputCity);
    console.log(filterCity);
    // Level 2 search of other variable - by state
    var filterState = data.filter(data => data.state === inputState);
    console.log(filterState);
    // Level 2 search of other variable - by shape
    var filterShape = data.filter(data => data.shape === inputShape);
    console.log(filterState);
    tbody.html("");
    upload(filterDate);
    upload(filterCity);
    upload(filterState);
    upload(filterShape);
})

resetbtn.on("click", () => {
    tbody.html("");
    upload(data)
    console.log("Table reset")
});
