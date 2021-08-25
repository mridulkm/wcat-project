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