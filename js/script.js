let key = document.getElementsByClassName("keyboard")
let circle = document.querySelector('.circle')

document.body.addEventListener("keydown", function (e) {
   let r = Math.floor(Math.random() * 255)
   let g = Math.floor(Math.random() * 255)
   let b = Math.floor(Math.random() * 255)
   let k = e.key
   if (k == "`" || k == "~")
      key[0].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "1" || k == "!")
      key[1].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "2" || k == "@")
      key[2].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "3" || k == "#")
      key[3].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "4" || k == "$")
      key[4].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "5" || k == "%")
      key[5].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "6" || k == "^")
      key[6].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "7" || k == "&")
      key[7].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "8" || k == "*")
      key[8].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "9" || k == "(")
      key[9].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "0" || k == ")")
      key[10].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "-" || k == "_")
      key[11].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "=" || k == "+")
      key[12].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "Backspace")
      key[13].style.backgroundColor = `rgb(${r} ${g} ${b})`


   else if (k == "Tab") {
      key[14].style.backgroundColor = `rgb(${r} ${g} ${b})`
      e.preventDefault();
   }
   else if (k == "q" || k == "Q")
      key[15].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "w" || k == "W")
      key[16].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "e" || k == "E")
      key[17].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "r" || k == "R")
      key[18].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "t" || k == "T")
      key[19].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "y" || k == "Y")
      key[20].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "u" || k == "U")
      key[21].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "i" || k == "I")
      key[22].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "o" || k == "O")
      key[23].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "p" || k == "P")
      key[24].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "[" || k == "{")
      key[25].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "]" || k == "}")
      key[26].style.backgroundColor = `rgb(${r} ${g} ${b})`



   else if (k == "CapsLock")
      key[27].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "a" || k == "A")
      key[28].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "s" || k == "S")
      key[29].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "d" || k == "D")
      key[30].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "f" || k == "F")
      key[31].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "g" || k == "G")
      key[32].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "h" || k == "H")
      key[33].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "j" || k == "J")
      key[34].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "k" || k == "K")
      key[35].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "l" || k == "L")
      key[36].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == ";" || k == ":")
      key[37].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "'" || k == '"')
      key[38].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "\\" || k == '|')
      key[39].style.backgroundColor = `rgb(${r} ${g} ${b})`



   else if (e.code == "ShiftLeft")
      key[40].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "z" || k == 'Z')
      key[41].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "x" || k == 'X')
      key[42].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "c" || k == 'C')
      key[43].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "v" || k == 'V')
      key[44].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "b" || k == 'B')
      key[45].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "n" || k == 'N')
      key[46].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "m" || k == 'M')
      key[47].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "," || k == '<')
      key[48].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "." || k == '>')
      key[49].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (k == "/" || k == '?')
      key[50].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (e.code == "ShiftRight")
      key[51].style.backgroundColor = `rgb(${r} ${g} ${b})`

   else if (e.code == "ControlLeft")
      key[52].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (e.code == "MetaLeft")
      key[53].style.backgroundColor = `rgb(${r} ${g} ${b})`;
   else if (e.code == "AltLeft") {
      key[54].style.backgroundColor = `rgb(${r} ${g} ${b})`
      e.preventDefault();
   }
   else if (e.code == "Space")
      key[55].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (e.code == "AltRight") {
      e.preventDefault();
      key[56].style.backgroundColor = `rgb(${r} ${g} ${b})`
   }
   else if (e.code == "MetaRight")
      key[57].style.backgroundColor = `rgb(${r} ${g} ${b})`
   else if (e.code == "ControlRight")
      key[58].style.backgroundColor = `rgb(${r} ${g} ${b})`


})

