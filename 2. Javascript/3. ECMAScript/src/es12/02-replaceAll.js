const texto = 'Javascript es el mejor lenguaje. Javascript puede vivir en el navegador y en el servidor.'

texto.replace('Javascript', 'TypeScript'); 
// 'TypeScript es el mejor lenguaje. Javascript puede vivir en el navegador y en el servidor.'

texto.replaceAll('Javascript', 'TypeScript') 
// 'TypeScript es el mejor lenguaje. TypeScript puede vivir en el navegador y en el servidor.'

const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
  let emojized = ""
  emojized = text.replaceAll(':)', '😀')
  emojized = emojized.replaceAll(':clap', '👏🏻')

  return emojized
}

console.log(emojiReplace(inputText))