/****** Object:  StoredProcedure [dbo].[usp_UpdCierreDiario]     ******/
CREATE PROC [dbo].[usp_UpdCierreDiario]
@NombreTienda VARCHAR(500)   
AS 
BEGIN
	UPDATE Venta SET CierreDiario = 1
	WHERE CAST(FechaCreacion AS DATE) <= CAST(GETDATE() AS DATE) 
	AND NombreTienda = @NombreTienda  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsProducto]     ******/
CREATE PROC [dbo].[usp_InsProducto]             
@NombreProducto varchar(500),          
@Descripcion varchar(MAX),          
@Talla varchar(50),          
@Color varchar(50),  
@CodigoBarras varchar(600),  
@BarCodeImage IMAGE,          
@EstatusProducto BIT,
@Imagen1 IMAGE,
@Imagen2 IMAGE,
@Imagen3 IMAGE           
AS            
BEGIN            
 INSERT INTO Producto         
 (NombreProducto,        
 Descripcion,        
 Talla,        
 Color,  
 FechaProduccion,  
 CodigoBarras,   
 BarCodeImage,      
 EstatusProducto,
 Imagen1,
 Imagen2,
 Imagen3)        
 VALUES        
 (@NombreProducto,        
 @Descripcion,        
 @Talla,        
 @Color,  
 GETDATE(),  
 @CodigoBarras,   
 @BarCodeImage,       
 @EstatusProducto,
 @Imagen1,
 @Imagen2,
 @Imagen3)         
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdProducto]     ******/
CREATE PROC [dbo].[usp_UpdProducto]      
@IdProducto INT,      
@NombreProducto VARCHAR(500),      
@Descripcion VARCHAR(MAX),      
@Talla VARCHAR(50),      
@Color VARCHAR(50),         
@EstatusProducto BIT,    
@Imagen1 IMAGE,    
@Imagen2 IMAGE,    
@Imagen3 IMAGE     
AS      
BEGIN      
 UPDATE Producto SET      
 NombreProducto = @NombreProducto,      
 Descripcion = @Descripcion,      
 Talla = @Talla,      
 Color = @Color,        
 EstatusProducto = @EstatusProducto,  
 Imagen1 = @Imagen1,  
 Imagen2 = @Imagen2,  
 Imagen3 = @Imagen3      
 WHERE      
 IdProducto = @IdProducto      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetRegistroVenta]     ******/
CREATE PROC [dbo].[usp_GetRegistroVenta]    
@NombreTienda VARCHAR(500)      
AS        
BEGIN        
 SELECT         
 IdVenta,        
 '0' AS IdProducto,       
 '' AS NombreProducto,      
 '' AS Talla,      
 '' AS Color,       
 '0' AS IdInventario,        
 NroNotaVenta,  
 NroBoleta,
 NroFactura,
 EstadoEnvioDocumento,
 MensajeEnvioDocumento,
 EstadoEnvioResumen,
 MensajeEnvioResumen,      
 '0' AS MontoProducto,        
 '0' AS CantidadProducto,        
 MontoTotalSinIGV,        
 MontoTotal,        
 FechaCreacion,        
 EstatusVenta,  
 CierreDiario,  
 '' AS NombreTienda,  
 '' AS Tiendaddl      
 FROM Venta V       
 WHERE NombreTienda =  @NombreTienda        
END 
GO
/****** Object:  StoredProcedure [dbo].[usp_DelProducto]     ******/
CREATE PROC [dbo].[usp_DelProducto]
@IdProducto int
AS
BEGIN
	DELETE Producto wHERE IdProducto = @IdProducto
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProductos]     ******/
CREATE PROC [dbo].[usp_GetProductos]          
AS          
BEGIN          
 SELECT IdProducto,        
 NombreProducto,        
 Descripcion,        
 Talla,         
 Color,        
 FechaProduccion,        
 CodigoBarras,        
 BarCodeImage,     
 '' as Imagen1,    
 '' as Imagen2,    
 '' as Imagen3,  
 '' as ImagenBase1,  
 '' as ImagenBase2, 
 '' as ImagenBase3,
 NombreImagen1,
 NombreImagen2,
 NombreImagen3,     
 EstatusProducto,        
 '' as Talladdl,        
 '' as Colorddl FROM Producto          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProductoRepetido]     ******/
CREATE PROC [dbo].[usp_GetProductoRepetido]                  
@NombreProducto varchar(500),                          
@Talla varchar(50),                    
@Color varchar(50)              
AS                  
BEGIN                  
SELECT IdProducto,          
 NombreProducto,          
 Descripcion,          
 Talla,             
 Color,          
 FechaProduccion,          
 CodigoBarras,          
 BarCodeImage,     
 Imagen1,    
 Imagen2,    
 Imagen3,   
 '' as ImagenBase1, 
 '' as ImagenBase2,
 '' as ImagenBase3,
 NombreImagen1,
 NombreImagen2,
 NombreImagen3,       
 EstatusProducto,          
 '' as Talladdl,          
 '' as Colorddl FROM Producto WHERE                   
NombreProducto = @NombreProducto AND                  
Talla = @Talla AND                  
Color = @Color                  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProducto]     ******/
CREATE PROC [dbo].[usp_GetProducto]         
@IdProducto INT           
AS            
BEGIN            
 SELECT IdProducto,          
 NombreProducto,          
 Descripcion,          
 Talla,            
 Color,          
 FechaProduccion,          
 CodigoBarras,          
 BarCodeImage,    
 Imagen1,    
 Imagen2,    
 Imagen3,    
 '' as ImagenBase1,
 '' as ImagenBase2,
 '' as ImagenBase3,
 NombreImagen1,
 NombreImagen2,
 NombreImagen3,        
 EstatusProducto,          
 '' as Talladdl,          
 '' as Colorddl FROM Producto           
 WHERE IdProducto = @IdProducto         
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProductosTienda]     ******/
CREATE PROC [dbo].[usp_GetProductosTienda]          
@NombreAlmacen VARCHAR(500),      
@NombreTienda VARCHAR(500)         
AS            
BEGIN            
 SELECT P.IdProducto,         
  I.IdInventario,               
  P.NombreProducto,                
  P.Descripcion,                
  P.Talla,                 
  P.Color,           
  I.Existencia,        
  I.PrecioVenta,             
  P.FechaProduccion,                
  P.CodigoBarras,                
  P.BarCodeImage,   
  P.Imagen1,  
  P.Imagen2,  
  P.Imagen3,               
  P.EstatusProducto,                
  '' as Talladdl,                
  '' as Colorddl FROM Producto P  INNER JOIN        
  Inventario I ON P.IdProducto = I.IdProducto        
 WHERE     
 P.EstatusProducto = 1         
 --AND NombreAlmacen = @NombreAlmacen    
 AND NombreTienda = @NombreTienda    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProductosRegistradosInventario]     ******/
CREATE PROC [dbo].[usp_GetProductosRegistradosInventario]        
@NombreAlmacen VARCHAR(500)        
AS        
BEGIN        
 SELECT P.IdProducto,         
  I.IdInventario,               
  P.NombreProducto,                
  P.Descripcion,                
  P.Talla,                 
  P.Color,           
  I.Existencia,        
  I.PrecioVenta,             
  P.FechaProduccion,                
  P.CodigoBarras,                
  P.BarCodeImage,  
  P.Imagen1,
  P.Imagen2,
  P.Imagen3,              
  P.EstatusProducto,                
  '' as Talladdl,                
  '' as Colorddl FROM Producto P  INNER JOIN        
  Inventario I ON P.IdProducto = I.IdProducto        
 WHERE         
 P.EstatusProducto = 1     
 AND NombreAlmacen = @NombreAlmacen        
 AND NombreTienda IS NULL    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProductosInventario]     ******/
CREATE PROC [dbo].[usp_GetProductosInventario]      
@NombreAlmacen VARCHAR(500)      
AS      
BEGIN      
 SELECT IdProducto,          
  NombreProducto,          
  Descripcion,          
  Talla,           
  Color,          
  FechaProduccion,          
  CodigoBarras,          
  BarCodeImage,  
  '' as Imagen1,  
  '' as Imagen2,  
  '' as Imagen3,
  '' as ImagenBase1,
  '' as ImagenBase2,
  '' as ImagenBase3,
  NombreImagen1,
  NombreImagen2,
  NombreImagen3,        
  EstatusProducto,          
  '' as Talladdl,          
  '' as Colorddl FROM Producto       
 WHERE IdProducto NOT IN       
 (SELECT IdProducto FROM Inventario      
 WHERE NombreAlmacen = @NombreAlmacen)      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProductosAlmacen]     ******/
CREATE PROC [dbo].[usp_GetProductosAlmacen]         
@NombreAlmacen VARCHAR(500)              
AS              
BEGIN   
   
 --DECLARE @NombreAlmacen AS VARCHAR(500)  
 --SET @NombreAlmacen = 'Almacen1'     
         
 SELECT P.IdProducto,           
  I.IdInventario,                 
  P.NombreProducto,                  
  P.Descripcion,                  
  P.Talla,                   
  P.Color,   
  (SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento  
  WHERE TipoMovimiento IN ('Ingreso a almacen','Salida de almacen','Retorno inventario a almacen')  
  AND IdProducto = P.IdProducto  
  GROUP BY IdProducto) AS Existencia,    
  I.Existencia,          
  I.PrecioVenta,               
  P.FechaProduccion,                  
  P.CodigoBarras,                  
  P.BarCodeImage,      
  P.Imagen1,    
  P.Imagen2,    
  P.Imagen3,                
  P.EstatusProducto,                  
  '' as Talladdl,                  
  '' as Colorddl FROM Producto P  INNER JOIN          
  Inventario I ON P.IdProducto = I.IdProducto          
 WHERE           
 P.EstatusProducto = 1       
 AND NombreAlmacen = @NombreAlmacen          
 AND NombreTienda IS NULL    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetInventarioRepetido]     ******/
CREATE PROC [dbo].[usp_GetInventarioRepetido]       
@NombreAlmacen VARCHAR(500),        
@NombreTienda VARCHAR(500),         
@IdProducto INT        
AS        
BEGIN      
  SELECT P.IdProducto,           
  I.IdInventario,                 
  P.NombreProducto,                  
  P.Descripcion,                  
  P.Talla,                   
  P.Color,             
  I.Existencia,          
  I.PrecioVenta,               
  P.FechaProduccion,                  
  P.CodigoBarras,                  
  P.BarCodeImage, 
  P.Imagen1,
  P.Imagen2,
  P.Imagen3,                 
  P.EstatusProducto,                  
  '' as Talladdl,                  
  '' as Colorddl      
  FROM Producto P  INNER JOIN          
  Inventario I ON P.IdProducto = I.IdProducto     
 WHERE I.IdProducto = @IdProducto    
 AND I.NombreAlmacen = @NombreAlmacen    
 AND I.NombreTienda = @NombreTienda      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetInventario]     ******/
CREATE PROC [dbo].[usp_GetInventario]          
AS          
BEGIN          
 SELECT     
 IdInventario,    
 IdProducto,    
 PrecioVenta,    
 Existencia,    
 FechaCreacion,    
 EstatusInventario,    
 NombreTienda as Tienda,    
 NombreAlmacen as Almacen,    
 NombreUsuario as Usuario,    
 '' AS Almacenddl,    
 '' AS Tiendaddl,
 '' AS GuiaEntrada,
 '' AS GuiaSalida FROM Inventario         
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetReporteVentaProducto]     ******/
CREATE PROC [dbo].[usp_GetReporteVentaProducto]        
@NombreTienda VARCHAR(500),              
@Fecha AS DATETIME              
AS              
BEGIN              
    
