
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../action/repos';
import {setCurrentPage} from '../../reducers/reposReducer'
import Repo from './Repo/Repo';
import './main.css';
import { useEffect, useState } from 'react';
import { createPages } from '../../utils/pagesCreator';

const Main =()=>{
    const dispatch = useDispatch();
    const repos = useSelector(state=>state.repos.items)
    const isFetching = useSelector(state=>state.repos.isFetching);
    const currentPage = useSelector(state=>state.repos.currentPage);
    const totalCount = useSelector(state=>state.repos.totalCount);
    const perPage = useSelector(state=>state.repos.perPage);
    const [searchValue, setSearchValue] = useState("")
    const pagesCount = Math.ceil(totalCount/perPage)
    const pages = []
    createPages(pages,pagesCount,currentPage)
    useEffect(()=>{
        dispatch(getRepos(searchValue, currentPage, perPage))
    },[currentPage])
    function searchHandler(){
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }
    function search(e){
        setSearchValue(e.target.value)
    }
    return(
        <div>
            <div className='search'>
                <input value={searchValue} onChange={()=>search()} type="text" className="search-input" />
                <button onClick={()=>searchHandler()} className="search-btn">Search</button>
            </div>
            {
                isFetching === false ? repos.map(repo=><Repo repos={repo}/>)
                :
                <div className="fetching">

                </div>
        }
        <div className="pages">
            {pages.map((page,index)=> 
            <span 
                key={index} 
                className={currentPage === page ? "current-page" :  "page"} 
                onClick={()=>{
                    console.log("ok")
                    return dispatch(setCurrentPage(page))}}
            >{page}</span> )}
        </div>
        </div>
    )
}
export default Main