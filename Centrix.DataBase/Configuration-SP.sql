/****** Object:  StoredProcedure [dbo].[usp_GetClientes]     ******/
CREATE PROC [dbo].[usp_GetClientes]  
AS  
BEGIN  
 SELECT 
 IdCliente,
 NombreCliente,
 DireccionCliente,
 ServidorCliente,
 KeyConfig,
 EstatusCliente,
 '' as Servidorddl FROM Cliente  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetClienteRepetido]     ******/
CREATE PROC [dbo].[usp_GetClienteRepetido]    
@NombreCliente varchar(500),      
@DireccionCliente varchar(500),      
@ServidorCliente varchar(300),      
@KeyConfig varchar(300)    
AS    
BEGIN    
SELECT * FROM Cliente WHERE     
NombreCliente = @NombreCliente AND    
DireccionCliente = @DireccionCliente AND    
ServidorCliente = @ServidorCliente AND    
KeyConfig = @KeyConfig    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetCliente]     ******/
CREATE PROC [dbo].[usp_GetCliente]  
@IdCliente int  
AS    
BEGIN    
 SELECT 
 IdCliente,
 NombreCliente,
 DireccionCliente,
 ServidorCliente,
 KeyConfig,
 EstatusCliente,
 '' as Servidorddl FROM Cliente  
 WHERE IdCliente = @IdCliente  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownAlmacen]     ******/
CREATE PROC [dbo].[usp_GetDropDownAlmacen]          
AS              
BEGIN              
 SELECT IdAlmacen,NombreAlmacen FROM Almacen        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelCliente]     ******/
CREATE PROC [dbo].[usp_DelCliente]
@IdCliente INT
AS
BEGIN
	DELETE Cliente WHERE IdCliente = @IdCliente
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownComprobanteVenta]     ******/
CREATE PROC [dbo].[usp_GetDropDownComprobanteVenta]         
AS              
BEGIN              
 SELECT IdComprobante,NombreComprobante FROM TipoComprobanteVenta        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownCliente]     ******/
CREATE PROC [dbo].[usp_GetDropDownCliente]     
AS        
BEGIN        
 SELECT IdCliente,NombreCliente FROM Cliente WHERE EstatusCliente = 1 
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownServidor]     ******/
CREATE PROC [dbo].[usp_GetDropDownServidor]       
AS            
BEGIN            
 SELECT KeyConfigServidor,NombreServidor FROM Servidor      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsAlmacen]     ******/
CREATE PROC [dbo].[usp_InsAlmacen]               
@NombreAlmacen  varchar(500)                     
AS              
BEGIN              
 INSERT INTO Almacen            
 (NombreAlmacen)          
 VALUES          
 (@NombreAlmacen)           
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownModulo]     ******/
CREATE PROC [dbo].[usp_GetDropDownModulo]     
AS        
BEGIN        
 SELECT IdModulo,NombreModulo FROM Modulo  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsCliente]     ******/
CREATE PROC [dbo].[usp_InsCliente]        
@NombreCliente varchar(500),    
@DireccionCliente varchar(500),    
@ServidorCliente varchar(300),    
@KeyConfig varchar(300),    
@EstatusCliente BIT      
AS      
BEGIN      
 INSERT INTO Cliente   
 (NombreCliente,  
 DireccionCliente,  
 ServidorCliente,  
 KeyConfig,  
 EstatusCliente)  
 VALUES  
 (@NombreCliente,  
 @DireccionCliente,  
 @ServidorCliente,  
 @KeyConfig,  
 @EstatusCliente)   
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTipoComprobanteVenta]     ******/
CREATE PROC [dbo].[usp_GetTipoComprobanteVenta]  
@NombreComprobante VARCHAR(500)  
AS  
BEGIN  
 SELECT   
 IdComprobante,  
 NombreComprobante  
 FROM TipoComprobanteVenta   
 WHERE NombreComprobante = @NombreComprobante  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdCliente]     ******/
CREATE PROC [dbo].[usp_UpdCliente]    
@IdCliente INT,    
@NombreCliente varchar(500),  
@DireccionCliente varchar(500),  
@ServidorCliente varchar(300),  
@KeyConfig varchar(300),  
@EstatusCliente BIT    
AS    
BEGIN    
 UPDATE Cliente SET   
 NombreCliente=@NombreCliente,  
 DireccionCliente=@DireccionCliente,  
 ServidorCliente=@ServidorCliente,  
 KeyConfig=@KeyConfig,  
 EstatusCliente=@EstatusCliente WHERE IdCliente = @IdCliente    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsTipoComprobanteVenta]     ******/
CREATE PROC [dbo].[usp_InsTipoComprobanteVenta]
@NombreComprobante VARCHAR(500)
AS
BEGIN
	INSERT INTO TipoComprobanteVenta (NombreComprobante) VALUES (@NombreComprobante)
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsErrorLog]     ******/
CREATE PROC [dbo].[usp_InsErrorLog]  
@MensajeError VARCHAR(MAX),  
@DetalleError VARCHAR(MAX),  
@StoredProcedure VARCHAR(200),
@NombreCliente VARCHAR(500),
@NombreTienda VARCHAR(500),
@UserName VARCHAR(200)  
AS  
BEGIN  
 INSERT INTO ErrorLog(  
 MensajeError,  
 DetalleError,  
 StoredProcedure,  
 FechaError,  
 HoraError,
 NombreCliente,
 NombreTienda,
 UserName)  
 VALUES  
 (@MensajeError,  
 @DetalleError,  
 @StoredProcedure,  
 CONVERT(DATE,GETDATE()),  
 CAST(GETDATE() AS TIME),
 @NombreCliente,
 @NombreTienda,
 @UserName
 )  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdEstatusCliente]     ******/
CREATE PROC [dbo].[usp_UpdEstatusCliente]
@IdCliente INT,
@EstatusCliente BIT
AS
BEGIN
	UPDATE Cliente SET EstatusCliente=@EstatusCliente WHERE IdCliente = @IdCliente
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdEstatusTienda]     ******/
CREATE PROC [dbo].[usp_UpdEstatusTienda]  
@IdTienda INT,  
@EstatusTienda BIT  
AS  
BEGIN  
 UPDATE Tienda SET EstatusTienda=@EstatusTienda WHERE IdTienda = @IdTienda  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdModuloPorCliente]     ******/
CREATE PROC [dbo].[usp_UpdModuloPorCliente]    
@IdModuloPorCliente int,    
@IdCliente int,    
@IdModulo int,
@FechaVencimiento date,    
@EstatusModulo bit    
AS    
BEGIN    
 UPDATE ModuloPorCliente SET    
 IdCliente = @IdCliente,    
 IdModulo = @IdModulo,  
 FechaVencimiento = @FechaVencimiento, 
 EstatusModulo = @EstatusModulo   
 WHERE     
 IdModuloPorCliente = @IdModuloPorCliente    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdFormulario]     ******/
CREATE PROC [dbo].[usp_UpdFormulario]  
@IdFormulario INT,  
@PathFormulario VARCHAR(MAX),  
@EstatusFormulario BIT  
AS  
BEGIN  
UPDATE Formulario SET  
PathFormulario = @PathFormulario,  
EstatusFormulario = @EstatusFormulario  
WHERE IdFormulario = @IdFormulario  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdEstatusModuloPorCliente]     ******/
CREATE PROC [dbo].[usp_UpdEstatusModuloPorCliente]     
@IdModuloPorCliente INT,    
@EstatusModulo BIT    
AS    
BEGIN    
 UPDATE ModuloPorCliente SET EstatusModulo=@EstatusModulo WHERE IdModuloPorCliente = @IdModuloPorCliente    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdEstatusFormulario]     ******/
