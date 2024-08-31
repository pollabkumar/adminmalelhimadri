import React from 'react'
import { IoIosSearch } from "react-icons/io";
const SearchBox = () => {
  return (
    <div className='searchBox position-relative d-flex align-items-center'>
      <IoIosSearch className='mr-2'/>
      <input type='text' placeholder='search here...'/>
    </div>
  )
}

export default SearchBox