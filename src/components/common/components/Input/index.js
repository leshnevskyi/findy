import {
  Wrapper, InputFieldWrapper, InputField, Placeholder
} from './components';

const Input = ({icon, placeholder, onChange}) => {
  return (
    <Wrapper>
      {icon} 
      <InputFieldWrapper>
        <InputField onChange={onChange}/>
        {placeholder && <Placeholder>{placeholder}</Placeholder>}
      </InputFieldWrapper>
    </Wrapper>
  );
}

export default Input;