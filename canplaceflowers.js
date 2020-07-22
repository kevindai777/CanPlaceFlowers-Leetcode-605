//Objective is to see whether n flowers can be placed on a flowerbed, where
//no two flowers can be adjacent

let flowerbed = [1,0,0,0,1], n = 1


//O(n) solution that checks the left and right side of the current element

let i = 0
let count = 0

while (i < flowerbed.length) {
    //Check the left and right of the current element
    if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
        flowerbed[i] = 1
        count++
    }
    i++
}

return count >= n