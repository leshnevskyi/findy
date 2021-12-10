import styled from 'styled-components';
import {titleCase} from 'title-case';

const Stack = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: var(--space-${props => props.gap}, 0);
`;

const Text = styled.span`
  font-size: var(--font-size-${({size}) => size});
  font-weight: ${({weight}) => weight};
  color: ${({color}) => color};
  background-color: transparent;

  & > * {
    display: inline;
  }
`;

const Heading = styled(Text).attrs(({level, children}) => {
  return {as: `h${level ?? 1}`, children: titleCase(children)};
})`
  font-family: 'Mirador';
  font-size: var(--font-size-${({level}) => 1000 - 100 * (level ?? 1 - 1)});
  font-weight: 900;
`;

export {Stack, Text, Heading};
export {default as Arrow} from './components/Arrow';