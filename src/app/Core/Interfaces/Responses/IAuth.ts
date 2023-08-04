export interface IAuth {
    isAuthenticated: boolean
    jwt: string
    refreshToken: string
    expDate: string
    user: User
}

export interface User {
    userId: string
    email: string
    nombre: any
    role: string
    idCentroCostos: number
    idEmpresa: number
    idCentroCostosPadre: number
    comision: any
    permisos: string
    saldo: number
}
