import React from 'react';
import styled from 'styled-components';
import Greeting from '../../components/Home/Greeting';
import Question from '../../components/Home/Question';
import AddButton from '../../components/Home/AddButton';
import ActivityTemplate from '../../components/Home/ActivityTemplate';
import Year from '../../components/Home/Year';
import MonthScroll from '../../components/Home/MonthScroll';
import Line from '../../components/Home/Line';
import CardList from '../../components/Home/CardList';
import MainHeader from '../../components/common/MainHeader';

const ScrollWrapper = styled.div`
  display: flex;
  width: 40px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CardScroll = styled.div`
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MonthWrapper = styled.div`
  margin-left: 32px;
  height: 100%;
  width: 47px;
  display: flex;
`;

const GreetingWrap = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;

  .empty {
    flex: 1 1 auto;
  }
`;

const Home = match => {
  return (
    <div>
      <MainHeader />
      <GreetingWrap>
        <Greeting />
        <Question />
        <div className="empty" />
        <AddButton />
      </GreetingWrap>
      <ActivityTemplate>
        <Year />
        <MonthWrapper>
          <ScrollWrapper>
            <MonthScroll />
          </ScrollWrapper>
          <Line />
        </MonthWrapper>
        <CardScroll>
          <CardList />
        </CardScroll>
      </ActivityTemplate>
    </div>
  );
};

export default Home;
