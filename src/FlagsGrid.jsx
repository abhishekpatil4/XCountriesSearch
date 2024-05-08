import { useState, useEffect } from "react"
import axios from "axios";
import "./flags.css"
import { FlagCard } from "./FlagCard";
export const FlagsGrid = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    useEffect(() => {
        const getData = async () => {
            try {
                const url = "https://restcountries.com/v3.1/all";
                const res = await axios.get(url);
                console.log(res.data[0]);
                setData(res.data);
            } catch (e) {
                console.log(e.response);
            }
        }
        getData();
    }, [])
    
    const filteredData = data?.filter((d) => 
        d.name.official.toLowerCase().includes(search.toLocaleLowerCase())
    )
    
    return <>
    <div className="search-bar-div">
        <input type="text" placeholder="Search Country" onChange={(e) => setSearch(e.target.value)} value={search}/>
    </div>
        <div className="grid-container">
            {
                filteredData && filteredData.map((d) =>
                    <div className="grid-item">
                        <FlagCard url={d.flags.png} name={d.name.official}/>
                    </div>
                )
            }
        </div>
    </>
}