import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header: AntHeader } = Layout;
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/authKey";
const Header = () => {
  const user:any = getUserInfo()
  console.log(user)
    const router = useRouter();
    const logOut = ()=>{
        removeUserInfo(authKey)
        router.push("/login")
    }


  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" size="small" danger>
          LogOut
        </Button>
      ),
    },
  ];
  return (
    <AntHeader style={{backgroundColor:"#fff"}}>
      <Row justify="end" align="middle" style={{
        height:'100%'
      }}>
        <div style={{display:'flex' , justifyContent:'center', gap:"5px"}}>
              <h1 style={{fontSize:'16px'}}>{user.role}</h1>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar shape="circle" size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
        </div>
      </Row>
    </AntHeader>
  );
};
export default Header;
