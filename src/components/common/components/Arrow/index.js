import {Wrapper} from './components';

import ArrowIcon from 'assets/icons/arrow.svg';

const rotationDegrees = {
  top: 0, right: 90, bottom: 180, left: 270
};

const Arrow = ({direction}) => {
  return (
    <Wrapper rotationDegree={rotationDegrees[direction]}>
      <ArrowIcon/>
    </Wrapper>
  );
}

export default Arrow;