import Typewriter from 'typewriter-effect';

function Type () {
  return (
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
  )
}

export default Type