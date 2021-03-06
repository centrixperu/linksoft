/****** Object:  Table [dbo].[Venta]    ******/
CREATE TABLE [dbo].[Venta](
	[IdVenta] [bigint] IDENTITY(1,1) NOT NULL,
	[NroNotaVenta] [varchar](100) NULL,
	[NroBoleta] [varchar](20) NULL,
	[NroFactura] [varchar](20) NULL,
	[TramaZIPCRDDocumento] [varchar](MAX) NULL,
	[TramaZIPCRDResumen] [varchar](MAX) NULL,
	[EstadoEnvioDocumento] [varchar](20) NULL,
	[MensajeEnvioDocumento] [varchar](20) NULL,
	[EstadoEnvioResumen] [varchar](20) NULL,
	[MensajeEnvioResumen] [varchar](20) NULL,
	[MontoTotalSinIGV] [decimal](18, 4) NULL,
	[MontoTotal] [decimal](18, 4) NULL,
	[FechaCreacion] [datetime] NULL,
	[NombreUsuario] [varchar](200) NULL,
	[NombreTienda] [varchar](500) NULL,
	[CierreTurno] [bit] NULL,
	[CierreDiario] [bit] NULL,
	[CierreMensual] [bit] NULL,
	[EstatusVenta] [varchar](100) NULL,
 CONSTRAINT [PK_Venta_1] PRIMARY KEY CLUSTERED 
(
	[IdVenta] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Producto]    ******/
CREATE TABLE [dbo].[Producto](
	[IdProducto] [bigint] IDENTITY(1,1) NOT NULL,
	[NombreProducto] [varchar](500) NULL,
	[Descripcion] [varchar](max) NULL,
	[Talla] [varchar](50) NULL,
	[Color] [varchar](50) NULL,
	[FechaProduccion] [datetime] NULL,
	[CodigoBarras] [varchar](600) NULL,
	[BarCodeImage] [image] NULL,
	[EstatusProducto] [bit] NULL,
	[Imagen1] [image] NULL,
	[Imagen2] [image] NULL,
	[Imagen3] [image] NULL,
	[NombreImagen1] [varchar](500) NULL,
	[NombreImagen2] [varchar](500) NULL,
	[NombreImagen3] [varchar](500) NULL,
 CONSTRAINT [PK_Producto] PRIMARY KEY CLUSTERED 
(
	[IdProducto] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inventario_Movimiento]    ******/
CREATE TABLE [dbo].[Inventario_Movimiento](
	[IdInventarioHistorico] [bigint] IDENTITY(1,1) NOT NULL,
	[IdProducto] [bigint] NULL,
	[PrecioVenta] [decimal](18, 4) NULL,
	[CantidadAfectada] [int] NULL,
	[FechaRegistro] [datetime] NULL,
	[TipoMovimiento] [varchar](50) NULL,
	[NombreTienda] [varchar](500) NULL,
	[NombreAlmacen] [varchar](500) NULL,
	[GuiaEntrada] [varchar](300) NULL,
	[GuiaSalida] [varchar](300) NULL,
 CONSTRAINT [PK_Inventario_Movimiento] PRIMARY KEY CLUSTERED 
(
	[IdInventarioHistorico] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inventario]    ******/
CREATE TABLE [dbo].[Inventario](
	[IdInventario] [bigint] IDENTITY(1,1) NOT NULL,
	[IdProducto] [bigint] NULL,
	[PrecioVenta] [decimal](18, 4) NULL,
	[Existencia] [int] NULL,
	[FechaCreacion] [datetime] NULL,
	[EstatusInventario] [bit] NULL,
	[NombreTienda] [varchar](500) NULL,
	[NombreAlmacen] [varchar](500) NULL,
	[NombreUsuario] [varchar](200) NULL,
 CONSTRAINT [PK_Inventario] PRIMARY KEY CLUSTERED 
(
	[IdInventario] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Detalle_Venta]    ******/
CREATE TABLE [dbo].[Detalle_Venta](
	[IdDetalleVenta] [bigint] IDENTITY(1,1) NOT NULL,
	[IdProducto] [bigint] NULL,
	[IdVenta] [bigint] NULL,
	[IdInventario] [bigint] NULL,
	[MontoProducto] [decimal](18, 4) NULL,
	[CantidadProducto] [int] NULL,
	[FechaCreacion] [datetime] NULL,
 CONSTRAINT [PK_Venta] PRIMARY KEY CLUSTERED 
(
	[IdDetalleVenta] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
CREATE TABLE [dbo].[BandejaSalida](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Cliente] [varchar](500) NULL,
	[Tienda] [varchar](500) NULL,
	[Correo] [varchar](50) NULL,
	[FTP] [varchar](50) NULL,
	[Cierre] [varchar](50) NULL,
	[Fecha] [datetime] NULL,
	[NombreArchivo1] [varchar](100) NULL,
	[NombreArchivo2] [varchar](100) NULL,
	[NombreArchivo3] [varchar](100) NULL,
	[NombreArchivo4] [varchar](100) NULL,
	[EmailUsuario] [varchar](100) NULL,
	[NombreUsuario] [varchar](100) NULL,
 CONSTRAINT [PK_BandejaSalida] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  ForeignKey [FK_Detalle_Venta_Inventario]    ******/
ALTER TABLE [dbo].[Detalle_Venta]  WITH CHECK ADD  CONSTRAINT [FK_Detalle_Venta_Inventario] FOREIGN KEY([IdInventario])
REFERENCES [dbo].[Inventario] ([IdInventario])
GO
ALTER TABLE [dbo].[Detalle_Venta] CHECK CONSTRAINT [FK_Detalle_Venta_Inventario]
GO
/****** Object:  ForeignKey [FK_Detalle_Venta_Producto]    ******/
ALTER TABLE [dbo].[Detalle_Venta]  WITH CHECK ADD  CONSTRAINT [FK_Detalle_Venta_Producto] FOREIGN KEY([IdProducto])
REFERENCES [dbo].[Producto] ([IdProducto])
GO
ALTER TABLE [dbo].[Detalle_Venta] CHECK CONSTRAINT [FK_Detalle_Venta_Producto]
GO
/****** Object:  ForeignKey [FK_Detalle_Venta_Venta]    ******/
ALTER TABLE [dbo].[Detalle_Venta]  WITH CHECK ADD  CONSTRAINT [FK_Detalle_Venta_Venta] FOREIGN KEY([IdVenta])
REFERENCES [dbo].[Venta] ([IdVenta])
GO
ALTER TABLE [dbo].[Detalle_Venta] CHECK CONSTRAINT [FK_Detalle_Venta_Venta]
GO
/****** Object:  ForeignKey [FK_Inventario_Producto]    ******/
ALTER TABLE [dbo].[Inventario]  WITH CHECK ADD  CONSTRAINT [FK_Inventario_Producto] FOREIGN KEY([IdProducto])
REFERENCES [dbo].[Producto] ([IdProducto])
GO
ALTER TABLE [dbo].[Inventario] CHECK CONSTRAINT [FK_Inventario_Producto]
GO
/****** Object:  ForeignKey [FK_Inventario_Movimiento_Producto]    ******/
ALTER TABLE [dbo].[Inventario_Movimiento]  WITH CHECK ADD  CONSTRAINT [FK_Inventario_Movimiento_Producto] FOREIGN KEY([IdProducto])
REFERENCES [dbo].[Producto] ([IdProducto])
GO
ALTER TABLE [dbo].[Inventario_Movimiento] CHECK CONSTRAINT [FK_Inventario_Movimiento_Producto]
GO