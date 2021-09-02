const errorDiv1 = document.getElementById('error-1');
const searchResult = document.getElementById('search-result');
// link creation with button
const searchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  if (searchText === '') {
    errorDiv1.innerText = `Search field cannot be empty`;
    return;
  }
  // clear data
  searchField.value = '';
  // load data
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
}
// display data
const displaySearchResult = books => {
const searchResult = document.getElementById('search-result');
  searchResult.innerHTML = `Search Result Found ${books.length}`;
  books?.forEach(book => {
    console.log(book);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
      <div class="card-body">
            <h5 class="card-title text-center">${book.title ? book.title : 'No result found'}</h5>
            <h5 class="card-title text-center">Author: ${book.author_name.splice(0, 2) ? book.author_name.splice(0, 2) : 'No result Found'}</h5>
            <h5 class="card-title text-center">First published in: ${book.first_publish_year} 
             
              Publisher: ${book.publisher.splice(0, 2) ? book.publisher.splice(0, 2) : 'No result found'}</h5>
      </div>
    </div>
  
    `;
    searchResult.appendChild(div);
  });
};





