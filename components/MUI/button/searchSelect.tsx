import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const DetailButton = styled(Button)({
  color: "#fff7ee",
  backgroundColor: "#eb6100",
  borderRadius: "99px",
  padding: "10px 25px 10px 25px",
  fontSize: "1rem",
  fontWeight: 700,
  margin: "70px 0 0 10px",
  boxShadow: "1px 1px 6px 1px #655656",
  border: "none",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: "#b95b19",
  },
  "@media screen and (max-width:767px)": {
    margin: "10px 0px 20px 0",
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
},
});

export const DetailBTN = () => {
  return (
    <>
      <DetailButton variant="contained">詳細はこちら</DetailButton>
    </>
  );
};
