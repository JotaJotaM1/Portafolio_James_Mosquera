Uso de imágenes locales

- `public/images`: Coloca imágenes estáticas aquí. Con Vite se sirven desde la raíz, por ejemplo `/images/placeholder.svg`.
- `src/assets/images`: Coloca imágenes que quieras importar desde componentes con `import img from 'src/assets/images/mi-imagen.png'`.

Ejemplos de uso en React/TSX:

- Usar imagen en `public` directamente:
  <img src="/images/placeholder.svg" alt="placeholder" />

- Importar desde `src`:
  import logo from '../assets/images/logo.png';
  <img src={logo} alt="logo" />
