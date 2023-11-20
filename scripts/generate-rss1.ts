var RSS = require('rss');

const siteUrl1 = 'https://wordscount.kr';

/* lets create an rss feed */
const feed1 = new RSS({
    title: 'title',
    description: 'description',
    feed_url: `${siteUrl1}/rss.xml`,
    site_url: siteUrl1,
    image_url: `${siteUrl1}/images/opengraph.png`,
    docs: `${siteUrl1}/rss/docs.html`,
    managingEditor: 'Dylan Greene',
    webMaster: 'Dylan Greene',
    copyright: '2013 Dylan Greene',
    language: 'en',
    categories: ['Category 1','Category 2','Category 3'],
    pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: '60',
});

/* loop over data and add to feed */
feed1.item({
    title:  'item title',
    description: 'use this for the content. It can include html.',
    url: siteUrl1, // link to the item
    guid: '1123', // optional - defaults to url
    categories: ['Category 1','Category 2','Category 3','Category 4'], // optional - array of item categories
    author: 'Guest Author', // optional - defaults to feed author property
    date: 'May 27, 2012', // any format that js Date can parse.
});

// cache the xml to send to clients
const xml = feed1.xml();
