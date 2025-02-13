﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BDKopymixModel;

[Keyless]
public partial class VPersonaUbigeo
{
    [Column("id")]
    public int Id { get; set; }

    [Column("id_persona_tipo_documento")]
    public int? IdPersonaTipoDocumento { get; set; }

    [Column("id_persona_tipo")]
    public int IdPersonaTipo { get; set; }

    [Column("nro_documento")]
    [StringLength(20)]
    [Unicode(false)]
    public string? NroDocumento { get; set; }

    [Column("nombre")]
    [StringLength(50)]
    [Unicode(false)]
    public string? Nombre { get; set; }

    [Column("apellido_paterno")]
    [StringLength(50)]
    [Unicode(false)]
    public string? ApellidoPaterno { get; set; }

    [Column("apellido_materno")]
    [StringLength(50)]
    [Unicode(false)]
    public string? ApellidoMaterno { get; set; }

    [Column("nombre_completo")]
    [StringLength(180)]
    [Unicode(false)]
    public string? NombreCompleto { get; set; }

    [Column("tipo_sangre")]
    [StringLength(10)]
    public string? TipoSangre { get; set; }

    [Column("fecha_nacimiento", TypeName = "datetime")]
    public DateTime? FechaNacimiento { get; set; }

    [Column("id_genero")]
    public int IdGenero { get; set; }

    [Column("email")]
    [StringLength(150)]
    [Unicode(false)]
    public string? Email { get; set; }

    [Column("celular")]
    [StringLength(30)]
    [Unicode(false)]
    public string? Celular { get; set; }

    [Column("id_ubigeo")]
    public int? IdUbigeo { get; set; }

    [Column("direccion")]
    [StringLength(150)]
    [Unicode(false)]
    public string? Direccion { get; set; }

    [Column("id_estado")]
    public bool IdEstado { get; set; }

    [StringLength(8)]
    [Unicode(false)]
    public string Estado { get; set; } = null!;

    [Column("usuario_crea")]
    public int UsuarioCrea { get; set; }

    [Column("usuario_actualiza")]
    public int UsuarioActualiza { get; set; }

    [Column("fecha_crea", TypeName = "datetime")]
    public DateTime FechaCrea { get; set; }

    [Column("fecha_actualiza", TypeName = "datetime")]
    public DateTime FechaActualiza { get; set; }

    [StringLength(3)]
    [Unicode(false)]
    public string? PersonaTipoDocumento { get; set; }

    [StringLength(25)]
    [Unicode(false)]
    public string? PersonaTipo { get; set; }

    [StringLength(20)]
    [Unicode(false)]
    public string? Genero { get; set; }

    [StringLength(200)]
    [Unicode(false)]
    public string? Ubigeo { get; set; }
}
