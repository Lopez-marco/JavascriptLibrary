let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
      season1: {
        numberOfEpisodes: 5,
        episodeInfo: [
          { episode: 1, episodeName: "Pilot" },
          { episode: 2, episodeName: "Flying" },
          { episode: 3, episodeName: "Tahani Al-Jamil" },
          { episode: 4, episodeName: "Jason Mendoza" },
          { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis" }
        ]
      },
      season2: {
        numberOfEpisodes: 6,
        episodeInfo: [
          { episode: 1, episodeName: "Everything is Great!" },
          { episode: 2, episodeName: "Dance Dance Resolution" },
          { episode: 3, episodeName: "Team Cockroach" },
          { episode: 4, episodeName: "Existential Crisis" },
          { episode: 5, episodeName: "The Trolley Problem" },
          { episode: 6, episodeName: "Janet and Michael" }
        ]
      },
      season3: {
        numberOfEpisodes: 5,
        episodeInfo: [
          { episode: 1, episodeName: "Everything Is Bonzer!" },
          { episode: 2, episodeName: "The Brainy Bunch" },
          { episode: 3, episodeName: "The Snowplow" },
          { episode: 4, episodeName: "Jeremy Bearimy" },
          { episode: 5, episodeName: "The Ballad of Donkey Doug" }
        ]
      }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
  };

  console.log(netflix.description);
  console.log(netflix.seasonInfo.season2.episodeInfo[2].episodeName);
//   console.log(netflix.seasonInfo.season3.episodeInfo.episodeName);
//   console.log(Object.values(netflix.seasonInfo.season3.episodeInfo).toString())

// console.log the description
// console.log episode 3 of season 2
// console.log each episode name in season 3 using only one console.log

let episodes = netflix.seasonInfo.season3.episodeInfo;
// console.log(episodes);
//FOR EACH
episodes.forEach(episode =>console.log(episode.episodeName))

//for of Loop
for(episode of episodes) {
    console.log(episode.episodeName);
}


function main() {
    let a = 1;
    let b = 2;
    let c = -3;
    mystery(a, b, c); // = W
    mystery(c, 4, a); //=z
    mystery(a + b, b + c, c + a); //Y
  }
  main();
  function mystery(w, z, y) {
    console.log(`${y} + ${w} = ${z}`);
  }

  ////-3 + 1 = 2
  ////1 + -3 = 4
  ////-2 + 3 = -1



// PALINDROME CHALLENGE
// Create a function that accepts a string as a parameter
// within the function write a conditional that checks if the word is the same forwards and backwards
// If it is the same both ways console.log 'The string is a palindrome'
// If it is not console.log 'It is not a palindrome'
// let string = 'radar';

function checker(word) {
    let reverse = word.split('').reverse().join('');
    if(word===reverse) {
        console.log('this string is a palindrome');
    }else {
        console.log('this is not a palindrome');
    }
}

checker('radar');
checker('level');
checker('student');



for(let i = 0; i<= 10; i++){
  // console.log(i)
function number(i>=10){

}
}