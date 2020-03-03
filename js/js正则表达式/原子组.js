let str = `<h1>zheng qiang</h1>
<span>houdunren.com</span>
<h6>zzzqqq</h6>
`;

console.log(/^<(h[1-6]>)(.*)<\/\1/g.exec(str));

str = str.replace(/<(h[1-6])>([\s\S]+)<\/\1>/g, '<span>$2</span>');
console.log(str);
