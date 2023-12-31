import { FormControl, FormControlProps } from '@chakra-ui/react';
import { useInputBox } from './use-inputbox';

export const InputBoxFormControl = (props: FormControlProps) => {
  const { children,...rest } = props;
  const { name } = useInputBox();

  return (
    <FormControl
      id={name}
      display='flex'
      flexDirection='column'
      gap={2}
      width='100%'
      isRequired={false}
      {...rest}
    >
      {children}
    </FormControl>
  );
};
