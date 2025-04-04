function incluirBeneficiario() {
    console.log("Função incluirBeneficiario executada");

    const cpf = $("#beneficiarioCPF").val();
    const nome = $("#beneficiarioNome").val();
    const idCliente = $("#Id").val();

    if (!cpf || !nome) {
        alert("Preencha CPF e Nome");
        return;
    }

    $.ajax({
        url: "/Beneficiario/Adicionar",
        method: "POST",
        data: {
            CPF: cpf,
            Nome: nome,
            IdCliente: idCliente
        },
        success: function (response) {
            console.log("Resposta do servidor:", response);

            const linha = `
                <tr>
                    <td>${cpf}</td>
                    <td>${nome}</td>
                    <td class="text-center">
                        <button class="btn btn-primary btn-sm mr-2">Alterar</button>
                        <button class="btn btn-danger btn-sm">Excluir</button>
                    </td>
                </tr>`;
            $("#listaBeneficiarios").append(linha);
            $("#beneficiarioCPF").val("");
            $("#beneficiarioNome").val("");
        },
        error: function (xhr) {
            console.error("Erro:", xhr);
            alert("Erro: " + xhr.responseText);
        }
    });
    window.incluirBeneficiario = incluirBeneficiario;

}
