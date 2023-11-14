
const postList = [
    {
        "no": 1,
        "title": "첫번째 게시글입니다.",
        "type": "공지사항",
        "content": "첫번째 게시글 내용입니다.",
        "createDate": "2023-10-28",
        "person": "행정조교",
        "readCount": 6
    },
    {
        "no": 2,
        "title": "두번째 게시글입니다.",
        "type": "공지사항",
        "content": "두번째 게시글 내용입니다.",
        "createDate": "2023-10-29",
        "person": "행정조교",
        "readCount": 5
    },
    {
        "no": 3,
        "title": "세번째 게시글입니다.",
        "type": "공지사항",
        "content": "세번째 게시글 내용입니다.",
        "createDate": "2023-10-30",
        "person": "행정조교",
        "readCount": 1
    },
    {
        "no": 4,
        "title": "네번째 게시글입니다.",
        "type": "공지사항",
        "content": "네번째 게시글 내용입니다.",
        "createDate": "2023-10-31",
        "person": "행정조교",
        "readCount": 2
    },
    {
        "no": 5,
        "title": "다섯번째 게시글입니다.",
        "type": "공지사항",
        "content": "다섯번째 게시글 내용입니다.",
        "createDate": "2023-11-01",
        "person": "행정조교",
        "readCount": 4
    },
    {
        "no": 6,
        "title": "여섯번째 게시글입니다.",
        "type": "공지사항",
        "content": "여섯번째 게시글 내용입니다.",
        "createDate": "2023-12-01",
        "person": "행정조교",
        "readCount": 4
    },
    {
        "no": 7,
        "title": "일곱번째 게시글입니다.",
        "type": "공지사항",
        "content": "일곱번째 게시글 내용입니다.",
        "createDate": "2023-05-01",
        "person": "행정조교",
        "readCount": 4
    },
    {
        "no": 8,
        "title": "여덟번째 게시글입니다.",
        "type": "공지사항",
        "content": "여덟번째 게시글 내용입니다.",
        "createDate": "2022-10-01",
        "person": "행정조교",
        "readCount": 4
    },
    {
        "no": 9,
        "title": "아홉번째 게시글입니다.",
        "type": "공지사항",
        "content": "아홉번째 게시글 내용입니다.",
        "createDate": "2023-05-01",
        "person": "행정조교",
        "readCount": 4
    },
    {
        "no": 10,
        "title": "열번째 게시글입니다.",
        "type": "공지사항",
        "content": `안녕하세요~
        
        컴퓨터공학부 행정조교입니다.
        
        
        지도교수 변경을 희망하는 학생들은 ~9/14 목요일 09시까지 아래 링크를 통해 제출하시기 바랍니다.
        
        제출된 내용은 10월 마지막주부터 스마트 자기관리 시스템에서 확인 가능합니다.`,
        "createDate": "2023-07-01",
        "person": "행정조교",
        "readCount": 4
    },
];

const getPostByNo = no => {
    const array = postList.filter(x => x.no === parseInt(no));
    if (array.length === 1) {
        return array[0];
    }
    return null;
}

export {
    postList,
    getPostByNo
};