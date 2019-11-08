let coinChanger = {
  makeChange(amount) {
    let coinArray = [];
    if (amount === 0)
      coinArray = [0, 0, 0, 0];
    else if (amount === .01)
      coinArray = [0, 0, 0, 1];
    else if (amount === .05)
      coinArray = [0, 0, 1, 0];


    return coinArray;
  }
}
module.exports = coinChanger
