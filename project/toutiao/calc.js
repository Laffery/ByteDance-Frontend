var nums = [
    5606816.1,
    5606816.1,
    302035.4,
    5908851.5,
    302035.4,
    19885.1,
    16470.1,
    3415,
    368578.2,
    19757793.1,
    45623542.9,
    5317902.7,
    206252.3,
    839231.6,
    1725524,
    45731238.8
]

nums = nums.sort((a, b) => a - b)

// const target = 57348430.1
const target = 2590747.9

const around = 1000

// console.log(nums)
// console.log(target)

const f = arr => (
    arr.reduce((prev, next) => [
        ...prev, ...prev.map(item => [next, ...item])
    ], [[]])
)

var res = f(nums)
res.forEach(element => {
    var sum = 0;
    for (let i = 0; i < element.length; ++i)
    {
        sum += element[i]
    }

    if (sum <= target + around && sum >= target - around)
        console.log(sum)
});
// console.log()