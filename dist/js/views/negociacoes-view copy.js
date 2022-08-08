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
                <th>${new Intl.DateTimeFormat().format(negociacao.data)}</th>
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
        this.elemento.innerHTML = template;
    }
}
