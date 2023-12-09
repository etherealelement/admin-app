"use client";
import {ChangeEvent, FC, FormEvent, useState} from 'react';
import {Box, TextField} from "@mui/material";
import {SidebarInputProps} from "@/app/components/ui/sidebar-input/sidebar-input.props";
export const SidebarInput: FC<SidebarInputProps> = ({name}: SidebarInputProps) => {
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
                       label={name}
                       variant="outlined"
                       size={"small"}
                       value={dataValue}
                       onChange={handleChange}
            />
        </Box>
    </>;
};