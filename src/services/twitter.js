import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const readOnlyClient = client.readOnly;

export const getBestPerformingPosts = async () => {
  try {
    const userId = 'your-twitter-user-id'; // Replace with your Twitter user ID
    const tweets = await readOnlyClient.v2.userTimeline(userId, { max_results: 100 });
    // Process tweets to find the best performing ones (e.g., most likes, retweets)
    const bestTweets = tweets.data.data.sort((a, b) => b.public_metrics.like_count - a.public_metrics.like_count).slice(0, 5);
    return bestTweets;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw error;
  }
};
