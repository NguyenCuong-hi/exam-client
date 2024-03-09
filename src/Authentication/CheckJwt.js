import { jwtDecode } from 'jwt-decode';

const CheckJwt = () => {
    let check = true;
    const accessToken = localStorage.getItem('assetToken');
    if (accessToken) {
        const token = jwtDecode(accessToken);
        const currentTime = new Date();
        if (token.exp * 1000 < currentTime.getTime()) {
            check = true;
            localStorage.removeItem('assetToken');
        } else {
            check = false;
        }
    }
    return check;
};
export default CheckJwt;
