"use client";
import {ChangeEvent, FC, FormEvent, useContext, useEffect, useState} from 'react';
import {Box, TextField} from "@mui/material";
import {SidebarInputProps} from "@/app/components/ui/sidebar-input/sidebar-input.props";
import {useGetUsersQuery} from "@/app/redux";
import {InputSearchValueHandlerContext} from "@/app/pages/main-page/context/main-context";
export const SidebarInput: FC<SidebarInputProps> = ({name}: SidebarInputProps) => {
    const [dataValue, setDataValue] = useState<string>("");
    const setValueContext = useContext(InputSearchValueHandlerContext);


    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setDataValue(event.target.value)
    }

    useEffect(() => {
        setValueContext(dataValue);
    }, [dataValue]);



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