--DECLARE @NombreTienda VARCHAR(500)          
--SET @NombreTienda = 'tienda el rey 110'        
--DECLARE @Fecha AS DATETIME            
--SET @Fecha = CONVERT(DATE,'11/24/2017')        
         
SELECT            
P.IdProducto,            
P.NombreProducto,            
P.Talla,            
P.Color,         
-- PrecioVenta        
(SELECT PrecioVenta FROM Inventario I WHERE I.IdProducto = P.IdProducto AND I.NombreTienda = @NombreTienda) AS PrecioVenta,            
-- VentaTienda        
 COALESCE((SELECT ABS(SUM(IM.CantidadAfectada))         
 FROM Inventario_Movimiento IM         
 WHERE IM.IdProducto = P.IdProducto         
 AND IM.TipoMovimiento = 'Venta en tienda'         
 AND CAST(FechaRegistro AS DATE) = @Fecha         
 AND NombreTienda = @NombreTienda GROUP BY IdProducto) -            
 (SELECT ABS(SUM(IM.CantidadAfectada))         
 FROM Inventario_Movimiento IM         
 WHERE IM.IdProducto = P.IdProducto         
 AND IM.TipoMovimiento = 'Anulacion de venta'         
 AND CAST(FechaRegistro AS DATE) = @Fecha         
 AND NombreTienda = @NombreTienda GROUP BY IdProducto),        
 (SELECT ABS(SUM(IM.CantidadAfectada))         
 FROM Inventario_Movimiento IM         
 WHERE IM.IdProducto = P.IdProducto         
 AND IM.TipoMovimiento = 'Venta en tienda'         
 AND CAST(FechaRegistro AS DATE) = @Fecha         
 AND NombreTienda = @NombreTienda         
 GROUP BY IdProducto)) AS VentaTienda,          
 --AnulacionVentaTienda        
 (SELECT ABS(SUM(IM.CantidadAfectada))         
 FROM Inventario_Movimiento IM         
 WHERE IM.IdProducto = P.IdProducto         
 AND IM.TipoMovimiento = 'Anulacion de venta'         
 AND CAST(FechaRegistro AS DATE) = @Fecha         
 AND NombreTienda = @NombreTienda         
 GROUP BY IdProducto) AS AnulacionVentaTienda,          
 --FechaReporte        
 CONVERT(VARCHAR(10),@Fecha,120) AS FechaReporte,         
 --NombreTienda         
 @NombreTienda AS NombreTienda,       
 --DescuentoVenta        
 COALESCE((SELECT PrecioVenta         
 FROM Inventario I         
 WHERE I.IdProducto = P.IdProducto         
 AND I.NombreTienda = @NombreTienda) *               
 (SELECT ABS(SUM(IM.CantidadAfectada))         
 FROM Inventario_Movimiento IM         
 WHERE IM.IdProducto = P.IdProducto         
 AND IM.TipoMovimiento = 'Venta en tienda'         
 AND CAST(FechaRegistro AS DATE) = @Fecha         
 AND NombreTienda = @NombreTienda         
 GROUP BY IdProducto),0)-    
 COALESCE((SELECT SUM(DV.CantidadProducto * DV.MontoProducto) FROM    
 Venta V INNER JOIN Detalle_Venta DV ON    
 V.IdVenta = DV.IdVenta    
 WHERE DV.IdProducto = P.IdProducto     
 AND CAST(DV.FechaCreacion AS DATE) = @Fecha      
 AND V.NombreTienda = @NombreTienda         
 GROUP BY IdProducto),0)    
 AS DescuentoVenta,      
 --TotalVenta        
 ABS(COALESCE((SELECT PrecioVenta         
 FROM Inventario I         
 WHERE I.IdProducto = P.IdProducto         
 AND I.NombreTienda = @NombreTienda) *   
 COALESCE((SELECT ABS(SUM(IM.CantidadAfectada))         
 FROM Inventario_Movimiento IM         
 WHERE IM.IdProducto = P.IdProducto         
 AND IM.TipoMovimiento = 'Venta en tienda'         
 AND CAST(FechaRegistro AS DATE) = @Fecha         
 AND NombreTienda = @NombreTienda GROUP BY IdProducto) -            
 (SELECT ABS(SUM(IM.CantidadAfectada))         
 FROM Inventario_Movimiento IM         
 WHERE IM.IdProducto = P.IdProducto         
 AND IM.TipoMovimiento = 'Anulacion de venta'         
 AND CAST(FechaRegistro AS DATE) = @Fecha         
 AND NombreTienda = @NombreTienda GROUP BY IdProducto),        
 (SELECT ABS(SUM(IM.CantidadAfectada))         
 FROM Inventario_Movimiento IM         
 WHERE IM.IdProducto = P.IdProducto         
 AND IM.TipoMovimiento = 'Venta en tienda'         
 AND CAST(FechaRegistro AS DATE) = @Fecha         
 AND NombreTienda = @NombreTienda         
 GROUP BY IdProducto)),0)) -  
 --RESTA EL DESCUENTO  
 (COALESCE((SELECT PrecioVenta         
 FROM Inventario I         
 WHERE I.IdProducto = P.IdProducto         
 AND I.NombreTienda = @NombreTienda) *               
 (SELECT ABS(SUM(IM.CantidadAfectada))         
 FROM Inventario_Movimiento IM         
 WHERE IM.IdProducto = P.IdProducto         
 AND IM.TipoMovimiento = 'Venta en tienda'         
 AND CAST(FechaRegistro AS DATE) = @Fecha         
 AND NombreTienda = @NombreTienda         
 GROUP BY IdProducto),0)-    
 COALESCE((SELECT SUM(DV.CantidadProducto * DV.MontoProducto) FROM    
 Venta V INNER JOIN Detalle_Venta DV ON    
 V.IdVenta = DV.IdVenta    
 WHERE DV.IdProducto = P.IdProducto     
 AND CAST(DV.FechaCreacion AS DATE) = @Fecha      
 AND V.NombreTienda = @NombreTienda         
 GROUP BY IdProducto),0))    
 AS TotalVenta,      
 '' AS Tiendaddl    
 --FROM PART             
 FROM Producto P           
 WHERE EstatusProducto = 1 
 AND IdProducto IN (SELECT IdProducto FROM Inventario WHERE NombreTienda = @NombreTienda)          
END   
GO
/****** Object:  StoredProcedure [dbo].[usp_GetReporteVentaPrecio]     ******/
CREATE PROC [dbo].[usp_GetReporteVentaPrecio]        
@NombreTienda VARCHAR(500),                  
@Fecha AS DATETIME                  
AS                  
BEGIN        
--DECLARE @NombreTienda VARCHAR(500)              
--SET @NombreTienda = 'Tienda Huancayo'            
--DECLARE @Fecha AS DATETIME                
--SET @Fecha = CONVERT(DATE,'10/16/2017')         
      
SELECT  DISTINCT INV.PrecioVenta,      
--VentaTienda       
(COALESCE((SELECT ABS(SUM(IM.CantidadAfectada)) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto       
WHERE I.PrecioVenta = INV.PrecioVenta             
AND IM.TipoMovimiento = 'Venta en tienda'             
AND I.NombreTienda = @NombreTienda 
AND IM.NombreTienda = @NombreTienda            
AND CONVERT(DATE,IM.FechaRegistro) = @Fecha),0)-      
COALESCE((SELECT ABS(SUM(IM.CantidadAfectada)) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto        
WHERE I.PrecioVenta = INV.PrecioVenta             
AND IM.TipoMovimiento = 'Anulacion de venta'             
AND I.NombreTienda = @NombreTienda
AND IM.NombreTienda = @NombreTienda              
AND CONVERT(DATE,IM.FechaRegistro) = @Fecha),0)) AS VentaTienda,      
--AnulacionVentaTienda        
COALESCE((SELECT ABS(SUM(IM.CantidadAfectada)) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto         
WHERE I.PrecioVenta = INV.PrecioVenta             
AND IM.TipoMovimiento = 'Anulacion de venta'             
AND I.NombreTienda = @NombreTienda 
AND IM.NombreTienda = @NombreTienda             
AND CONVERT(DATE,IM.FechaRegistro) = @Fecha),0) AS AnulacionVentaTienda,      
--FechaReporte            
 CONVERT(VARCHAR(10),@Fecha,120) AS FechaReporte,        
--NombreTienda             
@NombreTienda AS NombreTienda,      
--DescuentoVenta        
(INV.PrecioVenta*((COALESCE((SELECT ABS(SUM(IM.CantidadAfectada)) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto          
WHERE I.PrecioVenta = INV.PrecioVenta             
AND IM.TipoMovimiento = 'Venta en tienda'             
AND I.NombreTienda = @NombreTienda 
AND IM.NombreTienda = @NombreTienda             
AND CONVERT(DATE,IM.FechaRegistro) = @Fecha),0)))-      
(SELECT SUM(DV.CantidadProducto * DV.MontoProducto) FROM Venta V         
INNER JOIN Detalle_Venta DV ON V.IdVenta = DV.IdVenta        
INNER JOIN Inventario I ON DV.IdInventario = I.IdInventario        
WHERE CAST(DV.FechaCreacion AS DATE) = @Fecha          
AND V.NombreTienda = @NombreTienda         
AND I.PrecioVenta = INV.PrecioVenta)) AS DescuentoVenta,      
--TotalVenta        
(SELECT SUM(DV.CantidadProducto * DV.MontoProducto) FROM Venta V         
INNER JOIN Detalle_Venta DV ON V.IdVenta = DV.IdVenta        
INNER JOIN Inventario I ON DV.IdInventario = I.IdInventario        
WHERE CAST(DV.FechaCreacion AS DATE) = @Fecha          
AND V.NombreTienda = @NombreTienda         
AND I.PrecioVenta = INV.PrecioVenta)-    
(INV.PrecioVenta * COALESCE((SELECT ABS(SUM(IM.CantidadAfectada)) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto         
WHERE I.PrecioVenta = INV.PrecioVenta             
AND IM.TipoMovimiento = 'Anulacion de venta'             
AND I.NombreTienda = @NombreTienda             
AND CONVERT(DATE,IM.FechaRegistro) = @Fecha),0)) AS TotalVenta,      
0 AS IdProducto,                
'' AS NombreProducto,                
'' AS Talla,                
'' AS Color,      
'' AS Tiendaddl         
      
--FROM PART       
FROM Inventario INV      
WHERE INV.EstatusInventario = 1      
AND INV.NombreTienda = @NombreTienda      
      
END 
GO
/****** Object:  StoredProcedure [dbo].[usp_GetReporteKardexProducto]     ******/
CREATE PROC [dbo].[usp_GetReporteKardexProducto]           
@NombreTienda VARCHAR(500),                        
@FechaInicio AS DATETIME,                
@FechaFin AS DATETIME                
AS                  
BEGIN                  
                
--DECLARE @NombreTienda AS VARCHAR(500)    
--SET @NombreTienda = 'Tienda Lima'                    
--DECLARE @FECHAINICIO AS DATE                      
--SET @FECHAINICIO = CONVERT(DATE,'09/13/2017')                      
--DECLARE @FECHAFIN AS DATE                      
--SET @FECHAFIN = CONVERT(DATE,'09/15/2017')                   
                
