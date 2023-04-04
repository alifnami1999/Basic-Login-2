
let dbUsers = [
    {
        username: "Alif",
        password: "1234",
        name: "Alif",
        email: "Alif@utem.edu.my"
    },
    {
        username: "Azriana",
        password: "98765",
        name: "Azriana",
        email: "Azriana@gmail.com"
    },
    {
        username: "Haikal",
        password: "7890",
        name: "Haikal",
        email: "Haikal@gmail.com"
    }
]
function login(username, password) {
    let matchUser = dbUsers.find(
        user => user.username == username      //=> what to do with user
    )
    if (!matchUser) return "User not found!"
    if (matchUser.password == password) {
        return matchUser
    } else{
        return "Invalid password"
    }
    }

    function register(a, b, c, d) {
        dbUsers.push({
            username: a,
            password: b,
            name: c,
            email: d
        })
    }

//try to login
console.log(login("Alif","1234"))             //cout
console.log(login("Haikal","98765"))
console.log(login("utem","password"))

register("Hawari","4563","Wari","Hawari@gmail.com")
console.log(login("Hawari","4563"))
