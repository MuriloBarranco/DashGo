import { Box, Stack, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface NavScetionProps {
  title: string
  children: ReactNode
}

export default function NavSection({ title, children }: NavScetionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stetch">
        {children}
      </Stack>
    </Box>
  )
}
