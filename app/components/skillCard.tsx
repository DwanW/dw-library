"use client";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";

interface SkillCardProps {
  text: String;
  icon: Function;
}

const SkillCard: React.FC<SkillCardProps> = ({ text, icon }) => {
  return (
    <Card>
      <Flex direction="row" align="center">
        <Box display="inline" mr="2">
          {icon()}
        </Box>
        <Text size="1" weight="bold" color="indigo">
          {text}
        </Text>
      </Flex>
    </Card>
  );
};

export default SkillCard;
