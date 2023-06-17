// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

const namesGifts =[...names,"surprise"];

function writeCards(names){
    const newArray = []
    for(let v = 0; v < names.length; v++){
        let message = `Thank you, ${names[v]}, for the wonderful surprise gift!`
         newArray.push(message)

}
    return newArray;
}
console.log(writeCards(names));

function countDown(){
   let countDown = 0;
   while (countDown < 11){
    console.log(countDown++)
   }
}