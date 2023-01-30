import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const PublicButton = styled(Button) ({
    color: '#fff7ee',
    backgroundColor: '#9a2727',
    fontSize: 24,
    boxShadow: '1px 1px 6px 1px #655656',
    padding: '10px 30px',
    border: 'none',
    borderRadius: '16px',
    '&:hover': {
        position: 'relative',
        transform: 'translate(2px 2px)',
        boxShadow: 'none',
        backgroundColor: '#5c1818',
      },
})

export const Uni = () => {
  const [ViewText, setViewText] = useState<string>("");
  const current = process.env.NEXT_PUBLIC_FAKE_URL;

  useEffect(() => {
    currentUrl();
  }, []);

  const currentUrl = () => {
    const url = location.href;
    if (url == `${current}testMUI`) {
      setViewText("ここはTestMUI");
    } else if (url == `${current}testMUI`) {
    }
  };
  return (
    <>
      <h1>hello MUI</h1>
      <PublicButton variant="contained" size="large">
        {ViewText}
      </PublicButton>
    </>
  );
};

const MaterialUI = () => {
  return (
    <>
      <Uni />
    </>
  );
};

export default MaterialUI;
