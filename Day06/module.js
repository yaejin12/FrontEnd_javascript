const generatedMockPosts = (n) => {
  return Array(n)
    .fill()
    .map((_, i) => ({
      id: i,
      title: `title${i + 1}`,
      content: `content-${i + 1}`,
    })); // 객체를 return할때 return을 생략하려면 ()로 감싸줘야한다
};

//유틸함수 //헬퍼함수
//백엔드에 저장되는 시간은 utc+00
//utc+09(KST) 파싱해야합니다. 분석해서 타입을 변환해야한다.
const jsonHelper = (str) => {
  return JSON.parse(str);
};

module.exports = { generatedMockPosts: generatedMockPosts, jsonHelper }; 
//generatedMockPosts : generatedMockPosts 키와 값이 같다면 generatedMockPosts만 적어도 됨