CREATE TABLE #TablaReporte(                  
Item VARCHAR(500),             
IdProducto INT,                 
Stock INT,                  
Entrada INT,      
EntradaTraspaso INT,                  
Salida INT,       
SalidaTraspaso INT,                 
Anulacion INT,                  
Venta INT,                  
Total INT,                  
Fecha VARCHAR(10),                
FechaInicio VARCHAR(10),                
FechaFin VARCHAR(10),              
Tienda VARCHAR(500),        
Tiendaddl VARCHAR(500)               
)                  
                  
DECLARE @FECHA AS DATE                  
SET @FECHA = @FECHAINICIO                  
WHILE @FECHA <= @FECHAFIN                  
BEGIN                  
INSERT INTO #TablaReporte                  
SELECT P.NombreProducto,             
P.IdProducto,          
--STOCK          
(SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento                
WHERE TipoMovimiento IN ('Devolucion a almacen','Salida de tienda traspaso','Ingreso a tienda','Ingreso a tienda traspaso','Venta en tienda','Anulacion de venta','Eliminacion inventario de tienda')                
AND IdProducto = P.IdProducto            
AND NombreTienda = @NombreTienda            
AND CONVERT(DATE,FechaRegistro) < @FECHA) AS Stock,          
--ENTRADA                
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento                 
WHERE TipoMovimiento = 'Ingreso a tienda'                 
AND IdProducto = P.IdProducto               
AND NombreTienda = @NombreTienda            
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS Entrada,        
--ENTRADA TRASPASO               
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento                 
WHERE TipoMovimiento = 'Ingreso a tienda traspaso'                 
AND IdProducto = P.IdProducto               
AND NombreTienda = @NombreTienda            
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS EntradaTraspaso,        
--SALIDA                
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento                 
WHERE TipoMovimiento IN ('Devolucion a almacen','Eliminacion inventario de tienda')                  
AND IdProducto = P.IdProducto               
AND NombreTienda = @NombreTienda            
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS Salida,       
--SALIDA TRASPASO               
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento                 
WHERE TipoMovimiento IN ('Salida de tienda traspaso')               
AND IdProducto = P.IdProducto               
AND NombreTienda = @NombreTienda            
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS SalidaTraspaso,         
--ANULACION                
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento                 
WHERE TipoMovimiento = 'Anulacion de venta'             
AND NombreTienda = @NombreTienda               
AND IdProducto = P.IdProducto                
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS Anulacion,          
--VENTA                
ABS(COALESCE((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento                 
WHERE TipoMovimiento = 'Venta en tienda'             
AND NombreTienda = @NombreTienda               
AND IdProducto = P.IdProducto                
AND CONVERT(DATE,FechaRegistro) = @FECHA),0)) -                
ABS(COALESCE((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento                 
WHERE TipoMovimiento = 'Anulacion de venta'               
AND NombreTienda = @NombreTienda             
AND IdProducto = P.IdProducto                
AND CONVERT(DATE,FechaRegistro) = @FECHA),0)) AS Venta,          
--TOTAL                
(SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento                
WHERE TipoMovimiento IN ('Devolucion a almacen','Salida de tienda traspaso','Ingreso a tienda','Ingreso a tienda traspaso','Venta en tienda','Anulacion de venta','Eliminacion inventario de tienda')                
AND NombreTienda = @NombreTienda        
AND IdProducto = P.IdProducto                
AND CONVERT(DATE,FechaRegistro) <= @FECHA) AS Total ,          
@FECHA AS Fecha,              
CONVERT(DATE,@FechaInicio) AS FechaInicio,              
CONVERT(DATE,@FechaFin) AS FechaFin,            
@NombreTienda AS Tienda,        
'' AS Tiendaddl          
          
FROM Producto P          
WHERE EstatusProducto = 1                
AND IdProducto IN (SELECT IdProducto FROM Inventario WHERE NombreTienda = @NombreTienda)    
                
SET @FECHA = DATEADD(DAY,1,@FECHA)                  
END                  
                  
SELECT * FROM #TablaReporte                  
                  
DROP TABLE #TablaReporte                  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetReporteKardexPrecio]     ******/
CREATE PROC [dbo].[usp_GetReporteKardexPrecio]              
@NombreTienda VARCHAR(500),                                  
@FechaInicio AS DATETIME,                          
@FechaFin AS DATETIME                          
AS                            
BEGIN             
          
--DECLARE @NombreTienda AS VARCHAR(500)          
--SET @NombreTienda = 'Tienda Lima'                          
--DECLARE @FECHAINICIO AS DATE                            
--SET @FECHAINICIO = CONVERT(DATE,'10/11/2017')                            
--DECLARE @FECHAFIN AS DATE                            
--SET @FECHAFIN = CONVERT(DATE,'10/11/2017')                            
                          
CREATE TABLE #TablaReporte(                            
Item DECIMAL(18,4),                       
IdProducto INT,                           
Stock INT,                            
Entrada INT,          
EntradaTraspaso INT,                            
Salida INT,          
SalidaTraspaso INT,                            
Anulacion INT,                            
Venta INT,                            
Total INT,                            
Fecha VARCHAR(10),                          
FechaInicio VARCHAR(10),                          
FechaFin VARCHAR(10),                        
Tienda VARCHAR(500),                
Tiendaddl VARCHAR(500)                                     
)                            
                            
DECLARE @FECHA AS DATE                            
SET @FECHA = @FECHAINICIO                            
WHILE @FECHA <= @FECHAFIN                            
BEGIN                            
INSERT INTO #TablaReporte                            
SELECT DISTINCT(INV.PrecioVenta),                         
'' AS IdProducto,                         
--STOCK                            
(SELECT SUM(IM.CantidadAfectada) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto                        
WHERE IM.TipoMovimiento IN ('Devolucion a almacen','Salida de tienda traspaso','Ingreso a tienda','Ingreso a tienda traspaso','Venta en tienda','Anulacion de venta','Eliminacion inventario de tienda')                     
AND I.NombreTienda = @NombreTienda     
AND IM.NombreTienda = @NombreTienda                           
AND I.PrecioVenta = INV.PrecioVenta                            
AND CONVERT(DATE,IM.FechaRegistro) < @FECHA) AS Stock,                     
--ENTRADA                            
ABS((SELECT SUM(IM.CantidadAfectada) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto                             
WHERE IM.TipoMovimiento = 'Ingreso a tienda'                       
AND I.NombreTienda = @NombreTienda     
AND IM.NombreTienda = @NombreTienda                        
AND I.PrecioVenta = INV.PrecioVenta                         
AND CONVERT(DATE,IM.FechaRegistro) = @FECHA)) AS Entrada,          
--ENTRADA TRASPASO                         
ABS((SELECT SUM(IM.CantidadAfectada) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto                              
WHERE IM.TipoMovimiento = 'Ingreso a tienda traspaso'                       
AND I.NombreTienda = @NombreTienda     
AND IM.NombreTienda = @NombreTienda                         
AND I.PrecioVenta = INV.PrecioVenta                            
AND CONVERT(DATE,IM.FechaRegistro) = @FECHA)) AS EntradaTraspaso,          
--SALIDA                            
ABS((SELECT SUM(IM.CantidadAfectada) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto                                
WHERE IM.TipoMovimiento IN ('Devolucion a almacen','Eliminacion inventario de tienda')                
AND I.NombreTienda = @NombreTienda     
AND IM.NombreTienda = @NombreTienda                         
AND I.PrecioVenta = INV.PrecioVenta                            
AND CONVERT(DATE,IM.FechaRegistro) = @FECHA)) AS Salida,          
--SALIDA TRASPASO                         
ABS((SELECT SUM(IM.CantidadAfectada) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto                                
WHERE IM.TipoMovimiento IN ('Salida de tienda traspaso')                
AND I.NombreTienda = @NombreTienda     
AND IM.NombreTienda = @NombreTienda                          
AND I.PrecioVenta = INV.PrecioVenta                            
AND CONVERT(DATE,IM.FechaRegistro) = @FECHA)) AS SalidaTraspaso,          
--ANULACION                            
ABS((SELECT SUM(IM.CantidadAfectada) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto                              
WHERE IM.TipoMovimiento = 'Anulacion de venta'                         
AND I.NombreTienda = @NombreTienda     
AND IM.NombreTienda = @NombreTienda                       
AND I.PrecioVenta = INV.PrecioVenta                            
AND CONVERT(DATE,IM.FechaRegistro) = @FECHA)) AS Anulacion,                            
--VENTA                            
ABS(COALESCE((SELECT SUM(IM.CantidadAfectada) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto                              
WHERE IM.TipoMovimiento = 'Venta en tienda'                       
AND I.NombreTienda = @NombreTienda     
AND IM.NombreTienda = @NombreTienda                       
AND I.PrecioVenta = INV.PrecioVenta                            
AND CONVERT(DATE,IM.FechaRegistro) = @FECHA),0)) -                            
ABS(COALESCE((SELECT SUM(IM.CantidadAfectada) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto                              
WHERE IM.TipoMovimiento = 'Anulacion de venta'                          
AND I.NombreTienda = @NombreTienda     
AND IM.NombreTienda = @NombreTienda                     
AND I.PrecioVenta = INV.PrecioVenta                            
AND CONVERT(DATE,IM.FechaRegistro) = @FECHA),0)) AS Venta,           
--TOTAL                            
(SELECT SUM(IM.CantidadAfectada) FROM Inventario I INNER JOIN Inventario_Movimiento IM ON I.IdProducto = IM.IdProducto                            
WHERE IM.TipoMovimiento IN ('Devolucion a almacen','Salida de tienda traspaso','Ingreso a tienda','Ingreso a tienda traspaso','Venta en tienda','Anulacion de venta','Eliminacion inventario de tienda')                      
AND I.NombreTienda = @NombreTienda     
AND IM.NombreTienda = @NombreTienda                       
AND I.PrecioVenta = INV.PrecioVenta                            
AND CONVERT(DATE,IM.FechaRegistro) <= @FECHA) AS Total,          
@FECHA AS Fecha,                          
CONVERT(DATE,@FechaInicio) AS FechaInicio,                          
CONVERT(DATE,@FechaFin) AS FechaFin,                        
@NombreTienda AS Tienda,                
'' AS Tiendaddl             
                      
FROM Inventario INV                       
WHERE NombreTienda = @NombreTienda           
AND INV.PrecioVenta <> 0                       
                        
SET @FECHA = DATEADD(DAY,1,@FECHA)                            
END                            
                            
SELECT * FROM #TablaReporte                            
                            
DROP TABLE #TablaReporte              
END 
GO
/****** Object:  StoredProcedure [dbo].[usp_GetReporteCardexPrecio]     ******/
CREATE PROC [dbo].[usp_GetReporteCardexPrecio]    
@NombreTienda VARCHAR(500),          
@FechaInicio AS DATETIME,  
@FechaFin AS DATETIME  
AS    
BEGIN    
  
--DECLARE @FECHAINICIO AS DATE    
--SET @FECHAINICIO = CONVERT(DATE,'07/22/2017')    
--DECLARE @FECHAFIN AS DATE    
--SET @FECHAFIN = CONVERT(DATE,'07/27/2017')    
  
