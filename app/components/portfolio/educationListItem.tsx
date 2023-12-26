"use client";

import { Box, Flex, Text } from "@radix-ui/themes";

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
      <Box position="absolute" width="8" height="8">
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
