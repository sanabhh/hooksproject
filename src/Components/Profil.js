import { Link, useParams } from "react-router-dom"

const Profil=({movies})=>{
    const {djeja} = useParams()
    const found = movies.find(el=> el.id == djeja)
    // console.log(found)
    return(
        <div>
            <h3>{found.title}</h3>
            <iframe width="560" height="315" src={found.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            {/* <h4>{found.age}</h4>
            <a><Link to='/'>Return Home</Link></a> */}
        </div>
    )
}

export default Profil