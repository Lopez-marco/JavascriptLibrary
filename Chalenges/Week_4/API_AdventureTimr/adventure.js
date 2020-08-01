let url = 'https://adventure-time-quote-api.glitch.me/api/random';

//const section = document.querySelector('div');
const section = document.getElementById("ranDOMdivId");
// console.log(section);

const charPic = {
    finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
  'tart toter' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
  lady : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
  marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
  'lumpy space princess' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
  lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
  'duke of nuts' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
  fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
  'princess bubblegum' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
  'ice king' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
  bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
  'jake the dog' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015",
};


fetch(url)
    .then(function(result){
        return result.json()
    })
    .then(function(data){           ///////data can be diferent names
        console.log(data);
        displayResults(data)            //////////////////data = displayResults
    })
    .catch(err => console.error({error: err}))

    function displayResults(json){              /////// displayResults from top....
        let quote = json;
        console.log(`Quote Result ===> ${quote}`);

        let heading = document.createElement('h2');     //////creates a element on html but does not show
        let image = document.createElement('img');
        
        //parent.appendChild(childelement)
        // section.appendChild(heading);
        section.appendChild(heading);
        section.appendChild(image);

        heading.textContent = quote.split(":")[1];

        let character = quote.split(":")[0].toLowerCase();
       

        for(pic in charPic)
        //  console.log(character);
        if (character === pic){
            image.src = charPic[pic]
        }
    }







// fetch('https://adventure-time-quote-api.glitch.me/api/random')
// .then(function(response){
//     return response.json();
// })
// .then(function(json){
//     // console.log(json);
//     let random = json;

//     for(x of random){
//         let listItem = document.createElement('li')
//         listItem.innerHTML = random;
//         random.appendChild(listItem);
//     }
// });