import styled from 'styled-components';

import {Stack} from 'components/common';

import {colors} from 'components/style';

const ButtonContainer = styled(Stack).attrs({gap: 50})`
  background: ${colors.blueGrey[600]};
`;

export {ButtonContainer};