const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../../../.env'), silent: true })

let env = JSON.stringify('production')

if (process.argv.includes('--dev') || process.argv.includes('-d')) {
	console.log('Setting env to local')
	env = JSON.stringify('local')
}

module.exports = {
	aliases: {
		src: path.resolve(__dirname, '../../../src')
	},
	environment: {
		NODE_ENV: env,
		BASE_URL: JSON.stringify(process.env.BASE_URL || 'false'),
		VERSION_CONTROL: JSON.stringify(process.env.VERSION_CONTROL)
	}
}