CREATE PROC [dbo].[usp_UpdEstatusFormulario]
@IdFormulario INT,
@EstatusFormulario BIT
AS
BEGIN
UPDATE Formulario SET EstatusFormulario = @EstatusFormulario
WHERE IdFormulario = @IdFormulario
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsModuloPorCliente]     ******/
CREATE PROC [dbo].[usp_InsModuloPorCliente]                   
@IdCliente int                
AS                  
BEGIN       
 DECLARE @ID INT,@COUNT INT,@IdModulo INT,@FechaVencimiento VARCHAR(10),@Fecha DATE      
 SET @ID=1      
 SET @Fecha = DATEADD(day, 30,GETDATE())      
 SET @FechaVencimiento = CONVERT(VARCHAR(4),YEAR(@Fecha))+'-'+CONVERT(VARCHAR(2),MONTH(@Fecha))+'-'+CONVERT(VARCHAR(2),DAY(@Fecha))      
 SELECT @COUNT=COUNT(*)FROM Modulo      
 WHILE @ID<=@COUNT      
 BEGIN      
 --recoremos secuencialmente los datos de la tabla al introducir la función RANK() e igualar su resultado a nuestra variable @ID    
 SELECT @IdModulo = IdModulo FROM (SELECT  *,RANK()OVER (ORDER BY IdModulo ASC)AS RANK from Modulo) as ji WHERE RANK=@ID      
 INSERT INTO ModuloPorCliente               
 (IdCliente,              
 IdModulo,            
 FechaVencimiento,          
 EstatusModulo)      
 Values      
 (@IdCliente,      
 @IdModulo,      
 @FechaVencimiento,      
 0)      
 SELECT @ID=@ID+1      
 END       
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsModulo]     ******/
CREATE PROC [dbo].[usp_InsModulo]                     
@NombreModulo varchar(500),  
@htmlModuloMenu varchar(max),  
@htmlModuloBoton varchar(max)               
AS                    
BEGIN 
BEGIN TRY  
BEGIN TRANSACTION          
 DECLARE @ID INT,@COUNT INT,@COUNT_MOD INT,@IdModulo INT,@IdCliente INT,@FechaVencimiento VARCHAR(10),@Fecha DATE      
 SELECT @COUNT_MOD = COUNT(*) FROM Modulo WHERE NombreModulo =  @NombreModulo    
 IF @COUNT_MOD = 0    
 BEGIN    
  INSERT INTO Modulo (NombreModulo,htmlModuloMenu,htmlModuloBoton) VALUES (@NombreModulo,@htmlModuloMenu,@htmlModuloBoton)    
  SELECT @IdModulo = IdModulo from Modulo where NombreModulo =  @NombreModulo    
  SET @ID=1        
  SET @Fecha = DATEADD(day, 30,GETDATE())        
  SET @FechaVencimiento = CONVERT(VARCHAR(4),YEAR(@Fecha))+'-'+CONVERT(VARCHAR(2),MONTH(@Fecha))+'-'+CONVERT(VARCHAR(2),DAY(@Fecha))      
  CREATE TABLE #ClienteXModulo(    
   IdCliente INT,    
  )      
  INSERT INTO #ClienteXModulo    
  SELECT DISTINCT(IdCliente) FROM ModuloPorCliente     
  SELECT @COUNT = COUNT(*) FROM #ClienteXModulo    
  WHILE @ID<=@COUNT        
  BEGIN        
   --recoremos secuencialmente los datos de la tabla al introducir la función RANK() e igualar su resultado a nuestra variable @ID      
   SELECT @IdCliente = IdCliente FROM (SELECT * ,RANK()OVER (ORDER BY IdCliente ASC)AS RANK from #ClienteXModulo) as ji WHERE RANK=@ID        
   INSERT INTO ModuloPorCliente                 
   (IdCliente,                
   IdModulo,              
   FechaVencimiento,            
   EstatusModulo)        
   Values        
   (@IdCliente,        
   @IdModulo,        
   @FechaVencimiento,        
   0)        
   SELECT @ID=@ID+1       
  END    
  DROP TABLE  #ClienteXModulo     
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
/****** Object:  StoredProcedure [dbo].[usp_InsFormulario]     ******/
CREATE PROC [dbo].[usp_InsFormulario]
@IdModulo INT,
@PathFormulario VARCHAR(MAX),
@EstatusFormulario BIT
AS
BEGIN
INSERT INTO Formulario 
(IdModulo,PathFormulario,EstatusFormulario)
VALUES
(@IdModulo,@PathFormulario,@EstatusFormulario)
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsTienda]     ******/
CREATE PROC [dbo].[usp_InsTienda]        
@IdCliente int,    
@NombreTienda varchar(500),    
@EstatusTienda bit     
AS      
BEGIN      
 INSERT INTO Tienda   
 (IdCliente,  
 NombreTienda,  
 EstatusTienda)  
 VALUES  
 (@IdCliente,  
 @NombreTienda,  
 @EstatusTienda)   
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdTienda]     ******/
CREATE PROC [dbo].[usp_UpdTienda]
@IdTienda int,
@IdCliente int,
@NombreTienda varchar(500),
@EstatusTienda bit
AS
BEGIN
	UPDATE Tienda SET
	IdCliente = @IdCliente,
	NombreTienda = @NombreTienda,
	EstatusTienda = @EstatusTienda
	WHERE 
	IdTienda = @IdTienda
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetFormularios]     ******/
CREATE PROC [dbo].[usp_GetFormularios]     
AS      
BEGIN      
SELECT       
'0' as IdCliente,      
'' as NombreCliente,      
IdModulo,      
'' as NombreModulo,      
GETDATE() as FechaVencimiento,    
IdFormulario,      
PathFormulario,      
EstatusFormulario,
'False' as EstatusModulo,      
'' as Clienteddl,      
'' as Moduloddl      
FROM Formulario    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetFormularioRepetido]     ******/
CREATE PROC [dbo].[usp_GetFormularioRepetido]    
@IdModulo INT,    
@PathFormulario VARCHAR(500)    
AS     
BEGIN    
 SELECT     
 IdFormulario,    
 IdModulo,    
 '' AS NombreModulo,  
 '' AS FechaVencimiento,    
 '0' AS IdCliente,    
 '' AS NombreCliente,    
  PathFormulario,    
  EstatusFormulario,
  'False' AS EstatusModulo,    
  '' AS Clienteddl,    
  '' AS Moduloddl     
 FROM Formulario WHERE IdModulo = @IdModulo AND PathFormulario = @PathFormulario    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetFormulario]     ******/
CREATE PROC [dbo].[usp_GetFormulario]      
@IdFormulario INT      
AS      
BEGIN      
SELECT       
'0' as IdCliente,      
'' as NombreCliente,      
IdModulo,      
'' as NombreModulo,      
GETDATE() as FechaVencimiento,    
IdFormulario,      
PathFormulario,      
EstatusFormulario, 
'False' as EstatusModulo,     
'' as Clienteddl,      
'' as Moduloddl      
FROM Formulario      
WHERE IdFormulario = @IdFormulario      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownTiendaPerfil]     ******/
CREATE PROC [dbo].[usp_GetDropDownTiendaPerfil]   
@IdCliente INT          
AS              
BEGIN              
 SELECT IdTienda,NombreTienda 
 FROM Tienda 
 WHERE EstatusTienda = 1   
 AND IdCliente = @IdCliente  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownTiendaInventario]     ******/
CREATE PROC [dbo].[usp_GetDropDownTiendaInventario]
@NombreCliente varchar(500)        
AS            
BEGIN            
 SELECT IdTienda,NombreTienda 
 FROM Tienda T INNER JOIN Cliente C
 ON T.IdCliente = C.IdCliente
 WHERE C.NombreCliente = @NombreCliente
 AND T.EstatusTienda = 1   
 AND C.EstatusCliente = 1  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownTienda]     ******/
CREATE PROC [dbo].[usp_GetDropDownTienda]       
AS          
BEGIN          
 SELECT IdTienda,NombreTienda FROM Tienda WHERE EstatusTienda = 1   
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetModuloRepetido]     ******/
CREATE PROC [dbo].[usp_GetModuloRepetido]  
@NombreModulo varchar(500)  
AS   
BEGIN  
 --SELECT * FROM Modulo WHERE NombreModulo = @NombreModulo  
 SELECT X.IdModuloPorCliente,    
 C.IdCliente,    
 C.NombreCliente,    
 M.IdModulo,    
 M.NombreModulo,    
 X.FechaVencimiento,    
 X.EstatusModulo,    
 '' as Clienteddl,    
 '' as Moduloddl,    
 '' as Clientecbx,  
 M.htmlModuloMenu,  
 M.htmlModuloBoton  FROM ModuloPorCliente  X             
 INNER JOIN Cliente C ON X.IdCliente = C.IdCliente            
 INNER JOIN Modulo M ON X.IdModulo = M.IdModulo            
 WHERE M.NombreModulo=@NombreModulo
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetModuloPorClientes]     ******/
CREATE PROC [dbo].[usp_GetModuloPorClientes]                 
AS BEGIN                  
 SELECT X.IdModuloPorCliente,  
 C.IdCliente,
 C.NombreCliente,  
 M.IdModulo,
 M.NombreModulo,  
 X.FechaVencimiento,
 X.EstatusModulo,  
 '' as Clienteddl,  
 '' as Moduloddl,  
 '' as Clientecbx,
 M.htmlModuloMenu,
 M.htmlModuloBoton FROM ModuloPorCliente  X             
 INNER JOIN Cliente C ON X.IdCliente = C.IdCliente            
 INNER JOIN Modulo M ON X.IdModulo = M.IdModulo    
 WHERE C.EstatusCliente = 1          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetModuloPorClienteRepetido]     ******/
CREATE PROC [dbo].[usp_GetModuloPorClienteRepetido]     
@IdCliente int,   
@IdModulo int,  
@EstatusModulo bit    
AS      
BEGIN      
SELECT * FROM ModuloPorCliente WHERE       
IdCliente = @IdCliente AND      
IdModulo = @IdModulo AND      
EstatusModulo = @EstatusModulo     
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetModuloPorCliente]     ******/
CREATE PROC [dbo].[usp_GetModuloPorCliente]                
@IdModuloPorCliente int                
AS                  
BEGIN                  
 SELECT X.IdModuloPorCliente,  
 C.IdCliente,  
 C.NombreCliente,  
 M.IdModulo,  
 M.NombreModulo,  
 X.FechaVencimiento,  
 X.EstatusModulo,  
 '' as Clienteddl,  
 '' as Moduloddl,  
 '' as Clientecbx,
 M.htmlModuloMenu,
 M.htmlModuloBoton  FROM ModuloPorCliente  X           
 INNER JOIN Cliente C ON X.IdCliente = C.IdCliente          
 INNER JOIN Modulo M ON X.IdModulo = M.IdModulo          
 WHERE X.IdModuloPorCliente = @IdModuloPorCliente AND  
 C.EstatusCliente = 1        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetFormulariosPorModulo]     ******/
CREATE PROC [dbo].[usp_GetFormulariosPorModulo]            
AS            
BEGIN            
SELECT             
C.IdCliente,            
C.NombreCliente,            
M.IdModulo,            
M.NombreModulo,            
X.FechaVencimiento,          
F.IdFormulario,            
F.PathFormulario,      
'False' as EstatusFormulario,          
X.EstatusModulo,          
'' as Clienteddl,            
'' as Moduloddl            
FROM ModuloPorCliente  X                     
 INNER JOIN Cliente C ON X.IdCliente = C.IdCliente                    
 INNER JOIN Modulo M ON X.IdModulo = M.IdModulo         
 INNER JOIN Formulario F ON F.IdModulo = M.IdModulo    
WHERE X.EstatusModulo = 1
AND C.EstatusCliente = 1
AND F.EstatusFormulario = 1      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTiendasPorCliente]     ******/
CREATE PROC [dbo].[usp_GetTiendasPorCliente]        
@NombreCliente VARCHAR(500)       
AS          
BEGIN          
 SELECT T.IdTienda,T.IdCliente,C.NombreCliente,T.NombreTienda,T.EstatusTienda,'' AS Clienteddl       
 FROM Tienda T INNER JOIN Cliente C      
 ON T.IdCliente = C.IdCliente      
 WHERE C.NombreCliente = @NombreCliente       
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTiendas]     ******/
CREATE PROC [dbo].[usp_GetTiendas]    
AS BEGIN    
 SELECT T.IdTienda,T.IdCliente,C.NombreCliente,T.NombreTienda,T.EstatusTienda,'' as Clienteddl    
 FROM Tienda T INNER JOIN Cliente C    
 ON T.IdCliente = C.IdCliente    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTiendaRepetida]     ******/
