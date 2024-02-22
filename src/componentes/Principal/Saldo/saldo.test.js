import { render, screen } from '@testing-library/react';
import Saldo from './index';

describe('Componente Saldo', () => {
    test('Deve renderizar o saldo com valor monetário', () => {
        render(<Saldo saldo={1000}/>)

        const saldo = screen.getByTestId('saldo') //pega um elemento com id saldo
        expect(saldo).toHaveTextContent('R$ 1000') //verifica se esse elemento possui o texto informado
    })
})