function addBook(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;
    const year = document.getElementById("year").value;
    const status = document.getElementById("status").value;

    fetch("http://localhost:8080/books/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:title,
            author:author,
            category:category,
            publicationYear:year,
            availabilityStatus:status
        })
    })
    .then(res=>res.json())
    .then(data=>{
        alert("Book Added Successfully");
        loadBooks();
    });
}

function loadBooks(){
    fetch("http://localhost:8080/books")
        .then(res=>res.json())
        .then(data=>{
            let rows = data.map(b => `
                <tr>
                    <td>${b.bookId}</td>
                    <td>${b.title}</td>
                    <td>${b.author}</td>
                    <td>${b.category}</td>
                    <td>${b.publicationYear}</td>
                    <td>${b.availabilityStatus}</td>
                    <td></td>
                </tr>`).join('');
            document.getElementById("bookTable").innerHTML = rows;
        });
}

function searchBook(){
    const title = document.getElementById("searchTitle").value;
    fetch("http://localhost:8080/books/search/" + encodeURIComponent(title))
        .then(res=>res.json())
        .then(data=>{
            let rows = data.map(b => `
                <tr>
                    <td>${b.bookId}</td>
                    <td>${b.title}</td>
                    <td>${b.author}</td>
                    <td>${b.category}</td>
                    <td>${b.publicationYear}</td>
                    <td>${b.availabilityStatus}</td>
                    <td></td>
                </tr>`).join('');
            document.getElementById("bookTable").innerHTML = rows;
        });
}

function filterBooks(){
    const status = document.getElementById("filterStatus").value;
    const url = status ?
        `http://localhost:8080/books/filter/${status}` :
        "http://localhost:8080/books";
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            let rows = data.map(b => `
                <tr>
                    <td>${b.bookId}</td>
                    <td>${b.title}</td>
                    <td>${b.author}</td>
                    <td>${b.category}</td>
                    <td>${b.publicationYear}</td>
                    <td>${b.availabilityStatus}</td>
                    <td></td>
                </tr>`).join('');
            document.getElementById("bookTable").innerHTML = rows;
        });
}

window.onload = loadBooks;
