export const operatorsWithNum = (compareIndex, num) => {
    if (+compareIndex === 1) {
        return `+${num} %`;
    } else if (+compareIndex === -1) {
        return `-${num} %`;
    } else {
        return `${num} %`;
    }
} 