const GOOGLE_API_KEY = "AIzaSyCl200gx35FU9upClcOmH18q24S6ep_-mA";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API1= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

export const YOUTUBE_SEARCH_API2 = "&type=video&key="+GOOGLE_API_KEY

export const YOUTUBE_CHANNEL_API1 = "https://www.googleapis.com/youtube/v3/channels?part=snippet&id="

export const YOUTUBE_CHANNEL_API2 = "&key="+GOOGLE_API_KEY

//https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCurvRE5fGcdUgCYWgh-BDsg&key=AIzaSyDuS5zaXBt6U3UNrYg8rquKtcWYyx-hD6U

