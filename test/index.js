var expect = require('expect');
var embedjs = require('./../lib/embedjs');

var text = `
Lorem ipsum dolor sit amet https://www.twitch.tv/johnnydarko420,
https://youtu.be/DAYNwC-aMgQ?t=2m8s consectetur adipiscing elit,
https://soundcloud.com/liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, https://www.bitchute.com/video/c7a1wNltJ30 quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in https://www.youtube.com/watch?v=waiCd_CVxdc
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, https://www.google.fr/?gws_rd=ssl
sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

var embeds = embedjs.getAll(text);

expect(embeds).toEqual(
  [{
    type: 'video',
    url: 'https://twitch.tv/johnnydarko420,',
    provider_name: 'Twitch',
    id: 'johnnydarko420,',
    embed: '<iframe width="100%" height="400" src="//player.twitch.tv/?channel=johnnydarko420,&autoplay=false" frameborder="0" scrolling="no" allowfullscreen></iframe>'
  },
  {
    type: 'video',
    url: 'https://youtu.be/DAYNwC-aMgQ?t=2m8s',
    provider_name: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/DAYNwC-aMgQ/mqdefault.jpg',
    id: 'DAYNwC-aMgQ',
    embed: '<iframe width="100%" height="400" src="//www.youtube.com/embed/DAYNwC-aMgQ?autoplay=1&start=128" frameborder="0" scrolling="no" allowfullscreen></iframe>'
  },
  {
    type: 'music',
    url: 'https://soundcloud.com/liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon',
    provider_name: 'SoundCloud',
    id: 'liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon',
    embed: '<iframe width="100%" height="400" src="//w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fliluzivert%2Fdo-what-i-want-produced-by-maaly-raw-don-cannon%3Fvisual%3Dtrue" frameborder="0" scrolling="no" allowfullscreen></iframe>'
  },
  {
    type: 'video',
    url: 'https://bitchute.com/video/c7a1wNltJ30',
    provider_name: 'BitChute',
    id: 'c7a1wNltJ30',
    embed: '<iframe width="100%" height="400" src="https://www.bitchute.com/embed/c7a1wNltJ30" frameborder="0" scrolling="no" allowfullscreen></iframe>'
  },
  {
    type: 'video',
    url: 'https://youtube.com/watch?v=waiCd_CVxdc',
    provider_name: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/waiCd_CVxdc/mqdefault.jpg',
    id: 'waiCd_CVxdc',
    embed: '<iframe width="100%" height="400" src="//www.youtube.com/embed/waiCd_CVxdc?autoplay=1" frameborder="0" scrolling="no" allowfullscreen></iframe>'
  }]
);

console.log('Tests passed');
