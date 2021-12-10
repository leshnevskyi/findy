import {InputWrapper, Button} from 'components/Header/components'
import {Arrow, Input} from 'components/common';
import {ButtonContainer} from './components';

import FolderIcon from 'assets/icons/folder.svg';

import {useDirectory} from 'components/context';

const DirectoryNavigation = () => {
  const {goBack, goForward, directory} = useDirectory();

  return (
    <InputWrapper>
      <ButtonContainer>
        <Button onClick={goBack}>
          <Arrow direction='left'/>
        </Button>
        <Button onClick={goForward}>
          <Arrow direction='right'/>
        </Button>
      </ButtonContainer>
      <Input 
        icon={<FolderIcon/>} 
        placeholder={directory.name}
      />
    </InputWrapper>
  );
}

export default DirectoryNavigation