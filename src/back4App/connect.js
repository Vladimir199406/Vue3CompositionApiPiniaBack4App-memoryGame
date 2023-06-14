import Parse from 'parse/dist/parse.min.js'

export function connectBack4App() {
  Parse.initialize(import.meta.env.VITE_PARSE_APP_ID, import.meta.env.VITE_PARSE_JS_KEY)
  Parse.serverURL = import.meta.env.VITE_PARSE_HOST_API
}