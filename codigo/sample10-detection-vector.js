function countFrames(stackTrace) {
    return !stackTrace && 0 || stackTrace.match(/(\n)/mg).length;
}

function buildVector() {
    let stackTrace = new Error().stack,
        outerFrameCount = countFrames(stackTrace),
        innerFrameCount,
        flagged = false;

    return {
        toString: function () {  // => Definição do método vetor.toString(), que implementa
                                 //    a avaliação da profundidade da pilha de chamadas
                                 //    para determinar se um método de API foi interceptado
            innerFrameCount = countFrames(new Error().stack);
            flagged = (innerFrameCount - outerFrameCount) > 0;
            return '';
        },
        isFlagged: function () { // => Definição do método vetor.isFlagged(), que retorna
                                 //    o resultado da avaliação de interceptação
            return flagged;
        }
    };
}