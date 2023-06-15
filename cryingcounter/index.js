let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let storedCount = localStorage.getItem('rtcount')
let count = storedCount ? Number(storedCount) : 0
countEl.textContent = count

function increment() {
    count = count + 1
    count += 1
    countEl.textContent = count
    localStorage.setItem('rtcount', count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

