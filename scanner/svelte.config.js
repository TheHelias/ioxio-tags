import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: true,
      strict: true,
    }),
    // any CSS files fewer bytes than this should get inlined in `<style>`
    // inlineStyleThreshold: 5 * 1024,
    csp: {
      directives: {
        "img-src": ["'self'", "data:"],
        "style-src": ["'self'", "'unsafe-inline'"],
        "script-src": ["'self'"],
        "connect-src": ["'self'", "api.tags.ioxio.dev", "api.tags.ioxio.io"],
      },
    },
    alias: {
      $lib: "src/lib",
    },
  },
}

export default config
