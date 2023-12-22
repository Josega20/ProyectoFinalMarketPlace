import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Perfil from "./views/Perfil";
import NuevaPublicacion from "./views/NuevaPublicacion";
import PublicacionDetalle from "./views/PublicacionDetalle";
import Favoritos from "./views/Favoritos";
import Publicaciones from "./views/Publicaciones";
import MyContext from "./Context/MyContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MisPublicaciones from "./views/MisPublicaciones";
import PrivateRoute from "./utils/PrivateRoute";
import EditarPublicacion from "./views/EditarPublicacion";

import ProtectedRoute from "./views/ProtectedRoutes";

function App() {
  const [idProducto, setIdProducto] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [productoDetalle, setProductoDetalle] = useState(null);
  const [esFavoritos, setEsFavoritos] = useState([]);

  return (
    <>
      <MyContext.Provider
        value={{
          usuario,
          setUsuario,
          productoDetalle,
          setProductoDetalle,
          esFavoritos,
          setEsFavoritos,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/favoritos" element={<favoritos />} />
              <Route path="/editarPublicacion/:id"element={<EditarPublicacion />}/>
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/publicaciones" element={<Publicaciones />} />
              <Route path="/nuevaPublicacion" element={<NuevaPublicacion />} />
              <Route path="/misPublicaciones" element={<MisPublicaciones />} />
              <Route path="/publicacionDetalle/:id" element={<PublicacionDetalle />} />
            </Route>
          </Routes>
        </BrowserRouter>
        S
      </MyContext.Provider>
    </>
  );
}

export default App;
