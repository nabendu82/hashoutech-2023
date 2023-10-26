document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.205;
})

document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmsOutput").innerText = feet * 30.48;
})

document.getElementById("celciusInput").addEventListener("input", e => {
    let celcius = e.target.value;
    document.getElementById("fahrenOutput").innerHTML = (celcius * 1.8) + 32;
})