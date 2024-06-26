import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';

const StyledGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const StyledContainer = styled(Container)({
  width: '100%',
  padding: '0',
  marginTop: '48px',
});
const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '60px',
  flexWrap: 'wrap',
});

function Hero() {
  return (
    <StyledContainer maxWidth="lg">
      <StyledGrid container sx={{ mt: 8 }}>
        <Grid item xs={12} md={6} textAlign="center" zIndex="99">
          <Typography textAlign="center" mb={6} component="h3" variant="h2" color="#5EA3A3">
            !!خوش آمدید بهترین هارو برایتان ارزو مندیم
          </Typography>
          <StyledBox component="div">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', zIndex: '99' }}>
              <PeopleIcon sx={{ width: '40px', height: '40px', color: '#5EA3A3' }} />
              <Typography textAlign="center" component="span" variant="h6" color="#5EA3A3">1.446</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', zIndex: '99' }}>
              <BookIcon sx={{ width: '40px', height: '40px', color: '#5EA3A3' }} />
              <Typography textAlign="center" component="span" variant="h6" color="#5EA3A3">2.452</Typography>
            </Box>
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={6} zIndex="9">
          <Box
            mr={{ xs: 0, md: 10 }}
            component="img"
            sx={{
              height: { xs: 300, md: 350, lg: 400, },
              width: { xs: '100%', md: '100%', lg: 800 },
            }}
            alt="img hero"
            src="../../public/hero.png"
          />
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
}

export default Hero;
