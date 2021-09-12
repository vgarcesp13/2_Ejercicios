export const Estudiantes= ["Daniel", "Jose", "Miguel", "Ana"]

export const Suma = (N1, N2) => {
    return N1+N2
}

export const ValorAnd = (N1, N2) => {
    return N1= N1 && N2
}

export const ValorOrd = (N1, N2) => {
    return N1= N1 || N2
}

export const Calculo = (N1, N2) => {
    return N1= N1*N2 == N2
}

const Resta = (N1, N2) => {
    if (N1 > N2)
        return N1-N2
    else
        return N2-N1
}

export default Resta