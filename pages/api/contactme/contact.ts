// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { NewContactInfo, ContactInfo } from "../../../data/types/types"
// import {createContactInfo, findContactInfoFromID} from '../../../data/repositories/ContactInfoRepository'
import { sql } from "@vercel/postgres";


const likes = 100;


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;
      await sql`INSERT INTO contactinformation (name, email, subject, message, recieved)
                  VALUES (${name}, ${email}, ${subject}, ${message}, false)
                  RETURNING *;`;
      res.status(200).json({ message: 'success' });
    } catch (e: any) {
      console.log(e.message);
      res.status(500)
    }
  } else if (req.method === 'GET') {
    try {
      var rows = await sql`SELECT * FROM contactinformation`
      res.status(200).json(rows.rows);
    } catch (e: any) {
      console.log(e.message);
      res.status(500)
    }
  }else if (req.method === 'PUT') {
    try {
      let id  = req.body;
      await sql`
        UPDATE contactinformation
        SET recieved = true
        WHERE id = ${id}
      `;
      console.log("Updated");
      res.status(200).json({ message: 'success' });
    } catch (e: any) {
      console.log(e.message);
      res.status(500).json({ error: e.message });
    }
  }else if (req.method === 'DELETE') {
    try {
      let id  = req.body;
      var result = await sql`DELETE FROM contactinformation WHERE id = ${id}`;
      console.log("Deleted");
      res.status(200).json({ message: 'success' });
    } catch (e: any) {
      console.log(e.message);
      res.status(500).json({ error: e.message });
    }
  }else{
    res.status(404).json({ message: 'Not found' });
  }
}
