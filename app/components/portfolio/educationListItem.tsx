"use client";
import { Box, Flex, Text } from "@radix-ui/themes";

import type { JSX } from "react";

type Props = {
  exp: {
    title: String;
    subtitle: String;
    logo: JSX.Element;
  };
};

export default function EducationListItem({ exp }: Props) {
  return (
    <Box className="relative py-4 border-b border-gray-500 ">
      <Box position="absolute" width="48px" height="48px">
        {exp.logo}
      </Box>
      <Flex ml="9" direction="column" className="">
        <Text weight="bold" color="green">
          {exp.title}
        </Text>
        <Text color="gray" size="2">
          {exp.subtitle}
        </Text>
      </Flex>
    </Box>
  );
}
