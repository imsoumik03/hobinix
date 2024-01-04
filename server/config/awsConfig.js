const { S3Client } = require('@aws-sdk/client-s3');

module.exports = new S3Client({
    credentials: {
        accessKeyId: 'AKIASYYVSPPULD4OWTNR',
        secretAccessKey: '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',
    },
    region: process.env.BUCKET_REGION,
});
