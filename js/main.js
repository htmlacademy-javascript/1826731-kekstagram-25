const checkStringLength = (str = '', maxLength = 0) => str.length <= maxLength;

checkStringLength('Текст комментария', 99);

const getRandomInteger = function (min, max) {
  if ((typeof min !== 'number' || typeof max !== 'number')) {
    return null;
  }

  min = min < 0 ? 0 :min;

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

const MESSAGE_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const USER_NAMES = [
  'Виталий',
  'Иван',
  'Николай',
  'Серафим',
  'Пётр',
  'Виктор'
];
const MAX_ITEM_ID = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR_SRC = 'img/avatar-${random}.svg';
const PHOTO_SRC = 'photos/${random}.jpg';
const getRandomInt = function (min = 0, max = 0) {
  return Math.floor(Math.random() * (max - min) + min);
};
const createRandomComments = function (maxLength) {
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push({
      id: i,
      avatar: AVATAR_SRC,
      message: MESSAGE_COMMENTS[getRandomInt(0, MESSAGE_COMMENTS.length - 1)],
      name: USER_NAMES[getRandomInt(0, USER_NAMES.length - 1)],
    });
  }
  return result;
};
const createRandomPhoto = function (maxLength) {
  const result = [];
  for (let i = 1; i <= maxLength; i++) {
    result.push({
      id: i,
      url: PHOTO_SRC,
      description: 'Лучшее фото',
      likes: getRandomInt(MIN_LIKES, MAX_LIKES),
      comments: createRandomComments(getRandomInt(2, 5)),
    });
  }
  return result;
};
createRandomPhoto(MAX_ITEM_ID);
