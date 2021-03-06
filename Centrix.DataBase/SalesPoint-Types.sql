/****** Object:  UserDefinedTableType [dbo].[lstEInventario]     ******/
CREATE TYPE [dbo].[lstEInventario] AS TABLE(
	[IdInventario] [int] NULL,
	[IdProducto] [int] NULL,
	[PrecioVenta] [decimal](18, 4) NULL,
	[Existencia] [int] NULL,
	[FechaCreacion] [date] NULL,
	[EstatusInventario] [bit] NULL,
	[Tienda] [varchar](500) NULL,
	[Almacen] [varchar](500) NULL,
	[Usuario] [varchar](500) NULL,
	[Almacenddl] [varchar](500) NULL,
	[Tiendaddl] [varchar](500) NULL,
	[GuiaEntrada] [varchar](300) NULL,
	[GuiaSalida] [varchar](300) NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[lstERegistroVenta]     ******/
CREATE TYPE [dbo].[lstERegistroVenta] AS TABLE(
	[IdProducto] [int] NULL,
	[IdInventario] [int] NULL,
	[MontoProducto] [decimal](18, 4) NULL,
	[CantidadProducto] [int] NULL,
	[MontoTotalSinIGV] [decimal](18, 4) NULL,
	[MontoTotal] [decimal](18, 4) NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[lstETienda]     ******/
CREATE TYPE [dbo].[lstETienda] AS TABLE(
	[IdTienda] [int] NULL,
	[IdCliente] [int] NULL,
	[NombreCliente] [varchar](500) NULL,
	[NombreTienda] [varchar](500) NULL,
	[EstatusTienda] [bit] NULL,
	[Clienteddl] [varchar](500) NULL
)
GO
