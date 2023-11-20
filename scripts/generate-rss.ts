var fs = require('fs');
var RSS = require('rss');

const siteUrl = 'https://variables-converter.kr/';

const master = {
    name: 'kevin',
    email: 'qppk@naver.com',
    link: siteUrl,
};

const feed = new RSS({
    title: '변수 변환기',
    description: '기입한 문자를 선택한 유형으로 변경하는 사이트',
    id: siteUrl,
    link: siteUrl,
    language: 'ko',
    image: `${siteUrl}/images/base.jpg`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved since 2023, ${master.name}`,
    generator: 'generate-rss',
    feedLinks: {
        json: `${siteUrl}/json`,
        atom: `${siteUrl}/atom`,
    },
    author: master,
});

feed.item({
    title: '변수 변환기',
    description: '기입한 문자를 선택한 유형으로 변경하는 사이트',
    url: siteUrl,
});

var xml = feed.xml();

fs.writeFileSync('public/rss.xml', xml, 'utf-8');