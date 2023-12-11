"use client";

import { Box, Flex, Text } from "@radix-ui/themes";

type Props = {
  exp: {
    title: String;
    subtitle: String;
    duties: String[];
    logo: JSX.Element;
  };
  isLast: Boolean;
};

export default function TimelineItem({ exp, isLast }: Props) {
  return isLast ? (
    <Box className="relative pb-8">
      <Box position="absolute" width="8" height="8">
        {exp.logo}
      </Box>
      <Flex ml="9" direction="column" className="min-h-[55px]">
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
  ) : (
    <Box className="relative pb-8 after:content-[''] after:absolute after:top-12 after:left-6 after:h-full after:border after:border-r after:border-[#dee2e692]">
      <Box position="absolute" width="8" height="8">
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
