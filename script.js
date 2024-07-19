function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = applySubstitution(inputText, "e", "enter");
    encryptedText = applySubstitution(encryptedText, "i", "imes");
    encryptedText = applySubstitution(encryptedText, "a", "ai");
    encryptedText = applySubstitution(encryptedText, "o", "ober");
    encryptedText = applySubstitution(encryptedText, "u", "ufat");
    document.getElementById("outputText").value = encryptedText;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var decryptedText = reverseSubstitution(inputText, "enter", "e");
    decryptedText = reverseSubstitution(decryptedText, "imes", "i");
    decryptedText = reverseSubstitution(decryptedText, "ai", "a");
    decryptedText = reverseSubstitution(decryptedText, "ober", "o");
    decryptedText = reverseSubstitution(decryptedText, "ufat", "u");
    document.getElementById("outputText").value = decryptedText;
}

function applySubstitution(input, target, replacement) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (char === target) {
            output += replacement;
        } else {
            output += char;
        }
    }
    return output;
}

function reverseSubstitution(input, target, original) {
    var output = "";
    var i = 0;
    while (i < input.length) {
        if (input.substring(i, i + target.length) === target) {
            output += original;
            i += target.length;
        } else {
            output += input[i];
            i++;
        }
    }
    return output;
}


function copyText() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Copiado");
}
