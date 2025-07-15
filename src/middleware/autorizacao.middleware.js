class AutorizacaoMiddleware{
    static autorizar(papeisPermitidos){
        return (req, res, next) => {
            const usuario = req.usuario;

            if (!usuario || !papeisPermitidos.includes(usuario.papel)) {
                return res.status(403).json({ mensagem: 'Acesso negado. Usuário não autenticado.' });
            }

            next();

            }

        };
       
    }


module.exports = AutorizacaoMiddleware