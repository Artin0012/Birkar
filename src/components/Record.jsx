import { Box, Container, Typography } from "@mui/material"
import { styled } from "@mui/system"

const StyledContainer = styled(Container)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#ADD2C9',
    padding: '24px',
    borderRadius: '12px',
    marginTop: '48px'
  });

function Record() {
  return (
    <StyledContainer>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center'}}>
        <Typography component="h5" variant="h4" color={"#5EA3A3"} width={400} textAlign="center" >
            رکورد هاتو بشکن و در بهترین ها قرار بگیر
        </Typography>
        <Typography component="h5" variant="h4" color={"#5EA3A3"} width={400} textAlign="center" >
            <Typography component="span" variant="h4" color={"#fff"} ml={1}>کلیک کن</Typography>
            وبهترین ها و رتبه خودت رو در بازی ها ببین
        </Typography>
        </Box>
        <Box
            mr={10}
            component="img"
            sx={{
              height: 200,
              width: 400,
              maxHeight: { xs: 300, md: 350, lg: 400 },
              maxWidth: { xs: 600, md: 700, lg: 800 },
            }}
            alt="img hero"
            src="../../public/section.png"
          />
    </StyledContainer>
  )
}

export default Record