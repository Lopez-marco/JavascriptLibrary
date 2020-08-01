/*
Objects
*/
let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo:{
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color wars'},
                {episode: 8, episodeName: 'Wedding day sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'},
            ]
        }
    },
    season2:{},
    season3:{}
}

console.log(netflix);
// console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//pick an episode to log in the terminal
//using dot notation, walk through the netflix object and print off both the episode number
// and the episode name

// console.log(netflix.season1.seasonInfo.episodeInfo[9].episode, netflix.season1.seasonInfo.episodeInfo[9].episodeName )

//JSON ->javascript Object Notation
var json = {
"workbench.colorTheme":"One Dark+ (Sublime)",
"window.zoomLevel":3,
"files.exclude": {
"**/.git":true,
"**/.DS_Store":true,
"**/*.js": {
"when":"$(basename).ts"
},
"**/*.js.map": {
"when":"$(basename)"
}
},
"editor.fontFamily":"Monaco, 'Courier New', monospace",
"editor.detectIndentation":false,
"editor.letterSpacing":0,
"editor.tabSize":2,
"files.autoSave":"off",
"editor.wordWrap":"on",
"extensions.ignoreRecommendations":true,
"[html]": {},
"files.associations": {
"*.html":"html",
"*.js":"javascriptreact"
},
"html.format.indentInnerHtml":true,
"editor.fontSize":11,
"liveServer.settings.donotShowInfoMsg":true,
"liveServer.settings.port":3500,
"[javascriptreact]": {}
}


// spacejam object:
let spaceJam = {
    toonSquad: {
        human:'Michael Jordan',
        rabbit1:'Bugs Bunny',
        rabbit2:'Lola Bunny',
        duck:'Daffy Duck',
        tDevil:'Tasmanian Devil',
        bird:'Tweety',
        cat:'Sylvester',
        pig:'Porky Pig'
    },
    monstars: {
        0:'Bupkus',
        1:'Bang',
        2:'Nawt',
        3:'Pound',
        4:'Blanko'
    },
    nbaPlayers: {
        phoenixSuns:'Charles Barkley',
        newJerseyNets:'Shawn Bradley',
        newYorkNicks:'Patrick Ewing',
        charlotteHornets1:'Larry Johnson',
        charlotteHornets2:'Muggsy Bogues'
    }
}

// console.log(Object.keys(spaceJam)); // Objects.Keys returns an array consisting of the keys in our object 
// console.log(Object.keys(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad).toString())//toString gives the stuff inside back as a single string
// console.log(Object.values(spaceJam));
// console.log(Object.values(spaceJam.toonSquad));

// let garden = {
//     vegetable: 'zucchini',
//     flower: 'sun flower',
//     fruit: 'grape',
//     water: true,
//     sun: true,
//     size: 10
// }

// console.log(garden.vegetable);

// let inc = 'fruit';

// console.log(garden[inc]);

// let backing = {};
// backing['zucchini'] = 'beter make some bread!';
// backing.bestKeyEver = 'zucchini';

// console.log(backing.zucchini);
// console.log(backing.bestKeyEver);
// console.log(backing[backing.bestKeyEver]);


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let g ='water';
// object(array)       forEach (using the array)    key is the keys on the garden object (vegetable, flower, etc)  
Object.keys(garden).forEach(key =>{
//here g=water
    if (key == g){
        console.log(garden[key]);
    }
})





let movie = {
    nameOfMovie:'Harry Potter And the Chamber of Secrets', 
    runTime: '2:54 min',
    genre: 'SyFy',
    characters: [ 
        { charOne: { 
            name: 'Harry Potter', 
            age: 15, 
            items: [{one:"Wand", two: "invisibility cloak"}]}},
        { charTwo: { 
            name: 'Ron Wesley', 
            age: 15, 
            items: [ "broekn Wand & magic potion"]}},
    ]
}



//   console.log(movie)
  console.log(movie.nameOfMovie);
  console.log(movie.runTime);
  console.log(Object.values(movie.characters))

let character=movie.characters[0].charOne.name;
console.log(character)
let one=movie.characters[0].charOne.items[0].one.toString()
console.log(one)
