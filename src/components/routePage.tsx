import {
    Routes,
    Route,
} from "react-router-dom";
import CreditPage from './creditPage';
import NetbankPage from './netbankPage';
import OtherPage from './otherPage';
import PreferredPage from './preferredPage';
import UpiPage from './upiPage';
import WalletsPage from './walletsPage';
const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PreferredPage />} />
                <Route path="Creditpage" element={<CreditPage />} />
                <Route path="Walletspage" element={< WalletsPage />} />
                <Route path="Upipage" element={< UpiPage />} />
                <Route path="Netbankingpage" element={< NetbankPage />} />
                <Route path="Others" element={<OtherPage />} />
            </Routes>
        </div>
    )
}

export default RoutePage