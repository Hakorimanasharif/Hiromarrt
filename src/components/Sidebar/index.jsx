import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css";
import { Collapse } from 'react-collapse';
import { FaAngleDown } from 'react-icons/fa6';
import Button from "@mui/material/Button";
import RangeSlider from '../RangeSlider';
import Rating from '@mui/material/Rating'

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);


  return (
    <aside style={{
      width: '250px',
      marginLeft : '-65px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRight: '1px solid #e0e0e0',
      height: '100vh',
      position: 'sticky',
      top: 0,
      overflowY: 'auto'
    }}>
      <div  className='box' style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3  style={{
          marginBottom: '2rem',
          fontSize: '16px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight : '10px'
        }}>
          Shop by Category
          <Button className='w-full !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto' 
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
            style={{ minWidth: 'auto', padding: '4px',color:'#333' }}
          >
            <FaAngleDown style={{
              transition: 'transform 0.3s',
              transform: isOpenCategoryFilter ? 'rotate(180deg)' : 'rotate(0)'
            }}/>
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll" style={{
            padding: '0 15px',
            position: 'relative',
            left: '-13px',
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Fashion" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Electronics" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Groceries" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Beauty" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Wellness" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Jewellery" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
          </div>
        </Collapse>
      </div> 


       <div  className='box' style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop : '20px',
        width : '220px',
        marginLeft: '-10px'
      }}>
        <h3  style={{
          marginBottom: '2rem',
          fontSize: '16px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight : '10px'
        }}>
          Availability
          <Button className='w-full !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto' 
            onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}
            style={{ minWidth: 'auto', padding: '4px',color:'#333' }}
          >
            <FaAngleDown style={{
              transition: 'transform 0.3s',
              transform: isOpenAvailFilter ? 'rotate(180deg)' : 'rotate(0)'
            }}/>
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailFilter}>
          <div className="scroll" style={{
            padding: '0 15px',
            position: 'relative',
            left: '-13px',
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Available (17)" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="InStock (10)" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Not Available (1)" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
          </div>
        </Collapse>
      </div> 

        <div  className='box' style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop : '20px',
        width : '220px',
        marginLeft: '-10px'
      }}>
        <h3  style={{
          marginBottom: '2rem',
          fontSize: '16px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight : '10px'
        }}>
          Size
          <Button className='w-full !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto' 
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
            style={{ minWidth: 'auto', padding: '4px',color:'#333' }}
          >
            <FaAngleDown style={{
              transition: 'transform 0.3s',
              transform: isOpenAvailFilter ? 'rotate(180deg)' : 'rotate(0)'
            }}/>
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll" style={{
            padding: '0 15px',
            position: 'relative',
            left: '-13px',
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="small" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Medium" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="Large" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />

            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="XL" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />


            <FormControlLabel 
              control={
                <Checkbox 
                  size="small" 
                  sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                  }}
                />
              } 
              label="XXL" 
              style={{width: '100%', marginLeft: 0, marginRight: 0}} 
            />

            
          </div>
        </Collapse>
      </div>


        <div  className='box' style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop : '20px',
        width : '220px',
        marginLeft: '-10px'
      }}>
        <h3  style={{
          marginBottom: '2rem',
          fontSize: '16px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight : '10px'
        }}>
          Filter By Price
        </h3>

        <RangeSlider/>  

        <div className="flex pt-2 pb-2 priceRange">
          
            </div>      
      </div>

       <div  className='box' style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop : '20px',
        width : '220px',
        marginLeft: '-10px'
      }}>
        <h3  style={{
          marginBottom: '2rem',
          fontSize: '16px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight : '10px'
        }}>
          Filter By Rating
        </h3>  
       <div className="w-full cursor-pointer">
         <Rating name="size-small" defaultValue={5} size="small" readOnly  className='cursor-pointer'/>
       </div>

       <div className="w-full">
         <Rating name="size-small" defaultValue={4} size="small" readOnly />
       </div>

       <div className="w-full">
         <Rating name="size-small" defaultValue={3} size="small" readOnly />
       </div>

       <div className="w-full">
         <Rating name="size-small" defaultValue={2} size="small" readOnly />
       </div>

       <div className="w-full">
         <Rating name="size-small" defaultValue={1} size="small" readOnly />
       </div>

      
        

        <div className="flex pt-2 pb-2 priceRange">
          </div>   
      </div>

    </aside>
  );
};

export default Sidebar;