let user = {
    fname: "m karem",
    age: 30,
    salary: 99999,
    son: {
        fname: "ahmed saleh",
        gender: "female",
    }
};

console.log(user); 
let { 
    fname: username, 
    age: userage, 
    son: { fname: ssonfullnamee, gender: songender } 
} = user;
console.log(`name: ${username}, age: ${userage}, son: (sonfname: ${ssonfullnamee}, gender: ${songender})`);