import {
  Box,
  Button,
  ComponentWithAs,
  Flex,
  forwardRef,
  Icon,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
// 1. Create a custom motion component from Box
export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Flex ref={ref} {...chakraProps} />;
  })
);

export const MotionBtn = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Button ref={ref} {...chakraProps} />;
  })
);

export const MotionInput = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Input ref={ref} {...chakraProps} />;
  })
);

export const MotionSimpleGrid = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <SimpleGrid ref={ref} {...chakraProps} />;
  })
);

export const MotionIcon = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Icon ref={ref} {...chakraProps} />;
  })
);

// 2. You'll get access to `motion` and `chakra` props in `MotionBox`