document.body.addEventListener("keyup", function (e) {
   let k = e.key
   if (k == "`" || k == "~")
      key[0].style.backgroundColor = "black"
   else if (k == "1" || k == "!")
      key[1].style.backgroundColor = `black`
   else if (k == "2" || k == "@")
      key[2].style.backgroundColor = `black`
   else if (k == "3" || k == "#")
      key[3].style.backgroundColor = `black`
   else if (k == "4" || k == "$")
      key[4].style.backgroundColor = `black`
   else if (k == "5" || k == "%")
      key[5].style.backgroundColor = `black`
   else if (k == "6" || k == "^")
      key[6].style.backgroundColor = `black`
   else if (k == "7" || k == "&")
      key[7].style.backgroundColor = `black`
   else if (k == "8" || k == "*")
      key[8].style.backgroundColor = `black`
   else if (k == "9" || k == "(")
      key[9].style.backgroundColor = `black`
   else if (k == "0" || k == ")")
      key[10].style.backgroundColor = `black`
   else if (k == "-" || k == "_")
      key[11].style.backgroundColor = `black`
   else if (k == "=" || k == "+")
      key[12].style.backgroundColor = `black`
   else if (k == "Backspace")
      key[13].style.backgroundColor = `black`


   else if (k == "Tab")
      key[14].style.backgroundColor = `black`
   else if (k == "q" || k == "Q")
      key[15].style.backgroundColor = `black`
   else if (k == "w" || k == "W")
      key[16].style.backgroundColor = `black`
   else if (k == "e" || k == "E")
      key[17].style.backgroundColor = `black`
   else if (k == "r" || k == "R")
      key[18].style.backgroundColor = `black`
   else if (k == "t" || k == "T")
      key[19].style.backgroundColor = `black`
   else if (k == "y" || k == "Y")
      key[20].style.backgroundColor = `black`
   else if (k == "u" || k == "U")
      key[21].style.backgroundColor = `black`
   else if (k == "i" || k == "I")
      key[22].style.backgroundColor = `black`
   else if (k == "o" || k == "O")
      key[23].style.backgroundColor = `black`
   else if (k == "p" || k == "P")
      key[24].style.backgroundColor = `black`
   else if (k == "[" || k == "{")
      key[25].style.backgroundColor = `black`
   else if (k == "]" || k == "}")
      key[26].style.backgroundColor = `black`


   else if (k == "CapsLock")
      key[27].style.backgroundColor = `black`
   else if (k == "a" || k == "A")
      key[28].style.backgroundColor = `black`
   else if (k == "s" || k == "S")
      key[29].style.backgroundColor = `black`
   else if (k == "d" || k == "D")
      key[30].style.backgroundColor = `black`
   else if (k == "f" || k == "F")
      key[31].style.backgroundColor = `black`
   else if (k == "g" || k == "G")
      key[32].style.backgroundColor = `black`
   else if (k == "h" || k == "H")
      key[33].style.backgroundColor = `black`
   else if (k == "j" || k == "J")
      key[34].style.backgroundColor = `black`
   else if (k == "k" || k == "K")
      key[35].style.backgroundColor = `black`
   else if (k == "l" || k == "L")
      key[36].style.backgroundColor = `black`
   else if (k == ";" || k == ":")
      key[37].style.backgroundColor = `black`
   else if (k == "'" || k == '"')
      key[38].style.backgroundColor = `black`
   else if (k == "\\" || k == '|')
      key[39].style.backgroundColor = `black`


   else if (e.code == "ShiftLeft")
      key[40].style.backgroundColor = `black`
   else if (k == "z" || k == 'Z')
      key[41].style.backgroundColor = `black`
   else if (k == "x" || k == 'X')
      key[42].style.backgroundColor = `black`
   else if (k == "c" || k == 'C')
      key[43].style.backgroundColor = `black`
   else if (k == "v" || k == 'V')
      key[44].style.backgroundColor = `black`
   else if (k == "b" || k == 'B')
      key[45].style.backgroundColor = `black`
   else if (k == "n" || k == 'N')
      key[46].style.backgroundColor = `black`
   else if (k == "m" || k == 'M')
      key[47].style.backgroundColor = `black`
   else if (k == "," || k == '<')
      key[48].style.backgroundColor = `black`
   else if (k == "." || k == '>')
      key[49].style.backgroundColor = `black`
   else if (k == "/" || k == '?')
      key[50].style.backgroundColor = `black`
   else if (e.code == "ShiftRight")
      key[51].style.backgroundColor = `black`


   else if (e.code == "ControlLeft")
      key[52].style.backgroundColor = `black`
   else if (e.code == "MetaLeft")
      key[53].style.backgroundColor = `black`
   else if (e.code == "AltLeft")
      key[54].style.backgroundColor = `black`
   else if (e.code == "Space")
      key[55].style.backgroundColor = `black`
   else if (e.code == "AltRight")
      key[56].style.backgroundColor = `black`
   else if (e.code == "MetaRight")
      key[57].style.backgroundColor = `black`
   else if (e.code == "ControlRight")
      key[58].style.backgroundColor = `black`


   if (e.getModifierState("CapsLock")) {
      circle.style.backgroundColor = "yellow"
   }
   else
      circle.style.backgroundColor = "white"
})



