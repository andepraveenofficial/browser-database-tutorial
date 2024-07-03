localStorage.setItem("name", "Ande Praveen");
localStorage.setItem("city", "Hyderabad");
console.log(localStorage.getItem("name"));  // Ande Praveen

localStorage.removeItem("name");
console.log(localStorage.getItem("name"));  // null

localStorage.clear();