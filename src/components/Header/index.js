import {Wrapper, LogoWrapper} from './components';
import {Stack} from 'components/common';
import DirectoryNavigation from 'components/DirectoryNavigation';
import SearchBox from 'components/SearchBox';

import Logo from 'assets/logos/findy.svg';

import {useDirectory} from 'components/context';

const Header = () => {
  const {applyFilters} = useDirectory();
  
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo/>
      </LogoWrapper>
      <Stack gap={400}>
        <DirectoryNavigation/>
        <SearchBox onChange={event => {
          applyFilters({pattern: event.target.value});
        }}/>
      </Stack>
    </Wrapper>
  );
}

export default Header;