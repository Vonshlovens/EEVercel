import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely'

export interface ContactInfoTable {
    id: number | undefined;
    name: string;
    email: string;
    message: string;
    subscribed: boolean;
  }

export type ContactInfo = Selectable<ContactInfoTable>
export type NewContactInfo = Insertable<ContactInfoTable>
export type ContactInfoUpdate = Updateable<ContactInfoTable>