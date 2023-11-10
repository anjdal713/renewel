
const postList = [
    {
        "no": 1,
        "title": "첫번째 게시글입니다.",
        "content": "첫번째 게시글 내용입니다.",
        "createDate": "2023-10-28",
        "readCount": 6
    },
    {
        "no": 2,
        "title": "두번째 게시글입니다.",
        "content": "두번째 게시글 내용입니다.",
        "createDate": "2023-10-29",
        "readCount": 5
    },
    {
        "no": 3,
        "title": "세번째 게시글입니다.",
        "content": "세번째 게시글 내용입니다.",
        "createDate": "2023-10-30",
        "readCount": 1
    },
    {
        "no": 4,
        "title": "네번째 게시글입니다.",
        "content": "네번째 게시글 내용입니다.",
        "createDate": "2023-10-31",
        "readCount": 2
    },
    {
        "no": 5,
        "title": "다섯번째 게시글입니다.",
        "content": "다섯번째 게시글 내용입니다.",
        "createDate": "2023-11-01",
        "readCount": 4
    },
    {
        "no": 6,
        "title": "여섯번째 게시글입니다.",
        "content": "여섯번째 게시글 내용입니다.",
        "createDate": "2023-12-01",
        "readCount": 4
    },
    {
        "no": 7,
        "title": "일곱번째 게시글입니다.",
        "content": "일곱번째 게시글 내용입니다.",
        "createDate": "2023-5-01",
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