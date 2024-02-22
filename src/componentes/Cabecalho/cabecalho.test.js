import { render, screen } from "@testing-library/react"
import Cabecalho from "."

test('Deve renderizar o nome do usuário logado', () => {
    const { getByText } = render(<Cabecalho />)
    expect(getByText("Joana Fonseca Gomes")).toBeInTheDocument()
})