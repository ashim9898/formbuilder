import { FormControl, FormControlProps } from '@chakra-ui/react';
import { useRigoCheckboxGroup } from './use-checkbox-group';

export const RigoFormControl = (props: FormControlProps) => {
  const { children, ...rest } = props;
  const { name } = useRigoCheckboxGroup();

  return (
    <FormControl
      id={name}
      display="flex"
      flexDirection="column"
      gap={2}
      width="100%"
      {...rest}
      isRequired={false}
    >
      {children}
    </FormControl>
  );
};
