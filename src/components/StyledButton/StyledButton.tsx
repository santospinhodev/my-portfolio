import { styled } from "@mui/material"

interface StyledButtonProps {
  children: React.ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

        const StyledButton = styled('button')(({theme }) => ({
            backgroundColor: 'transparent',
            border: '1px solid ' + theme.palette.secondary.contrastText,
            borderRadius:'3px',
            padding: '5px 15px',
            width: '100%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer',
            color: theme.palette.secondary.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
            }
    }))

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  )
}

export default StyledButton
