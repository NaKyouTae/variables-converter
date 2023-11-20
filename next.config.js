/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'imgix',
        path: 'https://variables-converter.kr/images/', // 배포 경로
    },
}

module.exports = nextConfig
