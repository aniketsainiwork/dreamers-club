import { Box, CircularProgress } from "@mui/material";

import "./loader.css";
import React from "react";
type TLoader = {
    style?: React.CSSProperties;
    size?: number;
    color?: string;
};
export default function Loader({ style, size = 25, color = "#fff" }: TLoader) {
    return (
        <Box sx={{ display: "flex" }}>
            <CircularProgress size={size} sx={{ color: color, ...style }} />
        </Box>
    );
}
