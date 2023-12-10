"use client";

import { Box, Flex, Text } from "@radix-ui/themes";

type Props = {
  exp: {
    title: String;
    subtitle: String;
    duty: String;
    logo: JSX.Element;
  };
  isLast: Boolean;
};

export default function TimelineItem({ exp, isLast }: Props) {
  return isLast ? (
    <Box className="relative">
      <Box position="absolute" width="8" height="8">
        {exp.logo}
      </Box>
      <Flex ml="9" direction="column" className="min-h-[55px]">
        <Text>{exp.title}</Text>
        <Text>{exp.subtitle}</Text>
        <Text>{exp.duty}</Text>
      </Flex>
    </Box>
  ) : (
    <Box className="relative after:content-[''] after:absolute after:top-12 after:left-6 after:h-full after:border after:border-r after:border-[#dee2e692]">
      <Box position="absolute" width="8" height="8">
        {exp.logo}
      </Box>
      <Flex ml="9" direction="column" className="min-h-[120px]">
        <Text>{exp.title}</Text>
        <Text>{exp.subtitle}</Text>
        <Text>{exp.duty}</Text>
      </Flex>
    </Box>
  );
}
