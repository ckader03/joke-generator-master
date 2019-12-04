window.onload = function() {
  console.log('script loaded');

    // the following steps should be completed on the /jokes/new page

    // 1. New Joke Button
    // listener for a new joke button
    // when a user clicks the new joke button call a function called 'getJoke'
    // make sure you create a fetch call to GET https://api.chucknorris.io/jokes/random
    // append the joke to the dom
    // after the joke is on the screen, the user should have the option to save the joke to the database or request a new joke
    function getJoke(){
      fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data => {
        // console.log(data.value)
        document.getElementById("jokeBench").innerHTML = data.value;
      })
      .catch(err => console.log("fetch error: ", err));
    };

    document.getElementById('getJoke').addEventListener("click",
    getJoke);

    // 2. Save Joke Button
    // create a save joke button
    // if the user wants to save a joke to the database by clicking the save joke butto, run a function called saveJoke
    // it should make a POST request to /api/jokes and save the joke to the database.
    // you may need to set up the controller to handle this request.
    // after a successful save, the user should be redirected to the new joke's show page

    function saveJoke(){
      const jokeText = document.getElementById("jokeBench").innerHTML

      fetch('/api/jokes', {
        method: 'post',
        body: JSON.stringify({text: jokeText}),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(data => window.location.replace('/jokes' + data.id))
      .catch(err => console.log('saveJoke error: ', err ))
    };

    this.document.getElementById("saveJoke").addEventListener("click",
    saveJoke);
};
