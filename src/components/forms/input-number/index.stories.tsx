import { Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import InputNumberV2 from './index.tsx';
import { FormProvider } from '../connect-form/form-provider.tsx';
import { ConnectForm } from '../connect-form/connect-form.tsx';

const meta: Meta<typeof InputNumberV2> = {
  title: 'V2/Forms/Input Number V2',
  component: InputNumberV2,
};

export default meta;

export const Default = {
  args: {},
  render: () => {
    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: 0,
            default: 10,
            composed: 20,
          }}
          showDevTool
        >
          <ConnectForm>
            {(formProps: any) => {
              const {
                control,
                formState: { errors },
              } = formProps;

              const inputProps = {
                control,
                errors,
              };

              return (
                <Container
                  maxW='xl'
                  py={5}
                  display='flex'
                  flexDirection='column'
                  gap={3}
                >
                  <InputNumberV2.Default
                    name='default'
                    label='Default'
                    required
                    {...inputProps}
                  />

                  <Flex>
                    <Button type='submit'>Submit</Button>
                  </Flex>
                </Container>
              );
            }}
          </ConnectForm>
        </FormProvider>
      </ChakraProvider>
    );
  },
};

export const Uncontrolled = {
  args: {},
  render: () => {
    return (
      <ChakraProvider>
        <Container
          maxW='xl'
          py={5}
          display='flex'
          flexDirection='column'
          gap={3}
        >
          <InputNumberV2.Default
            name='uncontrolled'
            label='Uncontrolled'
            value={0}
            onChange={(name: string, value: string) => {
              console.log({ name, value });
            }}
          />
        </Container>
      </ChakraProvider>
    );
  },
};
export const Empty = {
  args: {},
  render: () => {
    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: 0,
          }}
          showDevTool
        >
          <ConnectForm>
            {(formProps: any) => {
              const {
                control,
                formState: { errors },
              } = formProps;

              const inputProps = {
                control,
                errors,
              };

              return (
                <Container
                  maxW='xl'
                  py={5}
                  display='flex'
                  flexDirection='column'
                  gap={3}
                >
                  <InputNumberV2.Default
                    name='empty'
                    label='Empty'
                    required={true}
                    {...inputProps}
                  />

                  <Flex>
                    <Button type='submit'>Submit</Button>
                  </Flex>
                </Container>
              );
            }}
          </ConnectForm>
        </FormProvider>
      </ChakraProvider>
    );
  },
};
export const Composed = {
  args: {},
  render: () => {
    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: 0,
            default: 10,
            composed: 20,
          }}
          showDevTool
        >
          <ConnectForm>
            {(formProps: any) => {
              const {
                control,
                formState: { errors },
              } = formProps;

              const inputProps = {
                control,
                errors,
              };

              return (
                <Container
                  maxW='xl'
                  py={5}
                  display='flex'
                  flexDirection='column'
                  gap={3}
                >
                  <InputNumberV2
                    name='composed'
                    label='Composed'
                    isDisabled
                    required
                    // rule={{
                    //   validate: (id: number) => {
                    //     return id >= 1 || 'Should Be more than 1 ';
                    //   },
                    // }}
                    {...inputProps}
                  >
                    <InputNumberV2.FormControl>
                      <Flex gap={2}>
                        <InputNumberV2.FormLabel />
                      </Flex>
                      <InputNumberV2.Component />
                      <InputNumberV2.HelperText />
                      <InputNumberV2.ErrorLabel />
                    </InputNumberV2.FormControl>
                  </InputNumberV2>

                  <Flex>
                    <Button type='submit'>Submit</Button>
                  </Flex>
                </Container>
              );
            }}
          </ConnectForm>
        </FormProvider>
      </ChakraProvider>
    );
  },
};
