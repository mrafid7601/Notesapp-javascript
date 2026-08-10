const notesapp = document.getElementById("notesapp")
const preview = document.getElementById("preview")

notesapp.addEventListener("submit", function(event){

    event.preventDefault()

    let title = document.getElementById("title").value
    let message = document.getElementById("message").value

    let card = `


    <div class="card m-2 w-25">
                <div class="cardbody">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-message">${message}</p>
                </div>
            </div>
    
    `

    preview.innerHTML += card


    notesapp.reset()
    
})