CREATE TABLE #TablaReporte(    
Item DECIMAL(18,4),    
Stock INT,    
Entrada INT,    
Salida INT,    
Anulacion INT,    
Venta INT,    
Total INT,    
Fecha VARCHAR(10),  
FechaInicio VARCHAR(10),  
FechaFin VARCHAR(10),
Tienda VARCHAR(500)  
)    
    
DECLARE @FECHA AS DATE    
SET @FECHA = @FECHAINICIO    
WHILE @FECHA <= @FECHAFIN    
BEGIN    
INSERT INTO #TablaReporte    
SELECT DISTINCT(IM.PrecioVenta),    
--STOCK    
(SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento    
WHERE TipoMovimiento IN ('Devolucion a almacen','Ingreso a tienda' ,'Venta en tienda','Anulacion de venta')    
AND PrecioVenta = IM.PrecioVenta    
AND CONVERT(DATE,FechaRegistro) < @FECHA) AS Stock,    
--ENTRADA    
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento     
WHERE TipoMovimiento = 'Ingreso a tienda'     
AND PrecioVenta = IM.PrecioVenta    
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS Entrada,    
--SALIDA    
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento     
WHERE TipoMovimiento = 'Devolucion a almacen'     
AND PrecioVenta = IM.PrecioVenta    
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS Salida,    
--ANULACION    
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento     
WHERE TipoMovimiento = 'Anulacion de venta'     
AND PrecioVenta = IM.PrecioVenta    
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS Anulacion,    
--VENTA    
ABS(COALESCE((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento     
WHERE TipoMovimiento = 'Venta en tienda'     
AND PrecioVenta = IM.PrecioVenta    
AND CONVERT(DATE,FechaRegistro) = @FECHA),0)) -    
ABS(COALESCE((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento     
WHERE TipoMovimiento = 'Anulacion de venta'     
AND PrecioVenta = IM.PrecioVenta    
AND CONVERT(DATE,FechaRegistro) = @FECHA),0)) AS Venta,    
--TOTAL    
(SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento    
WHERE TipoMovimiento IN ('Devolucion a almacen','Ingreso a tienda' ,'Venta en tienda','Anulacion de venta')    
AND PrecioVenta = IM.PrecioVenta    
AND CONVERT(DATE,FechaRegistro) <= @FECHA) AS Total,    
@FECHA AS Fecha,  
CONVERT(DATE,@FechaInicio) AS FechaInicio,  
CONVERT(DATE,@FechaFin) AS FechaFin,
@NombreTienda AS Tienda 
    
FROM Inventario_Movimiento IM    
WHERE NombreTienda = @NombreTienda   
AND CONVERT(DATE,FechaRegistro) >=@FECHAINICIO AND CONVERT(DATE,FechaRegistro) <= @FECHAFIN    
    
SET @FECHA = DATEADD(DAY,1,@FECHA)    
END    
    
SELECT * FROM #TablaReporte    
    
DROP TABLE #TablaReporte    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetReporteAlmacen]     ******/
CREATE PROC [dbo].[usp_GetReporteAlmacen]         
@List AS dbo.lstETienda READONLY,                   
@FechaInicio AS DATETIME,          
@FechaFin AS DATETIME,  
@ControlValue AS VARCHAR(500)         
AS            
BEGIN            
          
--DECLARE @FECHAINICIO AS DATE            
--SET @FECHAINICIO = CONVERT(DATE,'07/22/2017')            
--DECLARE @FECHAFIN AS DATE            
--SET @FECHAFIN = CONVERT(DATE,'07/27/2017')            
          
CREATE TABLE #TablaReporte(            
Item VARCHAR(500),       
IdProducto INT,           
Stock INT,            
EntradaAlmacen INT,            
EntradaTienda INT, 
EntradaTiendaTraspaso INT,           
Devolucion INT,                   
Fecha VARCHAR(10),          
FechaInicio VARCHAR(10),          
FechaFin VARCHAR(10),        
Tienda VARCHAR(500),  
Almacen VARCHAR(500),  
Almacenddl VARCHAR(500)         
)            
DECLARE @COUNT AS INT    
DECLARE @LOOP AS INT         
DECLARE @FECHA AS DATE  
DECLARE @NOMBRETIENDA AS VARCHAR(500)    
SELECT @COUNT = COUNT(*) FROM @List     
SET @FECHA = @FECHAINICIO            
WHILE @FECHA <= @FECHAFIN            
BEGIN     
SET @LOOP = 1     
WHILE @LOOP <= @COUNT  
BEGIN  
  
SELECT @NOMBRETIENDA = NombreTienda FROM  
(SELECT * ,RANK()OVER (ORDER BY IdTienda ASC)AS RANK from @List) as ji WHERE RANK=@LOOP       
  
INSERT INTO #TablaReporte   
SELECT  
NombreProducto AS Item,  
IdProducto,  
--STOCK    
(SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento          
WHERE TipoMovimiento IN ('Salida de almacen' ,'Ingreso a almacen devolucion','Salida de almacen traspaso')          
AND IdProducto = P.IdProducto      
--AND NombreTienda = @NOMBRETIENDA        
AND CONVERT(DATE,FechaRegistro) <= @FECHA) +  
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento          
WHERE TipoMovimiento IN ('Ingreso a almacen')          
AND IdProducto = P.IdProducto    
AND NombreAlmacen = @ControlValue     
AND CONVERT(DATE,FechaRegistro) <= @FECHA)) AS Stock,    
--ENTRADA ALMACEN  
COALESCE(ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento               
WHERE TipoMovimiento = 'Ingreso a almacen'                   
AND IdProducto = P.IdProducto      
AND NombreAlmacen = @ControlValue          
AND CONVERT(DATE,FechaRegistro) = @FECHA)),0) AS EntradaAlmacen,  
--ENTRADA TIENDA  
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento               
WHERE TipoMovimiento = 'Ingreso a tienda'         
AND NombreTienda = @NOMBRETIENDA             
AND IdProducto = P.IdProducto     
AND NombreAlmacen = @ControlValue           
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS EntradaTienda,  
--ENTRADA TIENDA TRASPASO  
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento               
WHERE TipoMovimiento = 'Ingreso a tienda traspaso'         
AND NombreTienda = @NOMBRETIENDA             
AND IdProducto = P.IdProducto     
AND NombreAlmacen = @ControlValue           
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS EntradaTiendaTraspaso, 
--INGRESO ALMACEN DEVOLUCION  
ABS((SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento               
WHERE TipoMovimiento = 'Ingreso a almacen devolucion'         
AND NombreTienda = @NOMBRETIENDA             
AND IdProducto = P.IdProducto      
AND NombreAlmacen = @ControlValue          
AND CONVERT(DATE,FechaRegistro) = @FECHA)) AS Devolucion,  
@FECHA as Fecha ,  
CONVERT(DATE,@FechaInicio) as FechaInicio,  
CONVERT(DATE,@FechaFin) as FechaFin,  
@NOMBRETIENDA as Tienda,  
@ControlValue as Almacen,  
'' as Almacenddl  
  
FROM Producto P    
WHERE EstatusProducto = 1           
  
SET @LOOP = @LOOP + 1  
END            
SET @FECHA = DATEADD(DAY,1,@FECHA)            
END            
            
SELECT * FROM #TablaReporte            
            
DROP TABLE #TablaReporte            
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelInventarioTienda]     ******/
CREATE PROC [dbo].[usp_DelInventarioTienda]               
@IdProducto INT,                
@IdInventario INT,            
@NombreAlmacen VARCHAR(500),          
@NombreTienda VARCHAR(500)            
AS                
BEGIN 
BEGIN TRY  
BEGIN TRANSACTION                 
 DECLARE @ExistenciaTienda INT            
 DECLARE @ExistenciaAlmacen INT              
 --OBTENER EL EXISTENCIA DE TIENDA              
 SELECT @ExistenciaTienda = Existencia FROM Inventario         
 WHERE IdInventario = @IdInventario         
 IF @ExistenciaTienda IS NULL        
 SET @ExistenciaTienda = 0             
 --OBTENER EL EXISTENCIA DE ALMACEN              
 SELECT @ExistenciaAlmacen = Existencia FROM Inventario         
 WHERE NombreAlmacen = @NombreAlmacen AND IdProducto = @IdProducto  AND NombreTienda IS NULL            
 --AGREGAR RETORNO DE INVENTARIO A ALMACEN            
 INSERT INTO Inventario_Movimiento            
 (IdProducto,CantidadAfectada,PrecioVenta,FechaRegistro,TipoMovimiento,NombreTienda,NombreAlmacen)            
 VALUES            
 (@IdProducto,@ExistenciaTienda,(SELECT TOP 1 PrecioVenta FROM Inventario WHERE IdProducto = @IdProducto),GETDATE(),'Retorno inventario a almacen',@NombreTienda,@NombreAlmacen)           
 --ACTUALIZAR INVENTARIO          
 UPDATE Inventario SET Existencia = (@ExistenciaTienda + @ExistenciaAlmacen)          
 WHERE NombreAlmacen = @NombreAlmacen AND IdProducto = @IdProducto AND NombreTienda IS NULL             
 --AGREGAR ELIMINACION DE INVENTARIO DE TIENDA           
 SET @ExistenciaTienda = (-1) * @ExistenciaTienda                 
 INSERT INTO Inventario_Movimiento            
 (IdProducto,CantidadAfectada,PrecioVenta,FechaRegistro,TipoMovimiento,NombreTienda,NombreAlmacen)            
 VALUES            
 (@IdProducto,@ExistenciaTienda,(SELECT TOP 1 PrecioVenta FROM Inventario WHERE IdProducto = @IdProducto),GETDATE(),'Eliminacion inventario de tienda',@NombreTienda,@NombreAlmacen)              
 --ELIMINAR INVENTARIO          
 DELETE Inventario WHERE IdInventario = @IdInventario   
COMMIT TRANSACTION 
END TRY 
BEGIN CATCH 
 IF @@TRANCOUNT > 0 
	ROLLBACK TRANSACTION; 
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                
 DECLARE @ErrorLine INT = ERROR_LINE();                
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                
 DECLARE @ErrorState INT = ERROR_STATE(); 
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +
									' ' +
									CONVERT(VARCHAR(20),@ErrorLine) +
									' ' +
									@ErrorMessage +
									CONVERT(VARCHAR(20),@ErrorSeverity) +
									CONVERT(VARCHAR(20),@ErrorState)
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)
END CATCH         
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelInventarioAlmacen]     ******/
CREATE PROC [dbo].[usp_DelInventarioAlmacen]            
@IdProducto INT,            
@IdInventario INT,        
@NombreAlmacen VARCHAR(500)          
AS            
BEGIN  
BEGIN TRY  
BEGIN TRANSACTION           
 DECLARE @Existencia INT          
 --OBTENER EL EXISTENCIA DE ALMACEN          
 SELECT @Existencia = Existencia FROM Inventario WHERE IdInventario = @IdInventario          
 IF @Existencia IS NOT NULL          
 BEGIN          
  SET @Existencia = (-1) * @Existencia             
  INSERT INTO Inventario_Movimiento        
  (IdProducto,CantidadAfectada,PrecioVenta,FechaRegistro,TipoMovimiento,NombreAlmacen)        
  VALUES        
  (@IdProducto,@Existencia,(SELECT TOP 1 PrecioVenta FROM Inventario WHERE IdProducto = @IdProducto),GETDATE(),'Eliminacion inventario almacen',@NombreAlmacen)        
  DELETE Inventario WHERE IdInventario = @IdInventario       
 END          
 ELSE          
 DELETE Inventario WHERE IdInventario = @IdInventario  
