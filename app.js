
 // require yargs after  ==>npm i yargs in terminal
const yargs = require("yargs");



// Version 3
const students = require('./studentdata');
// ====================================================================
// add students

yargs.command({
  command: "add",
  describe: "Add new students",
  // Options
  builder: {

    // id unique type number  // mandatory
    id: {
      describe: "This is  unique number for each student",
      demandOption: true, 
      type: "number",
    },
    //  name of student   type string  // mandatory
    name: {
      describe: "This is name of  each student",
      demandOption: true,
      type: "string",
    },


     //  grade of student   type number  // mandatory
     grade: {
        describe: "This is grade of  each student",
        demandOption: true,
        type: "number",
      },

 //  comment of student   type string  // optional
     grade: {
        describe: "This is grade of  each student",
        demandOption: false,  // for optional not mandatory
        type: "string",
      },

  },
  handler: (argv) => {
    students.addStudents(
        argv.id,
        argv.name,
        argv.grade,
        argv.comment
        );
  },
});

// =====================================================================

//delete 

yargs.command({
  command: "delete",
  describe: "Delete this student",
  builder: {
    id: {
      describe: "This is  unique number for each student",
      demandOption: true, 
      type: "number",
    },
  },
  handler: (argv) => {
    students.deleteStudent(argv.id)
  },
});

// ======================================================================



//read 

yargs.command({
  command: "read",
  describe: "read information of student",
  builder: {
    id: {
      describe: "This is  unique number for each student",
      demandOption: true, 
      type: "number",
    },
  },
  handler: (argv) => {
    students.readStudents(argv.id)
  },
});



// ======================================================================



//list 

yargs.command({
  command: "list",
  describe: "list information of student",
  handler: (argv) => {
    students.listAllStudents(argv.id)
  },
});

// ==============================================================

console.log(yargs.argv);

// ===============================================================