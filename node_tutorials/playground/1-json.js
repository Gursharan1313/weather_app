const fs = require('fs')
const dt = {'name':'Andrew','planet':'Earth','age':27};

const jsonDt = JSON.stringify(dt);

fs.writeFileSync('1-json.json',jsonDt);

const bufferData = fs.readFileSync('1-json.json');
const getData = bufferData.toString();
const data = JSON.parse(getData);

//const dt2 = {'name':'Gursharan Singh','planet':'Earth','age':28};
data.name = "ratandeep Singh"
data.age = 22
const jsonDt2 = JSON.stringify(data);

fs.writeFileSync('1-json.json',jsonDt2);

const bufferData2 = fs.readFileSync('1-json.json');
const getData2 = bufferData2.toString();
const data2 = JSON.parse(getData2);

console.log(data2.name);
console.log(data2.planet);
console.log(data2.age);