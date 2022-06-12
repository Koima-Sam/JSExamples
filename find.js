arr = ['mary', 'ivan', 'john']

function findUser(users,callback){
    let result = null;
    for(let item of users){
        if(callback(item)=== true){
            result = item;
            break
        }
    }
    console.log(result);
}

function isUser(inventory){
    return inventory === "joe";
}

findUser(arr,isUser)