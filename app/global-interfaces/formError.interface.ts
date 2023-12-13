import {InputRef} from "antd";

export interface FormErrorInterface {
    message: string;
    ref: InputRef,
    type: string;
}