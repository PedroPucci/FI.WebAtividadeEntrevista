function carregarBeneficiarios(idCliente) {
    $.ajax({
        url: '/Beneficiario/Listar',
        method: 'GET',
        data: { idCliente: idCliente },
        success: function (beneficiarios) {
            let html = "";

            beneficiarios.forEach(b => {
                html += `
                    <tr>
                        <td>${b.CPF}</td>
                        <td>${b.Nome}</td>
                        <td class="text-center">
                            <button class="btn btn-primary btn-sm mr-2" onclick="editarBeneficiario(${b.Id})">Alterar</button>
                            <button class="btn btn-danger btn-sm" onclick="excluirBeneficiario(${b.Id})">Excluir</button>
                        </td>
                    </tr>`;
            });

            $("#listaBeneficiarios").html(html);
        },
        error: function (err) {
            console.error("Erro ao carregar beneficiários:", err);
            alert("Erro ao carregar beneficiários");
        }
    });
}
