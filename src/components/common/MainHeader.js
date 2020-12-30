import logo from '../../assets/images/ic_sqoop.svg';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  display: flex;
  margin: 0px 80px;
  padding: 8px 0px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .list {
    list-style: none;
    padding: 16px 10px;
    font-weight: 400;
    &:hover {
      font-weight: 700;
    }
  }
`;

const Spacer = styled.div`
  height: 1rem;
`;

const MainHeader = () => {
  return (
    <>
      <HeaderBlock>
        <img src={logo} alt="logo" style={{}} />
        <Wrapper>
          <li className="list">홈</li>
          <li className="list">모아보기</li>
          <li className="list">마이페이지</li>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default MainHeader;