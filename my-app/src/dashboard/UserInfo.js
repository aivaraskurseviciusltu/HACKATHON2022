import { Avatar, Box, Typography } from '@mui/material'
import UserImg from '../images/Aivaras.JPG'

const UserInfo = ({ display }) => {

    return (
        <Box display={display ? 'flex' : 'none'} sx={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Avatar alt="Aivaras" src={UserImg} sx={{ width: 70, height: 70, mt: 1 }} />
            <Typography sx={{ mt: 1, fontWeight: 700 }}>Aivaras Stanaitis</Typography>
        </Box>
    )
}

export default UserInfo