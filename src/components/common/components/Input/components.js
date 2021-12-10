import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: var(--space-1000);
  padding: var(--space-100) 0;
  flex: 1;
  display: flex;
  align-items: end;
  gap: var(--space-200);
`;

const InputFieldWrapper = styled.div`
  position: relative;
  padding-bottom: var(--space-50);
  display: flex;
  align-items: end;
`;

const InputField = styled.input.attrs({spellCheck: false})`

`;

const Placeholder = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 700;
`;

export {Wrapper, InputFieldWrapper, InputField, Placeholder};