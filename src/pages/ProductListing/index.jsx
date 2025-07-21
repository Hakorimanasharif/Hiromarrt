import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../../componets/ProductItem';
import ProductItemListView from '../../components/ProductItemListView';
import Button from '@mui/material/Button';
import { IoGridSharp } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';

const ProductListing = () => {
  const [itemView, setItemView] = useState('grid');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <section style={{ width: '100%', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '100%', padding: '0 20px' }}>
        <Breadcrumbs aria-label="breadcrumb" style={{ padding: '20px 0' }}>
          <Link underline='hover' color='inherit' href="/" className='link transition'>
            Home
          </Link>
          <Link underline='hover' color='inherit' href="/" className='link transition'>
            Fashion           
          </Link>
        </Breadcrumbs>   
                        
        <div style={{ background: "#fff", marginTop: "30px", width: '100%' }}>
          <div style={{ display: 'flex', width: '100%', padding: "10px 0", gap: "20px" }}>
            <div style={{ 
              background: "#fff", 
              padding: "10px", 
              width: "20%",
              minWidth: "250px",
              position: 'sticky',
              top: '20px',
              alignSelf: 'flex-start'
            }}>
              <Sidebar/>
            </div>

            <div className="itemViewActions" style={{ width: "80%", paddingTop: "10px", paddingBottom: "10px" }}>
              <div style={{ 
                background: "#f1f1f1", 
                width: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: "12px",
                marginBottom: '10px',
                borderRadius: '5px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: "0px" }}>
                  <Button 
                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === "list" ? '!bg-gray-200' : ''}`} 
                    onClick={() => setItemView('list')}
                  >
                    <LuMenu className='text-[rgba(0,0,0,0.7)]'/>
                  </Button>
                  <Button 
                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === "grid" ? '!bg-gray-200' : ''}`}
                    onClick={() => setItemView('grid')}
                  >
                    <IoGridSharp className='text-[rgba(0,0,0,0.7)]'/>
                  </Button>
                  <span style={{ padding: "10px", fontSize: '14px', fontWeight: 500, color: 'rgba(0,0,0,0.7)' }}>
                    There are 27 products.
                  </span>
                </div>

                <div className='col2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: "10px", paddingRight: "20px" }}>
                  <span style={{ padding: "10px", fontSize: '14px', fontWeight: 500, color: 'rgba(0,0,0,0.7)' }}>
                    Sort By
                  </span>
                  <Button className='!border-[#000]'
                    onClick={handleMenuClick}
                    style={{ color: 'rgba(0,0,0,0.7)', textTransform: 'none', background: "#fff", fontSize: '12px', fontWeight: "700" }}
                  >
                    Sales, highest to lowest
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose} style={{ color: 'rgba(0,0,0,0.7)', textTransform: 'none', background: "#fff", fontSize: '13px', fontWeight: "700" }}>Sales, highest to lowest</MenuItem>
                    <MenuItem onClick={handleMenuClose} style={{ color: 'rgba(0,0,0,0.7)', textTransform: 'none', background: "#fff", fontSize: '13px', fontWeight: "700" }}>Relevance</MenuItem>
                    <MenuItem onClick={handleMenuClose} style={{ color: 'rgba(0,0,0,0.7)', textTransform: 'none', background: "#fff", fontSize: '12px', fontWeight: "700" }}>Name,A to Z</MenuItem>
                    <MenuItem onClick={handleMenuClose} style={{ color: 'rgba(0,0,0,0.7)', textTransform: 'none', background: "#fff", fontSize: '12px', fontWeight: "700" }}>Name,Z to A</MenuItem>
                    <MenuItem onClick={handleMenuClose} style={{ color: 'rgba(0,0,0,0.7)', textTransform: 'none', background: "#fff", fontSize: '12px', fontWeight: "700" }}>Price,low to high</MenuItem>
                    <MenuItem onClick={handleMenuClose} style={{ color: 'rgba(0,0,0,0.7)', textTransform: 'none', background: "#fff", fontSize: '12px', fontWeight: "700" }}>Price,high to low</MenuItem>
                  </Menu>
                </div>
              </div>

              <div style={{ display: itemView === 'grid' ? 'grid' : 'block', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: "15px" }}>
                {itemView === 'grid' ? (
                  <>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                  </>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <ProductItemListView/>
                    <ProductItemListView/>
                    <ProductItemListView/>
                    <ProductItemListView/>
                    <ProductItemListView/>
                    <ProductItemListView/>
                    <ProductItemListView/>
                    <ProductItemListView/>
                    <ProductItemListView/>
                    <ProductItemListView/>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-center" style={{ marginTop: "30px" }}>
                <Pagination count={10} showFirstButton showLastButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;