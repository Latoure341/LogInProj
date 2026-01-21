
const {handlers} = require('../middleware/auth.js')

export const { GET, POST } = handlers
export const runtime = "edge" // optional