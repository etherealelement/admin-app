"use client";
import {ChangeEvent, FC, FormEvent, useState} from 'react';
import {Box, TextField} from "@mui/material";
export const SidebarInput: FC = () => {
    const [dataValue, setDataValue] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setDataValue(event.target.value)
    }

    return <>
        <Box
            sx={{
                '& > :not(style)': { marginTop: 1 },
            }}
        >
            <TextField id="outlined-basic"
                       label="Search by job title"
                       variant="outlined"
                       size={"small"}
                       value={dataValue}
                       onChange={handleChange}
            />
        </Box>
    </>;
};