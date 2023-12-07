// import Image from "next/image";

import { Box, Flex, Grid, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Grid
      columns={{
        initial: "1",
        xs: "2",
      }}
      gap="3"
    >
      <Flex direction="column" gap="3">
        <Box height="auto">
          <Text>picture container</Text>
        </Box>
      </Flex>
      <Flex direction="column" gap="3">
        <Box height="auto">
          <Text>summary + greeting</Text>
        </Box>
      </Flex>
    </Grid>
  );
}
