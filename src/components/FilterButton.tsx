import { Text } from "@chakra-ui/react";
import React from "react";
import { MotionBox } from "./Framer";

interface FilterButtonProps {
  label: string;
  isActive?: boolean;
  setActive: any;
  bgColor?: string;
  borderRadius?: string | number;
  textColor?: string;
}

const variantsGrid = {
  active: {
    color: "#ffffff",
    transition: { duration: 0.5 },
  },
  none: {},
};

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive = false,
  setActive,
  borderRadius = "12px",
  bgColor = "mDBlue",
  textColor = "#545C8C",
}) => {
  return (
    <MotionBox
      color={textColor}
      position="relative"
      cursor="pointer"
      fontFamily="'Helvetica Bold', sans-serif"
      fontWeight="bold"
      fontSize="18px"
      borderRadius={borderRadius}
      onClick={() => setActive()}
      //animtation
      animate={isActive ? "active" : "none"}
      variants={variantsGrid}
      initial="closed"
    >
      <Text zIndex={2} p="6px 12px">
        {label}
      </Text>
      {isActive === true && (
        <MotionBox
          layoutId="underline"
          w="100%"
          h="100%"
          borderRadius={borderRadius}
          backgroundColor={bgColor}
          position="absolute"
          zIndex={1}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </MotionBox>
  );
};

export default FilterButton;
