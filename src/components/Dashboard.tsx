import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { useNavigate } from "react-router-dom";
import RoutePage from './routePage';
const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div style={{ display: "flex", flexDirection: "row", height: "100vh", marginLeft: "200px", }}>
            <Menu className='bg'
                onClick={({ key }) => {
                    if (key === "others") {
                        //todo
                    } else {
                        navigate(key);
                    }
                }}
                items={[
                    { label: 'preferred payment', key: "/", icon: <HomeOutlined /> },
                    { label: 'creditdebitcards', key: "/Creditpage", icon: <HomeOutlined /> },
                    { label: 'wallets', key: "Walletspage", icon: <HomeOutlined /> },
                    { label: 'UPI', key: "Upipage", icon: <HomeOutlined /> },
                    { label: 'net banking', key: "Netbankingpage", icon: <HomeOutlined /> },
                    { label: 'others', key: "Others", icon: <HomeOutlined /> },
                ]}>

            </Menu>
            <RoutePage />
        </div>
    )
}

export default Dashboard