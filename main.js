let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a586e7;">Soy Programadora Fronted en Tecnolochicas Pro')
  .pauseFor(200)
  .deleteChars(10)
  .start();
