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

const totalElements = (object: BasicData): string => {
  let result = liTags(anchorTags(`#${object.jeamin}`, object.jeamin));
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
<ul>
  ${totalElements(basicData)}
</ul>
`;
