import { FC } from 'react';
import React from 'react';
import { Alert, Flex, Spin } from 'antd';
export const Spinner: FC = () => {
    return <Flex gap="small" vertical>
        <Spin tip="Loading..." size="small">
            <div className="content"/>
        </Spin>
    </Flex>;
};