CREATE PROC [dbo].[usp_GetTiendaRepetida]  
@IdCliente int,    
@NombreTienda varchar(500),    
@EstatusTienda bit  
AS  
BEGIN  
SELECT * FROM Tienda WHERE   
IdCliente = @IdCliente AND  
NombreTienda = @NombreTienda AND  
EstatusTienda = @EstatusTienda 
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTiendaCliente]     ******/
CREATE PROC [dbo].[usp_GetTiendaCliente]
@NombreCliente VARCHAR(500)
AS 
BEGIN
	SELECT T.IdTienda,T.IdCliente,C.NombreCliente,T.NombreTienda,T.EstatusTienda,'' as Clienteddl      
 FROM Tienda T INNER JOIN Cliente C      
 ON T.IdCliente = C.IdCliente  
 WHERE NombreCliente = @NombreCliente
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTienda]     ******/
CREATE PROC [dbo].[usp_GetTienda]      
@IdTienda int      
AS        
BEGIN        
 SELECT T.IdTienda,T.IdCliente,C.NombreCliente,T.NombreTienda,T.EstatusTienda,'' AS Clienteddl     
 FROM Tienda T INNER JOIN Cliente C    
 ON T.IdCliente = C.IdCliente    
 WHERE T.IdTienda = @IdTienda      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownModuloPerfil]     ******/
CREATE PROC [dbo].[usp_GetDropDownModuloPerfil] 
@IdCliente INT        
AS            
BEGIN            
	SELECT M.IdModulo,M.NombreModulo  
	FROM Modulo M INNER JOIN ModuloPorCliente MC
	ON M.IdModulo = MC.IdModulo
	WHERE MC.IdCliente = @IdCliente
	AND EstatusModulo = 1
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelTienda]     ******/
CREATE PROC [dbo].[usp_DelTienda]  
@IdTienda INT  
AS  
BEGIN  
 DELETE Tienda WHERE IdTienda = @IdTienda  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelModuloPorCliente]     ******/
CREATE PROC [dbo].[usp_DelModuloPorCliente]      
@IdModuloPorCliente INT      
AS
DECLARE @IdCliente INT      
BEGIN
 SELECT @IdCliente = IdCliente FROM ModuloPorCliente WHERE IdModuloPorCliente = @IdModuloPorCliente        
 DELETE ModuloPorCliente WHERE IdCliente = @IdCliente      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelFormulario]     ******/
CREATE PROC [dbo].[usp_DelFormulario]
@IdFormulario INT
AS
BEGIN
DELETE Formulario
WHERE IdFormulario = @IdFormulario
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetCheckBoxCliente]     ******/
CREATE PROC [dbo].[usp_GetCheckBoxCliente]     
AS        
BEGIN        
 CREATE TABLE #Cliente_Modulo(
	IdCliente INT,
	NombreCliente VARCHAR(500),
	EstatusCliente BIT
	)
	DECLARE @ID INT,@COUNT INT,@COUNTCLIENTE INT,@IdCliente INT,@NombreCliente VARCHAR(500)
	SET @ID=1
	SELECT @COUNT=COUNT(*)FROM Cliente WHERE EstatusCliente = 1
	WHILE @ID<=@COUNT
	BEGIN
		--recoremos secuencialmente los datos de la tabla al introducir la función RANK() e igualar su resultado a nuestra variable @ID
		SELECT @IdCliente = IdCliente,@NombreCliente = NombreCliente FROM (SELECT  *,RANK()OVER (ORDER BY IdCliente ASC)AS RANK from Cliente WHERE EstatusCliente = 1) as ji WHERE RANK=@ID
		--Verificamos que la tabla ModuloPorCliente tenga el cliente seleccionado en la tabla Cliente
		SELECT @COUNTCLIENTE=COUNT(*) FROM ModuloPorCliente WHERE IdCliente = @IdCliente 
		--Insertamos los dos pribmero registros en la tabla temporal
		INSERT INTO #Cliente_Modulo (IdCliente,NombreCliente) VALUES (@IdCliente,@NombreCliente)
		--Actualizamoss el valor EstatusCliente segun el match hecho entre ModuloPorCliente y Cliente
		IF @COUNTCLIENTE> 0
			UPDATE #Cliente_Modulo SET EstatusCliente = 1 WHERE IdCliente = @IdCliente 
		ELSE
			UPDATE #Cliente_Modulo SET EstatusCliente = 0 WHERE IdCliente = @IdCliente 
		SELECT @ID=@ID+1
	END
	SELECT * FROM #Cliente_Modulo
	DROP TABLE #Cliente_Modulo
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAlmacenRepetido]     ******/
CREATE PROC [dbo].[usp_GetAlmacenRepetido]    
@NombreAlmacen varchar(500)                   
AS BEGIN                      
 SELECT D.IdAlmacen,            
 D.NombreAlmacen,            
 C.IdCliente,            
 C.NombreCliente,            
 T.IdTienda,            
 T.NombreTienda,            
 DT.EstatusAlmacen,            
 '' as Tiendaddl,        
 '' as Almacenddl,
 '' as Clienteddl           
 FROM Almacen D             
 INNER JOIN AlmacenPorTienda DT ON D.IdAlmacen = DT.IdAlmacen            
 INNER JOIN Tienda T ON DT.IdTienda = T.IdTienda            
 INNER JOIN Cliente C ON T.IdCliente = C.IdCliente            
 WHERE       
  D.NombreAlmacen =   @NombreAlmacen               
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAlmacenPorTiendaRepetido]     ******/
CREATE PROC [dbo].[usp_GetAlmacenPorTiendaRepetido]    
@IdTienda INT,        
@IdAlmacen INT                     
AS BEGIN                      
 SELECT D.IdAlmacen,            
 D.NombreAlmacen,            
 C.IdCliente,            
 C.NombreCliente,            
 T.IdTienda,            
 T.NombreTienda,            
 DT.EstatusAlmacen,            
 '' as Tiendaddl,        
 '' as Almacenddl,
 '' as Clienteddl           
 FROM Almacen D             
 INNER JOIN AlmacenPorTienda DT ON D.IdAlmacen = DT.IdAlmacen             
 INNER JOIN Tienda T ON DT.IdTienda = T.IdTienda            
 INNER JOIN Cliente C ON T.IdCliente = C.IdCliente            
 WHERE       
  T.IdTienda = @IdTienda AND      
  D.IdAlmacen =   @IdAlmacen               
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAlmacenPorCliente]     ******/
CREATE PROC [dbo].[usp_GetAlmacenPorCliente]     
@NombreCliente VARCHAR(500)                      
AS BEGIN                        
 SELECT D.IdAlmacen,              
 D.NombreAlmacen,              
 C.IdCliente,              
 C.NombreCliente,              
 T.IdTienda,              
 T.NombreTienda,              
 DT.EstatusAlmacen,              
 '' as Tiendaddl,          
 '' as Almacenddl,  
 '' as Clienteddl             
 FROM Almacen D               
 INNER JOIN AlmacenPorTienda DT ON D.IdAlmacen = DT.IdAlmacen               
 INNER JOIN Tienda T ON DT.IdTienda = T.IdTienda              
 INNER JOIN Cliente C ON T.IdCliente = C.IdCliente              
 WHERE         
  C.NombreCliente = @NombreCliente             
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAlmacenes]     ******/
CREATE PROC [dbo].[usp_GetAlmacenes]                 
AS BEGIN                  
 SELECT D.IdAlmacen,        
 D.NombreAlmacen,        
 C.IdCliente,        
 C.NombreCliente,        
 T.IdTienda,        
 T.NombreTienda,        
 DT.EstatusAlmacen,        
 '' as Tiendaddl,    
 '' as Almacenddl,
 '' as Clienteddl      
 FROM Almacen D         
 INNER JOIN AlmacenPorTienda DT ON D.IdAlmacen = DT.IdAlmacen         
 INNER JOIN Tienda T ON DT.IdTienda = T.IdTienda        
 INNER JOIN Cliente C ON T.IdCliente = C.IdCliente        
 WHERE T.EstatusTienda = 1                 
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAlmacen]     ******/
CREATE PROC [dbo].[usp_GetAlmacen]                  
@IdAlmacen INT,        
@IdTienda INT                  
AS                      
BEGIN                      
 SELECT D.IdAlmacen,          
 D.NombreAlmacen,          
 C.IdCliente,          
 C.NombreCliente,          
 T.IdTienda,          
 T.NombreTienda,          
 DT.EstatusAlmacen,          
 '' as Tiendaddl,      
 '' as Almacenddl,  
 '' as Clienteddl          
 FROM Almacen D           
 INNER JOIN AlmacenPorTienda DT ON D.IdAlmacen = DT.IdAlmacen           
 INNER JOIN Tienda T ON DT.IdTienda = T.IdTienda          
 INNER JOIN Cliente C ON T.IdCliente = C.IdCliente          
 WHERE          
 T.EstatusTienda = 1 AND        
 D.IdAlmacen = @IdAlmacen AND        
 T.IdTienda = @IdTienda        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelUsuarioVenta]     ******/
CREATE PROC [dbo].[usp_DelUsuarioVenta]
@IdTienda INT,
@IdUsuario INT
AS
BEGIN
	UPDATE Usuario SET IdTienda= NULL, NombreTienda = NULL
	WHERE IdUsuario = @IdUsuario AND IdTienda= @IdTienda
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelUsuario]     ******/
CREATE PROCEDURE [dbo].[usp_DelUsuario]      
@IdUsuario INT     
AS      
BEGIN      
 DELETE Usuario WHERE IdUsuario = @IdUsuario      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetComprobanteVentaRepetido]     ******/
CREATE PROC [dbo].[usp_GetComprobanteVentaRepetido]      
@IdTienda INT,        
@TipoComprobante VARCHAR(200),  
@Serie CHAR(4),      
@NumeroSerie INT,        
@NumeroInicio INT,        
@NumeroFin INT        
AS        
BEGIN        
 SELECT         
 CV.IdComprobante,        
 CV.IdTienda,        
 T.NombreTienda,      
 '' as NroNotaVenta, 
 '' as NroBoleta,  
 '' as NroFactura,         
 CV.TipoComprobante, 
 CV.Serie,       
 CV.NumeroSerie,        
 CV.NumeroInicio,        
 CV.NumeroFin,        
 CV.Correlativo,        
 '' AS Tiendaddl,        
 '' AS Clienteddl,  
 '' AS ComprobanteVentaddl       
 FROM ComprobanteVenta CV INNER JOIN Tienda T         
 ON CV.IdTienda = T.IdTienda        
 WHERE CV.IdTienda=@IdTienda        
 AND CV.TipoComprobante = @TipoComprobante  
 AND CV.Serie = @Serie      
 AND CV.NumeroSerie = @NumeroSerie        
 AND CV.NumeroInicio = @NumeroInicio        
 AND CV.NumeroFin = @NumeroFin        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetComprobanteVenta]     ******/
