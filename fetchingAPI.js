// RIGEL RAMADHANI WALONI
// 5024221058

// API LINK
const apiData = "https://jsonplaceholder.typicode.com/todos/5";

// >>>>> ASYNC/AWAIT <<<<<
const fetchAPI_First = async (endpoint) => {
    try {
        const data = await fetch(endpoint);
        const jsonData = await data.json();
        console.log(jsonData);
    }
    catch(e) {
        console.log(e);
    }
}

console.log("Starting Fetch Data...");
fetchAPI_First(apiData);
console.log("Still Fetching Data...");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>> PROMISE <<<<<
const fetchAPI_Second = fetch(apiData);
console.log(fetchAPI_Second);

fetch(apiData)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });