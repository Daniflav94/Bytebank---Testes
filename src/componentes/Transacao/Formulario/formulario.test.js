import { render, screen } from '@testing-library/react';
import Formulario from './index';
import userEvent from '@testing-library/user-event';

describe('Deve renderizar um campo de input', () => {
  test('no documento', () => {
    const { getByPlaceholderText } = render(<Formulario />);
    expect(getByPlaceholderText('Digite um valor')).toBeInTheDocument();
  });

  test('com type number', () => {
    const { getByPlaceholderText } = render(<Formulario />);
    expect(getByPlaceholderText('Digite um valor')).toHaveAttribute(
      'type',
      'number',
    );
  });

  //simular eventos do usuário
  test('que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50'); //simula que usuário escreveu 50 no input
    expect(campoTexto).toHaveValue(50);
  });
});

test('Deve chamar um evento de submit ao clicar em realizar transação', () => {
  const realizarTransacao = jest.fn(); //dublar comportamento, mock da função

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});

test('Deve simular a seleção de uma opção de transação', () => {
  render(<Formulario />);

  const select = screen.getByRole('combobox');

  userEvent.selectOptions(select, ['Depósito']);
  expect(
    screen.getByRole('option', { name: 'Selecione um tipo de transação' })
      .selected,
  ).toBe(false);

  expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(true)
});
