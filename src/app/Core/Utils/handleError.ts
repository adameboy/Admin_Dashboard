import { HttpErrorResponse } from "@angular/common/http";

export const handleError = (error: HttpErrorResponse) => {
    console.log(error);
    let errorMessage: string = "";
    if (error.status == 0)
        errorMessage = "SERVICIO NO DISPONIBLE"
    else if (error.status == 401)
        errorMessage = "SESIÓN CADUCADA"
    else if (error.status == 403)
        errorMessage = "PERMISOS INSUFICIENTES"
    else if (error.status == 400 && error.error?.detail)
        errorMessage = error.error.detail;
    else
        errorMessage = "POR FAVOR, INTENTE DE NUEVO"

    return errorMessage;
}
