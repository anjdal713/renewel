import React, {useEffect} from 'react'
import AOS from "aos";
import Map from './Map';
import TopButton from '../../components/topButton/TopButton';
import man from '../../img/man.png';
import head from '../../img/main-background2.jpg';
import future from '../../img/future.png';
import computer2 from '../../img/computer2.jpg';
import './Introduction.css'
import "aos/dist/aos.css";

const Introduction = () =>{
    useEffect(() => {
        AOS.init();
    })

    return (
        <>
        <div className="head-image">
            <img className="headImage" alt="Head" src={head}/>
        </div>
        <br/><br/><br/>
        <div className="head"
                data-aos="fade-up"
                data-aos-duration="1500">
                <h1 align="center">학부 소개</h1>
                <br/>
                <hr class="custom-hr"/>
                <br/>
        </div>
        <br/>
        <div class="container">
            <div class="container_1">
                <div class="left"
                    data-aos="fade-right"
                    data-aos-duration="1500"> 
                    <h2>학부장 인사말</h2>
                    <br/>
                    <img className="manImage" alt="Dean of Faculty" src={man}/>
                </div>
                <div class="right"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <br/><br/><br/><br/>
                    <div class="header">
                        <p>기존의 컴퓨터공학과와 멀티미디어 공학과를 합병하여</p>
                        <p>2016년 1학기부터 새로이 출범한 <span class="highlight">한성대학교 컴퓨터 공학부</span></p>
                        <hr class="custom-hr"/>
                    </div>
                    <p class="main">
                        창의적인 문제 해결 능력을 갖춘 글로벌 SW 인재 양성을 목표로
                        4개의 트랙별 교과 과정을 운영하고 있으며,<br/>
                        산업체와의 유기적인 연계를 통해 실무 교육을 진행하고 있습니다.<br/><br/>

                        본교의 최대 학부로서 19명의 전임 교원이 학부 교육을 담당하고 있으며 학생들은 SW 경진 대회, <br/> 
                        국내외 인턴쉽 참가, 학술 소모임 등 활발히 활동하고 있습니다. <br/><br/>
                            
                        앞으로도 교육, 산학, 연구를 축으로 IT 분야를 선도하는 학부가 되도록 노력하겠습니다.<br/><br/>

                        감사합니다.
                    </p>
                    <p class="foot">한성대학교 학부장<br/></p>
                </div>
            </div>
            <br/><br/><br/><br/>
            <div class="container_1">
            <br/>
                <div class="left"
                    data-aos="fade-right"
                    data-aos-duration="1500"> 
                    <br/>
                    <h2>교육 목표</h2>
                    <br/><br/><br/>
                    <img className="futureImage" alt="Dean of Faculty" src={computer2}/>
                </div>
                <div class="right"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <br/><br/><br/><br/>
                    <div class="header">
                        <p>소프트웨어 기술과 정보통신 기술(ICT)의</p>
                        <p>심화 교육을 통해 <span class="highlight">창의적인 소프트웨어 엔지니어</span>를 양성</p>
                        <hr class="custom-hr"/>
                    </div>
                    <p class="main">
                        구체적으로 문제 해결 능력과 시스템 구축 능력을 갖추고<br/>
                        최신 ICT 기술 트렌드를 활용할 수 있는 인재를 양성하고 있습니다.<br/><br/>

                        이를 위해서 컴퓨터공학의 전반적인 이론과 프로그래밍 교육을 수행한 후,<br/>
                        산업체와의 협업을 통한 실무 프로젝트 기반 교육을 진행합니다.<br/><br/>

                        소프트웨어와 컴퓨터 관련 기술은 사회 전반에 걸쳐 필수적인 기초 기술로<br/>
                        자리 잡고 있습니다.<br/><br/>
                        
                        따라서 한성대학교 컴퓨터 공학부 졸업생은 소프트웨어 및 컴퓨터 시스템을 다루는<br/>
                        모든 산업 분야에 취업해 활약하고 있습니다.<br/>
                    </p>
                </div>
            </div>
            <br/><br/><br/><br/>
            <div class="container_1">
            <br/>
                <div class="left"
                    data-aos="fade-right"
                    data-aos-duration="1500"> 
                    <br/>
                    <h2>졸업생 사례</h2>
                    <br/><br/><br/><br/>
                    <img className="futureImage" alt="Dean of Faculty" src={future}/>
                </div>
                <div class="right"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <br/><br/><br/><br/>
                    <div class="header">
                        <p>한성대학교 컴퓨터 공학부 졸업생은</p>
                        <p>소프트웨어 및 컴퓨터 시스템을 다루는 <span class="highlight">모든 산업 분야</span>에서 활약</p>
                        <hr class="custom-hr"/>
                    </div>
                    <p class="main">
                        1. 공개 SW 개발자 대회 미래창조과학부 장관상(2014년)<br/>
                        - 누구나 손쉽게 모바일용 소프트 키보드를 구현할 수 있게 해주는 S/W 개발, 졸업이후 각각 삼성전자와 NHN에 입사함<br/><br/>
                        2. CEO 캠퍼스 대회 최우수상<br/>
                        - 동대문 의류 유통 클러스터를 활용한 의류 판매를 지원하는 B2C 앱 개발<br/><br/>
                        3. ‘기능성 게임에 적합한 감정을 가진 다중 그룹 군중 시뮬레이션 연구’ 프로젝트에 연구원으로 참여<br/>
                        - 기능성 게임 분야의 중요 기술이며 인력 수요가 높은 군중 시뮬레이션 분야를 시스템으로 구현하는 역할을 수행함<br/>
                        - 졸업이후 Nexon에 입사함<br/><br/>
                        4. ICT 관련 기업 136 개와 MOU를 체결하여 기업에 학생을 파견<br/>
                        - 기업에 학생이 4~6 개월 동안 파견되어 현장 실무 중심의 교육 및 실습 과정 진행함<br/>
                        - 2015년 파견된 38명의 학생 중에 35%에 해당하는 13명은 실습을 진행했던 해당 기업에 졸업과 함께 곧바로 취업함<br/>
                    </p>
                </div>
            </div>
            <br/><br/><br/><br/>
            <div class="container_1">
            <br/>
                <div class="left"
                    data-aos="fade-right"
                    data-aos-duration="1500"> 
                    <h2>오시는 길</h2>
                    <br/>
                    <Map />
                </div>
                <div class="right"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <br/><br/><br/><br/>
                    <p class="come">
                    &nbsp;&nbsp;&nbsp;
                        ▶ &nbsp;위치 : 한성대학교 공학관 A동 104호
                    </p>
                    <hr class="custom-hr"/>
                    <p class="come">
                    &nbsp;&nbsp;&nbsp;
                        ▶ &nbsp;대중 교통 : 한성대입구역 (4호선) 2번 출구 마을버스 2번 승차,
                    </p>
                    <hr class="custom-hr"/>
                    <p class="come">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        : 창신역 (6호선) 3번 출구 마을버스 3번 승차
                    </p>
                    <hr class="custom-hr"/>
                    <p class="come">
                    &nbsp;&nbsp;&nbsp;
                        ▶ &nbsp;주소 : 02876 서울시 성북구 삼선교로 16길 116 한성대학교
                    </p>
                    <hr class="custom-hr"/>
                    <p class="come">
                    &nbsp;&nbsp;&nbsp;
                        ▶ &nbsp;전화 : 02-760-4137,
                    </p>
                    <hr class="custom-hr"/>
                    <p class="come">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        : 02-760-4438
                    </p>
                    <hr class="custom-hr"/>
                    <p class="come">
                    &nbsp;&nbsp;&nbsp;
                        ▶ &nbsp;팩스 : 02-760-4488
                    </p>
                    <hr class="custom-hr"/>
                </div>
            </div>
            <br/><br/><br/>
        </div>
        <TopButton/>
        </>
    )
}

export default Introduction;