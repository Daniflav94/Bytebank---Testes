import { render, screen } from "@testing-library/react"
import Extrato from './index';


//Esse componente recebe props, então precisa simular
test('Deve renderizar uma lista de transações', () => {
    const transacoes = [
      {
        transacao: 'Depósito',
        valor: 100,
      },
    ];
  
    render(<Extrato transacoes={transacoes} />);
    const lista = screen.getByRole('listitem'); //list = ul, listitem = li
    expect(lista).toBeInTheDocument();
  });