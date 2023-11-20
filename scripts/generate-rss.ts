import { Feed } from 'feed';
import { writeFileSync } from 'fs';

const siteUrl = 'https://wordscount.kr/';

const master = {
    name: 'kevin',
    email: 'qppk@naver.com',
    link: siteUrl,
};

export const feed = new Feed({
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

feed.addCategory('Utility');

// Output: RSS 2.0
writeFileSync('out/rss.xml', feed.rss2(), 'utf-8');
// Output: Atom 1.0
writeFileSync('out/rss-atom.xml', feed.atom1(), 'utf-8');
// Output: JSON Feed 1.0
writeFileSync('out/feed.json', feed.json1(), 'utf-8');
