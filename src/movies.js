// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let temp = [];
  moviesArray.map((directors) => {
    temp.push(directors.director);
  });
  return temp;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }
  return moviesArray.filter((directedBy) => {
    return (
      directedBy.director == "Steven Spielberg" &&
      directedBy.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }

  let temp = [];
  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].score) {
      temp.push(moviesArray[i].score);
    } else {
      temp.push(0);
    }
  }
  let averageScores = temp.reduce((a, b) => {
    return a + b;
  });

  return +(averageScores / temp.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }

  let temp = [];
  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].score && moviesArray[i].genre.includes("Drama")) {
      temp.push(moviesArray[i].score);
    } else if(temp.length==0){
        return 0
     }else{
      continue;
    }
  }
  let averageScores = temp.reduce((a, b) => {
    return a + b;
  });
  return +(averageScores / temp.length).toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
 
    let newMovieArray = [...moviesArray].sort((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title)
  });
  return newMovieArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  let newMovieArray = [...moviesArray]
//   if(moviesArray.length>20){
//     newMovieArray.slice(0,20)
//   }
  
  let titles = [];

  let ordered = newMovieArray.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < ordered.length; i++) {
    titles.push(ordered[i].title);
  }
    return titles.slice(0,20)
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
