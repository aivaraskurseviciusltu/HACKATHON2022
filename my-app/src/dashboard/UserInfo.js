import { Avatar, Box, Typography } from '@mui/material'
import UserImg from '../images/Aivaras.JPG'

const UserInfo = ({ display }) => {

    return (
        <Box display={display ? 'flex' : 'none'} sx={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', my: 3 }}>
            <Typography sx={{ my: 2 }}>Welcome back Aivaras</Typography>
            <Avatar alt="Aivaras" src={UserImg} sx={{ width: 70, height: 70 }} />
        </Box>
    )
}

export default UserInfo