CREATE PROC [dbo].[usp_GetComprobanteVenta]        
@IdComprobante INT          
AS          
BEGIN          
 SELECT           
 CV.IdComprobante,          
 CV.IdTienda,          
 T.NombreTienda,          
 CV.TipoComprobante,         
 '' AS NroNotaVenta,  
 '' AS NroBoleta, 
 '' AS NroFactura, 
 CV.Serie,       
 CV.NumeroSerie,          
 CV.NumeroInicio,          
 CV.NumeroFin,          
 CV.Correlativo,          
 '' AS Tiendaddl,          
 '' AS Clienteddl,  
 '' AS ComprobanteVentaddl          
 FROM ComprobanteVenta CV INNER JOIN Tienda T           
 ON CV.IdTienda = T.IdTienda          
 WHERE CV.IdComprobante=@IdComprobante          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetComprobantesVentaLegacy]     ******/
CREATE PROC [dbo].[usp_GetComprobantesVentaLegacy]          
@IdCliente INT            
AS              
BEGIN              
 SELECT               
 CV.IdComprobante,              
 CV.IdTienda,              
 T.NombreTienda,        
 '' as NroNotaVenta,  
 '' as NroBoleta, 
 '' as NroFactura,            
 CV.TipoComprobante,  
 CV.Serie,            
 CV.NumeroSerie,              
 CV.NumeroInicio,              
 CV.NumeroFin,              
 CV.Correlativo,              
 '' AS Tiendaddl,              
 '' AS Clienteddl,  
 '' AS ComprobanteVentaddl             
 FROM ComprobanteVenta CV INNER JOIN Tienda T               
 ON CV.IdTienda = T.IdTienda            
 WHERE T.IdCliente =  @IdCliente           
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetComprobantesVenta]     ******/
CREATE PROC [dbo].[usp_GetComprobantesVenta]        
AS          
BEGIN          
 SELECT           
 CV.IdComprobante,          
 CV.IdTienda,          
 T.NombreTienda,      
 '' AS NroNotaVenta,
  '' as NroBoleta, 
 '' as NroFactura,           
 CV.TipoComprobante,
 CV.Serie,          
 CV.NumeroSerie,          
 CV.NumeroInicio,          
 CV.NumeroFin,          
 CV.Correlativo,          
 '' AS Tiendaddl,          
 '' AS Clienteddl,  
 '' AS ComprobanteVentaddl          
 FROM ComprobanteVenta CV INNER JOIN Tienda T           
 ON CV.IdTienda = T.IdTienda          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelAlmacen]     ******/
CREATE PROC [dbo].[usp_DelAlmacen]           
@IdAlmacen INT,    
@IdTienda INT          
AS            
BEGIN            
 DELETE AlmacenPorTienda     
 WHERE IdAlmacen = @IdAlmacen AND    
 IdTienda = @IdTienda     
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDropDownAlmacenInventario]     ******/
CREATE PROC [dbo].[usp_GetDropDownAlmacenInventario]  
@NombreCliente varchar(500)          
AS                         
BEGIN                
 SELECT DISTINCT D.IdAlmacen,D.NombreAlmacen  
 FROM Almacen D   
 INNER JOIN AlmacenPorTienda DT ON D.IdAlmacen = DT.IdAlmacen  
 INNER JOIN Tienda T ON T.IdTienda = DT.IdTienda  
 INNER JOIN Cliente C ON C.IdCliente = T.IdCliente  
 WHERE  
 C.EstatusCliente =1  
 AND T.EstatusTienda = 1  
 AND C.NombreCliente =  @NombreCliente        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuarios]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuarios]           
AS                          
BEGIN                          
 SELECT *,                 
 '' as PasswordAntiguo,                  
 '' as PasswordNuevo1,                  
 '' as PasswordNuevo2,                       
 '' as Tiendaddl,
 '' as Clienteddl FROM Usuario                    
END 
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuarioRepetido]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuarioRepetido]              
@NombreUsuario varchar(200),                
@NroDocumento varchar(20)                   
AS                    
BEGIN                                    
 SELECT *,            
 '' as PasswordAntiguo,            
 '' as PasswordNuevo1,            
 '' as PasswordNuevo2,
 '' as Clienteddl FROM Usuario             
 WHERE                
 NombreUsuario = @NombreUsuario AND                
 NroDocumento = @NroDocumento                       
END 
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuarioPorDNI]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuarioPorDNI]                   
@NroDocumento varchar(20)                          
AS                          
BEGIN                          
 SELECT *,                
 '' as PasswordAntiguo,                
 '' as PasswordNuevo1,                
 '' as PasswordNuevo2,                   
 '' AS Tiendaddl,
 '' as Clienteddl FROM Usuario                  
 WHERE NroDocumento = @NroDocumento          
 AND         
 EstatusUsuario = 1                        
END                  
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuario]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuario]                
@IdUsuario INT                       
AS                        
BEGIN                        
 SELECT *,              
 '' as PasswordAntiguo,              
 '' as PasswordNuevo1,              
 '' as PasswordNuevo2,                    
 '' as Tiendaddl,
 '' as Clienteddl FROM Usuario               
 WHERE IdUsuario = @IdUsuario                        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuariosPorCliente]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuariosPorCliente]     
@NombreCliente VARCHAR(500)                
AS                              
BEGIN                              
 SELECT *,                      
 '' as PasswordAntiguo,                      
 '' as PasswordNuevo1,                      
 '' as PasswordNuevo2,                           
 '' as Tiendaddl,  
 '' as Clienteddl FROM Usuario     
 WHERE NombreCliente = @NombreCliente                      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsAlmacenPorTienda]     ******/
CREATE PROC [dbo].[usp_InsAlmacenPorTienda]              
@IdTienda int,            
@IdAlmacen int,            
@EstatusAlmacen bit             
AS              
BEGIN              
 INSERT INTO AlmacenPorTienda           
 (IdTienda,          
 IdAlmacen,          
 EstatusAlmacen)          
 VALUES          
 (@IdTienda,          
 @IdAlmacen,          
 @EstatusAlmacen)           
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetNroNotaVenta]     ******/
CREATE PROC [dbo].[usp_GetNroNotaVenta]  
@IdTienda INT,            
@TipoComprobante VARCHAR(200)            
AS             
BEGIN            
 DECLARE @NroDocumento VARCHAR(100),@NumeroSerie INT,@NumeroSerie_ VARCHAR(4),@NumeroFin INT,@Correlativo INT ,@Correlativo_ VARCHAR(6)             
 SET @NumeroSerie_ = ''  
 SET @Correlativo_ = ''  
 SELECT @NumeroSerie = NumeroSerie,              
 @NumeroFin = NumeroFin,              
 @Correlativo = Correlativo             
 FROM ComprobanteVenta               
 WHERE IdTienda = @IdTienda AND               
 TipoComprobante = @TipoComprobante              
 IF @Correlativo <= @NumeroFin            
  BEGIN            
   IF @NumeroSerie < 10000              
    SET @NumeroSerie_ = '0' + @NumeroSerie     
   IF @NumeroSerie < 1000              
    SET @NumeroSerie_ = '0' + @NumeroSerie_             
   IF @NumeroSerie < 100              
    SET @NumeroSerie_ = '0' + @NumeroSerie_              
   IF @NumeroSerie < 10              
    SET @NumeroSerie_ = '0' + @NumeroSerie_             
   IF @Correlativo < 1000000              
    SET @Correlativo_ = '0' + @Correlativo     
   IF @Correlativo < 100000              
    SET @Correlativo_ = '0' + @Correlativo_              
   IF @Correlativo < 10000              
    SET @Correlativo_ = '0' + @Correlativo_              
   IF @Correlativo < 1000              
    SET @Correlativo_ = '0' + @Correlativo_    
   IF @Correlativo < 100              
    SET @Correlativo_ = '0' + @Correlativo_      
   IF @Correlativo < 10              
    SET @Correlativo_ = '0' + @Correlativo_              
   SET @NroDocumento = @NumeroSerie_ + '-' + @Correlativo_               
   --ACTUALIZA AL SIGUIENTE CORRELATIVO            
   UPDATE ComprobanteVenta SET Correlativo = CONVERT(INT,@Correlativo) + 1            
   WHERE IdTienda = @IdTienda AND TipoComprobante = @TipoComprobante            
  END            
 ELSE            
  SET @NroDocumento = ''           
 --DEVUELVE EL NUMERO DE DOCUMENTO           
 SELECT '0' AS IdComprobante,          
 '0' AS IdTienda,          
 '' AS NombreTienda,           
 @NroDocumento as NroNotaVenta,
 '' AS NroBoleta,   
 '' AS NroFactura,          
 '' AS TipoComprobante,          
 '0' AS NumeroSerie,  
 '' AS Serie,          
 '0' AS NumeroInicio,          
 '0' AS NumeroFin,          
 '0' AS Correlativo,          
 '' AS Tiendaddl,          
 '' AS Clienteddl,        
 '' AS ComprobanteVentaddl        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdUsuarioVenta]     ******/
CREATE PROC [dbo].[usp_UpdUsuarioVenta]
@IdTienda INT,
@NombreTienda VARCHAR(500),
@IdUsuario INT
AS
BEGIN
	UPDATE Usuario SET IdTienda= @IdTienda, NombreTienda = @NombreTienda
	WHERE IdUsuario = @IdUsuario
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdUsuarioSession]     ******/
CREATE PROCEDURE [dbo].[usp_UpdUsuarioSession]           
@NroDocumento varchar(20),        
@SessionIdUsuario varchar(50),  
@SessionStatusUsuario varchar(50)        
AS            
BEGIN            
 UPDATE Usuario SET SessionIdUsuario = @SessionIdUsuario,  
 SessionStatusUsuario = @SessionStatusUsuario  
 WHERE            
 NroDocumento = @NroDocumento      
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdUsuario]     ******/
CREATE PROCEDURE [dbo].[usp_UpdUsuario]          
@IdUsuario int,                
@NombreUsuario varchar(200),                    
@NroDocumento varchar(20),     
@IdTienda int,    
@NombreTienda varchar(500),   
@NombreCliente varchar(500),       
@EstatusUsuario bit,     
@Sexo varchar(15)            
AS                  
BEGIN       
 IF @IdTienda = 0    
 SET @IdTienda = NULL               
 UPDATE Usuario                   
 SET                   
 NombreUsuario = @NombreUsuario,                
 NroDocumento = @NroDocumento,                    
 EstatusUsuario = @EstatusUsuario,   
 Sexo = @Sexo,   
 IdTienda = @IdTienda,    
 NombreTienda = @NombreTienda,  
 NombreCliente = @NombreCliente       
 WHERE                  
 IdUsuario = @IdUsuario                  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdUnlockUsuario]     ******/
