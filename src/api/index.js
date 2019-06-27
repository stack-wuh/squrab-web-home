import request from '@/utils/request';

export const getUserList = () => 
    request({
        url: '/user/list',
        method: 'get'
    })