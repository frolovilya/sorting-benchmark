const arrayGroupsTest = require("./suits/arrayGroups/Test");

let args = process.argv.slice(2);

let suiteName = args[0];
if(!suiteName) {
    console.log("Need to specify suite name");
    return;
}

switch(suiteName) {
    case "arrayGroups":
        arrayGroupsTest();
        break;
    default:
        console.log("Wrong suite name");
        break;
}