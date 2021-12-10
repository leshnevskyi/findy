import {InputWrapper, Button} from 'components/Header/components';
import {Input} from 'components/common';

import SearchIcon from 'assets/icons/search.svg';
import FilterIcon from 'assets/icons/filter.svg';

const SearchBox = ({onChange}) => {
  return (
    <InputWrapper>
      <Input 
        icon={<SearchIcon/>}
        onChange={onChange}
      />
      <Button>
        <FilterIcon/>
      </Button>
    </InputWrapper>
  );
}

export default SearchBox;