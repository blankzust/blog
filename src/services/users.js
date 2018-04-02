import request from '../utils/request'

export async function list({ page = 1 }) {
    return request(`/api/users?_page=${page}&_limit=5`);
}

export async function getCurrentUser() {
    return request(`/api/auth/getCurrentUser`)
}
