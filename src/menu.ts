const root = document.querySelector('#root')!;

const hash = (): string => {
  let result = `#`;
  return result;
};

const textNode = (): string => {
  let result = `메뉴`;
  return result;
};

interface BasicData {
  jeamin: '황재민';
  hoyoung: '유호영';
  ujin: '최유진';
  jiyoon: '임지윤';
}

const basicData: BasicData = {
  jeamin: '황재민',
  hoyoung: '유호영',
  ujin: '최유진',
  jiyoon: '임지윤',
};

// liTags(anchorTags(`#${object.jeamin}`, object.jeamin));

const totalElements = (object: BasicData): string => {
  let result = '';
  for (let key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    const value = object[key as keyof BasicData];
    result += liTags(anchorTags(`#${key}`, value));
  }
  return result;
};

const anchorTags = (hash: string, textNode: string): string => {
  let result = `<a href="${hash}">${textNode}</a>`;
  return result;
};

const liTags = (children: string): string => {
  let result = `<li>${children}</li>`;
  return result;
};

root.innerHTML = `
<ul id="menu">
  ${totalElements(basicData)}
</ul>
<main id="main-target"></main>
`;

// ------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * * 24.07.04 (Thu) 정호연
 * * HTML을 대신해서 만든 HTML 작성 코드
 * * Raect, CSR이다.
 */

const mainTarget = document.querySelector('#main-target')!;
console.log(window.location.hash); // ? window (최상위)

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  console.log(hash.slice(1));
  mainTarget.innerHTML = basicData.jeamin;
});
