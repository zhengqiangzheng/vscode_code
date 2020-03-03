let time1 = '2020-2-29';
let time2 = '2020-2/29';
console.log(/\d{4}([-/])(\d{1,2})\1\2/g.exec(time1));
console.log(/\d{4}([-/])(\d{1,2})\1\2/g.exec(time2));
