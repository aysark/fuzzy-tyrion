var i=2;
var l=process.argv;
var s=0;
for(i; i<l.length;i++) {
	s+= Number(l[i]);
}
console.log(s);