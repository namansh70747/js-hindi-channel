const name = "Hitesh";
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

let gameName = new String('Sakshi-Naman-Sharma')
console.log(gameName[0]);
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.__proto__);
const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(0,4);
console.log(anotherString);
const newStringOne = "     Hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('sakshi'));
console.log(gameName.split('-'));
let str = "Sakshi ";
let str1 = "Loves Naman Sharma"
console.log(str.length);
console.log(str.charAt(0));
console.log(str.concat(str1));
console.log(str.includes('i'));
console.log(str.startsWith('Sakshi'));
console.log(str.endsWith('ma'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.repeat(3));
console.log(str.padStart(10,'-'));
console.log(str.padEnd(10,'-'));
console.log(str.slice(2,5));
console.log(str.match(/s/g));
console.log(str.search(/s/));
console.log(str.replace(/s/g,'$'));
console.log(str.replace(/s/g,'$').split('$'));
console.log(str.replace(/s/g,'$').split('$').join('-'));


//Revise and Using all the Strings Functions Here

let sakstr = "Naman Sharma";
let namstr = "Sakshi, Sharma"
let emptystrv = "";

//Anchor
console.log("Click here".anchor("https://developer.mozilla.org/en-US/"));  //<a name="https://developer.mozilla.org/en-US/">Click here</a> 

//At
console.log(sakstr.at(0)); // N
console.log(sakstr.at(-2)); //m

//Big
console.log(sakstr.big());  //<big>Naman Sharma</big>

//Bold
console.log(sakstr.bold()); //<b>Naman Sharma</b>

//CharAt
console.log(sakstr.charAt(0)); //N
console.log(sakstr.charAt(-1)); //No Print

//CharCodeAt
console.log(sakstr.charCodeAt(0)); //78

//Concat
console.log(sakstr.concat(` Loves Sakku`)); // Naman Loves Sakku

//EndsWith
console.log(str.endsWith("a")); //let sakstr = "Naman Sharma";
console.log(str.endsWith());

//Font Colour
console.log(sakstr.fontcolor("blue")); //<font color="blue">Naman Sharma</font>

//fontSize
console.log(str.fontsize(5)); //<font size="5">Sakshi </font>

//Includes
console.log(sakstr.includes("a"));
console.log(sakstr.includes("Sharma"));

//IndexOf
console.log(sakstr.indexOf("N"));
console.log(sakstr.indexOf("h"));

//Italics
console.log(sakstr.italics());

//LastIndexOf
console.log(sakstr.lastIndexOf("N"));

//Match
console.log(sakstr.match(/N/g));

//MatchALL
const regex = /N/g;
for (const match of sakstr.matchAll(regex)) {
    console.log(match);
}

//PadEnd
console.log(sakstr.padEnd(15,"0"));

//PadStart
console.log(sakstr.padStart(15,"0"));

//repeat
console.log(sakstr.repeat(3));

//replace
console.log(sakstr.replace("Naman","Sakshi"));

//Replace All
console.log("aaa".replaceAll("a","b"));

//Search
console.log(sakstr.search(/Naman/));

//Slice 
console.log(sakstr.slice(0,5));

//small
console.log(sakstr.small()); //<small>Naman Sharma</small>

//split
console.log(namstr.split(","));

//SartsWith
console.log(sakstr.startsWith("Naman"));

//Strike
console.log(sakstr.strike()); //<strike>Naman Sharma</strike>

//Substring
console.log(sakstr.substring(0,5));

//tolocalelowercase
console.log(sakstr.toLocaleLowerCase());

//tolocaleuppercase
console.log(sakstr.toLocaleUpperCase());

//ToLowerCase
console.log(sakstr.toLowerCase());

//ToUpperCase
console.log(sakstr.toUpperCase());

//To String
console.log(sakstr.toString());

//Trim
console.log("  trim  ".trim());

//TrimEnd
console.log("  trim  ".trimEnd());

//TrimStart
console.log("  trim  ".trimStart());

















































