/*==============================================================*/
/* DBMS name:      Sybase SQL Anywhere 12                       */
/* Created on:     8/07/2019 10:55:06 a. m.                     */
/*==============================================================*/




/*==============================================================*/
/* Table: ADMIN                                                 */
/*==============================================================*/
create table ADMIN 
(
   NOMBRE_USUARIO       varchar(30)                    null,
   ID_USUARIO           numeric(10)                    not null,
   CONTRASENA           varchar(30)                    null,
   ESTADO               smallint                       null,
   NOMBRE               char(10)                       null,
   constraint PK_ADMIN primary key (ID_USUARIO)
);

/*==============================================================*/
/* Index: ADMIN_PK                                              */
/*==============================================================*/
create unique index ADMIN_PK on ADMIN (
ID_USUARIO ASC
);

/*==============================================================*/
/* Index: USUARIOS_FERRETERIA2_FK                               */
/*==============================================================*/
create index USUARIOS_FERRETERIA2_FK on ADMIN (
NOMBRE ASC
);

/*==============================================================*/
/* Table: COLABORADOR                                           */
/*==============================================================*/
create table COLABORADOR 
(
   NOMBRE_USUARIO       varchar(30)                    null,
   ID_USUARIO           numeric(10)                    not null,
   CONTRASENA           varchar(30)                    null,
   ESTADO               smallint                       null,
   NOMBRE               char(10)                       null,
   constraint PK_COLABORADOR primary key (ID_USUARIO)
);

/*==============================================================*/
/* Index: COLABORADOR_PK                                        */
/*==============================================================*/
create unique index COLABORADOR_PK on COLABORADOR (
ID_USUARIO ASC
);

/*==============================================================*/
/* Index: USUARIOS_FERRETERIA_FK                                */
/*==============================================================*/
create index USUARIOS_FERRETERIA_FK on COLABORADOR (
NOMBRE ASC
);

/*==============================================================*/
/* Table: DEVOLUCION                                            */
/*==============================================================*/
create table DEVOLUCION 
(
   ID_FACTURA           numeric                        not null,
   ID_PRODUCTO          numeric                        not null,
   CANTIDAD             integer                        null,
   PRECIO_UNIDAD        double                         null,
   IVA                  float                          null,
   constraint PK_DEVOLUCION primary key (ID_FACTURA, ID_PRODUCTO)
);

