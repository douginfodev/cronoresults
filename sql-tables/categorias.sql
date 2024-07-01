/* Table: CATEGORIAS FIM, Owner: SYSDBA */
CREATE TABLE "FIM_CATEGORIAS" (
    "id" CHAR(5) NOT NULL,
    "id_campeonato" INTEGER NOT NULL,
    "nome" VARCHAR(30) NOT NULL,
    "nome_inscricao" VARCHAR(30) NOT NULL,
    "nome_relatorio" VARCHAR(30) NOT NULL,
    CONSTRAINT "PK_FIM_CATEGORIAS" PRIMARY KEY ("id", "id_campeonato")
);