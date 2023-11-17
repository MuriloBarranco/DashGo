import { Box, Button, Stack } from "@chakra-ui/react"
import { PagionationItem } from "./PaginationItem"

export function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PagionationItem number={1} isCurrent />
        <PagionationItem number={2} />
        <PagionationItem number={3} />
        <PagionationItem number={4} />
      </Stack>
    </Stack>
  )
}
