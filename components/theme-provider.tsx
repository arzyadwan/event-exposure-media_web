"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// Hapus type Attribute jika error, atau sesuaikan dengan versi library terbaru
// Biasanya cukup passing props spread

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}