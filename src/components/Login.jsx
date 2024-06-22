import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '48px',
  flexDirection: 'column', // Added to make it column direction by default
  gap: '20px', // Added gap between elements
  '@media (min-width:600px)': { // Apply styles for larger screens
    flexDirection: 'row',
  },
});

function Login() {
  return (
    <StyledContainer>
      <Typography 
        component="h5" 
        variant="h3" 
        color={"#5EA3A3"} 
        sx={{
          width: { xs: '100%', sm: 500 }, 
          textAlign: 'center',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
        }}
      >
        با ورود و ثبت نام مارا در ادامه ره حمایت کنید و تخفیف های خارق العاده ای رو به دنبال داشته باشد
      </Typography>
      <Box 
        sx={{
          display: 'flex', 
          flexDirection: 'column', 
          gap: '18px', 
          alignItems: 'center',
          width: { xs: '100%', sm: 'auto' }, // Responsive width
        }}
      >
        <Button 
          sx={{
            color: '#5EA3A3', 
            padding: '6px 52px', 
            border: '1px solid #ADD2C9', 
            borderRadius: '6px', 
            '&:hover': { background: '#ADD2C9' },
            width: { xs: '80%', sm: 'auto' }, // Responsive width
          }} 
          variant="text"
        >
          ثبت نام
        </Button>
        <Button 
          sx={{
            color: '#5EA3A3', 
            padding: '6px 52px', 
            border: '1px solid #ADD2C9', 
            borderRadius: '6px', 
            '&:hover': { background: '#ADD2C9' },
            width: { xs: '80%', sm: 'auto' }, // Responsive width
          }} 
          variant="text"
        >
          ورود
        </Button>
      </Box>
    </StyledContainer>
  );
}

export default Login;