CREATE PROC [dbo].[usp_UpdUnlockUsuario]
@IdUsuario INT
AS
BEGIN
	UPDATE Usuario SET SessionStatusUsuario = 'Inactivo' WHERE IdUsuario = @IdUsuario
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdResetPasswordUsuario]     ******/
CREATE PROCEDURE [dbo].[usp_UpdResetPasswordUsuario]  
@IdUsuario INT,  
@PasswordUsuario VARCHAR(200)  
AS  
BEGIN  
 UPDATE Usuario SET PasswordUsuario = @PasswordUsuario,NuevoUsuario = 1 
 WHERE IdUsuario = @IdUsuario  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdPasswordUsuario]     ******/
CREATE PROCEDURE [dbo].[usp_UpdPasswordUsuario]    
@NroDocumento VARCHAR(20),    
@PasswordUsuario VARCHAR(200)    
AS    
BEGIN    
 UPDATE Usuario SET PasswordUsuario = @PasswordUsuario, NuevoUsuario = 0    
 WHERE NroDocumento = @NroDocumento    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsUsuario]     ******/
CREATE PROCEDURE [dbo].[usp_InsUsuario]              
@NombreUsuario varchar(200),                  
@NroDocumento varchar(20),      
@IdTienda int,      
@NombreTienda varchar(500),       
@NombreCliente varchar(500),                  
@PasswordUsuario varchar(200),                          
@NuevoUsuario bit,            
@EstatusUsuario bit,    
@Sexo varchar(15)                   
AS                    
BEGIN          
 IF @IdTienda = 0      
 SET @IdTienda = NULL             
 INSERT INTO Usuario                    
 (NombreUsuario,NroDocumento,PasswordUsuario,NuevoUsuario,EstatusUsuario,IdTienda,NombreTienda,NombreCliente,Sexo) VALUES                    
 (@NombreUsuario,@NroDocumento,@PasswordUsuario,1,@EstatusUsuario,@IdTienda,@NombreTienda,@NombreCliente,@Sexo)                    
END 
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdEstatusAlmacen]     ******/
CREATE PROC [dbo].[usp_UpdEstatusAlmacen]         
@IdAlmacen INT,     
@IdTienda INT,       
@EstatusAlmacen BIT          
AS          
BEGIN          
 UPDATE AlmacenPorTienda SET EstatusAlmacen=@EstatusAlmacen  
 WHERE IdAlmacen = @IdAlmacen AND  
 IdTienda = @IdTienda     
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdEstatusUsuario]     ******/
CREATE PROC [dbo].[usp_UpdEstatusUsuario]  
@IdUsuario INT,  
@EstatusUsuario BIT  
AS  
BEGIN  
 UPDATE Usuario SET EstatusUsuario=@EstatusUsuario WHERE IdUsuario = @IdUsuario  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdEstatusPerfil]     ******/
CREATE PROC [dbo].[usp_UpdEstatusPerfil]
@IdPerfil INT,
@EstatusPerfil BIT
AS BEGIN  
	UPDATE Perfil
	SET EstatusPerfil = @EstatusPerfil
	WHERE IdPerfil = @IdPerfil
END
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdComprobanteVenta]     ******/
CREATE PROC [dbo].[usp_UpdComprobanteVenta]        
@IdComprobante INT,            
@TipoComprobante VARCHAR(200),
@Serie CHAR(4),             
@NumeroSerie INT,            
@NumeroInicio INT,            
@NumeroFin INT            
AS            
BEGIN      
BEGIN TRY      
BEGIN TRANSACTION        
DECLARE @TipoComprobante_ VARCHAR(200),   
@Serie_ CHAR(4),          
@NumeroSerie_ INT,            
@NumeroInicio_ INT,            
@NumeroFin_ INT       
 SELECT         
 @TipoComprobante_ = TipoComprobante,   
 @Serie_ = Serie,      
 @NumeroSerie_ = NumeroSerie,        
 @NumeroInicio_ = NumeroInicio,        
 @NumeroFin_ = NumeroFin FROM ComprobanteVenta        
 WHERE IdComprobante = @IdComprobante          
          
 UPDATE ComprobanteVenta SET        
 TipoComprobante = @TipoComprobante,  
 Serie = @Serie,       
 NumeroSerie = @NumeroSerie,        
 NumeroInicio = @NumeroInicio,        
 NumeroFin = @NumeroFin,        
 Correlativo = @NumeroInicio        
 WHERE  IdComprobante = @IdComprobante            
 --INSERTAR HOSTORICO COMPROBANTE          
 INSERT INTO HistoricoComprobanteVenta          
 (IdComprobante,SerieAnterior,NumeroSerieAnterior,NumeroInicioAnterior,NumeroFinAnterior,SerieNuevo,NumeroSerieNuevo,NumeroInicioNuevo,NumeroFinNuevo,FechaActualizacion)          
 VALUES          
 (@IdComprobante,@Serie_,@NumeroSerie_,@NumeroInicio_,@NumeroFin_,@Serie,@NumeroSerie,@NumeroInicio,@NumeroFin,GETDATE())     
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
/****** Object:  StoredProcedure [dbo].[usp_InsPerfil]     ******/
CREATE PROC [dbo].[usp_InsPerfil]  
@IdCliente INT,   
@IdModulo INT,  
@IdUsuario INT  
AS  
BEGIN  
 DECLARE @IdModuloPorCliente INT  
 SELECT @IdModuloPorCliente = IdModuloPorCliente   
 FROM ModuloPorCliente WHERE IdCliente = @IdCliente AND IdModulo = @IdModulo  
 --  
 INSERT INTO Perfil(IdModuloPorCliente,IdUsuario,EstatusPerfil)  
 VALUES (@IdModuloPorCliente,@IdUsuario,1)  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_InsComprobanteVenta]     ******/
CREATE PROC [dbo].[usp_InsComprobanteVenta]    
@IdTienda INT,      
@TipoComprobante VARCHAR(200),
@Serie CHAR(4),      
@NumeroSerie INT,      
@NumeroInicio INT,      
@NumeroFin INT      
AS      
BEGIN    
 BEGIN TRY    
 BEGIN TRANSACTION     
 INSERT INTO ComprobanteVenta      
 (IdTienda,TipoComprobante,Serie,NumeroSerie,NumeroInicio,NumeroFin,Correlativo)      
 VALUES      
 (@IdTienda,@TipoComprobante,@Serie,@NumeroSerie,@NumeroInicio,@NumeroFin,1)      
 --INSERTAR HOSTORICO COMPROBANTE    
 DECLARE @IdComprobante INT    
 SELECT TOP 1 @IdComprobante = IdComprobante FROM ComprobanteVenta ORDER BY IdComprobante DESC    
 INSERT INTO HistoricoComprobanteVenta    
 (IdComprobante,SerieAnterior,NumeroSerieAnterior,NumeroInicioAnterior,NumeroFinAnterior,SerieNuevo,NumeroSerieNuevo,NumeroInicioNuevo,NumeroFinNuevo,FechaActualizacion)    
 VALUES    
 (@IdComprobante,'',0,0,0,@Serie,@NumeroSerie,@NumeroInicio,@NumeroFin,GETDATE())    
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
/****** Object:  StoredProcedure [dbo].[usp_GetUsuarioVentaRegistrado]     ******/
CREATE PROC [dbo].[usp_GetUsuarioVentaRegistrado]
@IdCliente INT,
@IdTienda INT
AS
BEGIN
	SELECT P.IdUsuario, 
	U.NombreUsuario,
	U.NroDocumento,
	U.IdTienda,
	U.NombreTienda,
	MC.IdCliente,
	C.NombreCliente FROM Usuario U
	INNER JOIN Perfil P ON U.IdUsuario = P.IdUsuario
	INNER JOIN ModuloPorCliente MC ON P.IdModuloPorCliente = MC.IdModuloPorCliente 
	INNER JOIN Cliente C ON MC.IdCliente = C.IdCliente
	INNER JOIN Modulo M ON M.IdModulo = MC.IdModulo
	WHERE M.NombreModulo = 'Ventas' AND
	U.EstatusUsuario = 1 AND
	C.IdCliente = @IdCliente AND
	U.IdTienda IN (SELECT IdTienda FROM Usuario WHERE IdTienda = @IdTienda)
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuarioVentaPorCliente]     ******/
CREATE PROC [dbo].[usp_GetUsuarioVentaPorCliente]   
@IdCliente INT,            
@IdTienda INT            
AS            
BEGIN            
 SELECT *,                          
 '' as PasswordAntiguo,                          
 '' as PasswordNuevo1,                          
 '' as PasswordNuevo2,                                        
 '' as Tiendaddl,
 '' as Clienteddl FROM Usuario US         
 INNER JOIN Tienda TI ON US.IdTienda = TI.IdTienda        
 INNER JOIN Cliente CLI ON TI.IdCliente = CLI.IdCliente                            
 WHERE              
 US.EstatusUsuario = 1 AND          
 CLI.IdCliente =  @IdCliente AND         
 US.IdUsuario NOT IN           
 (SELECT P.IdUsuario          
 FROM Usuario U            
 INNER JOIN Perfil P ON U.IdUsuario = P.IdUsuario            
 INNER JOIN ModuloPorCliente MC ON P.IdModuloPorCliente = MC.IdModuloPorCliente             
 INNER JOIN Cliente C ON MC.IdCliente = C.IdCliente            
 INNER JOIN Modulo M ON M.IdModulo = MC.IdModulo            
 WHERE M.NombreModulo = 'Ventas' AND            
 U.EstatusUsuario = 1 AND            
 C.IdCliente = @IdCliente AND            
 U.IdTienda IN (SELECT IdTienda FROM Usuario WHERE IdTienda = @IdTienda))           
