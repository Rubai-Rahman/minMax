var data = [10, 1000, 1, 59, 10, 120, 4, -1, 30]
data.sort(function (a, b) {
  return a - b
})
console.log(`Minimum value is ${data[0]}`)
data.sort(function (a, b) {
  return b - a
})
console.log(`Maximum value is ${data[0]}`)
