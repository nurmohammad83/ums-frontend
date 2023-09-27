'use client'

import { Layout, Menu, theme } from 'antd';
import UMBradCrumb from './UMBredCrumb';

const { Content } = Layout;

const Contents = ({children}:{children:React.ReactNode}) => {
  const base = 'admin'
  return (
    <Content style={{minHeight:'100vh'}}>
      <UMBradCrumb items={
        [
          {
            label:`${base}`,
            link:`/${base}`
          },
          {
            label:`student`,
            link:`/${base}/student`
          },
        ]
      }/>
      {children}
      </Content>
  )
}
export default Contents