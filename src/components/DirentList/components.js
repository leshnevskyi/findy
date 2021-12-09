import styled from 'styled-components';

const Wrapper = styled.table`
  position: relative;
  width: 100%;
  font-size: var(--font-size-400);
  text-align: left;
`;

const Head = styled.thead`

`;

const Body = styled.tbody`

`;

const Row = styled.tr`
  height: var(--space-600);
  display: grid;
  grid-template-columns: 5fr 4fr 4fr 4fr;

  & > *:last-child {
    text-align: right;
  }
`;

const Header = styled.th`
  font-weight: 700;
`;

const Data = styled.td`
  white-space: nowrap;
  overflow: hidden;
`;

export {Wrapper, Head, Body, Row, Header, Data};