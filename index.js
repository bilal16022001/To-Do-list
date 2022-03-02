
let container = document.querySelector(".container")
let input = document.getElementById("input")
let plus = document.querySelector(".plus")
let notifi = document.querySelector(".notifi")
let rmo = document.querySelector(".rmo")

plus.onclick = checkinput

function checkinput() {

    if (input.value == "") {
        notifi.style.display = "block"
    }
    else {
        rmo.innerHTML += ` <div class="show">
            <span class="text">${input.value}</span>
            <span class="delt">delet</span>
            </div>`
        document.querySelectorAll(".delt").forEach(el => {
            el.addEventListener("click", () => {
                el.parentElement.remove();
            })
        })
        let show = document.querySelectorAll(".show");
        let remv = document.querySelector(".remv");
        remv.onclick = function () {
            for (let i = 0; i < show.length; i++) {
                show[i].remove()
            }
        }
        input.value = ""
        input.focus()

    }


}
