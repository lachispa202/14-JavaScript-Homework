// from data.js
var tableData = data;

// YOUR CODE HERE!

// Code to display UFO Sighting Dataset to table

console.log(tableData);

var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


var upload = (UFOSightings) => {

    UFOSightings.forEach(record => {

        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(record[column])
        )
    });
}

upload(data);
