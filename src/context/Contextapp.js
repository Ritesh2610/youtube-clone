
import React, { createContext, useState, useEffect } from 'react'
import { fetchDataFromApi } from "../utils/api"

export const Context= createContext()
export function Contextapp(props) {
    const [loading, setloading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [selectCategories, setSelectCategories] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)


    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
        fetchSelectedCategoryData(selectCategories)

        // console.log(process.env.REACT_APP_YOUTUBE_KEY);
    }, [selectCategories])
    const fetchSelectedCategoryData=(query)=>{
        setloading(true)
        fetchDataFromApi(`search/?q=${query}`).then((res)=>{
            setSearchResults(res?.data?.contents)
            // console.log(res);
            // console.log(searchResults);
            setloading(false)
        })
       
    }
    return (
        <Context.Provider value={{
            loading,
            setloading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}

