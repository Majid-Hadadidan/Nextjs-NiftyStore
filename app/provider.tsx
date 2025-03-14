'use client'

import { ThemeProvider } from "./theme-rovider";
import {Toaster} from '../components/ui/sonner'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </ThemeProvider>
    </>

  );
}
export default Providers;
