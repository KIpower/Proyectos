﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RequestResponseModel
{
    public class TipoDocumentoResponse
    {
        public int Id { get; set; }

        [StringLength(30)]

        public string Descripcion { get; set; } = null!;
    }
}
