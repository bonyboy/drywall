'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://drywalluser:drywallpassword@ds027741.mongolab.com:27741/heroku_app32611222' //'localhost/drywall'
};
exports.companyName = 'Acme, Inc.';
exports.projectName = 'RentCertified';
exports.systemEmail = 'genemillerjr@gmail.com';
exports.cryptoKey = 'k3yb0ardc4t';
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +' Website',
    address: process.env.SMTP_FROM_ADDRESS || 'genemillerjr@gmail.com'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'postmaster@sandboxe1fb0a995b2c409c92157ddfc8462df1.mailgun.org',
    password: process.env.SMTP_PASSWORD || '80l8heudef23',
    host: process.env.SMTP_HOST || 'smtp.mailgun.org',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  },
  tumblr: {
    key: process.env.TUMBLR_OAUTH_KEY || '',
    secret: process.env.TUMBLR_OAUTH_SECRET || ''
  }
};