COMMIT TRANSACTION 
END TRY 
BEGIN CATCH 
 IF @@TRANCOUNT > 0 
	ROLLBACK TRANSACTION; 
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                
 DECLARE @ErrorLine INT = ERROR_LINE();                
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                
 DECLARE @ErrorState INT = ERROR_STATE(); 
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +
									' ' +
									CONVERT(VARCHAR(20),@ErrorLine) +
									' ' +
									@ErrorMessage +
									CONVERT(VARCHAR(20),@ErrorSeverity) +
									CONVERT(VARCHAR(20),@ErrorState)
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)
END CATCH          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdInvetarioAlmacen]     ******/
CREATE PROC [dbo].[usp_UpdInvetarioAlmacen]        
@IdProducto INT,        
@IdInventario INT,        
@Cantidad INT,        
@Precio DECIMAL(18,4)       
AS        
BEGIN        
 DECLARE @NombreAlmacen varchar(500)      
 DECLARE @Existencia INT      
 DECLARE @PrecioVenta DECIMAL(18,4)      
 --OBTENER EL NOMBRE DE ALMACEN      
 SELECT @NombreAlmacen = NombreAlmacen,@Existencia = Existencia,@PrecioVenta = PrecioVenta FROM Inventario WHERE IdInventario = @IdInventario      
 IF @Existencia IS NOT NULL    
 BEGIN   
   SET @Existencia = @Cantidad - @Existencia      
   --ACTUALIZAR CANTIDAD Y PRECIO EN INVENTARIO      
    UPDATE Inventario         
    SET PrecioVenta = @Precio,        
    Existencia = @Cantidad        
    WHERE IdInventario = @IdInventario AND IdProducto = @IdProducto       
    --INSERTAR ELEMENTOS EN INVENTARIO_MOVIMIENTO      
    INSERT INTO Inventario_Movimiento (IdProducto,CantidadAfectada,FechaRegistro,TipoMovimiento,NombreAlmacen)      
    VALUES (@IdProducto,@Existencia,GETDATE(),'Ingreso a almacen',@NombreAlmacen)      
 END     
 ELSE      
 BEGIN      
   --ACTUALIZAR CANTIDAD Y PRECIO EN INVENTARIO      
   UPDATE Inventario         
   SET PrecioVenta = @Precio,        
   Existencia = @Cantidad        
   WHERE IdInventario = @IdInventario AND IdProducto = @IdProducto       
   --INSERTAR ELEMENTOS EN INVENTARIO_MOVIMIENTO      
   INSERT INTO Inventario_Movimiento (IdProducto,CantidadAfectada,PrecioVenta,FechaRegistro,TipoMovimiento,NombreAlmacen)      
   VALUES (@IdProducto,@Cantidad,(SELECT TOP 1 PrecioVenta FROM Inventario WHERE IdProducto = @IdProducto),GETDATE(),'Ingreso a almacen',@NombreAlmacen)      
 END      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdInventarioTienda]     ******/
CREATE PROC [dbo].[usp_UpdInventarioTienda]                 
@IdProducto INT,                      
@IdInventario INT,                      
@Cantidad INT,   
@Precio DECIMAL(18,4), 
@NombreAlmacen varchar(500)                     
AS                      
BEGIN      
BEGIN TRY      
BEGIN TRANSACTION                                 
 DECLARE @NombreTienda varchar(500)                    
 DECLARE @PrecioVenta DECIMAL(18,4)                 
 DECLARE @ExistenciaAlmacen INT                
 DECLARE @ExistenciaTienda INT                 
 --OBTENER EL NOMBRE DE ALMACEN Y TIENDA                   
 SELECT @ExistenciaTienda = Existencia,@NombreTienda = NombreTienda FROM Inventario             
 WHERE IdInventario = @IdInventario               
 IF @ExistenciaTienda IS NULL            
 SET @ExistenciaTienda = 0               
 --OBTENER EL PRECIO DE VENTA                
 SELECT @ExistenciaAlmacen = Existencia, @PrecioVenta = PrecioVenta FROM Inventario                 
 WHERE NombreTienda IS NULL AND NombreAlmacen = @NombreAlmacen AND IdProducto = @IdProducto                
 --TIENDA                
 --ACTUALIZAR CANTIDAD Y PRECIO EN INVENTARIO                  
 UPDATE Inventario                       
 SET PrecioVenta = @Precio,                      
 Existencia = @Cantidad                      
 WHERE IdInventario = @IdInventario                    
 --INSERTAR ELEMENTOS EN INVENTARIO_MOVIMIENTO                    
 INSERT INTO Inventario_Movimiento (IdProducto,CantidadAfectada,PrecioVenta,FechaRegistro,TipoMovimiento,NombreTienda,NombreAlmacen)                    
 VALUES (@IdProducto,ABS(@Cantidad - @ExistenciaTienda),@Precio,GETDATE(),'Ingreso a tienda',@NombreTienda,@NombreAlmacen)                 
                 
 --ALMACEN                
 SET @ExistenciaAlmacen = @ExistenciaAlmacen - ABS(@Cantidad - @ExistenciaTienda)                 
 --ACTUALIZAR CANTIDAD Y PRECIO EN INVENTARIO                  
 UPDATE Inventario                       
 SET Existencia = @ExistenciaAlmacen,
 PrecioVenta = @Precio                      
 WHERE NombreTienda IS NULL AND NombreAlmacen = @NombreAlmacen AND IdProducto = @IdProducto                
 SET @Cantidad = (-1) * ABS(@Cantidad - @ExistenciaTienda)                
 --INSERTAR ELEMENTOS EN INVENTARIO_MOVIMIENTO                    
 INSERT INTO Inventario_Movimiento (IdProducto,CantidadAfectada,PrecioVenta,FechaRegistro,TipoMovimiento,NombreTienda,NombreAlmacen)                    
 VALUES (@IdProducto,@Cantidad,@Precio,GETDATE(),'Salida de almacen',@NombreTienda,@NombreAlmacen)                  
COMMIT TRANSACTION     
END TRY     
BEGIN CATCH     
 IF @@TRANCOUNT > 0     
 ROLLBACK TRANSACTION;     
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                    
 DECLARE @ErrorLine INT = ERROR_LINE();                    
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                    
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                    
 DECLARE @ErrorState INT = ERROR_STATE();     
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +    
         ' ' +    
         CONVERT(VARCHAR(20),@ErrorLine) +    
         ' ' +    
         @ErrorMessage +    
         CONVERT(VARCHAR(20),@ErrorSeverity) +    
         CONVERT(VARCHAR(20),@ErrorState)    
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)    
END CATCH      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdInventarioAlmacen]     ******/
CREATE PROC [dbo].[usp_UpdInventarioAlmacen]            
@IdProducto INT,            
@IdInventario INT,            
@Cantidad INT,            
@Precio DECIMAL(18,4)           
AS            
BEGIN 
BEGIN TRY  
BEGIN TRANSACTION             
 DECLARE @NombreAlmacen varchar(500)          
 DECLARE @Existencia INT          
 DECLARE @PrecioVenta DECIMAL(18,4)          
 --OBTENER EL NOMBRE DE ALMACEN          
 SELECT @NombreAlmacen = NombreAlmacen,@Existencia = Existencia,@PrecioVenta = PrecioVenta FROM Inventario WHERE IdInventario = @IdInventario          
 IF @Existencia IS NOT NULL        
 BEGIN       
   SET @Existencia = @Cantidad - @Existencia          
   --ACTUALIZAR CANTIDAD Y PRECIO EN INVENTARIO          
    UPDATE Inventario             
    SET PrecioVenta = @Precio,            
    Existencia = @Cantidad            
    WHERE IdInventario = @IdInventario AND IdProducto = @IdProducto           
    --INSERTAR ELEMENTOS EN INVENTARIO_MOVIMIENTO          
    INSERT INTO Inventario_Movimiento (IdProducto,CantidadAfectada,FechaRegistro,TipoMovimiento,NombreAlmacen)          
    VALUES (@IdProducto,@Existencia,GETDATE(),'Ingreso a almacen',@NombreAlmacen)          
 END         
 ELSE          
 BEGIN          
   --ACTUALIZAR CANTIDAD Y PRECIO EN INVENTARIO          
   UPDATE Inventario             
   SET PrecioVenta = @Precio,            
   Existencia = @Cantidad            
   WHERE IdInventario = @IdInventario AND IdProducto = @IdProducto           
   --INSERTAR ELEMENTOS EN INVENTARIO_MOVIMIENTO          
   INSERT INTO Inventario_Movimiento (IdProducto,CantidadAfectada,PrecioVenta,FechaRegistro,TipoMovimiento,NombreAlmacen)          
   VALUES (@IdProducto,@Cantidad,(SELECT TOP 1 PrecioVenta FROM Inventario WHERE IdProducto = @IdProducto),GETDATE(),'Ingreso a almacen',@NombreAlmacen)          
 END 
 COMMIT TRANSACTION 
END TRY 
BEGIN CATCH 
 IF @@TRANCOUNT > 0 
	ROLLBACK TRANSACTION; 
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                
 DECLARE @ErrorLine INT = ERROR_LINE();                
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                
 DECLARE @ErrorState INT = ERROR_STATE(); 
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +
									' ' +
									CONVERT(VARCHAR(20),@ErrorLine) +
									' ' +
									@ErrorMessage +
									CONVERT(VARCHAR(20),@ErrorSeverity) +
									CONVERT(VARCHAR(20),@ErrorState)
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)
END CATCH          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsInventarioTienda]     ******/
CREATE PROC [dbo].[usp_InsInventarioTienda]        
@NombreAlmacen VARCHAR(500),        
@NombreTienda VARCHAR(500),      
@NombreUsuario VARCHAR(500),        
@IdProducto INT        
AS        
BEGIN 
BEGIN TRY  
BEGIN TRANSACTION        
INSERT INTO Inventario        
(IdProducto,FechaCreacion,EstatusInventario,NombreTienda,NombreAlmacen,NombreUsuario)        
VALUES        
--(@IdProducto,GETDATE(),1,@NombreTienda,@NombreAlmacen,@NombreUsuario)        
(@IdProducto,GETDATE(),1,@NombreTienda,NULL,@NombreUsuario)     
COMMIT TRANSACTION 
END TRY 
BEGIN CATCH 
 IF @@TRANCOUNT > 0 
	ROLLBACK TRANSACTION; 
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                
 DECLARE @ErrorLine INT = ERROR_LINE();                
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                
 DECLARE @ErrorState INT = ERROR_STATE(); 
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +
									' ' +
									CONVERT(VARCHAR(20),@ErrorLine) +
									' ' +
									@ErrorMessage +
									CONVERT(VARCHAR(20),@ErrorSeverity) +
									CONVERT(VARCHAR(20),@ErrorState)
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)
END CATCH  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsInventarioAlmacen]     ******/
CREATE PROC [dbo].[usp_InsInventarioAlmacen]      
@NombreAlmacen VARCHAR(500),      
@NombreUsuario VARCHAR(500),      
@IdProducto INT      
AS      
BEGIN  
BEGIN TRY  
BEGIN TRANSACTION     
DECLARE @PrecioVenta DECIMAL(18,4)  
SELECT @PrecioVenta = PrecioVenta FROM Inventario WHERE IdProducto = @IdProducto   
INSERT INTO Inventario      
(IdProducto,FechaCreacion,PrecioVenta,EstatusInventario,NombreAlmacen,NombreUsuario)      
VALUES      
(@IdProducto,GETDATE(),@PrecioVenta,1,@NombreAlmacen,@NombreUsuario)   
COMMIT TRANSACTION 
END TRY 
BEGIN CATCH 
 IF @@TRANCOUNT > 0 
	ROLLBACK TRANSACTION; 
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                
 DECLARE @ErrorLine INT = ERROR_LINE();                
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                
 DECLARE @ErrorState INT = ERROR_STATE(); 
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +
									' ' +
									CONVERT(VARCHAR(20),@ErrorLine) +
									' ' +
									@ErrorMessage +
									CONVERT(VARCHAR(20),@ErrorSeverity) +
									CONVERT(VARCHAR(20),@ErrorState)
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)
END CATCH    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsDevolucionProducto]     ******/
CREATE PROC [dbo].[usp_InsDevolucionProducto]            
  @List AS dbo.lstEInventario READONLY,                
  @NombreUsuario VARCHAR(200),                
  @NombreTienda VARCHAR(500)              
