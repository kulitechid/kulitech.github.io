import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

function cleanLegalRouteMiddleware() {
  const routes = new Map([
    ['/kanguru-siaga/privacy-policy', '/kanguru-siaga/privacy-policy/index.html'],
    ['/kanguru-siaga/privacy-policy/', '/kanguru-siaga/privacy-policy/index.html'],
    ['/kanguru-siaga/term-of-use', '/kanguru-siaga/term-of-use/index.html'],
    ['/kanguru-siaga/term-of-use/', '/kanguru-siaga/term-of-use/index.html'],
    ['/nippia', '/nippia/index.html'],
    ['/nippia/', '/nippia/index.html'],
    ['/nippia/privacy-policy', '/nippia/privacy-policy/index.html'],
    ['/nippia/privacy-policy/', '/nippia/privacy-policy/index.html'],
    ['/nippia/terms', '/nippia/terms/index.html'],
    ['/nippia/terms/', '/nippia/terms/index.html'],
  ])

  const attachMiddleware = (middlewares) => {
    middlewares.use((req, _res, next) => {
      const urlPath = (req.url || '').split('?')[0]
      const target = routes.get(urlPath)
      if (target) {
        req.url = target
      }
      next()
    })
  }

  return {
    name: 'clean-legal-route-middleware',
    configureServer(server) {
      attachMiddleware(server.middlewares)
    },
    configurePreviewServer(server) {
      attachMiddleware(server.middlewares)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cleanLegalRouteMiddleware(),
  ],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacyPolicy: resolve(import.meta.dirname, 'kanguru-siaga/privacy-policy/index.html'),
        termOfUse: resolve(import.meta.dirname, 'kanguru-siaga/term-of-use/index.html'),
        nippia: resolve(import.meta.dirname, 'nippia/index.html'),
        nippiaPrivacyPolicy: resolve(import.meta.dirname, 'nippia/privacy-policy/index.html'),
        nippiaTerms: resolve(import.meta.dirname, 'nippia/terms/index.html'),
      },
    },
  },
})
