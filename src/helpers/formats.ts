export const formatNumberWithCommas = (number:number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const addPercentage = (number:number) => {
    return number.toString() + ' %'
}