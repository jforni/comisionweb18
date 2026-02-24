import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getUsuarios, deleteUsuario } from '../helpers/apiUsuarios';
import { getCategorias, borrarCategoria } from '../helpers/apiCategoria';
import { getProductos, borrarProducto } from '../helpers/apiProductos';

export default function AdminPage() {

  const [usuarios, setUsuarios] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    const data = await getUsuarios();
    const usuariosObtenidos = data.usuarios;
    setUsuarios(usuariosObtenidos);
  }

  /* ELIMINAR USUARIO DE LA BD */
  const eliminarUsuario = async (id) => {
    const confirmacion = window.confirm("¿Estás seguro de eliminar este usuario?");
    if (!confirmacion) return;

    try {
      await deleteUsuario(id);
      setUsuarios(usuarios.filter(usuario => usuario._id !== id));

      alert("Usuario eliminado con éxito!")
    } catch (error) {
      console.error("Error al eliminar: ", error);
      alert("No se pudo eliminar el usuario. Inténtelo de nuevo más tarde.");
    }
  }

  /* CATEGORÍAS */ 
  useEffect(() => {
    obtenerCategorias();
  }, []);

  const obtenerCategorias = async () => {
    const data = await getCategorias();
    const categoriasObtenidas = data.categorias    
    setCategorias(categoriasObtenidas)
  }

  /* ELIMINAR CATEGORIA DE LA BD */
  const eliminarCategoria = async (id) => {
    const confirmacion = window.confirm("¿Estás seguro de eliminar este categoría?");
    if (!confirmacion) return;

    try {
      await borrarCategoria(id);
      setCategorias(categorias.filter(categoria => categoria._id !== id));

      alert("Categoría eliminada con éxito!")
    } catch (error) {
      console.error("Error al eliminar: ", error);
      alert("No se pudo eliminar la categoría. Inténtelo de nuevo más tarde.");
    }
  }
  
  /* PRODUCTOS */ 
  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const data = await getProductos();
    const productosObtenidos = data.productos    
    setProductos(productosObtenidos)
  }

  /* ELIMINAR PRODUCTO DE LA BD */
  const eliminarProducto = async (id) => {
    const confirmacion = window.confirm("¿Estás seguro de eliminar este producto?");
    if (!confirmacion) return;

    try {
      await borrarProducto(id);
      setProductos(productos.filter(producto => producto._id !== id));

      alert("Producto eliminado con éxito!")
    } catch (error) {
      console.error("Error al eliminar: ", error);
      alert("No se pudo eliminar el producto. Inténtelo de nuevo más tarde.");
    }
  }

  return (
    <div>
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Fecha de Registro</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => {
              return (
                <tr key={usuario._id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.correo}</td>
                  <td>{usuario.estado === true && <p>Habilitado</p>}</td>
                  <td>{usuario.fechaRegistro}</td>
                  <td>{usuario.rol}</td>
                  <td>
                    {usuario.rol !== "Admin" && <Button variant="danger" onClick={() => { eliminarUsuario(usuario._id) }}>Eliminar</Button>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </section>
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Fecha de Registro</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map(categoria => {
              return (
                <tr key={categoria._id}>
                  <td>{categoria.nombre}</td>
                  <td>{categoria.descripcion}</td>
                  <td>{categoria.estado === true && <p>Habilitada</p>}</td>
                  {console.log(categoria.estado)}
                  <td>{categoria.fechaRegistro}</td>
                  <td>
                    <Button variant="danger" onClick={() => { eliminarCategoria(categoria._id) }}>Eliminar</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </section>
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Stock</th>
              <th>Fecha de Registro</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => {
              return (
                <tr key={producto._id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.estado === true && <p>Habilitada</p>}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.img}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.fechaRegistro}</td>
                  <td>
                    <Button variant="danger" onClick={() => { eliminarProducto(producto._id) }}>Eliminar</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </section>
    </div>
  )
}
