import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgrPlugin({
            svgrOptions: {
                icon: true
            },
        }),
        react(),
    ]
});
