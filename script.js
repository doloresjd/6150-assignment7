document.addEventListener('DOMContentLoaded', function() {
    function fetchBooks() {
        fetch(`https://mybookapi.free.beeceptor.com/books`)
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.books)) {
                    const books = data.books;
                    const list = document.getElementById('bookList');
                    list.innerHTML = ''; 
                    books.forEach(book => {
                        const item = document.createElement('li');
                        const link = document.createElement('a');
                        link.href = `bookDetail.html?isbn=${encodeURIComponent(book.isbn)}`;
                        link.textContent = book.name;
                        item.appendChild(link);
                        list.appendChild(item);
                    });
                } else {
                    console.error('Unexpected data structure:', data);
                }
            })
            .catch(error => console.error('Error loading books:', error));
    }

    fetchBooks(); 
});




