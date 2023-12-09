import React from "react";
import {EditableRowProps} from "@/app/components/dashboard/dashboard.props";
import {Form} from "antd";
import {EditableContext} from "@/app/components/dashboard/context/dashboard-context";

export const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};