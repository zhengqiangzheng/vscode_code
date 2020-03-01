let str = 'zhengqiang12341234123';
let nums1 = [...str].filter(a => !Number.isNaN(parseInt(a))).join('');
console.log(nums1);

let nums2 = str.match(/\d/g).join('');

console.log(nums2);
