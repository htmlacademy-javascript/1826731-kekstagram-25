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
const MAX_ID = 300;
const MAX_AVATAR = 6;
const MAX_ELEMENTS = 5;

function getStringLength(comment, maxLength) {
  if (comment.length <= maxLength) {
    return true;
  }
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    throw new Error('Невалидный тип данных');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];
const getRandomComment = () => {
  return {
    id: getRandomNumber(1, MAX_ID),
    avatar: `img/avatar-${getRandomNumber(1, MAX_AVATAR)}.svg`,
    name: getRandomArrayElement(USER_NAMES),
    message: getRandomArrayElement(MESSAGE_COMMENTS),
  }
};

let i = 1;

const createPhotoDescription = () => ({
  id: i,
  url: `photos/${i++}.jpg`,
  description: 'Нащ отель',
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomNumber(1, MAX_ELEMENTS) }, getRandomComment),
});

const SimilarPhotoDescription = Array.from({length: MAX_ITEM_ID}, createPhotoDescription);