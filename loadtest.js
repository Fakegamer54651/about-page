import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 110,             // 30 virtual users
  duration: '30s',     // test duration
};

export default function () {
  const pages = [
    'https://asilbek.design/about',
    'https://asilbek.design/case1',
    'https://asilbek.design/case2',
  ];

  for (let url of pages) {
    const res = http.get(url);

    check(res, {
      [`${url} - status is 200`]: (r) => r.status === 200,
    });

    sleep(1); // simulate time spent on each page
  }
}
