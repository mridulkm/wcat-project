#!/usr/bin/env node


// create this file named index.js in wcat folder first
// write "cd wcat" in terminal after we see terminal at PS C:\Users\Mridul\Desktop\Java Theory>
// now write "npm i fs" after getting PS C:\Users\Mridul\Desktop\Java Theory\wcat>
// now write "npm init" being at PS C:\Users\Mridul\Desktop\Java Theory\wcat>
// then keep on pressing enter . We get package-lock.json file  and package.json file
// Now we back at PS C:\Users\Mridul\Desktop\Java Theory\wcat>
// see package.json file . its a package that describes the files where we have to work in the project

// const fs=require("fs")
// let arguments = process.argv.slice(2);
// console.log(arguments)  // to see o/p at terminal write "node index.js a.txt b.txt"  . we wont get node location and index file location but we will directly get array with a.txt and b.txt in it as we used slice from 2"




//clubbing file a and b content if flag is not havin - at i[0] position
// let flags=[];
// let filenames=[];

// for (let i of arguments){
//     if(i[0]=="-"){
//         flags.push(i);
//     }else {
//         filenames.push(i);
//     }                             
// }                                 
// if(flags.length==0 && filenames.length!=0){
//    for (let file of filenames) {  
//         console.log(fs.readFileSync(file,"utf-8"))
//    }
// }
// now create a.txt  and b.txt file and write random string in it and then on terminal write "node index.js a.txt b.txt"




// remove spaces in a.txt file

// let flags=[];
// let filenames=[];

// for (let i of arguments){
//     if(i[0]=="-"){ 
//         flags.push(i);
//     }else {
//         filenames.push(i);
//     }
// }
// if(flags.length==0){ //&& filenames.length!=0)
//    for (let file of filenames){
//         console.log(fs.readFileSync(file,"utf-8"))
//    }
// } 
// } else {
//     for (let flag of flags){
//       if(flag=="-rs"){       // to remove rs 
//         for (let file of filenames){
//             let fileData=fs.readFileSync(file,"utf-8")
//             console.log(fileData.split(" ").join(""))  // by split we get array and by join we get back string with no spaces as "" is wriiten in join()
//         }
//       }
//     }
// }
// write on terminal "node index.js -rs a.txt b.txt"




// //optimized code for rs and rn 
 
// let flags=[];
// let filenames=[];
// let secondaryArgs= [];

// for (let i of arguments){
//     if(i[0]=="-"){
//         flags.push(i);
//     }
//         else if( i[0]=="$" ) {
//         secondaryArgs.push(i.slice(1))
//         } else {
//         filenames.push(i);
//         } 
// }
// if(flags.length==0){ //&& filenames.length!=0)
//    for (let file of filenames){
//         console.log(fs.readFileSync(file,"utf-8"))
//    }
// } 

//       for (let file of filenames){
//           let fileData=fs.readFileSync(file,"utf-8")
//           for (let flag of flags){       
//               if (flag=="-rs"){
//                   fileData=removeAll(fileData," ")
//               }
//               if (flag=="-rn"){
//                 fileData=removeAll(fileData,"\r\n")
//             }
//             if(flag=="-rsc"){
//                 for (let secondaryarg of secondaryArgs){
//                     fileData=removeAll(fileData,secondaryarg);
//                 }
//             }         // write at terminal to remove a  specific special chars "node index.js -rsc a.txt b.txt $#" . This will remove all # from the files

            //  if (flag=="-rsc"){      // to remove all spaces in a file
            //      let tempString="";
            //    for (let character of fileData){
            //        if((character.charCodeAt(0)>=65 && character.charCodeAt(0)<=90 || character.charCodeAt(0)>=97 && character.charCodeAt(0)<= 122)){
            //         tempString+= character;
            //        }
            //     }
            //    fileData= tempString;
            //  }
//           }
//           console.log(fileData)  // by split we get array and by join we get back string with no spaces as "" is wriiten in join()
//       }
    
//   function removeAll (string,removeData){
//       return string.split(removeData).join("");
//   }

              

// on package.json  write "wcat" : "node index.js"
// "npm run wcat a.txt"  on terminal now

// "bin":{
//    "wcat": "script.js"
//   },   // write this in package.json

// now by putting our file in bin its globally acceptable i.e it will work in our pc too
// now write "#!/usr/bin/env node" in index.js file
// now in terminal write "npm unlink" after PS C:\Users\Mridul\Desktop\Java Theory\wcat>
// now in terminal write "npm link"





// CLASS CODE 

const fs = require("fs");
let arguments = process.argv.slice(2);

let flags = [];
let filenames = [];
let secondaryArguments = [];

for(let i of arguments) {
    if(i[0] == "-") {
        flags.push(i);
    } else if(i[0] == "$") {
        secondaryArguments.push(i.slice(1));
    } else {
        filenames.push(i);
    }
}

// if(flags.length == 0) {
//     for(let file of filenames) {
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// } else {
//     for(let flag of flags) {
//         if(flag == "-rs") {
//             for(let file of filenames) {
//                 let fileData = fs.readFileSync(file,"utf-8");
//                 console.log(fileData.split(" ").join(""));
//             }
//         } else if
//     }
// }


for(let file of filenames) {
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags) {
        if(flag == "-rs") {
            fileData = removeAll(fileData," ");
        }
        if(flag == "-rn") {
            fileData = removeAll(fileData, "\r\n");
        }
        if(flag == "-rsc") {
            for(let secondaryArgument of secondaryArguments) {
                fileData = removeAll(fileData,secondaryArgument);
            }
        }
        if (flag=="-s"){
           let data=  addSequence(filedata);
           console.log(data);
        }
        if(flag=="-sn"){
           let data=  addSeqToNonEmptyLines(fileData);
           console.log(data);      
        }
        if (flag=="-rel"){
           let ans= removeExtraLine(fileData);
           for (let i=0;i<ans.length;i++){
               console.log(ans[i]); 
           }
        }
    }
   // console.log(fileData);
}

function removeAll(string, removalData) {
    return string.split(removalData).join("");
}


function addSequence(content){
    let contentArr=content.split("\r\n");
    for (let i=0;i<contentArr.length;i++){
        contentArr[i]=(i+1) +contentArr[i];
    }
    return contentArr;
}

function addSeqToNonEmptyLines(content){
    let contentArr=content.split("\r\n");
    let count=1;
    for (let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i]=count +" "+ contentArr[i];
            count++;
        }
    }
    return contentArr;
}

function removeExtraLine(fileData){
    let contentArr = fileData.split("\r\n");
    let data=[];
    for (let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
    for (let i=0;i<contentArr.length;i++){
          if (contentArr[i]!=null){
              data.push(contentArr[i]);
          }
    }
    return data;
    
}

