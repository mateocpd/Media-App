/* eslint-disable react-hooks/exhaustive-deps */
import {
    ManageAccountsOutlined,
    EditOulined,
    LocationOutlined,
    WorkOutlinedOutlined,
} from "@mui/icons-material";

import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const UserWidget = ({userId, picturePath}) =>{
    const [user, setUser] = useState(null);
    const {palette} = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const response = await fetch(`https://localhost:3001/users/${userId}`,
        {
            method: 'GET',
            headers: { Authorization : `Bearer ${token}`},
        });
        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUser();
    },[])

    if(!user){
        return(null);
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        friends,
    } = user;

    return(
        <WidgetWrapper>
            {/* First Row */}
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => Navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath} />
                    <Box>
                        <Typography 
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                        >

                        </Typography>
                    </Box>
                </FlexBetween>

            </FlexBetween>
        </WidgetWrapper>
    )
};