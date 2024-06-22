import { Box, Typography } from '@mui/material';
import { styled } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import GroupIcon from '@mui/icons-material/Group';
import QuizIcon from '@mui/icons-material/Quiz';

const StyledContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap', // Added to wrap items in smaller screens
  gap: '16px', // Added gap for spacing in smaller screens
});

function Header() {
  return (
    <AppBar sx={{ background: 'transparent', boxShadow: '0', padding: '15px 0', position: 'static', marginBottom: '24px' }}>
      <Box sx={{
        position: 'absolute', 
        width: { xs: '0px', sm: '600px', md: '900px' }, 
        height: { xs: '0px', sm: '600px', md: '900px' }, 
        background: '#ADD2C9', 
        borderRadius: '50%',
        zIndex: '0',
        top: { xs: '0px', sm: '-200px', md: '-350px' },
        right: { xs: '0px', sm: '-200px', md: '-200px' },
        '@media (min-width: 1550px)': {
          display: 'none',
        },
      }}>
      </Box>
      <StyledContainer maxWidth="xl">
        <Box sx={{ zIndex: '99', textAlign: { xs: 'center', md: 'left' }, width: { xs: '100%', md: 'auto' } }}>
          <Typography component="h5" variant="h5" color={"#5EA3A3"}>آزمون انلاین</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px', zIndex: '99', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GroupIcon sx={{ width: '30px', height: '30px', color: '#5EA3A3' }}></GroupIcon>
            <Typography component="h5" variant="h6" color={"#5EA3A3"}>دانشجویان برتر</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <QuizIcon sx={{ width: '30px', height: '30px', color: '#5EA3A3' }}></QuizIcon>
            <Typography component="h5" variant="h6" color={"#5EA3A3"}>ازمون ها</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LoginIcon sx={{ width: '30px', height: '30px', color: '#5EA3A3' }}></LoginIcon>
            <Typography component="h5" variant="h6" color={"#5EA3A3"}>ورود</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: '99' }}>
          <AccountCircleIcon sx={{ width: '30px', height: '30px', color: '#5EA3A3' }}></AccountCircleIcon>
          <Typography component="h5" variant="h6" color={"#5EA3A3"}>پروفایل</Typography>
        </Box>
      </StyledContainer>
    </AppBar>
  );
}

export default Header;
