import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RangeSlider = () => {
  const [value, setValue] = useState([1000, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box  sx={{ 
      width: 250, 
      p: 2,
      ml: '-30px' // Left margin as requested
    }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={10000}
        step={100}
        disableSwap
        sx={{
          color: '#ff5252',
          height: 4, // Reduced height of the line
          '& .MuiSlider-track': {
            height: 4,
          },
          '& .MuiSlider-rail': {
            height: 4,
          },
          '& .MuiSlider-thumb': {
            height: 16,
            width: 16,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            '&:hover, &.Mui-focusVisible': {
              boxShadow: '0 0 0 6px rgba(255, 82, 82, 0.16)',
            },
          },
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Typography variant="body2">Min: Rs {value[0]}</Typography>
        <Typography variant="body2">Max: Rs {value[1]}</Typography>
      </Box>
    </Box>
  );
};

export default RangeSlider;