END  
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuarioVenta]     ******/
CREATE PROC [dbo].[usp_GetUsuarioVenta]  
@IdCliente INT,        
@IdTienda INT        
AS        
BEGIN        
 SELECT *,                      
 '' as PasswordAntiguo,                      
 '' as PasswordNuevo1,                      
 '' as PasswordNuevo2,                              
 '' as Tiendaddl,
 '' as Clienteddl FROM Usuario                       
 WHERE          
 EstatusUsuario = 1 AND        
 IdUsuario NOT IN       
 (SELECT P.IdUsuario      
 FROM Usuario U        
 INNER JOIN Perfil P ON U.IdUsuario = P.IdUsuario        
 INNER JOIN ModuloPorCliente MC ON P.IdModuloPorCliente = MC.IdModuloPorCliente         
 INNER JOIN Cliente C ON MC.IdCliente = C.IdCliente        
 INNER JOIN Modulo M ON M.IdModulo = MC.IdModulo        
 WHERE M.NombreModulo = 'Ventas' AND        
 U.EstatusUsuario = 1 AND        
 C.IdCliente = @IdCliente AND        
 U.IdTienda IN (SELECT IdTienda FROM Usuario WHERE IdTienda = @IdTienda))       
END  
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuariosRegistradosPerfilTienda]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuariosRegistradosPerfilTienda]              
@IdCliente INT,                          
@IdModulo INT,      
@IdTienda INT                  
AS                              
BEGIN                              
 SELECT *,                      
 '' as PasswordAntiguo,                      
 '' as PasswordNuevo1,                      
 '' as PasswordNuevo2,                               
 '' as Tiendaddl,
 '' as Clienteddl FROM Usuario                       
 WHERE         
 EstatusUsuario = 1       
 AND IdTienda = @IdTienda      
 AND  IdUsuario IN                     
 (SELECT P.IdUsuario FROM Perfil P       
 INNER JOIN ModuloPorCliente MC ON P.IdModuloPorCliente = MC.IdModuloPorCliente       
 INNER JOIN Cliente C ON MC.IdCliente = C.IdCliente      
 INNER JOIN Tienda T ON T.IdCliente = C.IdCliente      
 INNER JOIN Usuario U ON U.IdTienda = T.IdTienda                    
 WHERE MC.IdCliente = @IdCliente AND MC.IdModulo = @IdModulo AND T.IdTienda = @IdTienda AND U.IdTienda = @IdTienda)                          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuariosRegistradosPerfil]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuariosRegistradosPerfil]             
@IdCliente INT,                        
@IdModulo INT                    
AS                            
BEGIN                            
 SELECT *,                    
 '' as PasswordAntiguo,                    
 '' as PasswordNuevo1,                    
 '' as PasswordNuevo2,                           
 '' as Tiendaddl,
 '' as Clienteddl FROM Usuario                     
 WHERE       
 EstatusUsuario = 1 AND      
 IdUsuario IN                   
 (SELECT P.IdUsuario FROM Perfil P INNER JOIN ModuloPorCliente MC                  
 ON P.IdModuloPorCliente = MC.IdModuloPorCliente                  
 WHERE MC.IdCliente = @IdCliente AND MC.IdModulo = @IdModulo)                        
END 
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuariosPerfilTienda]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuariosPerfilTienda]                 
@IdCliente INT,                              
@IdModulo INT,          
@IdTienda INT,
@NombreCliente VARCHAR(300)                          
AS                                  
BEGIN   
--DECLARE  @IdCliente INT
--DECLARE  @IdModulo INT
--DECLARE  @IdTienda INT  
--DECLARE @NombreCliente VARCHAR(300)   
--SET @IdCliente = 1
--SET @IdModulo = 30
--SET @IdTienda = 1 
--SET @NombreCliente = 'Centrix Peru'                       
 SELECT *,                          
 '' as PasswordAntiguo,                          
 '' as PasswordNuevo1,                          
 '' as PasswordNuevo2,                                     
 '' as Tiendaddl,  
 '' as Clienteddl FROM Usuario                           
 WHERE              
 EstatusUsuario = 1  
 AND NombreCliente =  @NombreCliente    
 AND IdUsuario NOT IN                         
 (SELECT P.IdUsuario FROM Perfil P         
 INNER JOIN ModuloPorCliente MC ON P.IdModuloPorCliente = MC.IdModuloPorCliente         
 INNER JOIN Cliente C ON MC.IdCliente = C.IdCliente        
 INNER JOIN Tienda T ON T.IdCliente = C.IdCliente         
 INNER JOIN Usuario U ON U.IdTienda = T.IdTienda                       
 WHERE MC.IdCliente = @IdCliente AND MC.IdModulo = @IdModulo
 AND T.IdTienda = @IdTienda)                            
END  
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuariosPerfilPorClienteTienda]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuariosPerfilPorClienteTienda]                
@IdCliente INT,                             
@IdModulo INT,          
@IdTienda INT,  
@NombreCliente VARCHAR(300)                          
AS                                    
BEGIN     
 --DECLARE @IdCliente INT  
 --DECLARE @IdTienda INT  
 --DECLARE @IdModulo INT  
 --DECLARE @NombreCliente VARCHAR(300)  
 --SET @IdCliente = 1  
 --SET @IdTienda = 1   
 --SET @IdModulo = 29  
 --SET  @NombreCliente = 'Centrix Peru'                                  
 SELECT *,                            
 '' as PasswordAntiguo,                            
 '' as PasswordNuevo1,                            
 '' as PasswordNuevo2,                                       
 '' as Tiendaddl,    
 '' as Clienteddl FROM Usuario U                       
 WHERE                
 U.EstatusUsuario = 1 AND              
 U.NombreCliente = @NombreCliente AND            
 U.IdUsuario NOT IN                           
 (SELECT P.IdUsuario FROM Perfil P             
 INNER JOIN ModuloPorCliente MC ON P.IdModuloPorCliente = MC.IdModuloPorCliente             
 INNER JOIN Cliente C ON MC.IdCliente = C.IdCliente            
 INNER JOIN Tienda T ON T.IdCliente = C.IdCliente             
 INNER JOIN Usuario U ON U.IdTienda = T.IdTienda                           
 WHERE MC.IdCliente = @IdCliente AND 
 MC.IdModulo = @IdModulo AND
 U.IdTienda = @IdTienda)                                
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuariosPerfilPorCliente]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuariosPerfilPorCliente]              
@IdCliente INT,                              
@IdModulo INT,
@NombreCliente VARCHAR(300)                        
AS                                  
BEGIN 
 --DECLARE  @IdCliente INT
 --DECLARE @IdModulo INT
 --DECLARE @NombreCliente VARCHAR(300)
 --SET @IdCliente = 1
 --SET @IdModulo = 0  
 --SET  @NombreCliente = 'Centrix Peru'                          
 SELECT *,                          
 '' as PasswordAntiguo,                          
 '' as PasswordNuevo1,                          
 '' as PasswordNuevo2,                                   
 '' as Tiendaddl,    
 '' as Clienteddl FROM Usuario U                      
 WHERE              
 U.EstatusUsuario = 1 AND            
 U.NombreCliente = @NombreCliente AND          
 U.IdUsuario NOT IN                         
 (SELECT P.IdUsuario FROM Perfil P INNER JOIN ModuloPorCliente MC                        
 ON P.IdModuloPorCliente = MC.IdModuloPorCliente                        
 WHERE MC.IdCliente = @IdCliente AND MC.IdModulo = @IdModulo)                              
END   
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsuariosPerfil]     ******/
CREATE PROCEDURE [dbo].[usp_GetUsuariosPerfil]             
@IdCliente INT,                          
@IdModulo INT,
@NombreCliente VARCHAR(300)                      
AS                              
BEGIN                              
 SELECT *,                     
 '' as PasswordAntiguo,                      
 '' as PasswordNuevo1,                      
 '' as PasswordNuevo2,                              
 '' as Tiendaddl,  
 '' as Clienteddl FROM Usuario                       
 WHERE          
 EstatusUsuario = 1 AND
 NombreCliente = @NombreCliente AND        
 IdUsuario NOT IN    
 (SELECT P.IdUsuario FROM Perfil P INNER JOIN ModuloPorCliente MC                    
 ON P.IdModuloPorCliente = MC.IdModuloPorCliente                    
 WHERE MC.IdCliente = @IdCliente AND MC.IdModulo = @IdModulo)                          
END   
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPerfilRepetido]     ******/
CREATE PROC [dbo].[usp_GetPerfilRepetido]  
@IdCliente INT,  
@IdModulo INT,  
@IdUsuario INT  
AS  
BEGIN  
 DECLARE @IdModuloPorCliente INT  
 SELECT @IdModuloPorCliente = IdModuloPorCliente   
 FROM ModuloPorCliente WHERE IdCliente = @IdCliente AND IdModulo = @IdModulo  
 --  
 SELECT * FROM Perfil   
 WHERE  
 IdModuloPorCliente = @IdModuloPorCliente AND  
 IdUsuario = @IdUsuario  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPerfilPorDNI]     ******/
