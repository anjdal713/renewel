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
            <br/>
            <div className="members_container">
                <br />
                <h2 align="center">학부 교수진</h2>
                <br/><br/>
                <div className="center">
                    <table className="professor-table">
                        <div className="up"
                             data-aos="fade-up"
                             data-aos-duration="1500">
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
                                        <td>
                                            <img
                                                src={professor.photo}
                                                alt={professor.name}
                                                style={{ width: '120px', height: '160px' }}
                                            />
                                        </td>
                                        <td style={{ width: '300px' }}>
                                            <div className="professor-info">
                                                <div className="name">{professor.name}</div>
                                                <div>Tel: {professor.contact}</div>
                                                <div>Email: {professor.email}</div>
                                                <div>
                                                    <a href={professor.homepage} target="_blank" rel="noopener noreferrer">
                                                        {professor.homepage.replace('https://', '')}
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        {professors[index + 1] && (
                                            <>
                                                <td>
                                                    <img
                                                        src={professors[index + 1].photo}
                                                        alt={professors[index + 1].name}
                                                        style={{ width: '120px', height: '160px' }}
                                                    />
                                                </td>
                                                <td style={{ width: '300px' }}>
                                                    <div className="professor-info">
                                                        <div className="name">{professors[index + 1].name}</div>
                                                        <div>Tel: {professors[index + 1].contact}</div>
                                                        <div>Email: {professors[index + 1].email}</div>
                                                        <div>
                                                            <a href={professors[index + 1].homepage} target="_blank" rel="noopener noreferrer">
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
                        </div>
                    </table>
                </div>
                </div>
            <br/><br/><br/><br/><br/><br/>
            <hr className="custom-hr"/>
            <div className="company_table">
                <br/>
                <div className="center"
                     data-aos="fade-up"
                     data-aos-duration="1500">
                    <br/>
                    <h2 align="center">가족 기업</h2>
                    <br/><br/>
                    <img className="companyimg" alt="company" src="./company.jpg"/>
                    <div className="center">
                        <table className="company-table">
                            <thead>
                            <tr>
                                <th>기업명</th>
                                <th>소개</th>
                                <th>홈페이지</th>
                            </tr>
                            </thead>
                            <tbody>
                            {companies.map((company) => (
                                <tr key={company.id}>
                                    <td>{company.name}</td>
                                    <td>{company.intro}</td>
                                    <td>
                                        <a href={company.homepage} target="_blank" rel="noopener noreferrer">
                                            {company.homepage.replace('http://', '').replace('https://', '')}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <br/><br/><br/><br/>
                        <hr className="custom-hr"/>
                        <div className="committees_section">
                            <br/>
                            <div className="center"
                                 data-aos="fade-up"
                                 data-aos-duration="1500">
                                <br/>
                                <div className="center">
                                    <table className="company-table">
                                        <h2 align="center">위원회</h2>
                                        <br/><br/><br/><br/><br/>
                                            {committees.map((committee, index) => (
                                                <div className="committee-content" key={index}>
                                                    <h3>{committee.name}</h3>
                                                    <img src={committee.image} alt={committee.name} />

                                                    <p>{committee.description}</p>
                                                    <br/>
                                                    <p>{committee.head}</p>
                                                    <p>{committee.member}</p>
                                                    <br/><br/>
                                                </div>
                                            ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TopButton />
        </>
    )
};

export default Members;