import { SearchPlugin } from 'vitepress-plugin-search';
import { defineConfig } from "vite";

const options = {
    preset: "match"
};

export default defineConfig({
	plugins: [SearchPlugin(options)],
    resolve: {
        alias: { "./VPNavBarSearch.vue": "vitepress-plugin-search/Search.vue" },
    },
});