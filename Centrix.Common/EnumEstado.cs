using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Centrix.Common
{
    public class EnumEstado
    {
        public enum Documento
        {
            Anulado,
            Pendiente,
            PendienteAnulado,
            Procesado,
            ProcesadoAnulado
        }
    }
}
