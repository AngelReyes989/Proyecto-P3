// Animación simple al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#6c2ed1';
  } else {
    header.style.backgroundColor = '#7B3FE4';
  }
});

// Manejo del registro de negocios
document.addEventListener('DOMContentLoaded', () => {
  
  // Abrir modal de registro de negocio
  document.getElementById('registrarNegocioBtn').addEventListener('click', () => {
    document.getElementById('negocioModal').style.display = 'block';
  });

  // Cerrar modal
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('negocioModal').style.display = 'none';
  });

  // Cerrar modal al hacer clic fuera
  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('negocioModal')) {
      document.getElementById('negocioModal').style.display = 'none';
    }
  });

  // Enviar formulario de negocio
  document.getElementById('negocioForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const datosNegocio = {
      nombre: document.getElementById('nombreNegocio').value,
      descripcion: document.getElementById('descripcionNegocio').value,
      categoria: document.getElementById('categoriaNegocio').value,
      direccion: document.getElementById('direccionNegocio').value,
      telefono: document.getElementById('telefonoNegocio').value
    };

    registrarNegocio(datosNegocio)
      .then(() => {
        alert('¡Negocio registrado exitosamente!');
        document.getElementById('negocioModal').style.display = 'none';
        document.getElementById('negocioForm').reset();
      })
      .catch((error) => {
        alert('Error al registrar negocio: ' + error.message);
      });
  });

  // Abrir modal de registro de usuario
  document.getElementById('registrarUsuarioBtn').addEventListener('click', () => {
    document.getElementById('usuarioModal').style.display = 'block';
  });

  // Cerrar modal de usuario
  document.querySelector('.close-usuario').addEventListener('click', () => {
    document.getElementById('usuarioModal').style.display = 'none';
  });

  // Cerrar modal de usuario al hacer clic fuera
  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('usuarioModal')) {
      document.getElementById('usuarioModal').style.display = 'none';
    }
  });

  // Enviar formulario de usuario
  document.getElementById('usuarioForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const datosUsuario = {
      nombre: document.getElementById('nombreUsuario').value,
      email: document.getElementById('emailUsuario').value,
      telefono: document.getElementById('telefonoUsuario').value,
      tipo: document.getElementById('tipoUsuario').value
    };

    registrarUsuario(datosUsuario)
      .then(() => {
        alert('¡Usuario registrado exitosamente!');
        document.getElementById('usuarioModal').style.display = 'none';
        document.getElementById('usuarioForm').reset();
      })
      .catch((error) => {
        alert('Error al registrar usuario: ' + error.message);
      });
  });

});