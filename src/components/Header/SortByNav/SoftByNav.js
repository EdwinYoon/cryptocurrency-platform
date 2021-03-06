import React from 'react';
import styled from 'styled-components';
import withNavItems from '../../../StaticData/withNavItems';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px #505050 solid;
`;
const ButtonContainer = styled.div`
  padding-left: 1.5rem;
`;
const SortByButton = styled.div`
  color: #808080;
  font-family: 'Raleway', sans-serif;
  &:hover {
    color: #e8e8e8;
    transition: all 0.5s ease;
  }
  &:active {
    color: #e8e8e8;
  }
`;

const SortByNav = ({sortByNavItems, onClickHandler = () => {}}) => (
  <Container>
    {sortByNavItems &&
      sortByNavItems.map(item => (
        <ButtonContainer key={item}>
          <SortByButton onClick={onClickHandler}>{item}</SortByButton>
        </ButtonContainer>
      ))}
  </Container>
);
export default withNavItems(SortByNav);
