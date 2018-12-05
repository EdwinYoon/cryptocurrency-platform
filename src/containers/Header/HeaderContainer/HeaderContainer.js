import React from 'react';
import styled from 'styled-components';
import LogoWrapper from '../../../components/Header/LogoWrapper';
import SortByNav from '../SortByNav';
import HeaderNav from '../HeaderNav';
import HeaderAPIButton from '../HeaderAPIButton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #323232;
`;
const BriefSection = styled.div`
  padding: 10px 20px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailSection = styled.div`
  flex: 1;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = ({navItems}) => (
  <Container>
    <BriefSection>
      <LogoWrapper />
    </BriefSection>
    <DetailSection>
      <SortByNav />
      <HeaderNavContainer>
        <HeaderNav navItems={navItems} />
        <HeaderAPIButton />
      </HeaderNavContainer>
    </DetailSection>
  </Container>
);

export default HeaderContainer;
HeaderContainer.displayName = 'HeaderContainer';