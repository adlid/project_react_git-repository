import './Repo.css';
import { NavLink } from 'react-router-dom';
const Repo =(props)=>{ 
    const repo = props.repos
    return(
        <div className={repo}>
            <div className="repo-header">
                <div className="repo-header-name">
                  <NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name} </NavLink>   
                </div>
                <div className="repo-header-star">
                    {repo.stargazers_count}
                </div>
            </div>
            <div className="repo-last-commit">
                    {repo.update_at}
            </div>
            <a href={repo.html_url} className="repo-link">Link to repository</a>
        </div>
    )
}
export default Repo