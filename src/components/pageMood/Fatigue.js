import React, { useState, useEffect} from 'react'; 
import Axios from 'axios'

const API_ID = '6b74c366'
const API_KEY = '4819294e40eaccde885e836d49f610d0'


const Fatigue = () => {
    const [query, setQuery] = useState ('')

    useEffect(() => {
        getData = () => {
            Axios
            .get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
            .then(response => setQuery({recipe : response.data.hits}))
        }
    })
        return (
            <>
                {}
            </>
        )}
        

export default Fatigue
