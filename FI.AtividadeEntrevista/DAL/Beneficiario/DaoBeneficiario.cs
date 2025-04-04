using FI.AtividadeEntrevista.DML;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;

namespace FI.AtividadeEntrevista.DAL
{
    /// <summary>
    /// Classe de acesso a dados de Beneficiário
    /// </summary>
    internal class DaoBeneficiario : AcessoDados
    {
        internal long Incluir(Beneficiario beneficiario)
        {
            List<SqlParameter> parametros = new List<SqlParameter>
            {
                new SqlParameter("CPF", beneficiario.CPF),
                new SqlParameter("Nome", beneficiario.Nome),
                new SqlParameter("IdCliente", beneficiario.IdCliente)
            };

            DataSet ds = base.Consultar("FI_SP_IncBeneficiario", parametros);
            long ret = 0;
            if (ds.Tables[0].Rows.Count > 0)
                long.TryParse(ds.Tables[0].Rows[0][0].ToString(), out ret);
            return ret;
        }

        internal void Alterar(Beneficiario beneficiario)
        {
            List<SqlParameter> parametros = new List<SqlParameter>
            {
                new SqlParameter("Id", beneficiario.Id),
                new SqlParameter("CPF", beneficiario.CPF),
                new SqlParameter("Nome", beneficiario.Nome),
                new SqlParameter("IdCliente", beneficiario.IdCliente)
            };

            base.Executar("FI_SP_AltBeneficiario", parametros);
        }

        internal void Excluir(long id)
        {
            List<SqlParameter> parametros = new List<SqlParameter>
            {
                new SqlParameter("Id", id)
            };

            base.Executar("FI_SP_DelBeneficiario", parametros);
        }

        internal List<Beneficiario> Listar(long idCliente)
        {
            List<SqlParameter> parametros = new List<SqlParameter>
            {
                new SqlParameter("IdCliente", idCliente)
            };

            DataSet ds = base.Consultar("FI_SP_ConsBeneficiariosPorCliente", parametros);
            List<Beneficiario> lista = new List<Beneficiario>();

            if (ds != null && ds.Tables != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow row in ds.Tables[0].Rows)
                {
                    Beneficiario b = new Beneficiario();
                    b.Id = row.Field<long>("Id");
                    b.CPF = row.Field<string>("CPF");
                    b.Nome = row.Field<string>("Nome");
                    b.IdCliente = row.Field<long>("IdCliente");
                    lista.Add(b);
                }
            }

            return lista;
        }
    }
}