﻿using RequestResponseModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IBussnies
{
    public interface IEstadoPedidoBussnies : ICRUDBussnies<EstadoPedidoRequest, EstadoPedidoResponse>
    {
    }
}
