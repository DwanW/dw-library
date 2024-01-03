"use client";
import { Box, Button, Flex } from "@radix-ui/themes";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Flex justify={"end"} align={"center"} gap="3">
        <Box>{session?.user?.name}</Box>
        <Box>
          <Button onClick={() => signOut()}>Sign out</Button>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex justify={"end"} align={"center"} gap="3">
      <Box>Sign in to visit platform apps</Box>
      <Button onClick={() => signIn()}>Sign in</Button>
    </Flex>
  );
}
