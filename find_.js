arr = ['mary', 'ivan', 'john']
let user = arr.find(isUser)

console.log(user)
function isUser(inventory){
    return inventory === "ivan";
}