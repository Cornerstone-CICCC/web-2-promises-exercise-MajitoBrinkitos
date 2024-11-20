const fs = require("fs"); 
const fsPromises = require("fs").promises; // method that reads the file_reader.js file 
const path = require("path");

// Path to files 
const filePaths = [ 
    path.join(__dirname, "firstname.txt"), 
    path.join(__dirname, "lastname.txt"), 
    path.join(__dirname, "age.txt"), 
    path.join(__dirname, "hobbies.txt"), 
];

// Reading files
 const readFiles = async (paths) => {
     try {
         // Reading files async 
         const data = await Promise.all(paths.map(filePath => fs.promises.readFile(filePath, "utf-8"))); 
         
         // Data array: destructure 
         const [firstName, lastName, age, hobbies] = data; 
         const hobbiesArr = hobbies.split('\n').map(item => item.trim()).filter(item => item); 
         
         // Output data 
         console.log(`${firstName.trim()} ${lastName.trim()} is ${age.trim()} years old and their hobbies are:`); 
         hobbiesArr.forEach((hobby, index) => { 
            console.log(`Hobby ${index}: ${hobby}`); 
        }); 
    } 
    catch (err) { 
        console.error("Error reading files:", err); 
    } 
};
        //executing code
        readFiles(filePaths);