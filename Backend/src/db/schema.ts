import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const noticias = sqliteTable("noticias", {

  id: integer("id").primaryKey({ autoIncrement: true }),
  titulo: text("titulo").notNull(),
  descricao: text("descricao").notNull(),
  conteudo: text("conteudo").notNull(),
  data_publicacao: integer("data_publicacao", { mode: "timestamp" })
    .$defaultFn(() => new Date()),
  fonte: text("fonte").notNull(),
  tags: text("tags"), 

});