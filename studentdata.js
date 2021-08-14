// require file system 
 const fs = require ('fs')



//  ===============================================

// add a new student 


const addStudents =  (id, studentName, grade, comment) => {
    const students = loadNotes(); 
  
    const duplicateTitles = students.filter((student) => {
      return student.id === id;
    });
  
    if (duplicateTitles.length === 0) {
        students.push(
        {
            //short hand
            id,
            studentName,
            grade,
            comment,
          
        }
      );
      saveStudents(students);
      console.log("Saved Successfully");
    } else {
      console.log("Error Duplicate Id");
    }
  };



// ===================================================================================

// Delete

const deleteStudent = (id) =>{
  const students = loadNotes()
  const studentsToKeep = students.filter((student)=>{
     
      return student.id !== id
  })
 
  saveStudents(studentsToKeep)
 
  console.log("this student deleted successfully")
};

// ===================================================================
// Read 
const readStudents = (id) =>{

  const students = loadNotes()

  const findStudent = students.find((student)=>{
      return student.id === id
  })

  if(findStudent){
      console.log(findStudent)
      console.log(findStudent.id)
      console.log(findStudent.studentName)
      console.log(findStudent.grade)
  }else {
    console .log("we can not find this id")
  }

};

// ====================================list all student================================
// list all student

const listAllStudents = () =>{
  const students = loadNotes()
  students.forEach((student)=>{
      console.log(student.id)
      console.log(student.studentName)
      console.log(student.grade)
  })
}

// ===========================================================================================



// ================================================load all data of student==========================================

// load all data of student

  const loadNotes = () => {
   
    try {
      const dataBuffer = fs.readFileSync("students.json").toString();
      //    console.log(dataBuffer)
      // json --> object  //{}
      return JSON.parse(dataBuffer);
    } catch (e) {
      return [];
    }
  };

// ======================================save student=======================


  // SAVE students  --> write
const saveStudents = (students) => {
    const saveData = JSON.stringify(students);
    fs.writeFileSync("students.json", saveData);
  };
  
  


  // =============================== export=====================================================

  module.exports = {
    
    // key : value (name of function)
    addStudents: addStudents,
    deleteStudent:deleteStudent,
    readStudents:readStudents,
    listAllStudents:listAllStudents
  };
  