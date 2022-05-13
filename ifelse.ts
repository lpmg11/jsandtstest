function validar2(user:string,pass:string,correo:string){
    if (user !== 'admin'){
        return false;
    }
    if (pass !== '123'){
        return false;
    }
    if (correo !== 'lpmg@gmail.com'){
        return false;
    }
    return true;
}

validar2('admin','123','lpmg@gmail.com');
validar2('administrador','admin','lpmg@gmail.com')
