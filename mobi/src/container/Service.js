import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; 
// import "react-tabs/style/react-tabs.css";

// const CustomTab = ({ children }) => (
//     <Tab>
//       <h1>{children}</h1>
//     </Tab>
// );
// CustomTab.tabsRole = 'Tab'; // 탭 설정 바꾸기


function Service (){
    return(
        <div className="page page2">
            <h2 className="con-title">Service
                <p className="con-title-s">Mobintouch는 마케팅 전문기업 Mobidays가 새롭게 선보이는 마케팅 전문 HR Platform입니다.<br/>
                기업과 마케터의 성장 파트너로써 함께하겠습니다.</p>
            </h2>
            <div className="con-tab">
                <Tabs>
                    <TabList>
                        <Tab>Recommend Service</Tab>
                        <Tab>Reference Check Service</Tab>
                        <Tab>HR Care Service</Tab>
                        {/* <CustomTab>Custom Tab 1</CustomTab>
                        <CustomTab>Custom Tab 2</CustomTab> */}
                    </TabList>

                    <TabPanel>
                        <h2>Recommend Service</h2>
                        <p>기업이 원하는 포지션에 가장 FIT한<br/>인재를 추천하는 서비스 입니다.<br/>Mobintouch 컨설턴트들은 마케팅 직무 분석에<br/>
                        뛰어난 역량을 보유하고 있으며,이를 바탕으로<br/>직무 적합도가 높은 인재를 추천해드립니다.</p>
                        <ul>
                            <li>최종합격률 30%이상(타써치펌 15%)</li>
                            <li>최종합격률 30%이상(타써치펌 15%)</li>
                        </ul>
                    </TabPanel>

                    <TabPanel>
                        <h2>Reference Check Service</h2>
                        <p>기업이 원하는 포지션에 가장 FIT한<br/>인재를 추천하는 서비스 입니다.<br/>Mobintouch 컨설턴트들은 마케팅 직무 분석에<br/>
                        뛰어난 역량을 보유하고 있으며,이를 바탕으로<br/>직무 적합도가 높은 인재를 추천해드립니다.<br/>Mobintouch 컨설턴트들은 마케팅 직무 분석에<br/>
                        뛰어난 역량을 보유하고 있으며,이를 바탕으로<br/>직무 적합도가 높은 인재를 추천해드립니다.</p>
                        <ul>
                            <li>최종합격률 30%이상(타써치펌 15%)</li>
                        </ul>
                    </TabPanel>

                    <TabPanel>
                        <h2>HR Care Service</h2>
                        <p>기업이 원하는 포지션에 가장 FIT한<br/>인재를 추천하는 서비스 입니다.<br/>Mobintouch 컨설턴트들은 마케팅 직무 분석에<br/>
                        뛰어난 역량을 보유하고 있으며,이를 바탕으로<br/>직무 적합도가 높은 인재를 추천해드립니다.</p>
                        <ul>
                            <li>최종합격률 30%이상(타써치펌 15%)</li>
                            <li>최종합격률 30%이상(타써치펌 15%)</li>
                            <li>최종합격률 30%이상(타써치펌 15%)</li>
                        </ul>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Service