var request = new XMLHttpRequest();
request.open("GET", "data/books.json", false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.querySelector("#content");

function clickx(e) {
  console.log("asd");
  console.log(e);
}

for (var i = 0; i < books.length; i++) {
  var item = document.createElement("tr");

  var title = document.createElement("td");
  title.innerHTML = books[i].title;
  item.onclick = (e) => {
    document.querySelector("#title").innerHTML = e.target.innerHTML;
  };

  var authors = document.createElement("td");
  authors.innerHTML = books[i].authors.join(", ");

  var isbn = document.createElement("td");
  isbn.innerHTML = books[i].isbn;

  var year = document.createElement("td");
  year.innerHTML = books[i].year;

  item.appendChild(title);
  item.appendChild(authors);
  item.appendChild(isbn);
  item.appendChild(year);

  list.appendChild(item);
}
