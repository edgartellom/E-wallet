import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsuarios } from "../../redux/slices/userByIdSlice";

const Usuarios = () => {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios.usuarios);
  const status = useSelector((state) => state.usuarios.status);
  const error = useSelector((state) => state.usuarios.error);

  useEffect(() => {
    dispatch(fetchUsuarios());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Cargando usuarios...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Usuarios</h1>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <p>{usuario.nombre}</p>
          <p>{usuario.email}</p>
          <p>{usuario.admin ? "Administrador" : "Usuario"}</p>
        </div>
      ))}
    </div>
  );
};

export default Usuarios;
