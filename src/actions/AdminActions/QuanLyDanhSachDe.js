import { getAllDeThiService } from '../../services/Admin/QLKiThi';

export const loadDSDeThi = () => async () => {
    try {
        const data = await getAllDeThiService(1, 10);
        return data;
    } catch (error) {}
};
