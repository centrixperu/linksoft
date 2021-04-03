using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Centrix.Common
{
    public class EnumBandejaSalida
    {
        public enum Correo
        {
            En_proceso,
            Enviado,
            Rechazado,
            Reenviado
        }
        public enum FTP
        {
            En_proceso,
            Enviado,
            Rechazado,
            Reenviado
        }
        public enum Cierre
        {
            En_proceso,
            Abierto,
            Cerrado
        }
    }
}
