import { Box } from "@mui/material";


const UserImage = ({image, size="60px"}) =>{
    return (
        <Box width={size} height={size}>
            <img
            style={{objetFit:"cover", borderRadius:"50%"}}
            width={size}
            alt="user"
            src={`https://localhost:3001/assets/${image}`}
            />
            
        </Box>
    )
}

export default UserImage;