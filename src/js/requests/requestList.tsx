import * as http from './requestConfig';

export function getUserInfo(search) {
    return http.get("/api/getUserInfo", search)
        .then(res => {
            return res;
        });
}

export function addUserInfo(data) {
    return http.post('/api/addUserInfo',data)
    .then(res=>{
        return res;
    });
}