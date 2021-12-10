import {Wrapper, LogoWrapper} from './components';
import {Stack} from 'components/common';
import DirectoryNavigation from 'components/DirectoryNavigation';

import Logo from 'assets/logos/findy.svg';

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo/>
      </LogoWrapper>
      <Stack gap={400}>
        <DirectoryNavigation/>
        {/* <SearchBox/> */}
      </Stack>
    </Wrapper>
  );
}

export default Header;