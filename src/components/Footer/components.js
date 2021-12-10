import styled from 'styled-components';

import {colors} from 'components/style';

const Wrapper = styled.header`
  --border-color: ${colors.blueGrey[700]};

  position: relative;
  height: var(--space-700);
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: end;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: var(--stroke-width);
    display: block;
    background: var(--border-color);
    z-index: 1;
  }
`;

export {Wrapper};