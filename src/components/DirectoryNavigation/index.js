import {InputWrapper, Button} from 'components/Header/components'
import {Stack, Arrow} from 'components/common';

import {useDirectory} from 'components/context';

const DirectoryNavigation = () => {
  const {goBack, goForward} = useDirectory();

  return (
    <InputWrapper>
      <Stack gap={50}>
        <Button onClick={goBack}>
          <Arrow direction='left'/>
        </Button>
        <Button onClick={goForward}>
          <Arrow direction='right'/>
        </Button>
      </Stack>
    </InputWrapper>
  );
}

export default DirectoryNavigation