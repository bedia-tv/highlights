import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

/**
 * A MOCK SERVER FOR DEVELOPMENT PURPOSES
 * can be used to test the frontend code with fake server and data
 */

const videos = [
	{
		url: 'abc',
		title: 'video 1'
	}
];

const typeDefs = gql`
	type Video {
		url: String
		title: String
	}

	type Query {
		getVideo(url: String): Video
	}

	type Mutation {
		submitVideo(url: String, title: String): Video
	}
`;

const resolvers = {
	Query: {
		getVideo: (_, { url }) => videos.find((video) => url === video.url)
	},

	Mutation: {
		submitVideo: (_, { url, title }) => {
			const index = videos.findIndex((vid) => vid.url === url);
			if (index != -1) {
        videos[index].title = title;
        return videos[index];
			} else {
        const video = { url, title };
				videos.push(video);
			}
		}
	}
};

(async () => {
	const app = express();

	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers
	});

	apolloServer.applyMiddleware({ app, cors: false });

	app.listen(8000, () => {
		console.log('express server started');
	});
})();
