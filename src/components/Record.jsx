import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#ADD2C9',
  padding: '24px',
  borderRadius: '12px',
  marginTop: '48px',
  flexDirection: 'column', // Added to make it column direction by default
  '@media (min-width:600px)': { // Apply styles for larger screens
    flexDirection: 'row',
  },
});

function Record() {
  return (
    <StyledContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', textAlign: 'center' }}>
        <Typography 
          component="h5" 
          variant="h4" 
          color={"#5EA3A3"} 
          sx={{
            width: { xs: '100%', sm: 400 }, 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
          }}
        >
          رکورد هاتو بشکن و در بهترین ها قرار بگیر
        </Typography>
        <Typography 
          component="h5" 
          variant="h4" 
          color={"#5EA3A3"} 
          sx={{
            width: { xs: '100%', sm: 400 }, 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
          }}
        >
          <Typography component="span" variant="h4" color={"#fff"} ml={1}>کلیک کن</Typography>
          و بهترین ها و رتبه خودت رو در بازی ها ببین
        </Typography>
      </Box>
      <Box
        component="img"
        sx={{
          height: { xs: 150, sm: 200, md: 350, lg: 400 },
          width: { xs: '100%', sm: 300, md: 400 },
          mt: { xs: 2, sm: 0 }, // Add margin top for smaller screens
        }}
        alt="img hero"
        src="../../public/section.png"
      />
    </StyledContainer>
  );
}

export default Record;
