function excluirBeneficiario(id) {
    if (!confirm("Tem certeza que deseja excluir este benefici�rio?")) return;

    $.ajax({
        url: '/Beneficiario/Excluir',
        method: 'POST',
        data: { id: id },
        success: function () {
            // Remove a linha da tabela direto do DOM
            $(`tr[data-id="${id}"]`).remove();
            ModalDialog("Sucesso", "Benefici�rio exclu�do com sucesso.");
        },
        error: function (xhr) {
            console.error("Erro ao excluir:", xhr);
            alert("Erro ao excluir benefici�rio: " + xhr.responseText);
        }
    });
}
