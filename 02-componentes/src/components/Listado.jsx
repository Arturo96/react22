const Listado = () => {
  const lenguajes = ["Java", "Python", "C#", "PHP", "C", "Ruby", "NodeJS"];

  return (
    <ul>
      {lenguajes.map((lenguaje, index) => (
        <li key={lenguaje}>
          {index + 1} - {lenguaje}
        </li>
      ))}
    </ul>
  );
};

export default Listado;
