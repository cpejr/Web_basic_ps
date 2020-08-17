function changeImage(newSrc){ //declaramos a função e pegamos o "this" enviado como parâmeto
    let updatedSrc = newSrc.src; //o this é um objeto, portanto, ele tem dentro dele todas as intâncias que a sua tag-mãe
    let largeImg = document.getElementById('lrgImg');//passamos a id em forma de string de algum dos elementos da página para que possamos operar aquele elemento
    let smallImg = document.getElementById(`${newSrc.id}`); // usamos o formato de template string `${}` para converter uma variável em uma string
    smallImg.src = largeImg.src;
    largeImg.src = updatedSrc;
}