
import styled from "styled-components";
import { Upload } from "antd";
export const WrapperHeader = styled.h1`
    color: #000;
    font-size: 20px;
`
export const WrapperUploadFile = styled(Upload)`
    & .ant-upload.ant-upload-select.ant-upload-select-picture-card {
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }
    
    & .ant-upload-list-item-name {
        display: none
    }
`
