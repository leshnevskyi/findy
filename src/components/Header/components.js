import styled, {css} from 'styled-components';

import {colors} from 'components/style';

const styles = {
  bottomBorder: css`
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: var(--stroke-width);
      display: block;
      background: var(--border-color);
      z-index: 1;
    }
  `,
};

const Wrapper = styled.header`
  --border-color: ${colors.blueGrey[700]};

  position: relative;
  height: var(--space-700);
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: end;

  & > * {
    height: 100%;
  }

  ${styles.bottomBorder}
`;

const LogoWrapper = styled.div`
  width: var(--space-600);
  display: flex;
  align-items: end;
  padding-bottom: var(--space-200);
`;

const Button = styled.button`
  --bg-color: ${colors.blueGrey[900]};

  position: relative;
  width: var(--space-600);
  height: 100%;
  padding-bottom: var(--space-200);
  display: flex;
  align-items: end;
  justify-content: center;
`;

const InputWrapper = styled.div`
  --border-color: ${colors.blueGrey[600]};

  position: relative;
  height: 100%;
  display: flex;

  ${styles.bottomBorder}
`;

export {Wrapper, LogoWrapper, InputWrapper, Button};