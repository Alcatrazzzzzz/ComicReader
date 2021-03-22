import {
  Box,
  Flex,
  FormLabel,
  HStack,
  Icon,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

// 1. Create a component that consumes the `useRadio` hook
const BadgeCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const [field, { error }] = useField(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" {...field}>
      <input {...input} />
      <Flex
        {...checkbox}
        fontFamily="'Helvetica Regular', sans-serif"
        fontWeight="200"
        fontSize="16px"
        p="2px 24px 3px 24px"
        cursor="pointer"
        borderRadius="24px"
        backgroundColor={props.bgColor}
        opacity={0.3}
        color={props.color}
        _checked={{
          opacity: 1,
          transition: "1s",
        }}
        // _focus={{
        //   boxShadow: "outline",
        // }}
      >
        {props.children}
      </Flex>
    </Box>
  );
};

const AvatarIcon = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const [field, { error }] = useField(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" {...field}>
      <input {...input} />
      <Flex
        {...checkbox}
        fontFamily="'Helvetica Regular', sans-serif"
        fontWeight="200"
        fontSize="16px"
        cursor="pointer"
        p="11px"
        borderRadius="24px"
        backgroundColor={props.bgColor}
        opacity={0.3}
        color={props.color}
        _checked={{
          opacity: 1,
          transition: "1s",
        }}
        // _focus={{
        //   boxShadow: "outline",
        // }}
      >
        <Icon as={props.icon} h="20px" w="20px" />
      </Flex>
    </Box>
  );
};

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const BadgeGroup = ({
  defaultValue,
  name,
  options,
  heading,
  ...props
}) => {
  // const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: defaultValue,
    // onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <FormLabel
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        fontSize="20px"
        color="mDBlue"
        htmlFor={name}
      >
        {heading}
      </FormLabel>
      <HStack spacing="20px" mt="10px" mb="30px" {...group}>
        {name === "badge"
          ? options.map(({ text, color, bgColor }) => {
              const radio = getRadioProps({ value: text });
              return (
                <BadgeCard
                  color={color}
                  bgColor={bgColor}
                  key={text}
                  {...radio}
                >
                  {text}
                </BadgeCard>
              );
            })
          : options.map(({ text, color, bgColor, icon }) => {
              const radio = getRadioProps({ value: text });
              return (
                <AvatarIcon
                  icon={icon}
                  color={color}
                  bgColor={bgColor}
                  key={text}
                  {...radio}
                >
                  {text}
                </AvatarIcon>
              );
            })}
      </HStack>
    </>
  );
};
