import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCurrentRepo } from "../action/repos";

const Card = (props)=>{
    const {username, reponame}=useParams()
    const [repo, setRepo] = useState({owner:{}});
    useEffect(()=>{
        getCurrentRepo(username,reponame,setRepo)
    },[])
    return(
        <div>
            <button onClick={()=>props.history.goBack()}>Back</button>
            <div className="card">
                <img src={repo.owner} alt="" />
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
        </div>
    )

}
export default Card