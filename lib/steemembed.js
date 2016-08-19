var urlExtractor = require('url-extractor');

var SteemEmbed = {};

SteemEmbed.getUrls = function(text) {
	return urlExtractor.extractUrls(text, urlExtractor.SOURCE_TYPE_MARKDOWN);
};

SteemEmbed.getAll = function(text, options) {
	var embeds = [];
	var urls = this.getUrls(text);
	urls.forEach(function(url) {
		var embed = this.get(url, options);
		if (embed) {
			embeds.push(this.get(url, options));
		}
	}.bind(this));
	return embeds;
};

SteemEmbed.get = function(url, options) {
	var youtubeId = this.isYoutube(url);
	var twitchChannel = this.isTwitch(url);
	var periscopeId = this.isPeriscope(url);
	var soundcloudId = this.isSoundcloud(url);
	if (youtubeId) {
		return {
			'type': 'video',
			'url': url,
			'provider_name': 'YouTube',
			'id': youtubeId,
			'embed': this.youtube(url, youtubeId)
		}
	} else if (twitchChannel) {
		return {
			'type': 'video',
			'url': url,
			'provider_name': 'Twitch',
			'id': twitchChannel,
			'embed': this.twitch(url, twitchChannel)
		}
	} else if (periscopeId) {
		return {
			'type': 'video',
			'url': url,
			'provider_name': 'Periscope',
			'id': periscopeId,
			'embed': this.periscope(url, periscopeId)
		}
	} else if (soundcloudId) {
		return {
			'type': 'music',
			'url': url,
			'provider_name': 'SoundCloud',
			'id': soundcloudId,
			'embed': this.soundcloud(url, soundcloudId)
		}
	}
};

SteemEmbed.isYoutube = function(url) {
	var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	return (url.match(p))? RegExp.$1 : false;
};

SteemEmbed.youtube = function(url, id) {
	return '<iframe width="100%" height="400" src="//www.youtube.com/embed/' + id + '" frameborder="0" scrolling="no" allowfullscreen></iframe>';
};

SteemEmbed.isTwitch = function(url) {
	var p = /^(?:https?:\/\/)?(?:www\.)?(?:twitch.tv\/)(.*)?$/;
	return (url.match(p))? RegExp.$1 : false;
};

SteemEmbed.twitch = function(url, channel) {
	return '<iframe width="100%" height="400" src="//player.twitch.tv/?channel=' + channel + '&autoplay=false" frameborder="0" scrolling="no" allowfullscreen></iframe>';
};

SteemEmbed.isPeriscope = function(url) {
	var p = /^(?:https?:\/\/)?(?:www\.)?(?:periscope.tv\/)(.*)?$/;
	var m = (url.match(p))? RegExp.$1.split('/') : [];
	var r = (m[1])? m[1] : false;
	return r;
};

SteemEmbed.periscope = function(url, id) {
	return '<iframe width="100%" height="400" src="//www.periscope.tv/w/' + id + '" frameborder="0" scrolling="no" allowfullscreen></iframe>';
};

SteemEmbed.isSoundcloud = function(url) {
	var p = /^(?:https?:\/\/)?(?:www\.)?(?:soundcloud.com\/)(.*)?$/;
	return (url.match(p))? RegExp.$1 : false;
};

SteemEmbed.soundcloud = function(url, id) {
	return '<iframe width="100%" height="400" src="//w.soundcloud.com/player/?url=' + encodeURIComponent(url + '?visual=true') + '" frameborder="0" scrolling="no" allowfullscreen></iframe>';
};


module.exports = SteemEmbed;