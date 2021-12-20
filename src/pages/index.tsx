import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../components/Link";
import Copyright from "../components/Copyright";
import { LoginAndRegister } from "../components/Forms/LoginAndRegister";
import { AuthContext } from "../components/AuthContext/AuthContext";
import { useContext } from "react";
import { ContextState } from "../components/AuthContext/AuthContext";
import { SignOutButton } from "../components/SignOutButton";
import { Newsfeed } from "../components/NewsFeed/NewsFeed";

const Home: NextPage = () => {
  const { user } = useContext(AuthContext) as ContextState;
  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          width: "100%",
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        {!user ? <LoginAndRegister /> : <Newsfeed />}
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
