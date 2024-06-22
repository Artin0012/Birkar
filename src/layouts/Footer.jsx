import { Box, Paper, Typography } from "@mui/material"
import { styled } from "@mui/system"
import Container from '@mui/material/Container';

import GroupIcon from '@mui/icons-material/Group';


const StyledContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column'
});
const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gapY:'18px'
});
function Footer() {
  return (
    <Paper sx={{ background: '#ADD2C9', padding: '30px', position: 'relative', width: '100%', marginTop: '48px' }}>
      <StyledContainer>
        <StyledBox>
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between', gap: '8px', width: '50%', padding: '0 10px' }}>
            <GroupIcon sx={{ width: '45px', height: '45px', color: '#5EA3A3' }}></GroupIcon>
            <Typography component="h5" variant="h6" color={"#5EA3A3"}>دانشجویان برتر</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between', gap: '8px', width: '50%', padding: '0 10px' }}>
            <GroupIcon sx={{ width: '45px', height: '45px', color: '#5EA3A3' }}></GroupIcon>
            <Typography component="h5" variant="h6" color={"#5EA3A3"}>دانشجویان برتر</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between', gap: '8px', width: '50%', padding: '0 10px' }}>
            <GroupIcon sx={{ width: '45px', height: '45px', color: '#5EA3A3' }}></GroupIcon>
            <Typography component="h5" variant="h6" color={"#5EA3A3"}>دانشجویان برتر</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between', gap: '8px', width: '50%', padding: '0 10px' }}>
            <GroupIcon sx={{ width: '45px', height: '45px', color: '#5EA3A3' }}></GroupIcon>
            <Typography component="h5" variant="h6" color={"#5EA3A3"}>دانشجویان برتر</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between', gap: '8px', width: '50%', padding: '0 10px' }}>
            <GroupIcon sx={{ width: '45px', height: '45px', color: '#5EA3A3' }}></GroupIcon>
            <Typography component="h5" variant="h6" color={"#5EA3A3"}>دانشجویان برتر</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between', gap: '8px', width: '50%', padding: '0 10px' }}>
            <GroupIcon sx={{ width: '45px', height: '45px', color: '#5EA3A3' }}></GroupIcon>
            <Typography component="h5" variant="h6" color={"#5EA3A3"}>دانشجویان برتر</Typography>
          </Box>
        </StyledBox>
        <Box mt={4}>
        <Typography component="h5" variant="h5" color={"#5EA3A3"} textAlign="center">با تشکر از کسانی که تو این پروژه به ما کمک کردند</Typography>
        </Box>
      </StyledContainer>
    </Paper>
  )
}

export default Footer