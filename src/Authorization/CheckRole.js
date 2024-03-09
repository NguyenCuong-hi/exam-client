import { getExaminer } from '../services/User/UserService';
const CheckRole = async () => {
    const token = localStorage.getItem('assetToken');
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const data = await getExaminer({ headers });
    if (!data) {
        return;
    }
    // setRole(data.data.data.user.roles[0].name);
    const role = data.data.data.user.roles[0].name;
    return role;
};
export default CheckRole;
