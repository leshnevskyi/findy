import styled, {css} from 'styled-components';

import {colors} from 'components/style';

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
  --border-color: ${colors.blueGrey[900]};

  height: var(--space-600);
  padding-bottom: var(--space-100);
  display: grid;
  grid-template-columns: 10fr 8fr 5fr 3fr;
  align-items: end;
  border-bottom: var(--stroke-width) solid var(--border-color);
  transition: var(--speed-normal);
  user-select: none;

  ${props => props.isInteractive && css`
    &:hover {
      --border-color: ${colors.blueGrey[500]};

      cursor: pointer;
    }    
  `}

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