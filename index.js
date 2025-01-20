let fotoPerfil = document.getElementById("foto-perfil")

fotoPerfil.addEventListener("click", aumentar)
fotoPerfil.addEventListener("mouseenter", entrar)
fotoPerfil.addEventListener("mouseout", sair)

function aumentar() {
    fotoPerfil.classList.toggle("aumentar-diminuir")
    fotoPerfil.style.transition = "1.5s ease-in-out"
}

function entrar() {
    fotoPerfil.classList.add("header_foto-perfil-hover")
    fotoPerfil.style.transition = "1s ease-in-out"
    fotoPerfil.style.boxShadow = "0 0 10px #fff"
    fotoPerfil.style.cursor = "pointer"
}

function sair() {
    fotoPerfil.classList.remove("header_foto-perfil-hover")
    fotoPerfil.style.transition = "1s ease-in-out"
    fotoPerfil.style.boxShadow = "0 0 0 #000"
}

