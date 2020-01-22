export const errors = {
  name: 'Name must be 3 characters long or more and consists of letters only',
  surname: 'Surname must be 2 characters long or more and consists of letters only',
  username: 'Username must be 5 characters long or more and consists of letters, . and _',
  email: 'Fill in an appropriate email',
  password: 'Password requires at least 4 characters, must contain at least 1 lowercase ' +
    'and 1 uppercase alphabetical character, 1 numeric and 1 special  character',
};

export const inputRules = {
  name: '^[a-zA-Z]{3,}$',
  surname: '^[a-zA-Z]{2,}$',
  username: '^[a-zA-Z_.]{5,}$',
  email: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.' +
    '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  password: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.' +
    '*[0-9])))(?=.{4,})',
};
