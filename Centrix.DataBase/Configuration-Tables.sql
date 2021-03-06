/****** Object:  Table [dbo].[TipoComprobanteVenta]     ******/
CREATE TABLE [dbo].[TipoComprobanteVenta](
	[IdComprobante] [int] IDENTITY(1,1) NOT NULL,
	[NombreComprobante] [varchar](500) NULL,
 CONSTRAINT [PK_TipoComprobanteVenta] PRIMARY KEY CLUSTERED 
(
	[IdComprobante] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cliente]     ******/
CREATE TABLE [dbo].[Cliente](
	[IdCliente] [int] IDENTITY(1,1) NOT NULL,
	[NombreCliente] [varchar](500) NULL,
	[DireccionCliente] [varchar](500) NULL,
	[ServidorCliente] [varchar](300) NULL,
	[KeyConfig] [varchar](300) NULL,
	[EstatusCliente] [bit] NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[IdCliente] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Almacen]     ******/
CREATE TABLE [dbo].[Almacen](
	[IdAlmacen] [int] IDENTITY(1,1) NOT NULL,
	[NombreAlmacen] [varchar](500) NULL,
 CONSTRAINT [PK_Deposito] PRIMARY KEY CLUSTERED 
(
	[IdAlmacen] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ErrorLog]     ******/
CREATE TABLE [dbo].[ErrorLog](
	[IdError] [int] IDENTITY(1,1) NOT NULL,
	[MensajeError] [varchar](max) NULL,
	[DetalleError] [varchar](max) NULL,
	[StoredProcedure] [varchar](200) NULL,
	[FechaError] [date] NULL,
	[HoraError] [varchar](50) NULL,
	[NombreCliente] [varchar](500) NULL,
	[NombreTienda] [varchar](500) NULL,
	[UserName] [varchar](200) NULL,
 CONSTRAINT [PK_ErrorLog] PRIMARY KEY CLUSTERED 
(
	[IdError] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Modulo]     ******/
CREATE TABLE [dbo].[Modulo](
	[IdModulo] [int] IDENTITY(1,1) NOT NULL,
	[NombreModulo] [varchar](500) NULL,
	[htmlModuloMenu] [varchar](max) NULL,
	[htmlModuloBoton] [varchar](max) NULL,
 CONSTRAINT [PK_Modulo] PRIMARY KEY CLUSTERED 
(
	[IdModulo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Servidor]     ******/
CREATE TABLE [dbo].[Servidor](
	[IdServidor] [int] IDENTITY(1,1) NOT NULL,
	[NombreServidor] [varchar](200) NULL,
	[KeyConfigServidor] [varchar](200) NULL,
 CONSTRAINT [PK_Servidor] PRIMARY KEY CLUSTERED 
(
	[IdServidor] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ModuloPorCliente]     ******/
CREATE TABLE [dbo].[ModuloPorCliente](
	[IdModuloPorCliente] [int] IDENTITY(1,1) NOT NULL,
	[IdCliente] [int] NULL,
	[IdModulo] [int] NULL,
	[FechaVencimiento] [varchar](10) NULL,
	[EstatusModulo] [bit] NULL,
 CONSTRAINT [PK_ModuloPorCliente] PRIMARY KEY CLUSTERED 
(
	[IdModuloPorCliente] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tienda]     ******/
CREATE TABLE [dbo].[Tienda](
	[IdTienda] [int] IDENTITY(1,1) NOT NULL,
	[IdCliente] [int] NULL,
	[NombreTienda] [varchar](500) NULL,
	[EstatusTienda] [bit] NULL,
 CONSTRAINT [PK_Tienda] PRIMARY KEY CLUSTERED 
(
	[IdTienda] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Formulario]     ******/
CREATE TABLE [dbo].[Formulario](
	[IdFormulario] [int] IDENTITY(1,1) NOT NULL,
	[IdModulo] [int] NULL,
	[PathFormulario] [varchar](max) NULL,
	[EstatusFormulario] [bit] NULL,
 CONSTRAINT [PK_Formulario] PRIMARY KEY CLUSTERED 
(
	[IdFormulario] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]     ******/
CREATE TABLE [dbo].[Usuario](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[NombreUsuario] [varchar](200) NULL,
	[NroDocumento] [varchar](20) NULL,
	[PasswordUsuario] [varchar](200) NULL,
	[NuevoUsuario] [bit] NULL,
	[EstatusUsuario] [bit] NULL,
	[SessionIdUsuario] [varchar](50) NULL,
	[SessionStatusUsuario] [varchar](50) NULL,
	[IdTienda] [int] NULL,
	[NombreTienda] [varchar](500) NULL,
	[CorreoElectronico] [varchar](300) NULL,
	[NumeroCelular1] [varchar](20) NULL,
	[NumeroCelular2] [varchar](20) NULL,
	[Imagen] [image] NULL,
	[ImagenBase] [varchar](MAX) NULL,
	[Sexo] [varchar](15) NULL,
	[FechaNacimiento] [datetime] NULL,
	[NombreCliente] [varchar](300) NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ComprobanteVenta]     ******/
CREATE TABLE [dbo].[ComprobanteVenta](
	[IdComprobante] [int] IDENTITY(1,1) NOT NULL,
	[IdTienda] [int] NULL,
	[TipoComprobante] [varchar](200) NULL,
	[Serie] [char](4) NULL,
	[NumeroSerie] [int] NULL,
	[NumeroInicio] [int] NULL,
	[NumeroFin] [int] NULL,
	[Correlativo] [int] NULL,
 CONSTRAINT [PK_ComprobanteVenta] PRIMARY KEY CLUSTERED 
(
	[IdComprobante] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AlmacenPorTienda]     ******/
CREATE TABLE [dbo].[AlmacenPorTienda](
	[IdAlmacen] [int] NOT NULL,
	[IdTienda] [int] NOT NULL,
	[EstatusAlmacen] [bit] NULL,
 CONSTRAINT [PK_DepositoPorTienda] PRIMARY KEY CLUSTERED 
(
	[IdAlmacen] ASC,
	[IdTienda] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Perfil]     ******/
CREATE TABLE [dbo].[Perfil](
	[IdPerfil] [int] IDENTITY(1,1) NOT NULL,
	[IdModuloPorCliente] [int] NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[EstatusPerfil] [bit] NULL,
 CONSTRAINT [PK_Configuracion] PRIMARY KEY CLUSTERED 
(
	[IdPerfil] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HistoricoComprobanteVenta]     ******/
CREATE TABLE [dbo].[HistoricoComprobanteVenta](
	[IdHistorico] [int] IDENTITY(1,1) NOT NULL,
	[IdComprobante] [int] NULL,
	[SerieAnterior] [char](4) NULL,
	[NumeroSerieAnterior] [int] NULL,
	[NumeroInicioAnterior] [int] NULL,
	[NumeroFinAnterior] [int] NULL,
	[SerieNuevo] [char](4) NULL,
	[NumeroSerieNuevo] [int] NULL,
	[NumeroInicioNuevo] [int] NULL,
	[NumeroFinNuevo] [int] NULL,
	[FechaActualizacion] [datetime] NULL,
 CONSTRAINT [PK_HistoricoComprobanteVenta] PRIMARY KEY CLUSTERED 
(
	[IdHistorico] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Emisor]     ******/
CREATE TABLE [dbo].[Emisor](
	[IdCliente] [int] NOT NULL,
	[IdTienda] [int] NOT NULL,
	[NombreComercial] [varchar](200) NULL,
	[NombreLegal] [varchar](200) NULL,
	[RUC] [varchar](20) NULL,
	[DireccionFiscal] [varchar](500) NULL,
	[Urbanizacion] [varchar](200) NULL,
	[Distrito] [varchar](200) NULL,
	[Provincia] [varchar](200) NULL,
	[Departamento] [varchar](200) NULL,
	[Ubigeo] [varchar](20) NULL,
	[CertificadoDigital] [varbinary](max) NULL,
	[PasswordCertificado] [varchar](20) NULL,
	[FechaCaducidadCertificado] [date] NULL,
	[UsuarioSOL] [varchar](20) NULL,
	[ClaveSOL] [varchar](20) NULL,
	[Detraccion] [decimal](18, 4) NULL,
	[IGV] [decimal](18, 4) NULL,
	[ISC] [decimal](18, 4) NULL,
 CONSTRAINT [PK_Emisor] PRIMARY KEY CLUSTERED 
(
	[IdCliente] ASC,
	[IdTienda] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  ForeignKey [FK_DepositoPorTienda_Deposito]     ******/
ALTER TABLE [dbo].[AlmacenPorTienda]  WITH CHECK ADD  CONSTRAINT [FK_DepositoPorTienda_Deposito] FOREIGN KEY([IdAlmacen])
REFERENCES [dbo].[Almacen] ([IdAlmacen])
GO
ALTER TABLE [dbo].[AlmacenPorTienda] CHECK CONSTRAINT [FK_DepositoPorTienda_Deposito]
GO
/****** Object:  ForeignKey [FK_DepositoPorTienda_Tienda]     ******/
ALTER TABLE [dbo].[AlmacenPorTienda]  WITH CHECK ADD  CONSTRAINT [FK_DepositoPorTienda_Tienda] FOREIGN KEY([IdTienda])
REFERENCES [dbo].[Tienda] ([IdTienda])
GO
ALTER TABLE [dbo].[AlmacenPorTienda] CHECK CONSTRAINT [FK_DepositoPorTienda_Tienda]
GO
/****** Object:  ForeignKey [FK_ComprobanteVenta_Tienda1]     ******/
ALTER TABLE [dbo].[ComprobanteVenta]  WITH CHECK ADD  CONSTRAINT [FK_ComprobanteVenta_Tienda1] FOREIGN KEY([IdTienda])
REFERENCES [dbo].[Tienda] ([IdTienda])
GO
ALTER TABLE [dbo].[ComprobanteVenta] CHECK CONSTRAINT [FK_ComprobanteVenta_Tienda1]
GO
/****** Object:  ForeignKey [FK_Formulario_Modulo]     ******/
ALTER TABLE [dbo].[Formulario]  WITH CHECK ADD  CONSTRAINT [FK_Formulario_Modulo] FOREIGN KEY([IdModulo])
REFERENCES [dbo].[Modulo] ([IdModulo])
GO
ALTER TABLE [dbo].[Formulario] CHECK CONSTRAINT [FK_Formulario_Modulo]
GO
/****** Object:  ForeignKey [FK_HistoricoComprobanteVenta_ComprobanteVenta1]     ******/
ALTER TABLE [dbo].[HistoricoComprobanteVenta]  WITH CHECK ADD  CONSTRAINT [FK_HistoricoComprobanteVenta_ComprobanteVenta1] FOREIGN KEY([IdComprobante])
REFERENCES [dbo].[ComprobanteVenta] ([IdComprobante])
GO
ALTER TABLE [dbo].[HistoricoComprobanteVenta] CHECK CONSTRAINT [FK_HistoricoComprobanteVenta_ComprobanteVenta1]
GO
/****** Object:  ForeignKey [FK_ModuloPorCliente_Cliente]     ******/
ALTER TABLE [dbo].[ModuloPorCliente]  WITH CHECK ADD  CONSTRAINT [FK_ModuloPorCliente_Cliente] FOREIGN KEY([IdCliente])
REFERENCES [dbo].[Cliente] ([IdCliente])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ModuloPorCliente] CHECK CONSTRAINT [FK_ModuloPorCliente_Cliente]
GO
/****** Object:  ForeignKey [FK_ModuloPorCliente_Modulo]     ******/
ALTER TABLE [dbo].[ModuloPorCliente]  WITH CHECK ADD  CONSTRAINT [FK_ModuloPorCliente_Modulo] FOREIGN KEY([IdModulo])
REFERENCES [dbo].[Modulo] ([IdModulo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ModuloPorCliente] CHECK CONSTRAINT [FK_ModuloPorCliente_Modulo]
GO
/****** Object:  ForeignKey [FK_Configuracion_ModuloPorCliente]     ******/
ALTER TABLE [dbo].[Perfil]  WITH CHECK ADD  CONSTRAINT [FK_Configuracion_ModuloPorCliente] FOREIGN KEY([IdModuloPorCliente])
REFERENCES [dbo].[ModuloPorCliente] ([IdModuloPorCliente])
GO
ALTER TABLE [dbo].[Perfil] CHECK CONSTRAINT [FK_Configuracion_ModuloPorCliente]
GO
/****** Object:  ForeignKey [FK_Configuracion_Usuario1]     ******/
ALTER TABLE [dbo].[Perfil]  WITH CHECK ADD  CONSTRAINT [FK_Configuracion_Usuario1] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[Perfil] CHECK CONSTRAINT [FK_Configuracion_Usuario1]
GO
/****** Object:  ForeignKey [FK_Tienda_Cliente]     ******/
ALTER TABLE [dbo].[Tienda]  WITH CHECK ADD  CONSTRAINT [FK_Tienda_Cliente] FOREIGN KEY([IdCliente])
REFERENCES [dbo].[Cliente] ([IdCliente])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Tienda] CHECK CONSTRAINT [FK_Tienda_Cliente]
GO
/****** Object:  ForeignKey [FK_Usuario_Tienda]     ******/
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_Tienda] FOREIGN KEY([IdTienda])
REFERENCES [dbo].[Tienda] ([IdTienda])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_Tienda]
GO
/****** Object:  ForeignKey [FK_Emisor_Cliente]     ******/
ALTER TABLE [dbo].[Emisor]  WITH CHECK ADD  CONSTRAINT [FK_Emisor_Cliente] FOREIGN KEY([IdCliente])
REFERENCES [dbo].[Cliente] ([IdCliente])
GO
ALTER TABLE [dbo].[Emisor] CHECK CONSTRAINT [FK_Emisor_Cliente]
GO
/****** Object:  ForeignKey [FK_Emisor_Tienda]     ******/
ALTER TABLE [dbo].[Emisor]  WITH CHECK ADD  CONSTRAINT [FK_Emisor_Tienda] FOREIGN KEY([IdTienda])
REFERENCES [dbo].[Tienda] ([IdTienda])
GO
ALTER TABLE [dbo].[Emisor] CHECK CONSTRAINT [FK_Emisor_Tienda]