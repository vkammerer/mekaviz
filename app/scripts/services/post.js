'use strict';

angular.module('motortouchApp')
	.factory('Post', [
		'$resource',
		'$rootScope',
		'$filter',
		'$q',
		'constants',
		function(
			$resource,
			$rootScope,
			$filter,
			$q,
			constants
		){

			var postUrl = constants.API_URL + '/posts/:postId?callback=JSON_CALLBACK';

			var apitype;

			/*
				Two apis are currently supported
			*/
			if (constants.API_URL.indexOf('http://public-api.wordpress.com') === 0) {
				apitype = 'wordpress.com'
			}
			else if (constants.API_URL.indexOf('/wp_api/v1') !== -1) {
				apitype = 'thermal-api.com'
				postUrl += '&per_page=100'
			}
			else {
				throw 'Invalid API URI';
			}

			var postFactory = $resource(
				postUrl,
				{postId:'@id'},
				{query: {method:'JSONP', params:{postId:'@id'}}}
			);

			var thisDefer = $q.defer();

			postFactory.query(function(data){

				var posts = [];

				if (apitype == 'wordpress.com') {
					posts = data.posts.map(function(rawpost){
						var post = {
							content : rawpost.content,
							date : rawpost.date,
							featured_image : rawpost.featured_image,
							slug : rawpost.slug,
							title : rawpost.title,
							type : rawpost.type
						};
						// categories
						post.categories = [];
						for (var i in rawpost.categories) {
							post.categories.push(rawpost.categories[i].slug)
						}
						// tags
						post.tags = [];
						for (var i in rawpost.tags) {
							post.tags.push(rawpost.tags[i].slug)
						}
						return post;
					})
				}

				else if (apitype == 'thermal-api.com') {
					posts = data.posts.map(function(rawpost){
						var post = {
							content : rawpost.content_display,
							date : rawpost.date,
							slug : rawpost.name,
							title : rawpost.title,
							type : rawpost.type
						};
						// featured image
						if (rawpost.meta['featured_image']) {
							var filterReturn = rawpost.media.filter(function(e){
								return (e.id === rawpost.meta['featured_image'])
							});
/*
							if (typeof (filterReturn[0].sizes[0].url) !== 'undefined') {
								post.featured_image = filterReturn[0].sizes[0].url
							}
*/
						}
						// categories
						post.categories = [];
						for (var i in rawpost.taxonomies.category) {
							post.categories.push(rawpost.taxonomies.category[i].slug)
						}
						// tags
						post.tags = [];
						for (var i in rawpost.taxonomies.post_tag) {
							post.tags.push(rawpost.taxonomies.post_tag[i].slug)
						}
						return post;
					})
				}

				$rootScope.company = $filter('hasWordpressTag')(posts, 'company')[0];
				$rootScope.contact = $filter('hasWordpressTag')(posts, 'contact')[0];
				$rootScope.models = $filter('hasWordpressCategory')(posts, 'model');
				$rootScope.pieces = $filter('hasWordpressCategory')(posts, 'piece');

				thisDefer.resolve()
			});

			return thisDefer.promise;
		}
	]);
