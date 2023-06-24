

const posts=[];

let lastactivity=null;

function createPost(post){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            posts.push(post)

       resolve();

        },1000)

        

    })

}



function lastActivityTime(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            

            resolve(lastactivity=new Date());

        },1000)

    })

}

function deletePost(){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            if(posts.length>0){

                let deletepost=posts.pop();

                resolve(deletepost);

            }

            else{

                reject("Error:No post delete")

            }

        },1000)

        

    })

}



async function createPost(){
console.log('Post',posts)
let time=await lastActivityTime();
let del=await deletePost();
 console.log(time);
 console.log(del);

}
createPost().then(()=>{
    console.log('updatePost',posts);
}).catch((err)=>{
    console.log(err);
})