document.addEventListener('DOMContentLoaded', () => {

    const saveButton = document.getElementById("save");
    const storeButton = document.getElementById("store");
    const urlInput = document.getElementById("urlInput");
    const savesArea = document.getElementById("savesArea");

    let links = [];

    
    function renderLinks() {
        savesArea.innerHTML = '';

        if (links.length === 0) {
            savesArea.innerHTML = '<p>No links saved yet.</p>';
            return;
        }

        links.forEach((link, index) => {
            const newElement = document.createElement("p");
            newElement.className = "link-item";
            newElement.dataset.index = index;

            const textNode = document.createTextNode(link);

            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-btn";
            deleteButton.textContent = 'Delete'; 

            newElement.appendChild(textNode);
            newElement.appendChild(deleteButton);

            savesArea.appendChild(newElement);
        });
    }

    function addLink() {
        const urlValue = urlInput.value.trim(); 
        if (urlValue === '') {
            alert("Please enter a URL or text.");
            return; 
        }

        const formattedLink = `${new Date().toLocaleDateString()} : ${urlValue}`;

        links.push(formattedLink);
        
        urlInput.value = '';

        renderLinks();
        saveToStorage();
    }

    function deleteLink(index) {
        links.splice(index, 1);
        
        renderLinks();
        saveToStorage();
    }

    function saveToStorage() {
        localStorage.setItem("storedLinks", JSON.stringify(links));
        console.log("Data saved:", links);
    }
    
    function loadFromStorage() {
        const storedLinks = localStorage.getItem('storedLinks');
        if (storedLinks) {
            links = JSON.parse(storedLinks);
        }
        renderLinks();
    }



    saveButton.addEventListener("click", addLink);

    savesArea.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const indexToDelete = event.target.closest('.link-item').dataset.index;
            deleteLink(indexToDelete);
        }
    });
    
    // storeButton.addEventListener("click", saveToStorage);


    loadFromStorage();
});