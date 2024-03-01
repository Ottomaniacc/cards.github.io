let submitForm = document.getElementById("submitForm");

let people = [
    {
        firstname: "Ryo",
        age: 26,
        length: 178,
        img: 'ryo.jpg'
    },

    {
        firstname: "kaneki",
        age: 15,
        length: 170,
        img: 'keneki.jpg'
    },

    {
        firstname: "goku",
        age: 40,
        length: 160,
        img: 'goku.jpg'
    },

    {
        firstname: "isagi",
        age: 17,
        length: 170,
        img: 'isagi.jpg'
    },

    {
        firstname: "Guts",
        age: 24,
        length: 210,
        img: 'guts.jpg'
    },

    {
        firstname: "Meguna",
        age: 16,
        length: 178,
        img: 'meguna.jpg'
    },
]

function loadCharacters() {
    document.getElementById("cards").replaceChildren();

    people.forEach(peoples => {
    document.getElementById("cards").innerHTML += `     <div class="col-md-6 p-4">
    <div class="card" style="width: 16rem;">
        <img src="img/${peoples.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">name: ${peoples.firstname}.</p>
           <p class="card-text">age: ${peoples.age}.</p>
             <p class="card-text">length:img/ ${peoples.length}.</p>
        </div>
    </div>
    </div>`
    });
}




submitForm.addEventListener('submit', function(e) {
    e.preventDefault();
   

    let formData = new FormData(this);

    people.push({
        firstname: formData.get("characterName"),
        age: formData.get("characterAge"),
        length: formData.get("characterLength"),
        img: formData.get("characterImage")
    })

    
    


    loadCharacters()
});



window.onload = () => {
    loadCharacters()
}


// localStorage.setItem("myPeople", submitForm);

// console.log(localStorage)