/**
  {
    "api":1,
    "name":Current timestamp",
    "description":"Generate Unix timestamp for current time",
    "author":"Paul Byrne",
    "icon":"watch",
    "tags":"date,time,calendar,unix,timestamp"
  }
**/

function main(input) {
    input.insert(Date.now());
}
