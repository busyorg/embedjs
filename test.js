var steemembed = require('./lib/steemembed');

var text = 'Lorem ipsum dolor sit amet https://www.twitch.tv/johnnydarko420, consectetur adipiscing elit, https://soundcloud.com/liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in https://www.youtube.com/watch?v=waiCd_CVxdc reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, https://www.google.fr/?gws_rd=ssl sunt in culpa qui officia deserunt mollit anim id est laborum.';
var embeds = steemembed.getAll(text);
console.log(embeds);