CREATE PROC [dbo].[usp_GetPerfilPorDNI]               
@NroDocumento  VARCHAR(20)             
AS BEGIN                  
 SELECT P.IdPerfil,                
 C.IdCliente,                
 C.NombreCliente,                
 C.KeyConfig,                
 M.IdModulo,                
 M.NombreModulo,                         
 U.IdUsuario,                
 U.NombreUsuario,        
 U.IdTienda,           
 U.NombreTienda,            
 MP.IdModuloPorCliente,                
 M.htmlModuloMenu,                
 M.htmlModuloBoton,                
 P.EstatusPerfil,                
 '' AS Clienteddl,                
 '' AS Tiendaddl,                
 '' AS Almacenddl,                
 '' AS Moduloddl,                
 '' AS Usuarioddl                
 FROM Perfil P                
 INNER JOIN Usuario U ON P.IdUsuario = U.IdUsuario                            
 INNER JOIN ModuloPorCliente MP ON MP.IdModuloPorCliente = P.IdModuloPorCliente           
 INNER JOIN Cliente C ON C.IdCliente = MP.IdCliente                
 INNER JOIN Modulo M ON M.IdModulo = MP.IdModulo                 
 WHERE MP.EstatusModulo = 1                
 AND C.EstatusCliente = 1                 
 AND U.EstatusUsuario = 1  
 AND P.EstatusPerfil = 1             
 AND U.NroDocumento = @NroDocumento            
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPerfilesPorCliente]     ******/
CREATE PROC [dbo].[usp_GetPerfilesPorCliente]
@NombreCliente varchar(500)            
AS BEGIN              
 SELECT P.IdPerfil,              
 C.IdCliente,              
 C.NombreCliente,              
 C.KeyConfig,              
 M.IdModulo,              
 M.NombreModulo,       
 '0' as IdTienda,      
 '' as NombreTienda,                      
 U.IdUsuario,              
 U.NombreUsuario,              
 MP.IdModuloPorCliente,              
 M.htmlModuloMenu,              
 M.htmlModuloBoton,              
 P.EstatusPerfil,              
 '' AS Clienteddl,              
 '' AS Tiendaddl,              
 '' AS Almacenddl,              
 '' AS Moduloddl,              
 '' AS Usuarioddl              
 FROM Perfil P              
 INNER JOIN Usuario U ON P.IdUsuario = U.IdUsuario                          
 INNER JOIN ModuloPorCliente MP ON MP.IdModuloPorCliente = P.IdModuloPorCliente         
 INNER JOIN Cliente C ON C.IdCliente = MP.IdCliente              
 INNER JOIN Modulo M ON M.IdModulo = MP.IdModulo               
 WHERE MP.EstatusModulo = 1              
 AND C.EstatusCliente = 1               
 AND U.EstatusUsuario = 1 
 AND C.NombreCliente = @NombreCliente        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPerfiles]     ******/
CREATE PROC [dbo].[usp_GetPerfiles]            
AS BEGIN            
 SELECT P.IdPerfil,            
 C.IdCliente,            
 C.NombreCliente,            
 C.KeyConfig,            
 M.IdModulo,            
 M.NombreModulo,     
 '0' as IdTienda,    
 '' as NombreTienda,                    
 U.IdUsuario,            
 U.NombreUsuario,            
 MP.IdModuloPorCliente,            
 M.htmlModuloMenu,            
 M.htmlModuloBoton,            
 P.EstatusPerfil,            
 '' AS Clienteddl,            
 '' AS Tiendaddl,            
 '' AS Almacenddl,            
 '' AS Moduloddl,            
 '' AS Usuarioddl            
 FROM Perfil P            
 INNER JOIN Usuario U ON P.IdUsuario = U.IdUsuario                        
 INNER JOIN ModuloPorCliente MP ON MP.IdModuloPorCliente = P.IdModuloPorCliente       
 INNER JOIN Cliente C ON C.IdCliente = MP.IdCliente            
 INNER JOIN Modulo M ON M.IdModulo = MP.IdModulo             
 WHERE MP.EstatusModulo = 1            
 AND C.EstatusCliente = 1             
 AND U.EstatusUsuario = 1          
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPerfil]     ******/
CREATE PROC [dbo].[usp_GetPerfil]        
@IdPerfil INT        
AS BEGIN          
 SELECT P.IdPerfil,            
 C.IdCliente,            
 C.NombreCliente,            
 C.KeyConfig,            
 M.IdModulo,            
 M.NombreModulo,                     
 '0' as IdTienda,    
 '' as NombreTienda,    
 U.IdUsuario,            
 U.NombreUsuario,            
 MP.IdModuloPorCliente,            
 M.htmlModuloMenu,            
 M.htmlModuloBoton,            
 P.EstatusPerfil,            
 '' AS Clienteddl,            
 '' AS Tiendaddl,            
 '' AS Almacenddl,            
 '' AS Moduloddl,            
 '' AS Usuarioddl            
 FROM Perfil P            
 INNER JOIN Usuario U ON P.IdUsuario = U.IdUsuario                        
 INNER JOIN ModuloPorCliente MP ON MP.IdModuloPorCliente = P.IdModuloPorCliente       
 INNER JOIN Cliente C ON C.IdCliente = MP.IdCliente            
 INNER JOIN Modulo M ON M.IdModulo = MP.IdModulo             
 WHERE MP.EstatusModulo = 1            
 AND C.EstatusCliente = 1             
 AND U.EstatusUsuario = 1        
AND P.IdPerfil = @IdPerfil        
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetFormulariosPorDNI]     ******/
CREATE PROC [dbo].[usp_GetFormulariosPorDNI]    
@NroDocumento VARCHAR(20)    
AS      
BEGIN      
SELECT      
U.IdUsuario,    
U.NombreUsuario,    
U.NroDocumento,     
C.IdCliente,      
C.NombreCliente,      
M.IdModulo,      
M.NombreModulo,      
MP.FechaVencimiento,    
F.IdFormulario,      
F.PathFormulario,      
F.EstatusFormulario,   
'False' as EstatusModulo,     
'' as Clienteddl,      
'' as Moduloddl      
FROM Perfil P      
INNER JOIN Usuario U ON P.IdUsuario = U.IdUsuario                                  
INNER JOIN ModuloPorCliente MP ON MP.IdModuloPorCliente = P.IdModuloPorCliente                 
INNER JOIN Cliente C ON C.IdCliente = MP.IdCliente                      
INNER JOIN Modulo M ON M.IdModulo = MP.IdModulo        
INNER JOIN Formulario F ON M.IdModulo = F.IdModulo      
WHERE U.NroDocumento = @NroDocumento    
AND P.EstatusPerfil = 1    
AND U.EstatusUsuario = 1    
AND MP.EstatusModulo = 1    
AND C.EstatusCliente = 1    
AND F.EstatusFormulario = 1    
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelPerfilCustom]     ******/
CREATE PROC [dbo].[usp_DelPerfilCustom]  
@IdCliente INT,  
@IdModulo INT,  
@IdUsuario INT  
AS  
BEGIN  
 DECLARE @IdModuloPorCliente INT  
 SELECT @IdModuloPorCliente = IdModuloPorCliente   
 FROM ModuloPorCliente WHERE IdCliente = @IdCliente AND IdModulo = @IdModulo  
 --  
 DELETE Perfil   
 WHERE IdModuloPorCliente = @IdModuloPorCliente AND IdUsuario = @IdUsuario  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelPerfil]     ******/
CREATE PROC [dbo].[usp_DelPerfil]
@IdPerfil INT
AS BEGIN  
	DELETE Perfil
	WHERE IdPerfil = @IdPerfil
END
GO
/****** Object:  StoredProcedure [dbo].[usp_DelComprobanteVenta]     ******/
CREATE PROC [dbo].[usp_DelComprobanteVenta]  
@IdComprobante INT  
AS  
BEGIN  
 DELETE HistoricoComprobanteVenta WHERE IdComprobante = @IdComprobante  
 DELETE ComprobanteVenta WHERE IdComprobante = @IdComprobante  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAlmacenPorTienda]     ******/
CREATE PROC usp_GetAlmacenPorTienda  
@IdTienda INT  
AS  
BEGIN  
SELECT
0 AS IdAlmacen,
0 AS IdCliente,
0 AS IdTienda,
'' AS NombreCliente,
A.NombreAlmacen,
'' AS NombreTienda,
AT.EstatusAlmacen,
'' AS Clienteddl,
'' AS Tiendaddl,
'' AS Almacenddl
FROM Almacen A INNER JOIN AlmacenPorTienda AT   
ON A.IdAlmacen = AT.IdAlmacen  
WHERE IdTienda = @IdTienda  
END
GO
/****** Object:  StoredProcedure [dbo].[usp_GetNroNotaVentaTienda]     ******/
CREATE PROC usp_GetNroNotaVentaTienda     
@IdTienda INT,              
@TipoComprobante VARCHAR(200)              
AS               
BEGIN              
 DECLARE @NroDocumento VARCHAR(100),@NumeroSerie INT,@NumeroSerie_ VARCHAR(4),@NumeroFin INT,@Correlativo INT ,@Correlativo_ VARCHAR(6)             
 SET @NumeroSerie_ = ''  
 SET @Correlativo_ = ''  
 SELECT @NumeroSerie = NumeroSerie,              
 @NumeroFin = NumeroFin,              
 @Correlativo = Correlativo             
 FROM ComprobanteVenta               
 WHERE IdTienda = @IdTienda AND               
 TipoComprobante = @TipoComprobante              
 IF @Correlativo <= @NumeroFin              
  BEGIN              
   IF @NumeroSerie < 10000             
    SET @NumeroSerie_ = '0' + @NumeroSerie     
   IF @NumeroSerie < 1000              
    SET @NumeroSerie_ = '0' + @NumeroSerie_           
   IF @NumeroSerie < 100              
    SET @NumeroSerie_ = '0' + @NumeroSerie_              
   IF @NumeroSerie < 10              
    SET @NumeroSerie_ = '0' + @NumeroSerie_             
   IF @Correlativo < 1000000              
    SET @Correlativo_ = '0' + @Correlativo     
   IF @Correlativo < 100000              
    SET @Correlativo_ = '0' + @Correlativo_              
   IF @Correlativo < 10000              
    SET @Correlativo_ = '0' + @Correlativo_              
   IF @Correlativo < 1000              
    SET @Correlativo_ = '0' + @Correlativo_    
   IF @Correlativo < 100              
    SET @Correlativo_ = '0' + @Correlativo_      
   IF @Correlativo < 10              
    SET @Correlativo_ = '0' + @Correlativo_              
   SET @NroDocumento = @NumeroSerie_ + '-' + @Correlativo_                  
  END              
 ELSE              
  SET @NroDocumento = ''             
 --DEVUELVE EL NUMERO DE DOCUMENTO             
 SELECT '0' AS IdComprobante,            
 '0' AS IdTienda,            
 '' AS NombreTienda,             
 @NroDocumento as NroNotaVenta, 
 '' AS NroBoleta,  
 '' AS NroFactura,            
 '' AS TipoComprobante,            
 '0' AS NumeroSerie,  
 '' AS Serie,           
 '0' AS NumeroInicio,            
 '0' AS NumeroFin,            
 '0' AS Correlativo,            
 '' AS Tiendaddl,            
 '' AS Clienteddl,          
 '' AS ComprobanteVentaddl          
