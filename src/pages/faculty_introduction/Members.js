import React, {useEffect} from 'react';
import './Members.css';
import TopButton from '../../components/topButton/TopButton';
import professors from './professors.json';
import companies from './company.json';
import head from "../../img/main-background2.jpg";
import AOS from "aos";
import committees from './committee.json'

const Members = () => {
    useEffect(() => {
        AOS.init();
    })

    return (
        <>
            <div className="head-image">
                <img className="headImage" alt="Head" src={head}/>
            </div>
            <br/><br/><br/>
            <div data-aos="fade-up"
                data-aos-duration="1500">
                <h1 align="center">구성원 소개</h1>
                <br/>
                <hr class="custom-hr"/>
                <br/>
            </div>
            <br/><br/>
            <div class="container">
            <div className="members_container">
                <div className="center"
                        data-aos="fade-up"
                        data-aos-duration="1500">
                    <h2>학부 교수진</h2>
                    <br/><br/>
                    <table className="professor-table">
                        <thead>

                        <tr>
                            <th>교수</th>
                            <th>연락처</th>
                            <th>교수</th>
                            <th>연락처</th>
                        </tr>
                        </thead>
                            <tbody>
                            {professors.map((professor, index) => (
                                index % 2 === 0 && (
                                    <tr key={professor.id}>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <img
                                                src={professor.photo}
                                                alt={professor.name}
                                                style={{ width: '120px', height: '160px', display: 'inline-block' }}
                                            />
                                        </td>
                                        <td style={{ width: '510px'}}>
                                            <div className="professor-info">
                                                <div className="name">{professor.name}</div>
                                                <div>Tel: {professor.contact}</div>
                                                <div>Email: {professor.email}</div>
                                                <div>
                                                    <a href={professor.homepage} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                        {professor.homepage.replace('https://', '')}
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        {professors[index + 1] && (
                                            <>
                                                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                    <img
                                                        src={professors[index + 1].photo}
                                                        alt={professors[index + 1].name}
                                                        style={{ width: '120px', height: '160px' ,display: 'inline-block'}}
                                                    />
                                                </td>
                                                <td style={{ width: '510px' }}>
                                                    <div className="professor-info">
                                                        <div className="name">{professors[index + 1].name}</div>
                                                        <div>Tel: {professors[index + 1].contact}</div>
                                                        <div>Email: {professors[index + 1].email}</div>
                                                        <div>
                                                            <a href={professors[index + 1].homepage} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                                {professors[index + 1].homepage.replace('https://', '')}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                )
                            ))}
                            </tbody>
                    </table>
                </div>
                
                </div>
                
            <br/><br/><br/><br/><br/><br/>
            
            <div className="company_table">
                <br/>
                <div className="mem-left"
                    data-aos="fade-right"
                    data-aos-duration="1500">
                    <br/>
                    <h2>가족 기업</h2>
                    <br/><br/><br/>
                    
                    <img className="companyimg" alt="company" src="./company.jpg"/>
                </div>
                <div className="mem-right"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <br/><br/><br/><br/><br/>
                    <table className="company-table">
                        <thead>
                            <tr>
                                <th>기업명</th>
                                <th>홈페이지</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map((company) => (
                                <tr key={company.id}>
                                    <td>{company.name}</td>
                                    
                                    <td>
                                        <a href={company.homepage} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                            {company.homepage.replace('http://', '').replace('https://', '')}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <br/><br/><br/><br/><br/><br/>
            
            <div className="committees_section">
                <br/>
                    <div className="comm-left"
                        data-aos="fade-right"
                        data-aos-duration="1500">
                        <br/>
                        <h2>위원회</h2>
                        <br/><br/><br/>
                        {committees.map((committee, index) => (
                            <>
                            <img className="committees-image" alt={committee.name} src={committee.image}/>
                            <br/><br/><br/><br/>
                            </>
                        ))}
                        
                    </div>
                    <div className="comm-right"
                        data-aos="fade-left"
                        data-aos-duration="1500"
                    >
                        <br/><br/><br/><br/><br/><br/>
                        {committees.map((committee, index) => (
                            <div className="committee-header" key={index}>
                                <p className="comm-head"><b>{committee.name}</b></p>
                                <hr className="custom-hr"/>
                                <p className="comm-main">{committee.description}</p>
                                <br/><br/><br/>
                                <p className='comm-foot'>{committee.member}</p>
                                <p className='comm-foot'>{committee.head}</p>
                                
                                <br/><br/><br/><br/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <TopButton />
        </>
    )
};

export default Members;