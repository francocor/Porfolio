import Typewriter from 'typewriter-effect';

function Type() {
  const isTranslated = document.documentElement.lang !== "es"; // Detecta si el idioma es diferente de español

  return (
    <div>
      {isTranslated ? (
        <p translate="no">Desarrollador Full Stack | Diseñador UX/UI</p>
      ) : (
        <Typewriter 
          options={{
            strings: [
              "Desarrollador Full Stack",
              "Diseñador UX/UI",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50
          }}
        />
      )}
    </div>
  );
}

export default Type;