AS                  
BEGIN       
BEGIN TRY        
BEGIN TRANSACTION                  
  SET NOCOUNT ON;                  
  SELECT * FROM @List;                   
  DECLARE @LoopCounter INT = 1,                
    @MaxCountList INT,                       
    @IdInventario INT,                
    @IdProducto INT,                
    @ExistenciaTienda INT,          
    @ExistenciaAlmacen INT,               
    @Existencia INT,             
    @Almacen VARCHAR(500),  
    @GuiaSalida VARCHAR(300)             
 SELECT @MaxCountList = COUNT(*) FROM @List                
 WHILE(@LoopCounter <= @MaxCountList)                
 BEGIN                
 SELECT                
     @IdProducto = IdProducto,                
     @IdInventario = IdInventario,        
     @Existencia = Existencia,        
     @Almacen = Almacen,
     @GuiaSalida = GuiaSalida FROM --@List                
     (SELECT * ,RANK()OVER (ORDER BY IdProducto ASC)AS RANK from @List) as ji WHERE RANK=@LoopCounter                 
    --ACTUALIZAR INVENTARIO TIENDA                
    SELECT @ExistenciaTienda = Existencia FROM Inventario WHERE IdInventario = @IdInventario                
    SET @ExistenciaTienda = @ExistenciaTienda - @Existencia               
    UPDATE Inventario SET Existencia = @ExistenciaTienda WHERE IdInventario = @IdInventario          
    --ACTUALIZAR INVENTARIO ALMACEN                
    SELECT @ExistenciaAlmacen = Existencia FROM Inventario WHERE NombreAlmacen = @Almacen AND NombreTienda IS NULL AND IdProducto = @IdProducto            
    SET @ExistenciaAlmacen = @ExistenciaAlmacen + @Existencia               
    UPDATE Inventario SET Existencia = @ExistenciaAlmacen WHERE NombreAlmacen = @Almacen AND NombreTienda IS NULL AND IdProducto = @IdProducto            
    --INSERTAR INVENTARIO_MOVIMIENTO TIENDA              
    SET @Existencia = (-1)* @Existencia          
    INSERT INTO Inventario_Movimiento                
    (IdProducto,                
    CantidadAfectada,            
    PrecioVenta,              
    FechaRegistro,                
    TipoMovimiento,                
    NombreTienda,        
    NombreAlmacen,  
    GuiaSalida)                
    VALUES                
    (@IdProducto,                
    @Existencia,          
    (SELECT TOP 1 PrecioVenta FROM Inventario WHERE IdProducto = @IdProducto),               
    GETDATE(),                
    'Devolucion a almacen',                
    @NombreTienda,        
    @Almacen,  
    @GuiaSalida               
    )           
     --INSERTAR INVENTARIO_MOVIMIENTO ALMACEN           
     SET @Existencia = (-1)* @Existencia            
    INSERT INTO Inventario_Movimiento                
    (IdProducto,                
    CantidadAfectada,            
    PrecioVenta,              
    FechaRegistro,                
    TipoMovimiento,         
    NombreTienda,               
    NombreAlmacen)                
    VALUES                
    (@IdProducto,                
    @Existencia,          
    (SELECT TOP 1 PrecioVenta FROM Inventario WHERE IdProducto = @IdProducto),               
    GETDATE(),                
    'Ingreso a almacen devolucion',        
    @NombreTienda,             
    @Almacen                
    )              
 SET @LoopCounter = @LoopCounter +1                
 END       
 COMMIT TRANSACTION       
END TRY       
BEGIN CATCH       
 IF @@TRANCOUNT > 0       
 ROLLBACK TRANSACTION;       
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                      
 DECLARE @ErrorLine INT = ERROR_LINE();                      
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                      
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                      
 DECLARE @ErrorState INT = ERROR_STATE();       
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +      
         ' ' +      
         CONVERT(VARCHAR(20),@ErrorLine) +      
         ' ' +      
         @ErrorMessage +      
         CONVERT(VARCHAR(20),@ErrorSeverity) +      
         CONVERT(VARCHAR(20),@ErrorState)      
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)      
END CATCH                
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdAnularVenta]     ******/
CREATE PROC [dbo].[usp_UpdAnularVenta]    
@IdVenta INT        
AS        
BEGIN      
BEGIN TRY      
BEGIN TRANSACTION          
 DECLARE @LoopCounter INT = 1,        
 @MaxCountList INT,        
 @NombreTienda VARCHAR(500),        
 @IdProducto INT,        
 @IdInventario INT,        
 @CantidadProducto INT,        
 @Existencia INT,  
 @PrecioVenta DECIMAL(18,4),
 @FechaCreacion DATETIME       
 SELECT @NombreTienda = NombreTienda,@FechaCreacion = FechaCreacion FROM Venta WHERE IdVenta = @IdVenta        
 SELECT @MaxCountList = COUNT(*)  FROM Detalle_Venta WHERE IdVenta = @IdVenta        
 --UPDATE ESTATUS VENTA EN TABLA VENTA        
 UPDATE Venta SET EstatusVenta = 'Anulado' WHERE IdVenta = @IdVenta        
 WHILE(@LoopCounter <= @MaxCountList)              
 BEGIN        
  SELECT         
  @IdProducto = IdProducto,        
  @IdInventario = IdInventario,        
  @CantidadProducto = CantidadProducto        
  FROM (SELECT * ,RANK()OVER (ORDER BY IdProducto ASC)AS RANK from Detalle_Venta WHERE IdVenta = @IdVenta) as ji         
  WHERE RANK=@LoopCounter            
  SET @LoopCounter = @LoopCounter +1         
  --UPDATE EXISTENCIA EN TABLA INVENTARIO        
  SELECT @Existencia = Existencia,@PrecioVenta = PrecioVenta  FROM Inventario WHERE IdInventario = @IdInventario        
  SET @Existencia = @Existencia + @CantidadProducto        
  UPDATE Inventario SET Existencia = @Existencia WHERE IdInventario = @IdInventario   
  --UPDATE PRECIO EN TABLA DETALLE_VENTA  
  UPDATE Detalle_Venta SET MontoProducto = @PrecioVenta WHERE IdVenta = @IdVenta AND IdInventario = @IdInventario         
  --INSERT EXISTENCIA EN TABLA INVENTARIO_MOVIMIENTO        
  INSERT Inventario_Movimiento        
  (IdProducto,        
  CantidadAfectada,       
  PrecioVenta,       
  FechaRegistro,        
  TipoMovimiento,        
  NombreTienda)        
  VALUES        
  (@IdProducto,        
  @CantidadProducto,        
  (SELECT TOP 1 PrecioVenta FROM Inventario WHERE IdProducto = @IdProducto),      
  @FechaCreacion,        
  'Anulacion de venta',        
  @NombreTienda)        
 END    
COMMIT TRANSACTION     
END TRY     
BEGIN CATCH     
 IF @@TRANCOUNT > 0     
 ROLLBACK TRANSACTION;     
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                    
 DECLARE @ErrorLine INT = ERROR_LINE();                    
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                    
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                    
 DECLARE @ErrorState INT = ERROR_STATE();     
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +    
         ' ' +    
         CONVERT(VARCHAR(20),@ErrorLine) +    
         ' ' +    
         @ErrorMessage +    
         CONVERT(VARCHAR(20),@ErrorSeverity) +    
         CONVERT(VARCHAR(20),@ErrorState)    
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)    
END CATCH         
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsRegistroVenta]     ******/
CREATE PROC [dbo].[usp_InsRegistroVenta]          
  @List AS dbo.lstERegistroVenta READONLY,              
  @NombreUsuario VARCHAR(200),              
  @NombreTienda VARCHAR(500),            
  @NroNotaVenta VARCHAR(100),
  @NroBoleta VARCHAR(20),
  @NroFactura VARCHAR(20)            
AS                
BEGIN       
BEGIN TRY        
BEGIN TRANSACTION                
  SET NOCOUNT ON;                
  SELECT * FROM @List;                 
  DECLARE @LoopCounter INT = 1,              
    @MaxCountList INT,              
    @MontoTotalSinIGV DECIMAL(18,4),              
    @MontoTotal DECIMAL(18,4),              
    @MontoProducto DECIMAL(8,4),              
    @CantidadProducto INT,              
    @IdProducto INT,              
    @IdInventario INT,              
    @IdVenta INT,              
    @Existencia INT              
  SELECT @MaxCountList = COUNT(*) FROM @List              
  WHILE(@LoopCounter <= @MaxCountList)              
  BEGIN              
  SELECT @MontoTotalSinIGV = MontoTotalSinIGV,              
     @MontoTotal = MontoTotal,              
     @MontoProducto = MontoProducto,              
     @CantidadProducto = CantidadProducto,              
     @IdProducto = IdProducto,              
     @IdInventario = IdInventario FROM --@List              
     (SELECT * ,RANK()OVER (ORDER BY IdProducto ASC)AS RANK from @List) as ji WHERE RANK=@LoopCounter               
    IF @LoopCounter = 1              
    BEGIN              
  --INSERTAR VENTA              
  INSERT INTO Venta              
  (NroNotaVenta, 
  NroBoleta,
  NroFactura,             
  MontoTotalSinIGV,              
  MontoTotal,              
  FechaCreacion,              
  NombreUsuario,              
  NombreTienda,              
  CierreTurno,              
  CierreDiario,              
  CierreMensual,              
  EstatusVenta)              
  VALUES              
  (@NroNotaVenta,
  @NroBoleta,
  @NroFactura,             
  @MontoTotalSinIGV,              
  @MontoTotal,              
  GETDATE(),              
  @NombreUsuario,              
  @NombreTienda,              
  0,              
  0,              
  0,              
  'Procesado')              
  SELECT @IdVenta = @@IDENTITY              
    END              
    --INSERTAR DETALLE VENTA              
    INSERT INTO Detalle_Venta              
    (IdProducto,              
    IdVenta,              
    IdInventario,              
    MontoProducto,              
    CantidadProducto,              
    FechaCreacion)              
    VALUES              
    (@IdProducto,              
    @IdVenta,              
    @IdInventario,              
    @MontoProducto,              
    @CantidadProducto,              
    GETDATE()              
    )              
    --ACTUALIZAR INVENTARIO              
    SELECT @Existencia = Existencia FROM Inventario WHERE IdInventario = @IdInventario              
    SET @Existencia = @Existencia - @CantidadProducto              
    UPDATE Inventario SET Existencia = @Existencia WHERE IdInventario = @IdInventario              
    --INSERTAR INVENTARIO_MOVIMIENTO              
    SET @CantidadProducto = (-1)* @CantidadProducto              
    INSERT INTO Inventario_Movimiento              
    (IdProducto,              
    CantidadAfectada,          
    PrecioVenta,          
    FechaRegistro,              
    TipoMovimiento,              
    NombreTienda)              
    VALUES              
    (@IdProducto,              
    @CantidadProducto,        
    @MontoProducto,           
    GETDATE(),              
    'Venta en tienda',              
    @NombreTienda              
    )              
 SET @LoopCounter = @LoopCounter +1              
  END       
