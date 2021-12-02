const fs = require('fs');


let cache;
let cacheTime;
let firstInvoke = true;
const cacheInterval = 5; // 5s

function getFilesFromDirectory(directory, fileExtensions) {
    if (((cacheTime - Date.now()) < 5000) && !firstInvoke) {
        return cache;
    }

    firstInvoke = false;
    cacheTime = Date.now();

    let result = [];

    fs.readdir(directory, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let file of files) {
            if (!fileExtensions.includes(file.split('.')[1])) {
                continue;
            }
            let fileInfo = fs.statSync(directory + '/' + file);
            const dateCreated = fileInfo.birthtime;
            const size = fileInfo.size;
            
            const element = {
                file,
                dateCreated,
                size
            };
            result.push(element);
        };
        console.log(result);
        return result;
    });
};


getFilesFromDirectory('./', ['js']);