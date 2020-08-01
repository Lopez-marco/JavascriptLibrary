let starWarsPeopleList = document.querySelector('ul');
let starWarsShipList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response){
return response.json();
})
.then(function(json){
    console.log(json)
let people = json.results;

for(p of people) {         ////////returns a array with objects
 let listItem = document.createElement('li')
 listItem.innerHTML = '<p>' + p.name + '</p>';
 starWarsPeopleList.appendChild(listItem);
}

//   for(p in people){             ////////////////returns a array just with numbers
//     console.log(p);
//   }
});


fetch('https://swapi.dev/api/starships/')
.then(function(response){
    return response.json();
})
.then(function(json){
    let starships = json.results;

    for(p of starships) {
        let listItem = document.createElement('li')
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsShipList.appendChild(listItem);
    }
});