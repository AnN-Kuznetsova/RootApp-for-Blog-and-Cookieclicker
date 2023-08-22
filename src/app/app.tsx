import React from "react";
import { Button, CssBaseline, Link } from "@mui/material";

import { AppRoute } from "../constants";


export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <CssBaseline />

      <div style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100%`,
        height: `100vh`,
      }}>
        <div style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        flexWrap: `wrap`,
        transform: `translateY(-100px)`,
      }}>
          {Object.entries(AppRoute).map(([link, path]) => path !== AppRoute.MAIN ? (
            <Link
              key={link}
              href={path}
              underline="none"
              sx={{ marginBottom: 2 }}
            >
              <Button
                type="button"
                variant="contained"
              >
                {link}
              </Button>
            </Link>
            ) : null)
          }
        </div>
      </div>
    </>
  );
};
