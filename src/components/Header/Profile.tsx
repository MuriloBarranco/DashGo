import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Murilo Barranco</Text>
        <Text color="gray.300" fontSize="small">
          murilo_cesar7@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Murilo barranco"
        src="https://avatars.githubusercontent.com/u/53520169?v=4"
      />
    </Flex>
  )
}
