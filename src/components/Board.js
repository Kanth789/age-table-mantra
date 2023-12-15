import { useSelector } from "react-redux"
import Column from "./Column"
import { TextField } from "@mui/material"
import { useEffect, useState } from "react"

const Board = () =>{
    const userDetails = useSelector((state)=>state?.user?.data)
    const [searchInput,setSearchInput] = useState()
    const [searchData,setSearchData] = useState()
    const below18 = userDetails?.filter((eachItem)=>eachItem?.age <= 18)
    const userWhoseAgeIsBelowEighteen = below18?.sort((a,b)=>a.name.localeCompare(b.name))
    const userWhoseAgeIsAboveEighteen = userDetails?.filter((eachItem)=> eachItem?.age >= 19 && eachItem?.age <= 24  ).sort((a,b)=>a.name.localeCompare(b.name))
    const userWhoseAgeIsAboveTwentyFive = userDetails?.filter((eachItem)=>eachItem?.age >= 25 && eachItem?.age <= 44 ).sort((a,b)=>a.name.localeCompare(b.name))
    const userWhoseAgeIsAboveFourtyFive = userDetails?.filter((eachItem)=>eachItem?.age >= 45).sort((a,b)=>a.name.localeCompare(b.name))
    const handleSearch = (value) =>{
        if(value !== ''){
        const data = userDetails.filter((item)=>item.name.includes(value))
        setSearchData(data)
        }else{
            setSearchData([])
        }
    }
    useEffect(()=>{
        handleSearch(searchInput)
    },[searchInput])
return(
    <div className='border-solid border-2 grey rounded-md p-7 m-4'>
        <div>
            <TextField type="text" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder="Search here" />
            <div className="mt-10">
                {searchData?.map((eachItem)=>(
                <div>
            <div className="flex flex-col ">
            <span>{eachItem?.name}</span>
            <span>{eachItem?.email}</span>
            <span>{eachItem?.phone}</span>
            <span>{eachItem?.age}</span>
            </div>
            </div>))}
            </div>
        </div>
        <div className="flex flex-row'">
        <Column columnData={userWhoseAgeIsBelowEighteen} columnTitle="Age is below 18"/>
        <Column columnData={userWhoseAgeIsAboveEighteen} columnTitle="Age is 18 to 24"/>
        <Column columnData={userWhoseAgeIsAboveTwentyFive} columnTitle="Age is 25 to 44"/>
        <Column columnData={userWhoseAgeIsAboveFourtyFive} columnTitle="Age is above 45"/>
        </div>

    </div>
)
}
export default Board