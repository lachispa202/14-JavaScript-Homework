// from data.js
var tableData = data;

// YOUR CODE HERE!

// Code to display UFO Sighting Dataset to table

console.log(tableData);

var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");
var searchField = d3.select("#datetime");

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
    console.log(inputDate);
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate);
    tbody.html("");
    upload(filterDate);

})

resetbtn.on("click", () => {
    tbody.html("");
    upload(data)
    console.log("Table reset")
});
