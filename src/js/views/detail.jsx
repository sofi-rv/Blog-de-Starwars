import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import {useParams} from 'react-router-dom'

const Detail =() =>{
    const params = useParams()
    const [search, setSearch] = useState({})
    console.log(params)
    const {store} = useContext(Context)
    const details =() =>{
        if(params.nature == "characters"){
            const searchFind = store.characters.find((item)=> item._id == params.id )
            setSearch(searchFind)
        }else{
            const searchFind = store.planets.find((item)=> item._id == params.id )
            setSearch(searchFind)
        }
    }
    useEffect(()=>{
        details()
    }, [])
    return(
        <>
       <div className="container mt-5 p-5 rounded">
                <div className="row">
                    <div className="col-6">
                        <img className="mx-auto d-block" style={{ height: "500px" }} src="..." alt="Card image cap"></img>
                    </div>
                    <div className="col-6">
                        <h1 className="text-dark d-flex justify-content-end pb-4">{search?.properties?.name}</h1>
                        <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row border-top border-secondary justify-content-center mt-2 pt-2 text-danger ">
                <div className="col-2 pt-2 ">Name <br /> {search?.properties?.name} </div>
                    <div className="col-2 pt-2"> {(params.nature == "characters" ? <>Birth Year <br /> {search?.properties?.birth_year}</> : <>Climate <br /> {search?.properties?.climate}</>)}</div>
                    <div className="col-2 pt-2"> {(params.nature == "characters" ? <>Gender <br /> {search?.properties?.gender}</> : <>Population <br /> {search?.properties?.population}</>)}</div>
                    <div className="col-2 pt-2"> {(params.nature == "characters" ? <>Height <br /> {search?.properties?.height}</> : <>Orbital Period <br /> {search?.properties?.orbital_period}</>)}</div>
                    <div className="col-2 pt-2"> {(params.nature == "characters" ? <>Skin Color <br /> {search?.properties?.skin_color}</> : <>Rotation Period <br /> {search?.properties?.rotation_period}</>)}</div>
                    <div className="col-2 pt-2"> {(params.nature == "characters" ? <>Eye Color <br /> {search?.properties?.eye_color}</> : <>Diameter <br /> {search?.properties?.diameter}</>)}</div>
                </div>
            </div>
        </>
    )
}
export default Detail;