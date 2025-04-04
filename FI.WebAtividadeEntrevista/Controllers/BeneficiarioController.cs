using FI.AtividadeEntrevista.BLL;
using FI.AtividadeEntrevista.DML;
using FI.WebAtividadeEntrevista.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace FI.WebAtividadeEntrevista.Controllers
{
    public class BeneficiarioController : Controller
    {
        [HttpPost]
        public JsonResult Adicionar(BeneficiarioModel model)
        {
            BoBeneficiario bo = new BoBeneficiario();

            //if (!ModelState.IsValid)
            //{
            //    Response.StatusCode = 400;
            //    return Json("Dados inválidos para o beneficiário");
            //}

            model.Id = bo.Incluir(new Beneficiario()
            {
                CPF = model.CPF,
                Nome = model.Nome,
                IdCliente = model.IdCliente
            });

            return Json("Beneficiário incluído com sucesso");
        }

        [HttpGet]
        public JsonResult Listar(long idCliente)
        {
            BoBeneficiario bo = new BoBeneficiario();
            List<Beneficiario> beneficiarios = bo.Listar(idCliente);
            return Json(beneficiarios, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Alterar(BeneficiarioModel model)
        {
            BoBeneficiario bo = new BoBeneficiario();

            if (!ModelState.IsValid)
            {
                Response.StatusCode = 400;
                return Json("Dados inválidos para o beneficiário");
            }

            bo.Alterar(new Beneficiario()
            {
                Id = model.Id,
                CPF = model.CPF,
                Nome = model.Nome,
                IdCliente = model.IdCliente
            });

            return Json("Beneficiário alterado com sucesso");
        }

        [HttpPost]
        public JsonResult Excluir(long id)
        {
            BoBeneficiario bo = new BoBeneficiario();
            bo.Excluir(id);
            return Json("Beneficiário excluído com sucesso");
        }
    }
}