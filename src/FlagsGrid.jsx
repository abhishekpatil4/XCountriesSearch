import { useState, useEffect } from "react"
import axios from "axios";
import "./flags.css"
import { FlagCard } from "./FlagCard";
export const FlagsGrid = () => {
    const [data, setData] = useState();
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
    return <>
        <div className="grid-container">
            {
                data && data.map((d) =>
                    <div className="grid-item">
                        <FlagCard url={d.flags.png} name={d.name.official}/>
                    </div>
                )
            }
        </div>
    </>
}