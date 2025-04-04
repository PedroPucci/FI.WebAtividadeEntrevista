function incluirBeneficiario() {
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
            alert("Erro: " + xhr.responseText);
        }
    });
    window.incluirBeneficiario = incluirBeneficiario;

}
