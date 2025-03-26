'use client';

import { createTheme, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function MaterialThemeProvider(props: Props) {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: '#FFF',
          },
          text: {
            primary: '#FFF',
          },
        },
      })}
    >
      {props.children}
    </ThemeProvider>
  );
}
