import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from 'react-icons/io5';
import { FaRegPlusSquare, FaRegMinusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
    setInnerSubmenuIndex(null); // Reset child if parent is closed
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  const commonBtnClass =
    'block w-full text-left text-[15px] font-[300] no-underline text-black hover:text-black hover:bg-gray-100 transition pl-2';

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel bg-white h-full">
      <h3 className="p-3 pl-[10px] mt-[18px] text-[16px] font-[400] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp
          onClick={() => props.openCategoryPanel(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Button
              className={commonBtnClass}
              sx={{ color: 'black', '&:hover': { color: 'black', backgroundColor: '#f3f4f6' } }}
              onClick={() => openSubmenu(0)}
            >
              Fashion
            </Button>

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
    </Box>
  );

  return (
    <Drawer open={props.isOpenCatPanel} onClose={() => props.openCategoryPanel(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
