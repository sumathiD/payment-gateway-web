import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import preferredPayment from "../assets/images/preferred-payment.svg";
import creditDebit from "../assets/images/credit-debit.svg";
import wallets from "../assets/images/wallets.svg";
import upi from "../assets/images/upi.svg";
import netBanking from "../assets/images/net-banking.svg";
import others from "../assets/images/others.svg";

import { useNavigate } from "react-router-dom";
import RoutePage from './routePage';
const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div style={{ display: "flex", flexDirection: "row", height: "100vh", marginLeft: "251px", }} className="Sider__Payment__Menu">
            <Menu className='bg' style={{background: '#040748', paddingTop: '31px'}}
                onClick={({ key }) => {
                    if (key === "others") {
                        //todo
                    } else {
                        navigate(key);
                    }
                }}
                items={[
                    { label: 'Preferred Payment', key: "/", icon: <img src={preferredPayment} /> },
                    { label: 'Credit & Debit Cards', key: "/Creditpage", icon: <img src={creditDebit} /> },
                    { label: 'Wallets', key: "Walletspage", icon: <img src={wallets} /> },
                    { label: 'UPI', key: "Upipage", icon: <img src={upi} /> },
                    { label: 'Net Banking ', key: "Netbankingpage", icon: <img src={netBanking} /> },
                    { label: 'Others', key: "Others", icon: <img src={others} /> },
                ]}>

            </Menu>
            <RoutePage />
        </div>
    )
}

export default Dashboard