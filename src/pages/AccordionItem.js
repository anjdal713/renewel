import { useRef, useState, useEffect } from "react";
import "./Accordion.css";
import { FiChevronDown } from 'react-icons/fi';

const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, faq } = props;
  const { header, id, subcode, engname, text } = faq;

  useEffect(() => {
    if (active === id) {
      contentEl.current.style.height = `${contentEl.current.scrollHeight}px`;
      contentEl.current.classList.add("open-article");
    } else {
      contentEl.current.style.height = "0px";
      contentEl.current.classList.remove("open-article");
    }
  }, [active, id]);

  return (
    <>
      <header
        className={active === id ? "accordion-header active" : "accordion-header"}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <FiChevronDown size={24} style={{ transform: active === id ? 'rotate(-180deg)' : 'rotate(0deg)' }} />
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
      >
        <div className="column-container">
          <div className="column">
            <h3>{subcode}</h3>
            <h3>{engname}</h3>
          </div>
          <div className="column">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Accordion = () => {
  const [active, setActive] = useState(null);
  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  const faqs11 = [
    {
      header: "컴퓨터 프로그래밍",
      subcode: "CTE0001",
      engname: "Computer Programming",
      text: "본 과목은 프로그램을 처음 다루는 학생들을 대상으로 우선 컴퓨터프로그램 개발환경인 IDE(Integrated Development Environment)을 이해하고 구축할 수 있도록 강의한다. 프로그래밍 언어의 기초인 C언어의 기본적인 문법과 프로그래밍 기술을 강의한다. 프로그램을 편집하고 컴파일하여 실행하는 IDE 사용법을 강의한다. 그리고 C의 기본적인 구성요소인 변수, 기본 연산자, 자료형, 제어문, 반복문, 함수에 대한 기본 개념과 문법을 실습위주로 강의하며, 최종적으로는 학생들에게 C언어를 이용하여 간단한 문제에 대한 해결능력을 갖추도록 한다.",
      id: 111,
    },
    {
      header: "웹프로그래밍 기초",
      subcode: "CTE0002",
      engname: "Introduction to Web Programming",
      text: "본 교과목은 컴퓨터 공학부 전공을 희망하거나 탐색하는 신입생들을 대상으로 우선 웹프로그램 개발환경인 IDE(Integrated Development Environment)을 이해하고 구축할 수 있도록 강의한다. 이후 향후 고학년 과정에서 보다 고급 기술을 요하는 웹 프로그래밍 및 서버 프로그래밍 과목 수강 등에 필요한 기초 지식 등을 강의한다. 인터넷과 웹의 동작원리를 이해함과 더불어 웹 콘텐츠 제작언어로서 HTML5, CSS3 및 Javascript 와 같은 웹 클라이언트 언어의 기본적인 개념과 사용법을 이론과 실습을 통해 강의하여 최종적으로는 학생들에게 웹 프로그래밍 언어를 이용하여 간단한 웹 콘텐츠 제작에 대한 해결능력을 갖추도록 한다.",
      id: 112,
    },
  ];
  const faqs12 = [
    {
      header: "컴퓨터 프로그래밍",
      subcode: "CTE0001",
      engname: "Computer Programming",
      text: "본 과목은 프로그램을 처음 다루는 학생들을 대상으로 우선 컴퓨터프로그램 개발환경인 IDE(Integrated Development Environment)을 이해하고 구축할 수 있도록 강의한다. 프로그래밍 언어의 기초인 C언어의 기본적인 문법과 프로그래밍 기술을 강의한다. 프로그램을 편집하고 컴파일하여 실행하는 IDE 사용법을 강의한다. 그리고 C의 기본적인 구성요소인 변수, 기본 연산자, 자료형, 제어문, 반복문, 함수에 대한 기본 개념과 문법을 실습위주로 강의하며, 최종적으로는 학생들에게 C언어를 이용하여 간단한 문제에 대한 해결능력을 갖추도록 한다.",
      id: 121,
    },
    {
      header: "웹프로그래밍 기초",
      subcode: "CTE0002",
      engname: "Introduction to Web Programming",
      text: "본 교과목은 컴퓨터 공학부 전공을 희망하거나 탐색하는 신입생들을 대상으로 우선 웹프로그램 개발환경인 IDE(Integrated Development Environment)을 이해하고 구축할 수 있도록 강의한다. 이후 향후 고학년 과정에서 보다 고급 기술을 요하는 웹 프로그래밍 및 서버 프로그래밍 과목 수강 등에 필요한 기초 지식 등을 강의한다. 인터넷과 웹의 동작원리를 이해함과 더불어 웹 콘텐츠 제작언어로서 HTML5, CSS3 및 Javascript 와 같은 웹 클라이언트 언어의 기본적인 개념과 사용법을 이론과 실습을 통해 강의하여 최종적으로는 학생들에게 웹 프로그래밍 언어를 이용하여 간단한 웹 콘텐츠 제작에 대한 해결능력을 갖추도록 한다.",
      id: 122,
    },
  ];
  const faqs21 = [
    {
      header: "객체지향언어1",
      subcode: "V020001",
      engname: "Object Oriented Language 1",
      text: "         객체 지향적 개념과 C++ 언어로 프로그래밍할 수 있는 능력을 배우는 것으로 목적으로 한다. 현재 많이 활용되는 언어들은C 등과 같은 절차적 프로그래밍 기법과는 달리 객체지향적 프로그래밍 기법을 선호한다. 기존의 컴퓨터 언어와 객체지향 언어의 특성을 고찰하고, 객체 지향 언어인 C++ 언어를 배우면서 class와 member, data abstraction, reference, information hiding, inheritance, overloading 등 객체지향 언어를 이용하여 프로그램을 작성하는 방법을 익힌다. 윈도환경에서 Visual C++ 또는 Borland C++을 이용한 프로그래밍 실습을 병행한다.",
      id: 211,
    },
    {
      header: "자료구조",
      subcode: "V020002",
      engname: "Data Structure",
      text: "모든 프로그램의 기초가 되는 각종 자료에 대해 그 구조와 그에 적합한 알고리즘 등을 배운다. 주요 내용으로는 배열, 스택, 큐, 트리 및 그래프 등에 대한 다양한 자료구조의 설계 및 구현, 이러한 자료구조를 이용한 알고리즘의 예를 다룬다.",
      id:212,
    },
    {
      header: "컴퓨터구조",
      subcode: "V024003",
      engname: "Computer Architecture",
      text: "컴퓨터의 핵심요소인 중앙처리장치, 기억장치, 버스 및 입출력 장치를 학습한다. 또한 마이크로프로세서의 구성요소, 내부구조 및 외부인터페이스 방법에 대하여 학습한다.",
      id:213,
    },
    {
      header: "프로그래밍언어론",
      subcode: "V020005",
      engname: "Programming Languagen",
      text: "본 과목에서는 C 프로그램의 기본적인 문법을 학습하고 실습을 통해 이를 습득함으로서 공학적 응용문제를 프로그램을 통하여 해결하는 방법을 익힌다.",
      id:214,
    },
    {
      header: "프로그래밍랩",
      subcode: "V020004",
      engname: "Programmming Lab",
      text: "1학년 때 배운 C 언어와 동학기에 진행하는 자료구조를 기초로 주어진 문제를 C로 구현하여 문제 해결 능력 및 좋은 프로그램 습관을 향상시키며, 문제의 분석, 설계, 구현, 테스트까지 소프트웨어 개발의 전 과정을 습득함으로써, 소프트웨어 개발의 기초 역량을 배양한다. 학생들은 매주 주어진 주제한 대한 프로그래밍을 통해 자료구조, 알고리즘에서 요구하는 프로그래밍 실습을 하며 격주 간격으로 주어지는 종합적 프로그래밍 과제를 통해 프로그래밍 집중력과 실력을 배양한다. 중간고사 이후에는 게임, 자료처리, 알고리즘해결 등과 같은 텀프로젝트를 제안하고 진행하며 기말시험 대신 텀 프로젝트로 평가한다.",
      id:215,
    },
    {
      header: "확률및통계",
      subcode: "V020006",
      engname: "Probability and Statistics",
      text: "확률 및 통계과목은 크게 두 부분으로 나누는데, 곧 기술통계와 추측통계이다. 먼저 기술통계로서 수집된 자료를 알기 쉽게 표현하는 자료의 요약(수치적 요약, 도표적 요약)이 있다. 추측통계는 자료에 근거하여 미지의 불확실한 상황에 대한 추론을 다루는 분야로서 불확실성의 정도를 수치적으로 표현하기 위한 기본적 이론으로 기초적 확률론, 확률분포, 그리고 표본분포가 있으며 그리고 관측된 일부 자료를 이용하여 관심의 대상이 되는 집단에 대하여 그 특성을 추정하고 검정하는 모든절차를 말한다. 응용분야로서 두 자료간의 관계정도를 조사하는 상관분석 및 여러 자료간의 통계적 관계를 조사하는 회귀분석등이 있다. 어떤 범주에 속하는가를 조사한 범주형자료에 대한 분석 및 분산분석이 있다. 배운 이론 및 방법들을 R을 이용하여 자료에 적용시키는 실습을 한다.",
      id:216,
    },
  ];
  const faqs221 = [
    {
      header: "모바일 & 스마트 시스템",
      subcode: "V021003",
      engname: "Mobile & Smart System",
      text: "본 교과목에서는 Arduino 하드웨어를 소개하고 프로그래밍하는 기법을 소개한다. 또한 Arduino를 이용한 홈 어플라이언스와 스마트폰을 네트워크로 연결하는 방법을 학습한다. 본 교과목에서는 IoT 관련 프로젝트를 시연하는데, 홈 어플라이언스는 릴레이/블루투스 모듈을 장착하고 안드로이드 앱에 의해 제어된다. 홈 어플라이언스를 제어하는 기능을 확장하여 IoT 서비스를 구축하는 과정을 소개한다.",
      id: 2211,
    },
    {
      header: "빅데이터 기초",
      subcode: "V02206",
      engname: "A Fundamental of Bigdata",
      text: "본 교과목은 빅데이터 트랙 학생들을 대상으로 빅데이터에 대한 전반적인 이해를 높이는 데 초점을 맞춘다. 세부적으로 디지털 환경에서 생성되는 데이터인 빅데이터의 생성과 수집, 저장, 처리, 분석, 가시화 과정을 학습하고 빅데이터의 활용 분야에 대해 알아본다.",
      id:2212,
    },
    {
      header: "웹프로그래밍",
      subcode: "V024003",
      engname: "Web Programming",
      text: "이 과목에서는 WWW (World Wide Web)을 구성하는 웹사이트 구축에 있어서 브라우져를 통해서 보여지는 웹페이지를 제작하는 방법을 학습합니다. 이에 필요한 주요 핵심 기술들인 HTML5, CSS, Bootstrap, JavaScripts 등을 사용하는 방법을 학습하고, 이들을 활용하여 실제로 자신의 Homepage를 제작해 봄으로써 필요한 각 기술들에 대한 이해도와 활용능력을 높입니다.",
      id:2213,
    },
    {
      header: "게임그래픽 애니메이션",
      subcode: "V023003",
      engname: "Game Graphics and Animation",
      text: "본 과목은 3차원 그래픽의 대표적인 소프트웨어인 3 D-Max를 이용하여 게임제작에 필요한 그래픽을 모델링하고 애니메이션을 제작하는데 목적을 둔다. 고급 그래픽 제작으로 단순한 모델링 보다는 게임에 필요한 특수 효과와 고급 애니메이션 등을 제작하는데 주안점을 둔다.",
      id:2214,
    },
  ];

  const faqs222 = [
    {
      header: "객체지향언어2",
      subcode: "V020007",
      engname: "Object Oriented Language 2",
      text: "객체지향언어로서 자바의 문법 구조 등을 배우고, 자바 프로그램 작성 능력을 함양한다. 이 과목에서는 자바 프로그래밍에 있어 필수적인 컬렉션을 배우고, 스윙을 이용해 GUI 프로그램 작성 방법을 배운다.",
      id: 2221,
    },
    {
      header: "데이터통신",
      subcode: "V020008",
      engname: "Data Communication",
      text: "데이터 통신 및 네트워크 전반에 대하여 배운다. 통신 프로토콜에 대하여 OSI 7개 계층에 해당하는 기본 지식을 습득하며, 인터넷 프로토콜인 TCP/IP 구조를 데이터링크 계층, 네트워크 계층, 트랜스포트 계층을 중심으로 자세히 이해하도록 한다. 또한 유무선 네트워크의 기본 기술과 최신 동향을 학습한다. 이를 기반으로 설치된 네트워크 시스템의 현황 파악 및 설치 방법을 실습을 통해 배우고, 장애 발생시 원인에 따른 대응방법을 습득한다.",
      id:2222,
    },
    {
      header: "선형대수",
      subcode: "V020009",
      engname: "Linear Algebra",
      text: "현재 응용수학분야에서 선형대수는 가장 많이 이용되는 수학이다. 공학뿐만 아니라 사회과학 등에서 수리적 문제 해결을 위해 선형대수가 필요하다. 각 분야에서 제대로 응용하기 위해서 그 이론적 개념을 배우고 이에 대한 응용 예도 공부한다. 구체적인 학습 내용으로는 행렬대수와 일차 연립방정식, 가우스 소거법, 행렬식, 벡터공간, 고유값과 고유벡터, 행렬의 대각화, 선형변환, 내적공간등을 배운다.",
      id:2223,
    },
    {
      header: "알고리즘",
      subcode: "V020010",
      engname: "Introduction to Algorithm",   
      text: "어플리케이션을 구현하기에 사용할 수 있는 히프, AVL 트리, 그래프와 같은 고급 자료구조와 관련된 알고리즘을 학습하고, 이들을 실제로 C 프로그래밍 언어 및 IDE(Visual Studio 등) 도구를 활용하여 프로그래밍 하는 방법을 학습한다. 또한, 해싱 기법과 다양한 정렬 알고리즘에 대해서 학습한다.",
      id:2224,
    },
    {
      header: "오픈소스소프트웨어",
      subcode: "V020011",
      engname: "Open Source Software",
      text: "본 교과목의 주요 목표는 학생들이 오픈 소스 프로젝트에 참여하여 의미있는 기여를 수행하는 것이다. 기여는 소스 코딩, 버그 수정, 문서화, 메일 리스트 참여 등 다양한 방법이 존재한다. 교과목 전반부에는 형상 관리, 오픈 소스 라이센스 정책, 오픈 소스 프로젝트 개발 과정에 대한 소개가 있으며 내부 오픈 소스 프로젝트에 참여한다. 교과목 후반부에서는 학생들이 참여하는 외부 오픈 소스 프로젝트에 대한 발표 형식으로 진행할 예정이다.",
      id:2225,
    },
  ];
  const faqs31 = [
    {
      header: "안드로이드 프로그래밍",
      subcode: "V021004",
      engname: "Android Programming",
      text: "안드로이드 앱은 스마트폰 및 테블릿 등 모바일 기기에서 동작하는 어플리케이션으로, 안드로이드 플랫폼과 안드로이드 개발 환경을 이용하여 개발된다. 본 교과목에서는 Java 프로그래밍 기초 능력을 갖춘 학생들을 대상으로 안드로이드 플랫폼과 안드로이그 개발환경을 이용하여 안드로이드 앱 구현을 위한 기본 기능을 학습시키고, 다양한 실습 및 과제를 통해 창의적인 안드로이드 앱 개발 실무 능력의 배양을 목표로 한다.",
      id: 311,
    },
    {
      header: "데이터 마이닝",
      subcode: "V022003",
      engname: "Data Mining",
      text: "V022003   데이터마이닝   Data Mining   데이터마이닝이란 대량의 데이터로부터 그 안에 숨어있는 새롭고, 가치 있고, 의사결정에 유용한 정보를 찾는 작업이다. 이 과목에서는 위에서 언급된 목적을 이루기 위하여 clustering, classification, 연관분석, 회귀분석, 이상치 탐색, collaborative Filtering 등의 관련 알고리즘들을 배운다. 배운 알고리즘을 구현하기 위하여 Open Software 인 R을 사용한다.",
      id: 312,
    },
    {
      header: "웹서버 프로그래밍",
      subcode: "V024004",
      engname: "Web-server Programming",
      text: "웹서비스의 기본적인 구성을 이해하고 아파치 웹서버를 사용하여 운영하는 기법을 학습한다. 특히 웹서비스 언어로 많이 사용되는 PHP 언어의 문법을 학습하고 DB 연동을 통하여 응용하는 방법을 배운다.",
      id: 313,
    },
    {
      header: "영상처리",
      subcode: "V023004",
      engname: "Digital Image Processing",
      text: "아날로그 영상과 디지털영상의 관계, 계측영상으로부터 원하는 물체의 추출, 윤곽추출, Noise제거, 손상된 영상의 복원, 영상저장 등에 관한 영상처리 기법의 기초에 대하여 학습한다.",
      id: 314,
    },
  ];
  const faqs312 = [
    {
      header: "데이터베이스",
      subcode: "V020012   ",
      engname: "Database",
      text: "데이터모델 및 데이터베이스 시스템에 대한 내용을 다룬다. 데이터모델에서는 개념적 데이터모델과 물리적 데이터모델인 관계형, 망형, 계층형 데이터 모델을 주요 내용으로 다루며, 데이터베이스 시스템에서는 데이터 접근 구조, 질의언어, 오류 회복 기법, 동시 사용 제어 기법 및 분산 데이터베이스 기법 등을 다룬다.",
      id: 3121,
    },
    {
      header: "소프트웨어공학",
      subcode: "V020013",
      engname: "Software Engineering",
      text: "소프트웨어 라이프 사이클을 이해한다. 응집도나 결합도와 같은 소프트웨어 설계 원리를 배운다. 테스트 주도 개발과 같은 애자일 방법론과 더불어 블랙박스 화이트 박스 테스트 설계 방법을 포함하여 고품질의 소프트웨어를 설계하기 위한 여러 방법에 대해 학습한다. 또한 결함이 발생했을 때 적용되는 프로세스와 변경 관리 프로세스에 대해 학습한다.",
      id: 3122,
    },
    {
      header: "운영체제",
      subcode: "V020014",
      engname: "Operating Systems",
      text: "운영 체제는 시스템 하드웨어를 관리할뿐 아니라 응용 소프트웨어를 실행하기 위하여 하드웨어 추상화 플랫폼과 공통 시스템 서비스를 제공하는 시스템 소프트웨어이다. 응용 프로그램은 이러한 운영체제를 기반으로 작동된다. time-sharing 운영체제는 시스템의 효율적 사용을 위해 태스크들을 스케쥴링하며 프로세서 시간, 대용량 저장장치, 프린터, 기타 자원 등을 할당하고 제어하는 소프트웨어들로 구성된다. 입출력과 메모리 할당과 같은 하드웨어 기능의 경우 운영 체제는 응용 프로그램과 컴퓨터 하드웨어 사이의 중재 역할을 한다. 그러나 응용 프로그램 코드는 일반적으로 하드웨어에서 직접 실행되며 운영체제의 기능을 사용하기 위하여 시스템 호출을 자주 수행하게 된다.",
      id: 3123,
    },
    {
      header: "컴퓨터그래픽스",
      subcode: "V020015",
      engname: "Computer Graphics",
      text: "컴퓨터그래픽스는 실세계에 존재하는 다양한 객체의 3차원 모델링과 렌더링 파이프라인의 개념을 이해하기 위한 과목이다. 이 과목에서는 OpenGL API를 이용한 실습과 함께 3차원 기하 객체의 표현, 컬러 모델, 변환 및 화면 처리 등에 대한 기하 수학과 기본 알고리즘을 학습한다.",
      id: 3124,
    },
  ];
  const faqs321 = [
    {
      header: "고급 모바일 프로그래밍",
      subcode: "V021006",
      engname: "Advanced Mobile Programming",
      text: "본 과목에서는 안드로이드에서 기본적인 응용 프로그램을 개발 기술을 학습한 학생들을 대상으로 고급 애플리케이션 개발을 학습한다. 먼저 백그라운드에서 실행되는 서비스인 알림과 방송 수신에 대하여 학습한다. 안드로이드에서 제공하는 기본적인 하드웨어인 위치 인식, 가속 센서 및 환경 센서 인식 기술을 학습하며, 이들를 활용한 애플리케이션 개발 기술을 학습한다. 또한 음성관련 API를 활용하여 음성 관련 애플리케이션 기술을 학습하며, 오디오 및 비디오를 포함하는 멀티미디어 관련 기술을 학습한다. 마지막으로 개발된 애플리케이션을 상용화하는 마켓 등록 과정을 학습한다.",
      id: 3211,
    },
    {
      header: "데이터베이스 설계",
      subcode: "V022004",
      engname: "Database Design",
      text: "실세계의 업무를 대상으로 실무에 적용 가능한 데이터베이스를 설계하고 조별 프로젝트를 통해 구현하는 과정을 다룬다. 조별 프로젝트는 프로젝트 주제선정 -> 요구사항분석 -> UI 설계 -> 논리적 데이터베이스 설계 -> 정규화 -> 시연 ->  최종보고서 완성의 단계를 거친다. 각 팀은 수행 단계마다 산출물을 제시하고, 조별 면담과 발표를 통해 진행한다.",
      id: 3212,
    },
    {
      header: "웹프레임워크1",
      subcode: "V022005",
      engname: "Web Framework I",
      text: "본 교과목에서는 자바 스프링 프레임워크에 대해 학습한다. 구체적으로, 스프링 개발을 위한 시스템 구축, Maven 활용법, 의존성 주입(dependency injection), JDBC를 이용한 DB 연동, 웹 폼과 스프링 MVC를 이용한 웹 응용 프로그램 작성 방법을 학습한다. 또한 스프링 시큐리티를 활용한 사용자 계정 관리, AOP(Aspect-Oriented Programming) 기술을 소개한다. 본 과정에서는 웹 응용 서버 프로그램을 단계적으로 설계 및 구현하는 프로젝트 기반 접근 방법을 제공한다.",
      id: 3213,
    },
    {
      header: "가상현실",
      subcode: "V024005",
      engname: "Virtual Reality   ",
      text: "멀티미디어 분야의 미래 발전 방향인 가상현실의 이론을 학습하고 실습을 통하여 가상환경 및 Object를 제작한다. 가상현실 시스템인 HMD, Tracker, Data Glove 등의 기술적인 내용을 학습한다.",
      id: 3214,
    },
  ];
  const faqs322 = [
    {
      header: "네트워크 프로그래밍",
      subcode: "V020017",
      engname: "Network Programming",
      text: "이 과목은 인터넷의 기반 통신 프로토콜인 TCP/IP프로토콜을 중심으로 현재 사용되고 있는 여러 프로토콜을 이해하고 그 프로토콜을 소프트웨어에서 이용하기 위한 방법론을 배운다. 특히 TCP/IP 의 각 계층별 프로토콜 내용을 패킷 헤더 분석을 통하여 상세하게 이해한다. 또한 클라이언트 서버환경에 필수적인 소켓 프로그래밍 방법을 이해하고, UNIX 및 윈도우즈 환경에서 C, C++, Java 및 Android 프로그램 개발 실습을 통하여 스스로 응용계층 프로토콜을 정의하고 구현함으로써 네트워크 상에서의 소프트웨어 개발에 관한 전 과정을 체험하게 된다. 특히 네트워크 통신 기능을 응용프로그램에서 필요한 공통 모듈로 정형화하고 인터페이스를 정의하며 통합할 수 있는 능력을 배우게 된다.",
      id: 3221,
    },
    {
      header: "시스템프로그래밍",
      subcode: "V020016",
      engname: "Database Design",
      text: "컴퓨터 시스템의 기초와 소프트웨어 프로그래밍을 운영체제의 기본에 학습한다. 리눅스 운영체제에서 시스템 콜을 사용하여 시스템 프로그래밍의 전반을 학습하여 시스템 전체 구조를 이해한다.",
      id: 3222,
    },
    {
      header: "설계패턴",
      subcode: "V020018",
      engname: "Design Pattern",
      text: "이 과목에서는 디자인 패턴을 이용하여 소프트웨어 설계를 수행하는 방법을 제공한다. 이를 위해 객체지향 개념을 및 SOLID등을 포함한 소프트웨어 설계 원리를 이해하고 기본적인 UML 모델링을 수행한다. 이를 바탕으로 가장 기본적인 디자인 패턴들의 개념 및 원리를 소개하고 학생들은 이클립스에서 자바로 실습을 수행한다.",
      id: 3223,
    },
    {
      header: "컴퓨터비전",
      subcode: "V020019",
      engname: "Computer Vision",
      text: "컴퓨터비전은 사람이 물체를 인식하듯이 기계가 물체를 인식하도록 하는 것을 말한다. 물체의 영상을 입력받아 컴퓨터가 영상을 해석하도록 하는 알고리즘을 배운다. 이를 위해 입력된 영상을 분석의 목적에 맞도록 변형하는 영상처리 기법을 학습하며, 영상의 특징점을 정의하고 추출하는 알고리즘과 추출된 특징점을 정합하는 알고리즘들을 배운다. 주로 배우는 내용으로 포인트 영상 처리와 히스토그램을 이용한 영상 검출, 영상 검출을 위한 영상 분할, 전경 추출, 성분을 추출, 영상에서 관심점을 검출, 비디오 시권스에서 특징점 추척과 전경 객체 추출 등이며 배운 알고리즘들을 구현언어 C++/OpenCV로 구현한다.",
      id: 3224,
    },
  ];
  const faqs411 = [
    {
      header: "Ios 프로그래밍",
      subcode: "V021005",
      engname: "iOS Programming",
      text: "본 교과목에서는 iOS SDK를 활용하여 iPhone, iPad 응용 프로그램을 개발하는 과정을 소개한다. 먼저 iOS 앱 개발 환경과 Swift 프로그래밍을 학습한다. 그리고 iOS SDK에서 제공하는 클래스를 살펴보고 객체지향 MVC 설계 패턴에 기반한 응용 프로그램을 개발하는 방법을 살펴본다. 본 과정은 프로젝트 지향 접근 방식으로 단계적으로 애플리케이션을 설계 및 구현하는 과정을 소개한다.",
      id: 4111,
    },
    {
      header: "빅데이터 프로그래밍",
      subcode: "V022005",
      engname: "Bigdata Programming",
      text: "본 교과목은 빅데이터 분석도구인 R의 사용법을 다룬다. 우선 R의 문법을 익히고, 데이터 조작 기법과 시각화 기술을 강의한다. 다음 단계로 R을 이용한 다양한 분석 기법들을 배운고 실습한다. 여기서 다루는 분석 기법들은 데이터 마이닝 시간에 다룬 내용들을 기반으로 한다.",
      id: 4112,
    },
    {
      header: "웹프레임워크2",
      subcode: "V024006",
      engname: "Web Framework II",
      text: "본 교과목에서는 자바 스프링 프레임워크에 대해 학습한다. 구체적으로, Hibernate를 이용한 DB 연동, Tiles와 Webflow를 이용한 웹 응용 프로그램, Restful 서비스 작성 방법을 학습한다. 또한 로깅 및 예외 처리 기술을 소개한다. 마지막으로 스프링 부트를 활용하는 사례를 학습한다. 본 과정에서는 웹 응용 서버 프로그램을 단계적으로 설계 및 구현하는 프로젝트 기반 접근 방법을 제공한다.",
      id: 4113,
    },
    {
      header: "디지털 콘텐츠 기획 및 제작",
      subcode: "V023006",
      engname: "Contents Design & Production",
      text: "Computer Programming Language와 Multimedia Tool 지식을 바탕으로 산업에 활용되는 Digital Contents 기획 과정을 학습한다. Multimedia Contents를 이루는 주요 요소인 텍스트, 이미지, 그래픽, 사운드, 애니메이션, 비디오의 상호작용을 이해하고 다양한 매체에 적용되는 방법과 기술들을 학습한다. 창의적 개념의 결과물들을 얻기 위한 제작 과정 등을 실습한다",
      id: 4114,
    },
  ];
  const faqs412 = [
    {
      header: "정보보안",
      subcode: "V020020",
      engname: "Information Security",
      text: "인터넷 및 무선 통신의 대중화로 인해 정보 통신 분야는 급속히 발전하고 있다. 그런데 이와 같은 정보 시스템의 발전과 함께 정보 보안의 필요성이 점차로 대두되고 있다. 정보 보안은 정보 시스템이 갖고 있는 취약성을 찾아내고, 위협으로부터 보호하기 위한 대책을 세우는 학문이다. 본 과정에서는 암호학 및 보안 프로토콜을 바탕으로 웹/네트워크 보안에 관한 주제를 전반적으로 다룸으로써 보안에 대한 핵심 개념을 파악하도록 한다.",
      id: 4121,
    },
    {
      header: "컴파일러",
      subcode: "V020022",
      engname: "Compiler",
      text: "컴파일러의 역할과 구조에 대한 설명과 컴파일러의 일부 모듈을 실제로 구현함으로써 컴파일러에 대한 이해를 높일 뿐만 아니라 프로그래밍의 수준을 높이는 것을 과목의 목표로 한다. 또한 컴퓨터를 이용한 프로그래밍 언어와 자연언어 처리 방법에 대한 이해를 증진시킨다. 언어에 대한 지식을 표현하고 프로그래밍 언어로 구현하는 방법을 습득하게 될 것이며 이를 통해 보다 고차원적인 문제를 해결하는 프로그램 개발에 대한 경험을 쌓게 될 것이다.",
      id: 4122,
    },
    {
      header: "취창업세미나",
      subcode: "V020028",
      engname: "Introduction to Web Programming",
      text: "1. 컴퓨터공학부 출신의 취업 및 창업현황을 소개시키며, 본인 구직역량 평가에 따른 적합한 직업 직무 검색과 취업 직종 선택에 이어 취업활동계획 수립 및 지원의 전체 프로세스 과정 교육 2. 컴퓨터공학부생들에게 부족한 발표력, 사업기획 수립과 사업 타당성 분석 등 창업실무과정 교육 3. 최근 화두 메타버스와 인공지능 특강과 전공논술예상 문제풀이와 취업박람회 참가, 외부 전문면접코칭전문성 심화 과정 운영",
      id: 4123,
    },
  ];
  const faqs422 = [
    {
      header: "융합 캡스톤 디자인",
      subcode: "V020023",
      engname: "Capstone Deisgn",
      text: "지금까지 학습한 모든 컴퓨터공학 교과목을 종합 활용하여 현장(기업/연구소)에서 제안하는 실세계의 공학 문제를 해결하기 위한 설계 교과목이다. 학생들은 팀을 구성하여 시스템을 설계/구현/테스트/성능분석을 수행한다. 최종적으로 프로젝트 결과 보고서를 제출하고 전시회에서 시연한다",
      id: 4221,
    },
    {
      header: "게임 프로그래밍",
      subcode: "V023007",
      engname: "Game Programming",
      text: "3D 게임 제작 대한 기본적인 내용을 학습하는 과목이다. 주요 내용은 게임 API를 이용한 실시간 렌더링에 대한 포괄적인 학습과 게임 제작 실습이다. 특히, 게임 API에 포함되는 수학 및 물리적 원리를 학습하고, 게임 제작에서 발생하는 제반 문제를 해결하는 방법을 학습한다.",
      id: 4222,
    },
    {
      header: "모바일 시스템 응용 프로젝트",
      subcode: "V021007",
      engname: "Mobile System Application Project",
      text: "이 과목은 프로젝트를 통해, 모바일 시스템이나 소프트웨어를 설계하고 구현하며, 구현된 시스템의 도규먼트를 작성하는 능력을 배우는 과목이다. 구체적으로 시장에서 필요한 모바일 서비스를 분석하고 모바일 소프트웨어를 기획하며, 안드로이드나 iOS 기반으로 설계된 소프트웨어를 구현한다. 필요에 따라 웹 서버 등의 백엔드 시스템도 함께 구현한다. 구현된 시스템에 대해 성능과 활용성 등을 분석하고 필요한 도큐먼트를 만든다.",
      id: 4223,
    },
    {
      header: "인공지능",
      subcode: "V022007",
      engname: "Artificial Intelligence   ",
      text: "인공지능에서의 문제해결을 위한 기법들과 효율적인 탐색방법, 지식의 표현과 처리를 위한 다양한 기법들을 다룬다. 불확실성하에서의 추론, 퍼지이론, 지식 베이스를 이용하는 전문가 시스템, 기계학습, 신경망 이론, 지능형 에이전트 등에 대한 기본적인 내용을 공부하고 관련분야에 대한 실습을 병행한다.",
      id: 4224,
    },
    {
      header: "클라우드 컴퓨팅",
      subcode: "V024007",
      engname: "Cloud Computing",
      text: "클라우드 컴퓨팅은 확장가능한 웹 서비스 구축을 위한 핵심적인 기술로 등장하고 있다. 본 교과목에서는 클라우드 컴퓨팅의 개요 및 핵심 서비스, 그리고 AWS를 활용한 프로젝트를 진행한다. 먼저, 클라우드 인프라, 가상화 및 클라우드 저장소, 프로그래밍 모델에 대해 학습한다. 그리고 AWS를 활용하여 실행 환경을 설정하고 서비스를 구축하는 과정을 학습한다. 본 교과목을 학습함으로써, AWS에서 웹 서비스를 개발하고 배포하는 기술을 습득하게 된다.",
      id: 4225,
    },
  ];

  return (
    <div className="accordion-container">
      <div className="accordion-group">
        <article>
          <h2 className = "h2-article">1학년 1학기</h2>
          <h3 className= "h3-article">전공기초</h3>
          {faqs11.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        </article>
        <article>
        <h2 className = "h2-article">2학년 1학기</h2>
        <h3 className= "h3-article">전공선택</h3>
          {faqs21.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        </article>
        <article>
        <h2 className = "h2-article">3학년 1학기</h2>
        <h3 className= "h3-article">전공선택</h3>
          {faqs31.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        <h3 className= "h3-article">전공필수</h3>
        {faqs312.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        </article>
        <article>
        <h2 className = "h2-article">4학년 1학기</h2>
        <h3 className= "h3-article">전공선택</h3>
          {faqs411.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        <h3 className= "h3-article">전공필수</h3>
        {faqs412.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        </article>
      </div>
      <div className="accordion-group">
        <article>
          <h2 className = "h2-article">1학년 2학기</h2>
          <h3 className= "h3-article">전공기초</h3>
          {faqs12.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        </article>
        <article>
        <h2 className = "h2-article">2학년 2학기</h2>
        <h3 className= "h3-article">전공선택</h3>
          {faqs221.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        <h3 className= "h3-article">전공필수</h3>
          {faqs222.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        </article>
        <article>
        <h2 className = "h2-article">3학년 2학기</h2>
        <h3 className= "h3-article">전공선택</h3>
          {faqs321.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
          <h3 className= "h3-article">전공필수</h3>
          {faqs322.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        </article>
        <article>
        <h2 className = "h2-article">4학년 2학기</h2>
        <h3 className= "h3-article">전공필수</h3>
          {faqs422.map((faq, index) => (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          ))}
        </article>
      </div>
    </div>

    
  );
};