import React from 'react'
import { Radio, Space, Tabs } from 'antd';
import { useState } from 'react';

const HomeMenu = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(4).fill().map((_, i) => {
          const id = String(i + 1);
          return {
            label:`Tab ${id} `,
            key: id, 
            children:`Content of Tab ${id}`

          };
        })}
      />
    </div>
  )
}

export default HomeMenu