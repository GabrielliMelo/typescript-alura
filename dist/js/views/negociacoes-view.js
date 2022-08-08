export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Data</th>
                <th>Quantidade</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
          ${model
            .listar()
            .map((negociacao) => {
            return `
              <tr>
                <th>?</th>
                <th>${negociacao.quantidade}</th>
                <th>${negociacao.valor}</th>
              </tr>
            `;
        })
            .join("")}
           
        </tbody>
    </table>
    `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
