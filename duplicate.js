const names=['abul', 'babul', 'cabul', 'dabul', 'habul', 'cabul', 'sabul', 'sabul', 'kinan', 'nakin', 'daiyan', 'saiyan', 'gray', 'gray', 'habul', 'dabul', 'kabul', 'nakin'];
function removeDuplicate(names){
const unique = [ ]; 
for(let i=0;  i< names.length; i++){
    const name=names[i];
if( unique.includes(name)===false){
    unique.push(name);
}
}
return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);