import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

/**
 * Appointment / contact enquiries submitted through the website.
 * Every submission is persisted server-side; nothing is faked.
 */
export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  treatment: varchar("treatment", { length: 120 }),
  preferred: varchar("preferred", { length: 60 }),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Enquiry = typeof enquiries.$inferSelect;
