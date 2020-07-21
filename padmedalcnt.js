let medal = [0, 0, 0, 0]
const convrate = [5, 5, 5],
    rainbow = document.getElementById("rainbow"),
    gold = document.getElementById("gold"),
    silver = document.getElementById("silver"),
    bronze = document.getElementById("bronze")
document.getElementById("goldp").onclick = function () {
    counter(1)
}
document.getElementById("silverp").onclick = function () {
    counter(2)
}
document.getElementById("bronzep").onclick = function () {
    counter(3)
}

function counter(m) {
    medal[m]++
    medalcntup(m)
    printmedal()

}

function medalcntup(m) {
    if (medal[m] >= convrate[m - 1]) {
        medal[m] = 0
        medal[m - 1]++
        if (m > 0) {
            medalcntup(m - 1)
        }
    }
}

function medalcntdown(m) {
    if (medal[m] < 0 && m != 3) {
        medal[m] = convrate[m] - 1
        medal[m + 1]--
        if (m < 3) {
            medalcntup(m + 1)
        }
    }
}

function printmedal() {
    rainbow.innerHTML = medal[0]
    gold.innerHTML = medal[1]
    silver.innerHTML = medal[2]
    bronze.innerHTML = medal[3]
}
