import Introduction from '@/components/Introduction';

const TITLE_CLASS = 'text-2xl font-bold mt-6';
const STRONG_CLASS = 'text-accent font-bold';
export default function AboutPage() {
  return (
    <>
      <Introduction />
      <section className='border shadow-md mt-4 p-8 text-center'>
        <h2 className={TITLE_CLASS}>자기 소개</h2>
        <p>
          안녕하세요. 저는 강동욱입니다.
          <br />
          프론트엔드 개발자이고 웹 개발에 관심이 많습니다.
        </p>
        <h2 className={TITLE_CLASS}>관심사와 열정</h2>
        <p>
          요즘 관심사는
          <strong className={STRONG_CLASS}> 객체 지향 프로그래밍</strong>과
          <strong className={STRONG_CLASS}> 클린 코드</strong>입니다. <br />
          협업이 중시되는 개발 문화에서
          <strong className={STRONG_CLASS}>
            {' '}
            이해하기 쉽고 읽기 쉬운 코드와{' '}
          </strong>
          <br />
          앞으로 고도화 될 개발 문화에서{' '}
          <strong className={STRONG_CLASS}>
            유지보수성, 확장성이 좋은 코드
          </strong>{' '}
          를 작성하는게 목표입니다.
          <br />
          또한 저는 개발자들 사이에서 저를 필요로 하는게 목표입니다. <br />
          그러기 위해서 많은 노력을 하고 있습니다.
        </p>
        <h2 className={TITLE_CLASS}>블로그 목적과 목표</h2>
        <p>
          블로그를 운영하는 목적은 지식 공유의 목적도 있지만 배운 지식을{' '}
          <strong className={STRONG_CLASS}>
            온전히 저의 지식으로 만들기 위함
          </strong>
          입니다. <br /> 포스팅을 하면서 저의 지식을 정리하면서 갈고닦는게
          목표입니다. <br />
          개발자답게 지금 구체적인 목표를 정할려고 합니다. 1주일에 1번은 무조건
          포스팅하겠습니다!
        </p>
        <h2 className={TITLE_CLASS}>취미</h2>
        <p>저의 취미는 개발을 배우면서 개발이 된 것 같습니다. 😂</p>
        <h2 className={TITLE_CLASS}>블로그 제작 이유</h2>
        <p>음.. 예전부터 저도 저만의 개발 블로그를 제작해보고 싶었습니다.</p>
      </section>
    </>
  );
}
