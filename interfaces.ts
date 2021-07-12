// É melhor usar interface do que tipos avançados(type alias)
interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return {
        nome: 'Joao',
        email: 'chocolate@gmail.com'
    }
}

function setUser(usuario: Usuario) {
    usuario.nome = 'Paulo';
    usuario.email = 'melancia@gmai.com'
}