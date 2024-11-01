"use client";
import { Box, Flex, Text } from "@radix-ui/themes";

import type { JSX } from "react";

type Props = {
  exp: {
    title: String;
    subtitle: String;
    duties: String[];
    logo: JSX.Element;
  };
};

export default function TimelineItem({ exp }: Props) {
  return (
    <Box className="relative mb-8 after:content-[''] after:absolute after:top-12 after:left-6 after:h-full after:border after:border-r after:border-[#dee2e692]">
      <Box position="absolute" width="48px" height="48px">
        {exp.logo}
      </Box>
      <Flex ml="9" direction="column" className="min-h-[120px]">
        <Text weight="bold" color="cyan">
          {exp.title}
        </Text>
        <Text color="gray" size="2">
          {exp.subtitle}
        </Text>
        <Box>
          {exp.duties.map((str, idx) => (
            <Box key={idx} mt="2">
              <Text as="div" size="2">
                {str}
              </Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
