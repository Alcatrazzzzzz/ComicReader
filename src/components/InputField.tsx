import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  textarea?: boolean;
  anotation?: string;
  icon?: IconType;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  anotation,
  size: _,
  textarea,
  icon,
  ...props
}) => {
  const [field, { error }] = useField(props);

  let InputOrTextArea: any = Input;
  if (textarea) {
    InputOrTextArea = Textarea;
  }
  return (
    <FormControl mb="30px" isInvalid={!!error}>
      <Flex alignItems="flex-end">
        <FormLabel
          m={"0 0 -5px 0"}
          fontFamily="'Helvetica Bold', sans-serif"
          fontWeight="bold"
          fontSize="20px"
          color="mDBlue"
          htmlFor={field.name}
        >
          {label}
        </FormLabel>
        <Text fontSize="13px" color="mGray" ml="auto">
          {anotation}
        </Text>
      </Flex>
      <Flex mt="10px" borderRadius="10px" overflow="hidden">
        <Flex p="0 12px" alignItems="center" backgroundColor="mRed">
          <Icon color="white" h="20px" w="20px" as={icon} />
        </Flex>
        <InputOrTextArea
          fontSize="20px"
          variant="unstyled"
          borderRadius={0}
          p="10px 15px"
          bgColor="white"
          {...field}
          {...props}
          id={field.name}
        />
      </Flex>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
