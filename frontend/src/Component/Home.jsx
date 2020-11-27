import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getEmployee } from '../Redux/EmployeeReducer/actions'
import Pagination from '@material-ui/lab/Pagination';
import { Cards } from './Cards'

export const Home = () => {
    let allQuery = new URLSearchParams(useLocation().search)
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const data = useSelector(state => state.employee.employee)
    const totalPage = useSelector(state => state.employee.totalPage)
    const [employee, setEmployee] = useState([])
    // const isAuth = useSelector(state => state.auth.isAuth)
    const history = useHistory()
    const [filter, setFilter] = useState(allQuery.get("filter") || null)
    const [sort, setSort] = useState(allQuery.get("sort") ||null)
    const [page, setPage] = useState(allQuery.get("page") || 1)

    useEffect(() => {
        setEmployee(data)
    }, [data])

   
    useEffect(() => {
            dispatch(getEmployee("5fc0c58316c2712be0769add",page,filter,sort))
            history.push(`/dashboard?page=${page}&filter=${filter}&sort=${sort}`)
    }, [user,page,filter,sort])

    // useEffect(() => {
    //     if(!isAuth){
    //         return history.push('/')
    //     }
    // }, [isAuth])

    
    const handleChange = (event, value) => {
        setPage(value);
      };
    
    return (
        <div>
            <div style={{width:"60%", display:"flex",justifyContent:"space-around", margin:"20px auto"}}>
                <Link to="/add" ><button>Add</button></Link>
                <select value={filter} onChange={(e)=> setFilter(e.target.value)}>Filter
                <option value={`${null}`}>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
                <select value={sort} onChange={(e)=> setSort(e.target.value)}>Filter
                <option value={`${null}`}>Sort By</option>
                <option value="asc">latest</option>
                <option value="desc">older</option>
                </select>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <Pagination count={totalPage} page={page} onChange={handleChange} />
            </div>
            {employee && employee.map(item => <Cards {...item} />)}
        </div>
    )
}
