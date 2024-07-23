import React, { useState } from 'react'
import { Menu } from 'antd'

import { getItem } from '../../utils';
import { AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import CandidatesUser from "../../Component/CandidatesUser/CandidatesUser"
const RecruiterPage = () => {
  
  const items = [
    getItem('All Candidates', 'candidate', <UserOutlined />),
    getItem('All Applicants', 'applicant', <AppstoreOutlined />),
    getItem('Khác', 'diff', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];


  const [keySelected, setKeySelected] = useState('')
  const renderPage = (key) => {
    switch (key) {
      case 'candidate':
        return (
          <CandidatesUser />
        )
      default:
        return (
          <></>
        )
    }
  }


  const handleOnClick = ({ key }) => {
    setKeySelected(key)
  }
  // console.log("keySelected", keySelected)
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Menu
          mode="inline"
          style={{
            width: 256,
            boxShadow: '1px, 1px, 2px, #ccc',
            // height: '100vh',
          }}
          items={items}
          onClick={handleOnClick}
        />
        <div style={{ flex: 1, padding: '20px' }}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  )
}

export default RecruiterPage
