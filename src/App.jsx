import Saludo from "./components/saludo";
import ContactoCard from "./components/ContactoCard";
import "./App.css";

function App() {

  const contactos = [
    { nombre: "Gustavo Bolaños", telefono: "300 123 4567",
      correo: "gustavo@sena.edu.co", etiqueta: "Instructor" },
    { nombre: "Cristian Acevedo", telefono: "300 765 4321",
      correo: "cristian@sena.edu.co", etiqueta: "Instructor" },
    { nombre: "Cristian David", telefono: "319 573 9184",
      correo: "cristianDavid@gmail.com", etiqueta: "Compañero" },
    { nombre: "Maria Angel", telefono: "304 467 0422",
      correo: "MariaMontes@gmail.com", etiqueta: "Familiar" },
      
  ];

  return (
    <div>
    <header className="app-header">
      <h1>Agenda ADSO</h1>
      <p className="app-subtitle">Contactos Guardados</p>
      <Saludo />
    </header>

        <div className="contactos-grid">
        {contactos.map((c, i) => (
        <ContactoCard
        key={i}
        nombre={c.nombre}
        telefono={c.telefono}
        correo={c.correo}
        etiqueta={c.etiqueta}
      />
  ))}
</div>

      {/* <ContactoCard
      nombre="Juan"
      apellido="Perez"
      telefono="123456789"
      etiqueta="Amigo"
      /> */}
    </div>
  );
}

export default App;