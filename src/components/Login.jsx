import { Box, Button, Container, Typography } from "@mui/material"
import { styled } from "@mui/system"

const StyledContainer = styled(Container)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '48px'
  });

function Login() {
  return (
    <StyledContainer>
          <Typography component="h5" variant="h3" color={"#5EA3A3"} width={500} textAlign="center" >با ورود و ثبت نام مارا در ادامه ره حمایت کنید و تخفیف های خارقل عاده ای رو به دنبال داشته باشد</Typography>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'center'}}>
          <Button sx={{color: '#5EA3A3', padding: '6px 52px', border: '1px solid #ADD2C9', borderRadius: '6px', '&:hover': {background: '#ADD2C9',},}} variant="text">ثبت نام</Button>
          <Button sx={{color: '#5EA3A3', padding: '6px 52px', border: '1px solid #ADD2C9', borderRadius: '6px', '&:hover': {background: '#ADD2C9',},}} variant="text">ورود</Button>
          </Box>
    </StyledContainer>
  )
}

export default Login