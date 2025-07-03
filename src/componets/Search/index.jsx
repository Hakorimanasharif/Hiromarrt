import React from 'react';
import '../Search/style.css';
import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';

const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-[5px] relative mt-[20px] p-2">

      {/* Input field */}
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-full focus:outline-none bg-inherit pl-[20px] pr-[40px] rounded-[5px] border-none text-[15px]"
      />

      {/* Search icon inside the input (right side) */}
      <Button
        className="!absolute top-[8px] right-[6px] !min-w-[35px] !w-[35px] !h-[35px] !p-0 !m-0 !rounded-full bg-white shadow-sm"
      >
       <IoSearch style={{ color: '#2a2a2a', fontSize: '22px' }} />


      </Button>
    </div>
  );
};

export default Search;
