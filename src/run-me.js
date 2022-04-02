const runMe = () => {
  console.log('Running script!')
  console.log(`WEBSITE_URL is: "${process.env.WEBSITE_URL}", isGoogle? ${(process.env.WEBSITE_URL === 'https://google.com')}`)
  console.log('End of script run.')
}

runMe()
