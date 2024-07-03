sessionStorage.setItem("name", "Ande Praveen");
sessionStorage.setItem("city", "Hyderabad");
console.log(sessionStorage.getItem("name"));  // Ande Praveen

sessionStorage.removeItem("name");
console.log(sessionStorage.getItem("name"));  // null

sessionStorage.clear();