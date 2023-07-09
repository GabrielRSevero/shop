import { Box } from ".."

export const Panel = ({title, actions, children }: any) => {
  return (
    <Box className="border">
      <Box className="flex items-center p-4">
        <Box className="mr-auto">
          <h2>
            {title}
          </h2>
        </Box>
        <Box className="ml-auto">
          {actions}
        </Box>
      </Box>

      <Box className="p-4">
        {children}
      </Box>

    </Box>
  )
}