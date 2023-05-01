const anaClock = document.querySelector(".analog-clock")

const secHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".minute-hand")
const hourHand = document.querySelector(".hour-hand")

const digClock = document.querySelector(".digclock")

const minContainer = document.querySelector(".min-container")
const hourContainer = document.querySelector(".hour-container")
const secContainer = document.querySelector(".sec-container")

const switchBtnDiv = document.querySelector("#switch-btn")

window.onload = () => switchBtn.checked = false

const getTime = () => {
    const currentDate = new Date()
    const seconds = currentDate.getSeconds()
    const minutes = currentDate.getMinutes()
    const hours = currentDate.getHours()


    switchBtnDiv.style.setProperty('--after-content', `"${minutes}"`)


    if (anaClock.style.display !== "none") {

        const secondDegrees = (((seconds / 60) * 360) - 90) 
        secHand.style.transform = `rotate(${secondDegrees}deg)`

        const minuteDegrees = (((minutes + (seconds / 60)) / 60 * 360) - 90)
        minHand.style.transform = `rotate(${minuteDegrees}deg)`

        const hourDegrees = (((hours + (minutes / 60) + (seconds / 3600)) / 12 * 360) -90)
        hourHand.style.transform = `rotate(${hourDegrees}deg)`
    } else if (digClock.style.display !== "none") {
        hourContainer.innerText = hours.toString().padStart(2, "0")
        minContainer.innerText = minutes.toString().padStart(2, "0")
        secContainer.innerText = seconds.toString().padStart(2, "0")
    }

}

const switchBtn = document.querySelector(".switch input")

switchBtn.addEventListener("change", e => {
    if (e.target.checked) {
        digClock.style.display = "flex"
        anaClock.style.display = "none"
        getTime()
    } else {
        digClock.style.display = "none"
        anaClock.style.display= "inline"
        getTime()
    }
})

getTime()
setInterval(getTime, 1000)
