// Your code here
const listHolder = document.getElementById('films')
document.addEventListener('DOMContentLoaded', ()=>{
    fetchMovies()
})

//Create fetch function
function fetchMovies(){
    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie)
        });
    })
}
function displayMovie(movie){
    
    const li = document.createElement('li')
    li.style.cursor = "pointer";
    li.textContent = movie.title;
    listHolder.appendChild(li)
    li.addEventListener('click',function(){
        let children  = listHolder.children
        for (let i = 0; i<children.length; i++){
            fetch(`http://localhost:3000/films/${movie.id}`)
            .then(resp => resp.json())
            .then(childMovie =>{
                const preview = document.getElementById('poster')
                preview.src = childMovie.poster;

                const movieTitle = document.querySelector('#title');
                movieTitle.textContent = childMovie.title;
                const movieTime = document.querySelector('#runtime');
                movieTime.textContent = childMovie.runtime;
                const movieDescription = document.querySelector('#film-info');
                movieDescription.textContent = childMovie.description;
                const showTime = document.querySelector('#showtime')
                showTime.textContent = childMovie.showtime;
                const tickets  = document.querySelector('#ticket-num')
                tickets.textContent = childMovie.tickets_sold;

            })

        }
        
    })
}
