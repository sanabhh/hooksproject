import CardMovies from "./CardMovies"

const ListMovies=({movies,setMovies})=>{
    return(
        <div className="bou">
            {
                movies.map(el=> <CardMovies el={el} movies={movies} setMovies={setMovies}/>)
            }
        </div>
    )
}

export default ListMovies