END 
GO
CREATE PROCEDURE usp_UpdUsuarioImagen                        
@NombreUsuario varchar(200),                    
@NroDocumento varchar(20),     
@CorreoElectronico varchar(300),  
@NumeroCelular1 varchar(20),  
@NumeroCelular2 varchar(20), 
@FechaNacimiento datetime,        
@Imagen IMAGE            
AS                  
BEGIN                   
 UPDATE Usuario                   
 SET                   
 NombreUsuario = @NombreUsuario,                
 NroDocumento = @NroDocumento,                    
 CorreoElectronico = @CorreoElectronico,      
 NumeroCelular1 = @NumeroCelular1,   
 NumeroCelular2 = @NumeroCelular2,  
 FechaNacimiento = CONVERT(DATE,@FechaNacimiento),  
 Imagen = @Imagen         
 WHERE                  
 NroDocumento = @NroDocumento                 
END
GO
CREATE PROC usp_GetNroBoleta            
@IdTienda INT,            
@TipoComprobante VARCHAR(200)            
AS             
BEGIN            
 DECLARE @NroDocumento VARCHAR(100),@Serie CHAR(4),@NumeroFin INT,@Correlativo INT ,@Correlativo_ VARCHAR(8)             
 SET @Correlativo_ = ''  
 SELECT @Serie = Serie,              
 @NumeroFin = NumeroFin,              
 @Correlativo = Correlativo             
 FROM ComprobanteVenta               
 WHERE IdTienda = @IdTienda AND               
 TipoComprobante = @TipoComprobante              
 IF @Correlativo <= @NumeroFin            
  BEGIN                                  
   IF @Correlativo < 100000000              
    SET @Correlativo_ = '0' + @Correlativo 
   IF @Correlativo < 10000000              
    SET @Correlativo_ = '0' + @Correlativo_ 
   IF @Correlativo < 1000000              
    SET @Correlativo_ = '0' + @Correlativo_ 
   IF @Correlativo < 100000              
    SET @Correlativo_ = '0' + @Correlativo_              
   IF @Correlativo < 10000              
    SET @Correlativo_ = '0' + @Correlativo_              
   IF @Correlativo < 1000              
    SET @Correlativo_ = '0' + @Correlativo_    
   IF @Correlativo < 100              
    SET @Correlativo_ = '0' + @Correlativo_      
   IF @Correlativo < 10              
    SET @Correlativo_ = '0' + @Correlativo_              
   SET @NroDocumento = @Serie + '-' + @Correlativo_               
   --ACTUALIZA AL SIGUIENTE CORRELATIVO            
   UPDATE ComprobanteVenta SET Correlativo = CONVERT(INT,@Correlativo) + 1            
   WHERE IdTienda = @IdTienda AND TipoComprobante = @TipoComprobante            
  END            
 ELSE            
  SET @NroDocumento = ''           
 --DEVUELVE EL NUMERO DE DOCUMENTO           
 SELECT '0' AS IdComprobante,          
 '0' AS IdTienda,          
 '' AS NombreTienda, 
 '' AS NroNotaVenta,          
 @NroDocumento AS NroBoleta,  
 '' AS NroFactura,          
 '' AS TipoComprobante,          
 '0' AS NumeroSerie, 
 '' AS Serie,         
 '0' AS NumeroInicio,          
 '0' AS NumeroFin,          
 '0' AS Correlativo,          
 '' AS Tiendaddl,          
 '' AS Clienteddl,        
 '' AS ComprobanteVentaddl        
END
GO
CREATE PROC usp_GetNroFactura            
@IdTienda INT,            
@TipoComprobante VARCHAR(200)            
AS             
BEGIN            
 DECLARE @NroDocumento VARCHAR(100),@Serie CHAR(4),@NumeroFin INT,@Correlativo INT ,@Correlativo_ VARCHAR(8)             
 SET @Correlativo_ = ''  
 SELECT @Serie = Serie,              
 @NumeroFin = NumeroFin,              
 @Correlativo = Correlativo             
 FROM ComprobanteVenta               
 WHERE IdTienda = @IdTienda AND               
 TipoComprobante = @TipoComprobante              
 IF @Correlativo <= @NumeroFin            
  BEGIN                                  
   IF @Correlativo < 100000000              
    SET @Correlativo_ = '0' + @Correlativo 
   IF @Correlativo < 10000000              
    SET @Correlativo_ = '0' + @Correlativo_ 
   IF @Correlativo < 1000000              
    SET @Correlativo_ = '0' + @Correlativo_ 
   IF @Correlativo < 100000              
    SET @Correlativo_ = '0' + @Correlativo_              
   IF @Correlativo < 10000              
    SET @Correlativo_ = '0' + @Correlativo_              
   IF @Correlativo < 1000              
    SET @Correlativo_ = '0' + @Correlativo_    
   IF @Correlativo < 100              
    SET @Correlativo_ = '0' + @Correlativo_      
   IF @Correlativo < 10              
    SET @Correlativo_ = '0' + @Correlativo_              
   SET @NroDocumento = @Serie + '-' + @Correlativo_               
   --ACTUALIZA AL SIGUIENTE CORRELATIVO            
   UPDATE ComprobanteVenta SET Correlativo = CONVERT(INT,@Correlativo) + 1            
   WHERE IdTienda = @IdTienda AND TipoComprobante = @TipoComprobante            
  END            
 ELSE            
  SET @NroDocumento = ''           
 --DEVUELVE EL NUMERO DE DOCUMENTO           
 SELECT '0' AS IdComprobante,          
 '0' AS IdTienda,          
 '' AS NombreTienda, 
 '' AS NroNotaVenta, 
 '' AS NroBoleta,          
 @NroDocumento AS NroFactura,  
 '' AS TipoComprobante,          
 '0' AS NumeroSerie, 
 '' AS Serie,         
 '0' AS NumeroInicio,          
 '0' AS NumeroFin,          
 '0' AS Correlativo,          
 '' AS Tiendaddl,          
 '' AS Clienteddl,        
 '' AS ComprobanteVentaddl        
END
GO
CREATE PROC usp_GetNroBoletaTienda               
@IdTienda INT,                
@TipoComprobante VARCHAR(200)                
AS                 
BEGIN                
 DECLARE @NroDocumento VARCHAR(100),@Serie CHAR(4),@NumeroFin INT,@Correlativo INT ,@Correlativo_ VARCHAR(8)               
 SET @Correlativo_ = ''    
 SELECT @Serie = Serie,                
 @NumeroFin = NumeroFin,                
 @Correlativo = Correlativo               
 FROM ComprobanteVenta                 
 WHERE IdTienda = @IdTienda AND                 
 TipoComprobante = @TipoComprobante                
 IF @Correlativo <= @NumeroFin                
  BEGIN                            
   IF @Correlativo < 100000000               
    SET @Correlativo_ = '0' + @Correlativo  
   IF @Correlativo < 10000000                
    SET @Correlativo_ = '0' + @Correlativo_ 
   IF @Correlativo < 1000000                
    SET @Correlativo_ = '0' + @Correlativo_      
   IF @Correlativo < 100000                
    SET @Correlativo_ = '0' + @Correlativo_                
   IF @Correlativo < 10000                
    SET @Correlativo_ = '0' + @Correlativo_                
   IF @Correlativo < 1000                
    SET @Correlativo_ = '0' + @Correlativo_      
   IF @Correlativo < 100                
    SET @Correlativo_ = '0' + @Correlativo_        
   IF @Correlativo < 10                
    SET @Correlativo_ = '0' + @Correlativo_                
   SET @NroDocumento = @Serie + '-' + @Correlativo_                    
  END                
 ELSE                
  SET @NroDocumento = ''               
 --DEVUELVE EL NUMERO DE DOCUMENTO               
 SELECT '0' AS IdComprobante,              
 '0' AS IdTienda,              
 '' AS NombreTienda,               
 '' AS NroNotaVenta,   
 @NroDocumento AS NroBoleta,    
 '' AS NroFactura,              
 '' AS TipoComprobante,              
 '0' AS NumeroSerie,    
 '' AS Serie,             
 '0' AS NumeroInicio,              
 '0' AS NumeroFin,              
 '0' AS Correlativo,              
 '' AS Tiendaddl,              
 '' AS Clienteddl,            
 '' AS ComprobanteVentaddl            
END  
GO
CREATE PROC usp_GetNroFacturaTienda               
@IdTienda INT,                
@TipoComprobante VARCHAR(200)                
AS                 
BEGIN                
 DECLARE @NroDocumento VARCHAR(100),@Serie CHAR(4),@NumeroFin INT,@Correlativo INT ,@Correlativo_ VARCHAR(8)               
 SET @Correlativo_ = ''    
 SELECT @Serie = Serie,                
 @NumeroFin = NumeroFin,                
 @Correlativo = Correlativo               
 FROM ComprobanteVenta                 
 WHERE IdTienda = @IdTienda AND                 
 TipoComprobante = @TipoComprobante                
 IF @Correlativo <= @NumeroFin                
  BEGIN                            
   IF @Correlativo < 100000000               
    SET @Correlativo_ = '0' + @Correlativo  
   IF @Correlativo < 10000000                
    SET @Correlativo_ = '0' + @Correlativo_ 
   IF @Correlativo < 1000000                
    SET @Correlativo_ = '0' + @Correlativo_      
   IF @Correlativo < 100000                
    SET @Correlativo_ = '0' + @Correlativo_                
   IF @Correlativo < 10000                
    SET @Correlativo_ = '0' + @Correlativo_                
   IF @Correlativo < 1000                
    SET @Correlativo_ = '0' + @Correlativo_      
   IF @Correlativo < 100                
    SET @Correlativo_ = '0' + @Correlativo_        
   IF @Correlativo < 10                
    SET @Correlativo_ = '0' + @Correlativo_                
   SET @NroDocumento = @Serie + '-' + @Correlativo_                    
  END                
 ELSE                
  SET @NroDocumento = ''               
 --DEVUELVE EL NUMERO DE DOCUMENTO               
 SELECT '0' AS IdComprobante,              
 '0' AS IdTienda,              
 '' AS NombreTienda,               
 '' AS NroNotaVenta,   
 '' AS NroBoleta,    
 @NroDocumento AS NroFactura,              
 '' AS TipoComprobante,              
 '0' AS NumeroSerie,    
 '' AS Serie,             
 '0' AS NumeroInicio,              
 '0' AS NumeroFin,              
 '0' AS Correlativo,              
 '' AS Tiendaddl,              
 '' AS Clienteddl,            
 '' AS ComprobanteVentaddl            
END 