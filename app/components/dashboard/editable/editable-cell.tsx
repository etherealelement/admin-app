import React, {useContext, useEffect, useRef, useState} from "react";
import {EditableCellProps} from "@/app/components/dashboard/dashboard.props";
import {Form, Input, InputRef} from "antd";
import {EditableContext} from "@/app/components/dashboard/context/dashboard-context";
export const EditableCell: React.FC<EditableCellProps> = ({
                                                              title,
                                                              editable,
                                                              children,
                                                              dataIndex,
                                                              record,
                                                              handleSave,
                                                              ...restProps
                                                          }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({[dataIndex]: record[dataIndex]});
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            handleSave({...record, ...values});
            toggleEdit();
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    const nodeValue = (dataIndex: string) => {
        switch (dataIndex) {
            case "email":
                return <Form.Item
                    style={{ margin: 0 }}
                    name={dataIndex}
                    rules={[
                        {
                            type: "email",
                            pattern:  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            required: true,
                            message: "Неправильный формат адреса электронной почты",
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            case "phone" : 
                    return <Form.Item
                        style={{ margin: 0 }}
                        name={dataIndex}
                        rules={[
                        {
                            pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                            message: "Неправильный формат номера телефона",
                            required: true,
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            case "name": 
                    return   <Form.Item
                    style={{ margin: 0 }}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: "Поле обязательно для заполнения",
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            case "price": 
                    return <Form.Item
                    style={{ margin: 0 }}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: "Поле обязательно для заполнения",
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            default: 
            return   <Form.Item
            style={{ margin: 0 }}
            name={dataIndex}
            rules={[
                {
                    required: true,
                    message: "Поле обязательно для заполнения",
                },
            ]}
        >
            <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
                
        }
    }



    if (editable) {
        childNode = editing ? nodeValue(dataIndex)
    :(
            <div className="editable-cell-value-wrap" style={{paddingRight: 24}} onClick={toggleEdit}>
                {children}
            </div>)
    }

    return <td {...restProps}>{childNode}</td>;
};