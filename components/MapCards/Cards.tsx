import Image from 'next/image';
import Touch from '../../public/assets/images/search.png';
import Search from '../../public/assets/images/selection.png';
import Location from '../../public/assets/images/location.png';
import { Box, Stack, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Cards = () => {
  return (

    <Box sx={{ width: '100%'}} display='flex' justifyContent='center' alignItems='center' gap={1} >

        {/* 1 */}
        <Box>
            <Stack direction='row' spacing={1} display='flex' justifyContent='center' alignItems='center'>

                <Image src={Touch} width={30} alt='touch' />

                <Typography  sx={{ fontSize: {md: '20px', xs: '15px'}}}>Search</Typography>

            </Stack>
        </Box>


        <ArrowForwardIosIcon />


         {/* 2 */}
         <Box>
            <Stack direction='row' spacing={1} display='flex' justifyContent='center' alignItems='center'>

                <Image src={Search} width={30} alt='touch' />

                <Typography variant='body1'>Select</Typography>

            </Stack>
        </Box>


        <ArrowForwardIosIcon />


         {/* 3 */}
         <Box>
            <Stack direction='row' spacing={1} display='flex' justifyContent='center' alignItems='center'>

                <Image src={Location} width={30} alt='touch' />

                <Typography variant='body1'>Analyze</Typography>

            </Stack>
        </Box>
    
    </Box>
  )
}

export default Cards