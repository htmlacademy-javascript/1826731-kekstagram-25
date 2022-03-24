const checkStringLength = (str = '', maxLength = 0) => str.length <= maxLength;

checkStringLength('Текст комментария', 99);

const getRandomInteger = function (min, max) {
  if ((typeof min !== 'number' && typeof max !== 'number')) {
    return null;
  }

  min = min < 0 ? 0 : min;

  max = max < 0 ? 0 :max;

  if (min === max) {
    return Math.floor(min);
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(min + Math.random() * (max + 1 - min));
};

getRandomInteger();
