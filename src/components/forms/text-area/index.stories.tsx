import { Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import TextAreaV2 from './index';
import {FormProvider}  from '../connect-form/form-provider';
import {ConnectForm} from '../connect-form/connect-form';

//Json file form label 
//read json
//write to file
//fn formmaker
//formMaker


const meta: Meta<typeof TextAreaV2> = {
  title: 'V2/Forms/Input Textarea V2',
  component: TextAreaV2,
};

export default meta;

export const Default = {
  args: {},
  render: () => {
    const handleSubmit = (data: any) => 
    { 
        if(!data){
            return
        }
        console.log(data)
    } 
    return (
        <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({ data });
          }}
          defaultValues={{kmc: '',}} 
          showDevTool
        >
          <ConnectForm>
           {(formProps: any) => {
            const {
              control,formState: { errors },
            } = formProps;
            const inputProps = {
                control,
                errors,
            };
            return (
                <Container
                  maxW="xl"
                  py={5}
                  display="flex"
                  flexDirection="column"
                  gap={3}
                >
                  <TextAreaV2.Default
                    name="kmc"
                    label="Kmc"
                    required={true}
                    {...inputProps}
                  />
                  
                  <Flex>
                    <Button onSubmit={handleSubmit} type="submit">Submit</Button>
                  </Flex>
                </Container>
            );
          }}
          </ConnectForm>
        </FormProvider>
        </ChakraProvider>
    )
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
          <TextAreaV2.Default
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
                  <TextAreaV2.Default
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
                  <TextAreaV2
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

                    
                
                    <TextAreaV2.FormControl>
                      <Flex gap={2}>
                        <TextAreaV2.FormLabel />
                      </Flex>
                      <TextAreaV2.Component />
                      <TextAreaV2.HelperText />
                      <TextAreaV2.ErrorLabel />
                    </TextAreaV2.FormControl>
                  </TextAreaV2>

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
