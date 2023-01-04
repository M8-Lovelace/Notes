const anotherFunction = () => {
  for (let i = 0; i < 10; i++) { // Don't use var in for loops, this applies hoisting
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

anotherFunction()
