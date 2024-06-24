module.exports = ({ env }) => ({
    email: {
      provider: 'nodemailer',
      providerOptions: {
        service: 'Gmail',
        auth: {
          user: env('EMAIL_USERNAME'),
          pass: env('EMAIL_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'shariq.ahmed731@googlemail.com',
        defaultReplyTo: 'shariq.ahmed731@googlemail.com',
      },
    },
  });
  