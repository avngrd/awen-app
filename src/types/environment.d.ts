export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
