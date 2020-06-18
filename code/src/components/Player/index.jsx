import React from 'react'
import Wistia from './Wistia'

// You can define plugins here, like the ones documented at https://wistia.com/doc/embed-options#embed_plugins
// If you're feeling fancy, try making a plugin of your very own! https://wistia.com/doc/plugin-api
const plugins = {
  'postRoll-v1': {
    text: 'Text after video end',
    // link on the text
    link: 'https://wistia.com',
  },
}

/* You can include any Wistia embed options as props. See the full list at https://wistia.com/doc/embed-options#options_list */
const Player = ({ videoHash }) => <Wistia hashedId={videoHash} playerColor="#54bbff" plugin={plugins} />

export default Player
