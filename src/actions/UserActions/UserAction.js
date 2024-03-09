import Login from '../../services/Login/LoginService';
import getUserDetail from '../../services/Login/LoginService';

export const login = (item) => async (dispatch) => {
    const response = await Login(item);
    const access_token = response.data.access_token;
    // const role = response.data.role;
    // Lưu token vào localStorage
    localStorage.setItem('token', access_token);
    
    const userResponse = await getUserDetail(access_token);
    userResponse = { ...response };


    // if (role === 'admin') {
    //     localStorage.setItem('role', role);

    //     dispatch({ type: 'LOGIN_SUCCESS', role });
    // } else if (role === 'user') {
    //     localStorage.setItem('role', role);

    //     dispatch({ type: 'LOGIN_SUCCESS', role });
    // } else {
    //     dispatch({ type: 'LOGIN_ERROR', error: 'Invalid role' });
    // }
};
