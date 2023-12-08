import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export interface DashboardProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    userData?: userInterface[]
}


export interface DataType {
    id: number,
    name: string;
    username: string;
    email: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

 interface userInterface {
    id: number,
    username: string;
    name: string;
    email: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

