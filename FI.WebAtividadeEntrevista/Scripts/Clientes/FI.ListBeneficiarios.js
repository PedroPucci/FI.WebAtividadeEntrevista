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
            console.error("Erro ao carregar benefici�rios:", err);
            alert("Erro ao carregar benefici�rios");
        }
    });
}

function abrirModalBeneficiarios() {
    const idCliente = $("#Id").val();
    if (!idCliente || idCliente === "0") {
        alert("Voc� precisa salvar o cliente antes de adicionar benefici�rios.");
        return;
    }

    carregarBeneficiarios(idCliente);
}

// torna a fun��o acess�vel globalmente
window.abrirModalBeneficiarios = abrirModalBeneficiarios;
