import * as sdk from '@botpress/sdk'
import * as env from './.genenv'
import knowledge from './bp_modules/knowledge'
import openai from './bp_modules/openai'
import personality from './bp_modules/personality'
import telegram from './bp_modules/telegram'

export default new sdk.BotDefinition({})
  .addIntegration(telegram, {
    enabled: true,
    configuration: {
      botToken: env.KNOWLEDGIANI_TELEGRAM_BOT_TOKEN,
    },
  })
  .addIntegration(openai, {
    enabled: true,
    configuration: {},
  })
  .addPlugin(personality, {
    configuration: {
      model: 'gpt-3.5-turbo-0125',
      personality: 'Respond as if you were Mario the famous video game character of Nintendo',
    },
    interfaces: {
      llm: openai.definition,
    },
  })
  .addPlugin(knowledge, {
    configuration: {},
    interfaces: {
      llm: openai.definition,
    },
  })