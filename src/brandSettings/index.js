const isTest = true;
var settings = {};

if (isTest) {
  settings = {
    baseUrl: 'https://5fc9346b2af77700165ae514.mockapi.io',
    perPay: 12,
    currency: '₺',
    primaryColor: '#2A59FE',
    primaryTextColor: 'white',
    secondaryColor: '#808080',
    radius: 8,
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  };
} else {
  settings = {
    baseUrl: 'https://5fc9346b2af77700165ae514.mockapi.io',
    perPay: 12,
    primaryColor: '#2A59FE',
  };
}

export {settings};
