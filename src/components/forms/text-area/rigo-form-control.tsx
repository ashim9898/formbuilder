import { FormControl, FormControlProps } from '@chakra-ui/react';
import { useTextArea } from './use-textarea';

export const RigoFormControl = (props: FormControlProps) => {
  const { children,...rest } = props;
  const { name } = useTextArea();

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
