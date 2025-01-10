import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	appType: 'mpa',
	server: {
		host: true,
		port: 3000,
	},
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, './src/styles'),
		},
	},
})
