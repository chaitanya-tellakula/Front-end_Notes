// fetch = function used for making HTTP requests
//         to fetch resources.
//      (JSON style data , images ,files)
//
// fetch returns Promise
// response.json() -> return a promise that promise will return our content data
// response.ok() -> It tell the status of our request whether we got the data or not

// Important: fetch() does NOT reject(throws error) for 404/500

// Status	response.ok
// 200	        true
// 201	        true
// 204	        true
// 301	        false
// 400	        false
// 404	        false
// 500	        false

//  Simplifies asynchronous data fetching in Javascript
//  and used for interacting with API's to retreive and
//  send data asynchronously over the web
//
// fetch(url ,{options})
// fetch(url ,{method : "GET"})  fetch(url ,{method : "POST"})
// fetch(url ,{method : "PUT"}) fetch(url ,{method : "DELETE"})

// we will use url in the example to fetch the data

//---------------------------Example 1------------------------

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.weight);
    console.log(data.name);
  })
  .catch((error) => console.log(error));

// in the response there is one function called .json()
// That function will give our data but function acutally
//  returns is promise "ok" check that if that is false
// then you get get that pokemon

//----------Example 2   " Handling if you request pokemon not there " ------------------

// i am not a pokemon but the api not throws an error
// that resonse contain attribute

//so if we have a pokemon we can know that by the "ok"
// attribute and manually throw the error by yourself then
// only error is thrown the response will not throw error

fetch("https://pokeapi.co/api/v2/pokemon/chaitanya")
  .then((response) => {
    console.log(response.ok); // you get falase
    console.log(response);
    return response.json(); // we need to return that response.json is a promise it runs and gives the data to next
  })
  .then((data) => {
    console.log(data); //Failed to load resource: the server responded with a status of 404 () as i am not getting data i will get error like this
  })
  .catch((error) => console.log(error));

// We need to manuallly throw the error
fetch("https://pokeapi.co/api/v2/pokemon/chaitanya")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Pokemon Not found");
    } else {
      return response.json();
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

//-------------------EXAMPLE 3----------------------

async function fetchPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    if (!response.ok) {
      throw new Error(" Data could not fetch ");
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchPokemonData();

//-------------------EXAMPLE 4----------------------

async function fetchPokemonData2() {
  try {
    const name = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    if (!response.ok) {
      throw new Error(" Data could not fetch ");
    } else {
      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");

      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
      imgElement.style.width = "200px";
      imgElement.style.height = "200px";
    }
  } catch (error) {
    console.log(error);
  }
}

fetchPokemonData2();

// see in Browser console you can see response

// Response
// body
// :
// (...)
// bodyUsed
// :
// false
// headers
// :
// Headers {}
// ok
// :
// true
// redirected
// :
// false
// status
// :
// 200
// statusText
// :
// ""
// type
// :
// "cors"
// url
// :
// "https://pokeapi.co/api/v2/pokemon/pikachu"
// [[Prototype]]
// :
// Response
// arrayBuffer
// :
// ƒ arrayBuffer()
// blob
// :
// ƒ blob()
// body
// :
// (...)
// bodyUsed
// :
// (...)
// bytes
// :
// ƒ bytes()
// clone
// :
// ƒ clone()
// formData
// :
// ƒ formData()
// headers
// :
// (...)
// json
// :
// ƒ json()
// ok
// :
// (...)
// redirected
// :
// (...)
// status
// :
// (...)
// statusText
// :
// (...)
// text
// :
// ƒ text()
// textStream
// :
// ƒ textStream()
// type
// :
// (...)
// url
// :
// (...)
