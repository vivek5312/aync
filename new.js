console.log('person1:show ticket');
console.log('person2:show ticket');
function wifeBringTicket(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('wife:I have the ticks');
            console.log('husband:we should go in');
            console.log('wife:no I am hungry');
            resolve('ticket');
        },2000)

    })
} 
function getPopcorn(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('wife:I got some popcorn');
            console.log('husband:we should go in');
            console.log('wife:I need butter on my popcorn');
            resolve('popcorn');
            
        },1000)
    })
}
function butter(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log('husband:I got some butter on popcorn');
         console.log('husband:anything else darling ?');
         console.log('wife: lets got we are getting late');
         console.log('husband: thnak you for remainder');
         resolve('butter');
        },1000)
    })
}
function letDrinks(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('husband: you want cold dinks');
            console.log('wife:yes I want');
            console.log('husband:Ok I bring it')
            resolve('drinks')
        },2000)
    })
}
async function preMovie(){
    await wifeBringTicket();
  let pop= await getPopcorn();
   await butter();
   await letDrinks();
  // console.log(pop);
}
preMovie().then(()=>{
    console.log('Person3: Show me ticket');

})
console.log('person4:show ticket');
console.log('person5:show ticket');
wifeBringTicket().then(getPopcorn).then(butter).then(letDrinks);
