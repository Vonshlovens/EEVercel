import { ContactInfoTable } from './types/types' // this is the Database interface we defined earlier
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'jordandb',
    host: 'ep-spring-frost-767111.ap-southeast-1.postgres.vercel-storage.com',
    user: 'default:lYE6rJxUd8LA',
    port: 5434,
    max: 10,
  })
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely 
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how 
// to communicate with your database.
export const db = new Kysely<ContactInfoTable>({
  dialect,
})