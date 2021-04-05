import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React, { useState } from "react";

interface ToggleProps {
  name: string;
  label: string;
  m?: string | number | string[];
}

export const Toggle: React.FC<ToggleProps> = (props) => {
  const [field, { error }] = useField(props);
  const { name, label, m } = props;

  return (
    <FormControl m={m} w="auto" name={props.name} label={props.label}>
      <FormLabel
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        fontSize="20px"
        color="mDBlue"
        htmlFor={name}
      >
        {label}
      </FormLabel>
      <Switch
        colorScheme="schemeRed"
        size="lg"
        {...field}
        id={name}
        isChecked={field.value}
      />
    </FormControl>
  );
};
