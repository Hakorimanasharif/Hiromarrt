import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Button  from '@mui/material/Button'
import { FiMinusSquare } from 'react-icons/fi'
import { FaRegSquare, FaPlusSquare, FaMinusSquare } from 'react-icons/fa'

export const CateggoryCollapse = () => {
    const [submenuIndex,setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex,setInnerSubmenuIndex]= useState (null);

    const commonBtnClass = 'block w-full text-left text-[15px] font-[300] no-underline text-black hover:text-black hover:bg-gray-100 transition pl-2';

    const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
    setInnerSubmenuIndex(null); // Reset child if parent is closed
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };
  return (
   <>
     <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Link to="/" className="w-full">
            <Button
              className={commonBtnClass}
              sx={{ color: 'black', '&:hover': { color: 'black', backgroundColor: '#f3f4f6' } }}
              onClick={() => openSubmenu(0)}
            >
              Fashion
            </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FaRegMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {/* Submenu: Apparel */}
            {submenuIndex === 0 && (
              <ul className="submenu absolute top-[110%] left-0 w-full pl-3 z-10 bg-white shadow-md rounded-md py-2">
                <li className="list-none relative pt-2">
                  <Button
                    className={commonBtnClass}
                    sx={{ color: 'black', '&:hover': { color: 'black', backgroundColor: '#f3f4f6' } }}
                    onClick={() => openInnerSubmenu(0)}
                  >
                    Apparel
                  </Button>

                  {innerSubmenuIndex === 0 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {/* Third-level submenu: products */}
                  {innerSubmenuIndex === 0 && (
                    <ul className="product-submenu w-full pl-3 mt-2">
                      {['Smart Tablet', 'Crepe T-shirt', 'Leather Watch', 'Rolling Diamond'].map(
                        (item, index) => (
                          <li key={index} className="list-none relative pt-2 mb-2">
                            <Link
                              to="/home-kitchen"
                              className={`${commonBtnClass} !text-black`}
                              style={{ textDecoration: 'none' }}
                            >
                              {item}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
   </>
  )
}

export default CateggoryCollapse
