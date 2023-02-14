const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const validateRegex = regexData.exec('2022-22-02')
const [, year, month, day] = validateRegex
console.log(year, month, day)

// Another example using group tags
const newRegex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
const match = newRegex.exec('2022-22-02')
const { year: newYear, month: newMonth, day: newDay } = match.groups
console.log(newYear, newMonth, newDay)
