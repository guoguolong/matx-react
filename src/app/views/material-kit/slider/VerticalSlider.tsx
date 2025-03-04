import React from 'react';
import { Box } from '@mui/system';
import { Slider, Typography } from '@mui/material';

function valuetext(value: any) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

export default function VerticalSlider() {
  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
        Temperature
      </Typography>
      <Box height={300}>
        <Slider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          aria-labelledby="vertical-slider"
        />
        <Slider
          disabled
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          aria-labelledby="vertical-slider"
        />
        <Slider
          orientation="vertical"
          defaultValue={[20, 37]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
      </Box>
    </React.Fragment>
  );
}
