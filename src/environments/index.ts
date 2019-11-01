import * as dotenv from 'dotenv'
dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// author
const AUTHOR: string = process.env.AUTHOR || 'Chnirt'

// application
const DOMAIN: string = process.env.DOMAIN || 'devcloud4.digihcs.com'
const PORT: number = +process.env.PORT || 11047
const END_POINT: string = process.env.END_POINT || 'graphql'
const VOYAGER: string = process.env.VOYAGER || 'voyager'
const FE_URL: string = process.env.FE_URL || ''

// static
const STATIC: string = process.env.STATIC || 'static'

// mlab
const MLAB_USER = process.env.MLAB_USER || ''
const MLAB_PASS = process.env.MLAB_PASS || ''
const MLAB_HOST = process.env.MLAB_HOST || ''
const MLAB_PORT = +process.env.MLAB_PORT || 0
const MLAB_DATABASE = process.env.MLAB_DATABASE || ''
const MLAB_URL =
	process.env.MLAB_URL ||
	`mongodb://${MLAB_USER}:${MLAB_PASS}@${MLAB_HOST}:${MLAB_PORT}/${MLAB_DATABASE}`

// mongodb
// var url = 'mongodb://localhost:27017,localhost:27018/myproject?replicaSet=foo';
const MONGO_URL: string = process.env.MONGO_PORT
	? `mongodb://localhost:${process.env.MONGO_PORT}`
	: MLAB_URL

const MONGO_PORT: number = +process.env.MONGO_PORT || 11049
const MONGO_DB: string = process.env.MONGO_PORT ? 'chnirt-nest' : MLAB_DATABASE

// jsonwebtoken
const ISSUER: string = process.env.ISSUER || 'http://chnirt.github.io'
const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN || 'access-token'
const ACCESS_TOKEN_SECRET: string =
	process.env.ACCESS_TOKEN_SECRET || 'access-token-key'
const REFRESH_TOKEN: string = process.env.REFRESH_TOKEN || 'refresh-token'
const REFRESH_TOKEN_SECRET: string =
	process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key'
const EMAIL_TOKEN: string = process.env.EMAIL_TOKEN || 'email-token'
const EMAIL_TOKEN_SECRET: string =
	process.env.EMAIL_TOKEN_SECRET || 'email-token-key'
const RESETPASS_TOKEN: string = process.env.RESETPASS_TOKEN || 'resetpass-token'
const RESETPASS_TOKEN_SECRET: string =
	process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key'

// bcrypt
const SALT: number = +process.env.SALT || 10

// nodemailer
const MAIL_USER: string = process.env.MAIL_USER || ''
const MAIL_PASS: string = process.env.MAIL_PASS || ''

// cloudinary
const CLOUD_NAME: string = process.env.CLOUD_NAME || ''
const API_KEY: string = process.env.API_KEY || ''
const API_SECRET: string = process.env.API_SECRET || ''

// pubsub
const NOTIFICATION_SUBSCRIPTION: string = 'newNotification'
const USER_SUBSCRIPTION: string = 'newUser'
const MESSAGES_SUBSCRIPTION: string = 'newMessages'

// passport
const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID || ''
const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || ''
const GOOGLE_CALLBACK_URL: string =
	process.env.GOOGLE_CALLBACK_URL || 'auth/google/callback'

const FACEBOOK_APP_ID: string = process.env.FACEBOOK_APP_ID || ''
const FACEBOOK_APP_SECRET: string = process.env.FACEBOOK_APP_SECRET || ''
const FACEBOOK_CALLBACK_URL: string =
	process.env.FACEBOOK_CALLBACK_URL || 'auth/facebook/callback'

// google cloud
const GOOGLE_APPLICATION_CREDENTIALS: string =
	process.env.GOOGLE_APPLICATION_CREDENTIALS || ''

export {
	NODE_ENV,
	AUTHOR,
	DOMAIN,
	PORT,
	END_POINT,
	VOYAGER,
	FE_URL,
	STATIC,
	MLAB_USER,
	MLAB_PASS,
	MLAB_HOST,
	MLAB_PORT,
	MLAB_DATABASE,
	MLAB_URL,
	MONGO_URL,
	MONGO_PORT,
	MONGO_DB,
	ISSUER,
	ACCESS_TOKEN,
	ACCESS_TOKEN_SECRET,
	REFRESH_TOKEN,
	REFRESH_TOKEN_SECRET,
	RESETPASS_TOKEN,
	RESETPASS_TOKEN_SECRET,
	EMAIL_TOKEN,
	EMAIL_TOKEN_SECRET,
	SALT,
	MAIL_USER,
	MAIL_PASS,
	CLOUD_NAME,
	API_KEY,
	API_SECRET,
	USER_SUBSCRIPTION,
	NOTIFICATION_SUBSCRIPTION,
	MESSAGES_SUBSCRIPTION,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GOOGLE_CALLBACK_URL,
	FACEBOOK_APP_ID,
	FACEBOOK_APP_SECRET,
	FACEBOOK_CALLBACK_URL,
	GOOGLE_APPLICATION_CREDENTIALS
}
