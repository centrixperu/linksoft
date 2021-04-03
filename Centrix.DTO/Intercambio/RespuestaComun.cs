using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Centrix.DTO.Intercambio
{
    public abstract class RespuestaComun
    {
        public bool Exito { get; set; }

        public string MensajeError { get; set; }

        public string Pila { get; set; }
    }
}
