//https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/ documendation 
import React, { useState,useEffect } from 'react'
import axios from 'axios';


const SearchFilter = () => {

    const [searchInput, setSearchInput] = useState('');     //Create a state for the search input.
    const [filterdResult, setFilterdResult] = useState([]);
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItem = (searchValue) => {                 // create a function that will handle our search functionality.
        setSearchInput(searchValue)                         // let's receive the search query into the function
        if (searchInput !== '') {     //if the search term's length is greater than 1, we will show filtered data. Otherwise we will show all the data which is stored in the API Data state
            const filterdData= APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            });
            setFilterdResult(filterdData)
        }
        else {
            setFilterdResult(APIData);
        }
    }

    return (
         <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">User Search</h1>

      <input
        type="text"
        placeholder="Search by name or email..."
        onChange={(e) => searchItem(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filterdResult.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-sky-600">{item.name}</h2>
            <p className="text-gray-600">{item.email}</p>
            <p className="text-sm text-gray-400 mt-1">Username: {item.username}</p>
          </div>
        ))}
      </div>
    </div>
    )
}

export default SearchFilter;