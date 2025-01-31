# airbnb 클론코딩 : 2408- FE

- Tech used React HTML CSS JavaScript
- Type Clone Coding
- About 에어비엔비 클론코딩
- GitHub https://github.com/04mmii/s-clone01-2408
- Link https://s-clone01-2408.vercel.app/

> **목표**
> 실제 서비스를 바탕으로 동일하게 만들면서 제품이 만들어지는 과정을 이해
> 지금까지 JavaScript, React에서 배웠던 내용들을 실습

### **프로젝트 개요**

이 프로젝트는 에어비앤비의 주요 기능과 UI/UX를 클론 코딩한 React 애플리케이션입니다.
에어비앤비의 핵심 기능들을 구현하면서 현대적인 React 개발 패턴과 기술을 활용하고 있습니다.

---
### **개발 환경**

1. 라우터
   npm install react-router-dom

2. 라이브러리
   npm install react-datepicker
   npm install date-fns

3. 아이콘
   npm install react-icons

### **주요 기능 (에어비앤비 스타일)**

1. 숙소 목록 및 상세 정보:
   메인 페이지에서 다양한 숙소 카드 표시
   개별 숙소의 상세 정보 페이지 제공

2. 날짜 선택:
   에어비앤비 스타일의 달력을 사용한 체크인/체크아웃 날짜 선택

3. 게스트 수 관리:
   성인, 어린이, 유아, 반려동물 수를 조절하는 드롭다운 메뉴

4. 카테고리 네비게이션:
   에어비앤비의 특징적인 수평 스크롤 카테고리 바 구현
   카테고리 선택에 따른 숙소 필터링

5. 이미지 갤러리:
   숙소 이미지를 에어비앤비 스타일의 슬라이더로 표시

6. 반응형 디자인:
   다양한 디바이스에 대응하는 UI 레이아웃

### **React Hooks **

1. useState:
   컴포넌트의 로컬 상태를 관리합니다.
   예: const [selectedCategory, setSelectedCategory] = useState('전체 보기');
   카테고리 선택, 게스트 수, 날짜 등의 상태를 관리하는 데 사용됩니다.

2. useEffect:
   컴포넌트의 생명주기와 관련된 부수 효과를 처리합니다.
   예:
   useEffect(() => {
   handleScroll();
   const ref = scrollRef.current;
   ref.addEventListener('scroll', handleScroll);
   return () => {
   ref.removeEventListener('scroll', handleScroll);
   };
   }, []);

컴포넌트 마운트 시 이벤트 리스너 추가, 언마운트 시 제거 등에 사용됩니다.

3. useRef:
   DOM 요소에 직접 접근하거나 변경 가능한 값을 저장합니다.
   예: const scrollRef = useRef(null);
   스크롤 위치 계산 등 DOM 조작에 사용됩니다.

4. useParams:
   React Router의 URL 파라미터를 추출합니다.
   예: const { id } = useParams();
   숙소 상세 페이지의 ID를 가져오는 데 사용됩니다.

5. useNavigate:
   프로그래밍 방식으로 라우팅을 처리합니다.
   예: const navigate = useNavigate();
   페이지 간 이동을 구현하는 데 사용됩니다.
   이러한 훅들을 사용함으로써, 클래스 컴포넌트 없이도 복잡한 상태 관리와 생명주기 기능을 구현할 수 있습니다.

### **데이터 관리**

이 프로젝트에서는 실제 API 대신 목업 데이터를 사용하여 애플리케이션의 기능을 구현했습니다. 이 방식은 다음과 같은 이점을 제공합니다:

- 백엔드 개발 없이 프론트엔드 개발에 집중할 수 있습니다.
- 데이터 구조를 쉽게 정의하고 수정할 수 있습니다.
- 네트워크 지연 없이 빠른 개발 및 테스트가 가능합니다.

  이 클론 프로젝트는 에어비앤비의 주요 기능과 디자인 요소를 충실히 재현하면서, React의 최신 기능들을 효과적으로 활용하고 있습니다.
  실제 서비스의 복잡한 UI/UX를 구현함으로써, 현대적인 웹 애플리케이션 개발 기술과 패턴을 실습하는 좋은 예시가 되고 있습니다.
