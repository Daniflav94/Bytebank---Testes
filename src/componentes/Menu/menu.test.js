import { render, screen } from "@testing-library/react"
import Menu from "."

test('Deve renderizar um link para a página inicial', () => {
    const { getByText } = render(<Menu />)
    expect(getByText('Inicial')).toBeInTheDocument()
})

test('Deve renderizar uma lista de links', () => {
    const { getAllByRole } = render(<Menu />)
    expect(getAllByRole('link')).toHaveLength(4) //deve ter 4 itens
})

//verificar se um componente está ou não em um arquivo
test('Não deve renderizar o link para Extrato', () => {
    const { queryByText } = render(<Menu />)
    expect(queryByText('Extrato')).not.toBeInTheDocument()
})

//verificar se os links estão com a classe CSS correta
test('Deve renderizar uma lista de links com a classe link', () => {
    render(<Menu />)
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot()
})