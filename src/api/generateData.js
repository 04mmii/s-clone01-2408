import { fetchImages } from './api/unsplashApi';

const generateAccommodationData = async () => {
    try {
        const categories = ['nature', 'city', 'beach']; // 원하는 카테고리
        const accommodations = await Promise.all(
            categories.map(async (category, index) => {
                const images = await fetchImages(category, 2); // 각 카테고리당 2개의 이미지
                return {
                    id: index + 1,
                    images,
                    location: `${category} location ${index + 1}`,
                    distance: `${(index + 1) * 50}km`,
                    dates: `${11 + index}월 ${index + 1}일~${11 + index}월 ${index + 5}일`,
                    price: `₩${(index + 1) * 100000}`,
                    rating: (4.5 + 0.1 * index).toFixed(2),
                    category: [category],
                };
            })
        );

        console.log('Generated Accommodations:', accommodations);
        // JSON 데이터로 저장하거나 파일에 저장할 수 있습니다.
    } catch (error) {
        console.error('Error generating accommodation data:', error);
    }
};

generateAccommodationData();
