const accommodation = [
  {
    id: 1,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq",
      "https://a0.muscache.com/im/pictures/5f2887ae-02e5-48d0-9b69-97d0404dc31b.jpg?im_w=720",
    ],
    location: "Hwacheon-myeon, Hongcheon-gun",
    distance: "86km",
    dates: "11월 3일~8일",
    price: "₩114,118",
    rating: "4.88",
    category: ["국립공원", "그랜드피아노"],
  },
  {
    id: 2,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-802062343721369877/original/214a54b9-785f-419a-a928-a5c637f50029.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-802062343721369877/original/75789fba-de92-4a2c-8239-bdad76c7d025.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-802062343721369877/original/fe88ba1e-826d-4c6e-bb85-ab3c72d11cb0.jpeg?im_w=720",
    ],
    location: "Seogwipo, Jeju-do",
    distance: "320km",
    dates: "12월 1일~5일",
    price: "₩150,000",
    rating: "4.72",
    category: ["동굴"],
  },
  {
    id: 3,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq",
      "https://a0.muscache.com/im/pictures/5f2887ae-02e5-48d0-9b69-97d0404dc31b.jpg?im_w=720",
    ],
    location: "Busanjin-gu, Busan",
    distance: "400km",
    dates: "11월 20일~25일",
    price: "₩99,999",
    rating: "4.50",
    category: ["돔하우스", "료칸"],
  },
  {
    id: 4,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq",
      "https://a0.muscache.com/im/pictures/5f2887ae-02e5-48d0-9b69-97d0404dc31b.jpg?im_w=720",
    ],
    location: "Mapo-gu, Seoul",
    distance: "5km",
    dates: "11월 15일~18일",
    price: "₩200,000",
    rating: "4.95",
    category: ["국립공원", "료칸"],
  },
  {
    id: 5,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq",
      "https://a0.muscache.com/im/pictures/5f2887ae-02e5-48d0-9b69-97d0404dc31b.jpg?im_w=720",
    ],
    location: "Gwangju, Jeollanam-do",
    distance: "270km",
    dates: "12월 10일~14일",
    price: "₩130,000",
    rating: "4.80",
    category: ["국립공원", "료칸"],
  },
  {
    id: 6,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq",
      "https://a0.muscache.com/im/pictures/5f2887ae-02e5-48d0-9b69-97d0404dc31b.jpg?im_w=720",
    ],
    location: "Itaewon, Seoul",
    distance: "8km",
    dates: "11월 25일~30일",
    price: "₩175,000",
    rating: "4.85",
    category: ["국립공원", "료칸"],
  },
  {
    id: 7,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq",
      "https://a0.muscache.com/im/pictures/5f2887ae-02e5-48d0-9b69-97d0404dc31b.jpg?im_w=720",
    ],
    location: "Andong, Gyeongsangbuk-do",
    distance: "150km",
    dates: "11월 27일~12월 1일",
    price: "₩110,000",
    rating: "4.60",
    category: ["국립공원", "료칸"],
  },
  {
    id: 8,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq",
      "https://a0.muscache.com/im/pictures/5f2887ae-02e5-48d0-9b69-97d0404dc31b.jpg?im_w=720",
    ],
    location: "Yeosu, Jeollanam-do",
    distance: "350km",
    dates: "12월 5일~10일",
    price: "₩140,000",
    rating: "4.70",
    category: ["국립공원", "료칸"],
  },
  {
    id: 9,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq",
      "https://a0.muscache.com/im/pictures/5f2887ae-02e5-48d0-9b69-97d0404dc31b.jpg?im_w=720",
    ],
    location: "Incheon",
    distance: "40km",
    dates: "11월 18일~20일",
    price: "₩90,000",
    rating: "4.65",
    category: ["국립공원", "료칸"],
  },
  {
    id: 10,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq",
      "https://a0.muscache.com/im/pictures/5f2887ae-02e5-48d0-9b69-97d0404dc31b.jpg?im_w=720",
    ],
    location: "Chuncheon, Gangwon-do",
    distance: "120km",
    dates: "12월 15일~19일",
    price: "₩100,000",
    rating: "4.75",
    category: ["국립공원", "료칸"],
  },
];

export default accommodation;
