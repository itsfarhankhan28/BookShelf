import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Loader = () => {
  return (
    <div className='mx-auto flex flex-wrap gap-10 '>
        <Box style={{ width: 350 }}>
            <Skeleton width={350} height={200} variant='rounded' animation="wave" />
        </Box>
        <Box style={{ width: 350 }}>
            <Skeleton width={350} height={200} variant='rounded' animation="wave" />
        </Box>
        <Box style={{ width: 350 }}>
            <Skeleton width={350} height={200} variant='rounded' animation="wave" />
        </Box>
    </div>
  )
}

export default Loader
