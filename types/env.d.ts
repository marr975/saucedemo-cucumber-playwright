export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSER?: "chromium" | "firefox" | "webkit",
      ENV: "demo",
      URL: string,
      PASSWORD: string
      HEADLESS: "true" | "false"
    }
  }
}