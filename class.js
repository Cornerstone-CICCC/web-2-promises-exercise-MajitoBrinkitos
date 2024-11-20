const add = function (a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    }) 
}

add(5, 3).then(response => {
    console.log(response)
}).catch(err => {
    console.error(err)
})