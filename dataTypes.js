const inputValues = [{}, -Infinity, NaN, function(){}, ["Twenty"]]
for(let value of inputValues)
{
    typeConvertToNumber(value);
    typeConvertToString(value);
    typeConvertToBoolean(value);
}
async function typeConvertToNumber(input) {
    const output = Number(input);
    console.log("Converting input of type: '"+typeof(input) +"' to output of type: '"+ typeof(output) +"'"); 
}
async function typeConvertToString(input) {
    const output = String(input);
    console.log("Converting input of type: '"+typeof(input) +"' to output of type: '"+ typeof(output)+"'"); 
}
async function typeConvertToBoolean(input) {
    const output = Boolean(input);
    console.log("Converting input of type: '"+typeof(input) +"' to output of type: '"+ typeof(output)+"'"); 
}