/*==============================================================*/
/* Index: DEVOLUCION_PK                                         */
/*==============================================================*/
create unique index DEVOLUCION_PK on DEVOLUCION (
ID_FACTURA ASC,
ID_PRODUCTO ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_3_FK on DEVOLUCION (
ID_PRODUCTO ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_4_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_4_FK on DEVOLUCION (
ID_FACTURA ASC
);

/*==============================================================*/
/* Table: FACTURA                                               */
/*==============================================================*/
create table FACTURA 
(
   ID_FACTURA           numeric                        not null,
   NIT_PROVEEDOR        numeric                        null,
   ID_FACTURA_PROVEEDOR varchar(1024)                  null,
   constraint PK_FACTURA primary key (ID_FACTURA)
);

/*==============================================================*/
/* Index: FACTURA_PK                                            */
/*==============================================================*/
create unique index FACTURA_PK on FACTURA (
ID_FACTURA ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_10_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_10_FK on FACTURA (
NIT_PROVEEDOR ASC
);

/*==============================================================*/
/* Table: FERRETERIA                                            */
/*==============================================================*/
create table FERRETERIA 
(
   NOMBRE               char(10)                       not null,
   constraint PK_FERRETERIA primary key (NOMBRE)
);

/*==============================================================*/
/* Index: FERRETERIA_PK                                         */
/*==============================================================*/
create unique index FERRETERIA_PK on FERRETERIA (
NOMBRE ASC
);

/*==============================================================*/
/* Table: PRECIO                                                */
/*==============================================================*/
create table PRECIO 
(
   NIT_PROVEEDOR        numeric                        not null,
   ID_PRODUCTO          numeric                        not null,
   FECHA_ACTUALIZACION  date                           not null,
   PRECIO               numeric                        null,
   constraint PK_PRECIO primary key (NIT_PROVEEDOR, ID_PRODUCTO)
);

/*==============================================================*/
/* Index: PRECIO_PK                                             */
/*==============================================================*/
create unique index PRECIO_PK on PRECIO (
NIT_PROVEEDOR ASC,
ID_PRODUCTO ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_6_FK on PRECIO (
ID_PRODUCTO ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_7_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_7_FK on PRECIO (
NIT_PROVEEDOR ASC
);

/*==============================================================*/
/* Table: PRODUCTO                                              */
/*==============================================================*/
create table PRODUCTO 
(
   ID_PRODUCTO          numeric                        not null,
   NOMBRE               char(10)                       null,
   NOMBRE_PRODUCTO      varchar(30)                    null,
   PORCENTAJE_GANACIA   float                          null,
   IVA                  float                          null,
   constraint PK_PRODUCTO primary key (ID_PRODUCTO)
);

/*==============================================================*/
/* Index: PRODUCTO_PK                                           */
/*==============================================================*/
create unique index PRODUCTO_PK on PRODUCTO (
ID_PRODUCTO ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_8_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_8_FK on PRODUCTO (
NOMBRE ASC
);

/*==============================================================*/
/* Table: PROUCTO_FACTURA                                       */
/*==============================================================*/
create table PROUCTO_FACTURA 
(
   ID_PRODUCTO          numeric                        not null,
   ID_FACTURA           numeric                        not null,
   CANTIDAD             integer                        null,
   PRECIO_UNIDAD        double                         null,
   IVA                  float                          null,
   constraint PK_PROUCTO_FACTURA primary key (ID_PRODUCTO, ID_FACTURA)
);

/*==============================================================*/
/* Index: PROUCTO_FACTURA_PK                                    */
/*==============================================================*/
create unique index PROUCTO_FACTURA_PK on PROUCTO_FACTURA (
ID_PRODUCTO ASC,
ID_FACTURA ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_11_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_11_FK on PROUCTO_FACTURA (
ID_FACTURA ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_12_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_12_FK on PROUCTO_FACTURA (
ID_PRODUCTO ASC
);

/*==============================================================*/
/* Table: PROVEEDOR                                             */
/*==============================================================*/
create table PROVEEDOR 
(
   NIT_PROVEEDOR        numeric                        not null,
   NOMBRE_PROVEEDOR     varchar(30)                    null,
   EMAIL_PROVEEDOR      varchar(30)                    null,
   TELEFONO_PROVEEDOR   numeric                        null,
   constraint PK_PROVEEDOR primary key (NIT_PROVEEDOR)
);

/*==============================================================*/
/* Index: PROVEEDOR_PK                                          */
/*==============================================================*/
create unique index PROVEEDOR_PK on PROVEEDOR (
NIT_PROVEEDOR ASC
);

alter table ADMIN
   add constraint FK_ADMIN_USUARIOS__FERRETER foreign key (NOMBRE)
      references FERRETERIA (NOMBRE)
      on update restrict
      on delete restrict;

alter table COLABORADOR
   add constraint FK_COLABORA_USUARIOS__FERRETER foreign key (NOMBRE)
      references FERRETERIA (NOMBRE)
      on update restrict
      on delete restrict;

alter table DEVOLUCION
   add constraint FK_DEVOLUCI_RELATIONS_PRODUCTO foreign key (ID_PRODUCTO)
      references PRODUCTO (ID_PRODUCTO)
      on update restrict
      on delete restrict;

alter table DEVOLUCION
   add constraint FK_DEVOLUCI_RELATIONS_FACTURA foreign key (ID_FACTURA)
      references FACTURA (ID_FACTURA)
      on update restrict
      on delete restrict;

alter table FACTURA
   add constraint FK_FACTURA_RELATIONS_PROVEEDO foreign key (NIT_PROVEEDOR)
      references PROVEEDOR (NIT_PROVEEDOR)
      on update restrict
      on delete restrict;

alter table PRECIO
   add constraint FK_PRECIO_RELATIONS_PRODUCTO foreign key (ID_PRODUCTO)
      references PRODUCTO (ID_PRODUCTO)
      on update restrict
      on delete restrict;

alter table PRECIO
   add constraint FK_PRECIO_RELATIONS_PROVEEDO foreign key (NIT_PROVEEDOR)
      references PROVEEDOR (NIT_PROVEEDOR)
      on update restrict
      on delete restrict;

alter table PRODUCTO
   add constraint FK_PRODUCTO_RELATIONS_FERRETER foreign key (NOMBRE)
      references FERRETERIA (NOMBRE)
      on update restrict
      on delete restrict;

alter table PROUCTO_FACTURA
   add constraint FK_PROUCTO__RELATIONS_FACTURA foreign key (ID_FACTURA)
      references FACTURA (ID_FACTURA)
      on update restrict
      on delete restrict;

alter table PROUCTO_FACTURA
   add constraint FK_PROUCTO__RELATIONS_PRODUCTO foreign key (ID_PRODUCTO)
      references PRODUCTO (ID_PRODUCTO)
      on update restrict
      on delete restrict;

