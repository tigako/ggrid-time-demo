import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // 外部（CodeSandbox など）からのアクセスを許可
    host: true,
    // CodeSandbox の動的サブドメインを許可（例: 5dt7fv-5173.csb.app）
    allowedHosts: [".csb.app"],
    // もし HMR で接続エラーが出る場合は、下記をホスト名に合わせて有効化
    // hmr: {
    //   host: "5dt7fv-5173.csb.app",
    //   protocol: "wss",
    //   port: 443
    // }
  },
});
