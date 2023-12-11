"use client";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Flex, Text } from "@radix-ui/themes";
import React from "react";

interface SectionHeaderProps {
  text: String;
  icon: IconDefinition;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text, icon }) => {
  return (
    <Flex align="center" mb="4">
      <Box display="inline" mr="2">
        <FontAwesomeIcon icon={icon} size="xs" />
      </Box>
      <Text size="1" weight="bold" color="brown">
        {text.toUpperCase()}
      </Text>
    </Flex>
  );
};

export default SectionHeader;
