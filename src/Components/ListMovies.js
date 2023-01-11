import CardMovies from "./CardMovies"
import FilterMovie from "./FilterMovie"

const ListMovies=({movies,setMovies,titre,etoile,setTitre,setEtoile})=>{
    const x =  movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>=etoile).map(el=> <CardMovies el={el} movies={movies} setMovies={setMovies}/>)
    return(
        <div>
            <FilterMovie setTitre={setTitre} setEtoile={setEtoile} titre={titre} etoile={etoile}/>
            <div className="bou">
            {
                x.length === 0 ? <h1>Not Found</h1> : x 
            }
        </div>
        </div>
       
    )
}

export default ListMovies