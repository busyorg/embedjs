# Embed.js

With EmbedJS you can simply extract all the media links in your content and get the embed information of them in a JavaScript collection format. You can use these informations to append video embeds however you need in your app.


Simple usage:

```javascript
import embedjs from 'embedjs';

const text = 'Lorem ipsum dolor sit amet https://www.twitch.tv/johnnydarko420, consectetur adipiscing elit, https://soundcloud.com/liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in https://www.youtube.com/watch?v=waiCd_CVxdc reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, https://www.google.fr/?gws_rd=ssl sunt in culpa qui officia deserunt mollit anim id est laborum.';
const embeds = embedjs.getAll(text);

console.log(embeds);
```

Which you would get a result like this:

```javascript
[ { type: 'video',
    url: 'https://www.twitch.tv/johnnydarko420',
    provider_name: 'Twitch',
    id: 'johnnydarko420',
    embed: '<iframe width="100" height="120" src="//player.twitch.tv/?channel=johnnydarko420&autoplay=false" frameborder="0" scrolling="no" allowfullscreen></iframe>' },
  { type: 'music',
    url: 'https://soundcloud.com/liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon',
    provider_name: 'SoundCloud',
    id: 'liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon',
    embed: '<iframe width="100" height="120" src="//w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fliluzivert%2Fdo-what-i-want-produced-by-maaly-raw-don-cannon%3Fvisual%3Dtrue" frameborder="0" scrolling="no" allowfullscreen></iframe>' },
  { type: 'video',
    url: 'https://www.youtube.com/watch?v=waiCd_CVxdc',
    provider_name: 'YouTube',
    thumbnail: 'https://i.ytimg.com/vi/waiCd_CVxdc/hqdefault.jpg',
    id: 'waiCd_CVxdc',
    embed: '<iframe width="100" height="120" src="//www.youtube.com/embed/waiCd_CVxdc?autoplay=1" frameborder="0" scrolling="no" allowfullscreen></iframe>' } ]
```

### Options
In `embedjs.getAll` method you can pass a second parameter as options. This parameter should be an object similar to below.

```
{ 
  width: '500', // default is 100%
  height: '600', // default is 400 (px)
  autoplay: false, // default is true
}
```
