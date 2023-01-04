import CardMovies from "./CardMovies"

const ListMovies=({movies,setMovies,titre,etoile})=>{
    const x =  movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>=etoile).map(el=> <CardMovies el={el} movies={movies} setMovies={setMovies}/>)
    return(
        <div className="bou">
            {
                x.length === 0 ? <h1>Not Found</h1> : x 
            }
        </div>
    )
}

export default ListMovies