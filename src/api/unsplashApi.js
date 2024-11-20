import axios from 'axios';

const UNSPLASH_BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY; // 환경 변수에서 가져오기

export const fetchImages = async (query, count = 10) => {
    try {
        const response = await axios.get(`${UNSPLASH_BASE_URL}/search/photos`, {
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
            params: {
                query,
                per_page: count,
            },
        });
        return response.data.results.map((item) => item.urls.small); // 작은 이미지 URL 추출
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};
