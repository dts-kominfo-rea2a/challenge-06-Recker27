// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = (fnCallBack) => {
  fs.readFile(file1, "utf8", (err, data1) => {
    if (err) {
      return console.log("Oops, ada error" + err);
    }
    fs.readFile(file2, "utf8", (err, data2) => {
      if (err) {
        return console.log("Oops, ada error" + err);
      }
      fs.readFile(file3, "utf8", (err, data3) => {
        if (err) {
          return console.log("Oops, ada error" + err);
        }
        let parseFile1 = JSON.parse(data1);
        let parseFile2 = JSON.parse(data2);
        let parseFile3 = JSON.parse(data3);

        const result = [];
        result.push(parseFile1.message.split(" ")[1]);
        result.push(parseFile2[0].message.split(" ")[1]);
        result.push(parseFile3[0].data.message.split(" ")[1]);
        return console.log(result);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
