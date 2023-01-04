const buildCount = (i) => {
  let count = i

  return (displayCount = () => {
    console.log(count++)
  })
}

let firstCount = buildCount(6)
let secontCount = buildCount(1)

firstCount()
firstCount()
firstCount()
firstCount()
firstCount()
secontCount()
