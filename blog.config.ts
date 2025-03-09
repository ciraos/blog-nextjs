import { defineConfigs } from "@/lib/config";

export default defineConfigs({
    name: "葱苓语畔",
    server: process.env.NODE_ENV === "production" ? "https://blog.ciraos.top" : "http://localhost:3500",
    description: "a small blog station.",
    twikoo: {
        envId: "https://twikoo.ciraos.top"
    }
});