COMMIT TRANSACTION       
END TRY       
BEGIN CATCH       
 IF @@TRANCOUNT > 0       
 ROLLBACK TRANSACTION;       
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                      
 DECLARE @ErrorLine INT = ERROR_LINE();                      
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                      
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                      
 DECLARE @ErrorState INT = ERROR_STATE();       
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +      
         ' ' +      
         CONVERT(VARCHAR(20),@ErrorLine) +      
         ' ' +      
         @ErrorMessage +      
         CONVERT(VARCHAR(20),@ErrorSeverity) +      
         CONVERT(VARCHAR(20),@ErrorState)      
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)      
END CATCH              
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetRegistroDetalleVenta]     ******/
CREATE PROC [dbo].[usp_GetRegistroDetalleVenta]    
@NombreTienda VARCHAR(500),      
@IdVenta INT      
AS        
BEGIN        
 SELECT         
 V.IdVenta,        
 P.IdProducto,       
 P.NombreProducto,      
 P.Talla,      
 P.Color,     
 DV.IdInventario,        
 V.NroNotaVenta,  
 V.NroBoleta,
 V.NroFactura,
 V.EstadoEnvioDocumento,
 V.MensajeEnvioDocumento,
 V.EstadoEnvioResumen,
 V.MensajeEnvioResumen,    
 DV.MontoProducto,        
 DV.CantidadProducto,        
 V.MontoTotalSinIGV,        
 V.MontoTotal,        
 V.FechaCreacion,        
 V.EstatusVenta,  
 V.CierreDiario,  
 '' AS NombreTienda,  
 '' AS Tiendaddl       
 FROM Venta V       
 INNER JOIN Detalle_Venta DV ON V.IdVenta = DV.IdVenta     
 INNER JOIN Producto P ON DV.IdProducto = P.IdProducto      
 WHERE V.NombreTienda =  @NombreTienda       
 AND V.IdVenta = @IdVenta       
END   
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProductosAlmacenTraspaso]     ******/
CREATE PROC usp_GetProductosAlmacenTraspaso           
@NombreAlmacen VARCHAR(500)            
AS            
BEGIN 
 
 --DECLARE @NombreAlmacen AS VARCHAR(500)
 --SET @NombreAlmacen = 'Almacen1'   
       
 SELECT P.IdProducto,         
  I.IdInventario,               
  P.NombreProducto,                
  P.Descripcion,                
  P.Talla,                 
  P.Color, 
  (SELECT SUM(CantidadAfectada) FROM Inventario_Movimiento
  WHERE TipoMovimiento IN ('Ingreso a almacen devolucion','Salida de almacen traspaso')
  AND IdProducto = P.IdProducto
  GROUP BY IdProducto) AS Existencia,  
  I.Existencia,        
  I.PrecioVenta,             
  P.FechaProduccion,                
  P.CodigoBarras,                
  P.BarCodeImage,    
  P.Imagen1,  
  P.Imagen2,  
  P.Imagen3,              
  P.EstatusProducto,                
  '' as Talladdl,                
  '' as Colorddl FROM Producto P  INNER JOIN        
  Inventario I ON P.IdProducto = I.IdProducto        
 WHERE         
 P.EstatusProducto = 1     
 AND NombreAlmacen = @NombreAlmacen        
 AND NombreTienda IS NULL  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdInventarioTiendaTraspaso]     ******/
CREATE PROC usp_UpdInventarioTiendaTraspaso                         
@IdProducto INT,                          
@IdInventario INT,                          
@Cantidad INT,       
@Precio DECIMAL(18,4),     
@NombreAlmacen varchar(500),
@GuiaEntrada varchar(300)                      
AS                          
BEGIN          
BEGIN TRY          
BEGIN TRANSACTION                                     
 DECLARE @NombreTienda varchar(500)                        
 DECLARE @PrecioVenta DECIMAL(18,4)                     
 DECLARE @ExistenciaAlmacen INT                    
 DECLARE @ExistenciaTienda INT                     
 --OBTENER EL NOMBRE DE ALMACEN Y TIENDA                       
 SELECT @ExistenciaTienda = Existencia,@NombreTienda = NombreTienda FROM Inventario                 
 WHERE IdInventario = @IdInventario                   
 IF @ExistenciaTienda IS NULL                
 SET @ExistenciaTienda = 0                   
 --OBTENER EL PRECIO DE VENTA                    
 SELECT @ExistenciaAlmacen = Existencia, @PrecioVenta = PrecioVenta FROM Inventario                     
 WHERE NombreTienda IS NULL AND NombreAlmacen = @NombreAlmacen AND IdProducto = @IdProducto                    
 --TIENDA                    
 --ACTUALIZAR CANTIDAD Y PRECIO EN INVENTARIO                      
 UPDATE Inventario                           
 SET PrecioVenta = @Precio,                          
 Existencia = @Cantidad                          
 WHERE IdInventario = @IdInventario                        
 --INSERTAR ELEMENTOS EN INVENTARIO_MOVIMIENTO                        
 INSERT INTO Inventario_Movimiento (IdProducto,CantidadAfectada,PrecioVenta,FechaRegistro,TipoMovimiento,NombreTienda,NombreAlmacen,GuiaEntrada)                        
 VALUES (@IdProducto,ABS(@Cantidad - @ExistenciaTienda),@Precio,GETDATE(),'Ingreso a tienda traspaso',@NombreTienda,@NombreAlmacen,@GuiaEntrada)                     
                     
 --ALMACEN                    
 SET @ExistenciaAlmacen = @ExistenciaAlmacen - ABS(@Cantidad - @ExistenciaTienda)                     
 --ACTUALIZAR CANTIDAD Y PRECIO EN INVENTARIO                      
 UPDATE Inventario                           
 SET Existencia = @ExistenciaAlmacen,    
 PrecioVenta = 0                          
 WHERE NombreTienda IS NULL AND NombreAlmacen = @NombreAlmacen AND IdProducto = @IdProducto                    
 SET @Cantidad = (-1) * ABS(@Cantidad - @ExistenciaTienda)                    
 --INSERTAR ELEMENTOS EN INVENTARIO_MOVIMIENTO                        
 INSERT INTO Inventario_Movimiento (IdProducto,CantidadAfectada,PrecioVenta,FechaRegistro,TipoMovimiento,NombreTienda,NombreAlmacen)                        
 VALUES (@IdProducto,@Cantidad,@Precio,GETDATE(),'Salida de almacen traspaso',@NombreTienda,@NombreAlmacen)                      
COMMIT TRANSACTION         
END TRY         
BEGIN CATCH         
 IF @@TRANCOUNT > 0         
 ROLLBACK TRANSACTION;         
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                        
 DECLARE @ErrorLine INT = ERROR_LINE();                        
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                        
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                        
 DECLARE @ErrorState INT = ERROR_STATE();         
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +        
         ' ' +        
         CONVERT(VARCHAR(20),@ErrorLine) +        
         ' ' +        
         @ErrorMessage +        
         CONVERT(VARCHAR(20),@ErrorSeverity) +        
         CONVERT(VARCHAR(20),@ErrorState)        
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)        
END CATCH          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsTraspasoProducto]     ******/
CREATE PROC usp_InsTraspasoProducto                              
  @List AS dbo.lstEInventario READONLY,                  
  @NombreUsuario VARCHAR(200),      
  @NombreAlmacen VARCHAR(500),    
  @NombreTienda VARCHAR(500)           
AS                    
BEGIN         
BEGIN TRY          
BEGIN TRANSACTION                    
  SET NOCOUNT ON;                    
  SELECT * FROM @List;                     
  DECLARE @LoopCounter INT = 1,                  
    @MaxCountList INT,                         
    @IdInventario INT,                  
    @IdProducto INT,                  
    @ExistenciaTienda INT,            
    @ExistenciaAlmacen INT,                 
    @Existencia INT,               
    @TiendaDestino VARCHAR(500),    
    @PrecioVenta DECIMAL(18,4),    
    @PrecioVentaDestino DECIMAL(18,4),    
    @CountRow INT,
    @GuiaEntrada VARCHAR(300),
    @GuiaSalida VARCHAR(300)             
 SELECT @MaxCountList = COUNT(*) FROM @List                  
 WHILE(@LoopCounter <= @MaxCountList)                  
 BEGIN                  
 SELECT                  
     @IdProducto = IdProducto,                  
     @IdInventario = IdInventario,          
     @Existencia = Existencia,          
     @TiendaDestino = Tienda,
     @GuiaEntrada = GuiaEntrada,
     @GuiaSalida = GuiaSalida FROM --@List                  
     (SELECT * ,RANK()OVER (ORDER BY IdProducto ASC)AS RANK from @List) as ji WHERE RANK=@LoopCounter      
     --VERIFICAR SI EXISTE REGISTRO EN INVENTARIO TIENDA DESTINO    
    SELECT @CountRow = COUNT(*) FROM Inventario WHERE IdProducto = @IdProducto AND NombreTienda = @TiendaDestino    
    IF @CountRow = 0    
  INSERT INTO Inventario     
  (IdProducto,    
  PrecioVenta,    
  Existencia,    
  FechaCreacion,    
  EstatusInventario,    
  NombreTienda,    
  NombreUsuario)    
  VALUES    
  (@IdProducto,    
  0,    
  0,    
  GETDATE(),    
  1,    
  @TiendaDestino,    
  @NombreUsuario    
  )                 
    --ACTUALIZAR INVENTARIO TIENDA                  
    SELECT @ExistenciaTienda = Existencia,@PrecioVenta = PrecioVenta FROM Inventario WHERE IdInventario = @IdInventario                  
    SET @ExistenciaTienda = @ExistenciaTienda - @Existencia                 
    UPDATE Inventario SET Existencia = @ExistenciaTienda WHERE IdInventario = @IdInventario            
    --ACTUALIZAR INVENTARIO TIENDA DESTINO                  
    SELECT @ExistenciaAlmacen = Existencia, @PrecioVentaDestino = PrecioVenta FROM Inventario WHERE NombreTienda = @TiendaDestino AND IdProducto = @IdProducto              
    SET @ExistenciaAlmacen = @ExistenciaAlmacen + @Existencia                 
    UPDATE Inventario SET Existencia = @ExistenciaAlmacen WHERE NombreTienda = @TiendaDestino AND IdProducto = @IdProducto              
    --INSERTAR INVENTARIO_MOVIMIENTO SALIDA TIENDA                
    SET @Existencia = (-1)* @Existencia            
    INSERT INTO Inventario_Movimiento                  
    (IdProducto,                  
    CantidadAfectada,              
    PrecioVenta,                
    FechaRegistro,                  
    TipoMovimiento,                  
    NombreTienda,          
    NombreAlmacen,
    GuiaSalida)                  
    VALUES                  
    (@IdProducto,                  
    @Existencia,            
    @PrecioVenta,                 
    GETDATE(),                  
    'Salida de tienda traspaso',                  
    @NombreTienda,          
    @NombreAlmacen,
    @GuiaSalida             
    )             
     --INSERTAR INVENTARIO_MOVIMIENTO INGRESO TIENDA              
    SET @Existencia = (-1)* @Existencia              
    INSERT INTO Inventario_Movimiento                  
    (IdProducto,                  
    CantidadAfectada,              
    PrecioVenta,                
    FechaRegistro,                  
    TipoMovimiento,           
    NombreTienda,                 
    NombreAlmacen,
    GuiaEntrada
    )                  
    VALUES                  
    (@IdProducto,                  
    @Existencia,            
    @PrecioVentaDestino,                 
    GETDATE(),                  
    'Ingreso a tienda traspaso',          
    @TiendaDestino,               
    @NombreAlmacen,
    @GuiaEntrada     
    )                
 SET @LoopCounter = @LoopCounter +1       
               
 END         
 COMMIT TRANSACTION         
