import styled from 'styled-components';

const Wrapper = styled.span`
  display: flex;
  transform: rotate(${props => props.rotationDegree}deg);
`;

export {Wrapper};