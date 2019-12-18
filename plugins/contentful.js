import { createClient } from 'contentful'
require('dotenv').config()

export default createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})