END TRY         
BEGIN CATCH         
 IF @@TRANCOUNT > 0         
 ROLLBACK TRANSACTION;         
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                        
 DECLARE @ErrorLine INT = ERROR_LINE();                        
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                        
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                        
 DECLARE @ErrorState INT = ERROR_STATE();         
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +        
         ' ' +        
         CONVERT(VARCHAR(20),@ErrorLine) +        
         ' ' +        
         @ErrorMessage +        
         CONVERT(VARCHAR(20),@ErrorSeverity) +        
         CONVERT(VARCHAR(20),@ErrorState)        
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)        
END CATCH                  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetInventarioTraspaso]     ******/
CREATE PROC usp_GetInventarioTraspaso            
AS            
BEGIN            
 SELECT       
 I.IdInventario,      
 I.IdProducto,      
 PrecioVenta,      
 (SELECT CASE WHEN INV.NombreTienda IS NULL THEN  
 (SELECT SUM(CantidadAfectada)   
 FROM Inventario_Movimiento  
 WHERE TipoMovimiento IN ('Ingreso a almacen devolucion','Salida de almacen traspaso')  
 AND IdProducto = INV.IdProducto  
 GROUP BY IdProducto)  
 ELSE  
 INV.Existencia  
 END  
 FROM Inventario INV  
 WHERE INV.IdInventario = I.IdInventario) AS Existencia,     
 I.FechaCreacion,      
 I.EstatusInventario,      
 I.NombreTienda as Tienda,      
 I.NombreAlmacen as Almacen,      
 I.NombreUsuario as Usuario,      
 '' AS Almacenddl,      
 '' AS Tiendaddl,
 '' AS GuiaEntrada,
 '' AS GuiaSalida FROM Inventario I          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdPrecioInventarioTienda]     ******/
CREATE PROC usp_UpdPrecioInventarioTienda                     
@IdInventario INT,                           
@Precio DECIMAL(18,4)                    
AS                        
BEGIN        
BEGIN TRY        
BEGIN TRANSACTION                                                 
 --TIENDA                  
 --ACTUALIZAR CANTIDAD Y PRECIO EN INVENTARIO                    
 UPDATE Inventario                         
 SET PrecioVenta = @Precio                       
 WHERE IdInventario = @IdInventario                      
COMMIT TRANSACTION       
END TRY       
BEGIN CATCH       
 IF @@TRANCOUNT > 0       
 ROLLBACK TRANSACTION;       
 DECLARE @ErrorNumber INT = ERROR_NUMBER();                      
 DECLARE @ErrorLine INT = ERROR_LINE();                      
 DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();                      
 DECLARE @ErrorSeverity INT = ERROR_SEVERITY();                      
 DECLARE @ErrorState INT = ERROR_STATE();       
 DECLARE @ErrorDetail VARCHAR(MAX) = CONVERT(VARCHAR(20),@ErrorNumber) +      
         ' ' +      
         CONVERT(VARCHAR(20),@ErrorLine) +      
         ' ' +      
         @ErrorMessage +      
         CONVERT(VARCHAR(20),@ErrorSeverity) +      
         CONVERT(VARCHAR(20),@ErrorState)      
 RAISERROR(@ErrorDetail, @ErrorSeverity, @ErrorState)      
END CATCH        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetCodigoBarras]     ******/
CREATE PROC usp_GetCodigoBarras
AS
BEGIN
	SELECT
	PRO.IdProducto,
	PRO.NombreProducto,
	PRO.CodigoBarras,
	PRO.BarCodeImage,
	0 as Habilitado,
	(SELECT SUM(Existencia) FROM Producto P INNER JOIN Inventario I
	ON P.IdProducto = I.IdProducto
	WHERE NombreTienda IS NOT NULL 
	AND I.IdProducto = PRO.IdProducto
	GROUP BY I.IdProducto) as Cantidad
	FROM Producto PRO
	WHERE PRO.EstatusProducto = 1
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetReporteGuia]     ******/
CREATE PROC usp_GetReporteGuia
@NombreTienda VARCHAR(500)        
AS        
BEGIN        
      
--DECLARE @NombreTienda VARCHAR(500)        
--SET @NombreTienda = 'tienda el rey 110'      
      
SELECT      
IM.IdProducto,      
(SELECT NombreProducto FROM Producto WHERE IdProducto = IM.IdProducto) AS NombreProducto,      
(SELECT PrecioVenta FROM Inventario WHERE IdProducto = IM.IdProducto AND NombreTienda = @NombreTienda) AS PrecioVenta,      
IM.CantidadAfectada,      
IM.TipoMovimiento,      
IM.NombreTienda,      
IM.NombreAlmacen,      
IM.GuiaEntrada,      
IM.GuiaSalida,      
IM.FechaRegistro,      
'' as Tiendaddl FROM Inventario_Movimiento IM       
WHERE LTRIM(RTRIM(IM.NombreTienda)) = LTRIM(RTRIM(@NombreTienda))      
--AND TipoMovimiento IN ('Ingreso a tienda','Devolucion a almacen')    
END
GO
CREATE PROC usp_InsBandejaSalida  
@Cliente VARCHAR(500),  
@Tienda VARCHAR(500),  
@Correo VARCHAR(50),  
@FTP VARCHAR(50),  
@Cierre VARCHAR(50),    
@NombreArchivo1 VARCHAR(100),  
@NombreArchivo2 VARCHAR(100),  
@NombreArchivo3 VARCHAR(100),  
@NombreArchivo4 VARCHAR(100),  
@EmailUsuario VARCHAR(100),  
@NombreUsuario VARCHAR(100)  
AS  
BEGIN  
 INSERT INTO BandejaSalida  
 (Cliente,  
 Tienda,  
 Correo,  
 FTP,  
 Cierre,  
 Fecha,   
 NombreArchivo1,  
 NombreArchivo2,  
 NombreArchivo3,  
 NombreArchivo4,  
 EmailUsuario,  
 NombreUsuario)  
 VALUES  
 (@Cliente,  
 @Tienda,  
 @Correo,  
 @FTP,  
 @Cierre,  
 GETDATE(),  
 @NombreArchivo1,  
 @NombreArchivo2,  
 @NombreArchivo3,  
 @NombreArchivo4,  
 @EmailUsuario,  
 @NombreUsuario)  
END
GO
CREATE PROC usp_UpdBandejaSalida
@Cliente VARCHAR(500),    
@Tienda VARCHAR(500),    
@Correo VARCHAR(50),    
@FTP VARCHAR(50),    
@Cierre VARCHAR(50),    
@NombreArchivo1 VARCHAR(100),    
@NombreArchivo2 VARCHAR(100),    
@NombreArchivo3 VARCHAR(100),    
@NombreArchivo4 VARCHAR(100)    
AS    
BEGIN    
 UPDATE BandejaSalida    
 SET    
 Correo = @Correo,    
 FTP = @FTP,    
 Cierre = @Cierre,    
 NombreArchivo1 = @NombreArchivo1,    
 NombreArchivo2 = @NombreArchivo2,    
 NombreArchivo3 = @NombreArchivo3,    
 NombreArchivo4 = @NombreArchivo4    
 WHERE     
 Cliente = @Cliente AND    
 Tienda = @Tienda AND    
 CONVERT(DATE,Fecha) = CONVERT(DATE,GETDATE())    
END
GO
CREATE PROC usp_GetBandejaSalidaFecha
@NombreTienda VARCHAR(500)   
AS
BEGIN
	SELECT * FROM BandejaSalida
	WHERE CONVERT(DATE,Fecha) = CONVERT(DATE,GETDATE())  
	AND Tienda = @NombreTienda 
END
GO
CREATE PROC usp_GetBandejaSalida
AS
BEGIN
	SELECT * FROM BandejaSalida
	WHERE Correo = 'Rechazado' OR
	FTP = 'Rechazado' 
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetGuiaParaEliminar]     ******/
CREATE PROC usp_GetGuiaParaEliminar
@IdProducto INT,                  
@NroGuia VARCHAR(300),              
@NombreAlmacen VARCHAR(500),            
@NombreTienda VARCHAR(500)              
AS                  
BEGIN 
	SELECT * FROM Inventario_Movimiento
	WHERE IdProducto = @IdProducto 
	AND TipoMovimiento = 'Ingreso a tienda'
	AND NombreTienda = @NombreTienda
	AND NombreAlmacen = @NombreAlmacen
	AND GuiaEntrada = @NroGuia
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdRegistroventa_DocumentoVenta]     ******/
CREATE PROC usp_UpdRegistroventa_DocumentoVenta
@IdVenta INT,
@EstadoEnvioDocumento VARCHAR(20),
@MensajeEnvioDocumento VARCHAR(500),
@TramaZIPCRDDocumento VARCHAR(MAX)
AS
BEGIN
	UPDATE Venta SET EstadoEnvioDocumento = @EstadoEnvioDocumento,
	MensajeEnvioDocumento = @MensajeEnvioDocumento,
	TramaZIPCRDDocumento = @TramaZIPCRDDocumento
	WHERE IdVenta = @IdVenta
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdRegistroventa_ResumenDiario]     ******/
CREATE PROC usp_UpdRegistroventa_ResumenDiario
@IdVenta INT,
@EstadoEnvioResumen VARCHAR(20),
@MensajeEnvioResumen VARCHAR(500),
@TramaZIPCRDResumen VARCHAR(MAX)
AS
BEGIN
	UPDATE Venta SET EstadoEnvioResumen = @EstadoEnvioResumen,
	MensajeEnvioResumen = @MensajeEnvioResumen,
	TramaZIPCRDResumen = @TramaZIPCRDResumen
	WHERE IdVenta = @IdVenta
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetEstatusVenta]     ******/
CREATE PROC usp_GetEstatusVenta  
@IdVenta INT  
AS  
BEGIN  
 SELECT *,  
 0 as IdProducto,  
 0 as IdInventario,  
 0 as MontoProducto,  
 0 as CantidadProducto,  
 '' as NombreProducto,  
 '' as Tiendaddl,  
 '' as Talla,  
 '' as Color FROM Venta WHERE IdVenta = @IdVenta  
END