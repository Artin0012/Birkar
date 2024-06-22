import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';

const cards = [
  { id: 1, title: 'فوتبالی', content: 'استعدادهای فوتبال خود را امتحان کنید بهترین هارو بارتان ارزومندیم' },
  { id: 2, title: 'فوتبالی', content: 'استعدادهای فوتبال خود را امتحان کنید بهترین هارو بارتان ارزومندیم' },
  { id: 3, title: 'فوتبالی', content: 'استعدادهای فوتبال خود را امتحان کنید بهترین هارو بارتان ارزومندیم' },
  { id: 4, title: 'فوتبالی', content: 'استعدادهای فوتبال خود را امتحان کنید بهترین هارو بارتان ارزومندیم' },
  { id: 5, title: 'فوتبالی', content: 'استعدادهای فوتبال خود را امتحان کنید بهترین هارو بارتان ارزومندیم' },
  { id: 6, title: 'فوتبالی', content: 'استعدادهای فوتبال خود را امتحان کنید بهترین هارو بارتان ارزومندیم' },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <Box sx={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Button onClick={next} sx={{ minWidth: 'auto', background: '#ADD2C9', borderRadius: '50%' }}>
        <NavigateNextIcon color='#5EA3A3'></NavigateNextIcon>
      </Button>
      <Button onClick={previous} sx={{ minWidth: 'auto', background: '#ADD2C9', borderRadius: '50%' }}>
        <NavigateBeforeIcon color='#5EA3A3'></NavigateBeforeIcon>
      </Button>
    </Box>
  );
};

const Slider = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Carousel
        responsive={responsive}
        arrows={false}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        renderButtonGroupOutside
      >
        {cards.map((card) => (
          <Card key={card.id} sx={{ margin: 2, marginTop: '48px' }}>
            <CardContent sx={{display: 'flex', alignItems: 'center' ,justifyContent: 'center', flexDirection: 'column', gap: '24px'}}>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <Typography variant="h6" component="span" color="#5EA3A3">
                  ورزشی
                </Typography>
                <Box
                  component="img"
                  sx={{
                    height: 40,
                    width: 40,
                    borderRadius: '50%'
                  }}
                  alt="img hero"
                  src="../../public/footbal.jpg"
                />
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: 'column', gap: '8px'}}>
                <Typography variant="h4" component="h4" color="#5EA3A3">
                  {card.title}
                </Typography>
                <Typography variant="h4" component="h4" color="#5EA3A3">
                  {card.content}
                </Typography>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <BookIcon sx={{ width: '40px', height: '40px', color: '#5EA3A3' }} />
                <Typography textAlign={"center"} component="span" variant="h6" color={"#5EA3A3"}>2.452</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <PeopleIcon sx={{ width: '40px', height: '40px', color: '#5EA3A3' }} />
                <Typography textAlign={"center"} component="span" variant="h6" color={"#5EA3A3"}>2.452</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
