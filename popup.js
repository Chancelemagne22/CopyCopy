document.getElementById("save").addEventListener("click", print)
const dataToSave = []


if(dataToSave){
    retrieve()
}

function print(){

    const newElement = document.createElement("p");
    newElement.setAttribute("class", "links")

    const deleteButton = document.createElement("button")
    deleteButton.setAttribute("id", "delButton")


   


    var x = document.getElementById("urlInput").value;
    let formatInDate = getDate()+ " : " +x
    dataToSave.push(formatInDate)
    newElement.innerHTML = formatInDate
    

    newElement.appendChild(deleteButton)

    const element = document.getElementById("savesArea")
    
    element.appendChild(newElement)
    

}   

function store(){
    localStorage.setItem("storedLink", JSON.stringify(dataToSave))
    console.log(dataToSave)
}

function retrieve(){
    

    const storedLink = JSON.parse( localStorage.getItem('storedLink') );
    console.log(storedLink)
    storedLink.forEach((item)=>{
        const retrieveElement = document.createElement("p");
        const retrievedeleteButton = document.createElement("button")
        retrieveElement.setAttribute("class", "links")

        retrievedeleteButton.setAttribute("id", "delButton")

        const element = document.getElementById("savesArea")



        retrieveElement.innerHTML = item;
        retrieveElement.appendChild(retrievedeleteButton)
        element.appendChild(retrieveElement)
    })
    
 
}

function show(){
    console.log("Nice")
}


function removed(){

    window.onclick = (e) =>{
        if(e.target.parentNode.className == "links"){
            e.target.parentNode.remove()
        }
    }
}

function getDate(){
    const today = new Date();
    const localeFormattedDate = today.toLocaleDateString();
    return localeFormattedDate
}

