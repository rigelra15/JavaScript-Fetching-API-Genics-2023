# JavaScript - Fetching API - Genics-2023

## Fetching API with JavaScript

---
Nama    :   Rigel Ramadhani Waloni
<br> NRP : 5024221058 

---
### >> __API Link__
### _https://jsonplaceholder.typicode.com/todos/5_
---

### >> __Await/Async__

```
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
```
---

### >> __Promise__

```
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
```