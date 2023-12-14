/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
const page = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const css = "shadow rounded-xl";
  return (
    <>
      <h1 className="text-center text-2xl underline font-bold py-2">How to Apply Our Skins</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-4 px-4 py-2">
        <a className={css} target="_blank" href="https://www.instagram.com/reel/CuE2EXpgKmf/?igshid=MzRlODBiNWFlZA==">
          <img src="/1.webp" alt="mobile skins" loading="lazy" />
        </a>
        <a className={css} target="_blank" href="https://www.instagram.com/reel/CxuzGCHr83J/?igshid=MzRlODBiNWFlZA%3D%3D">
          <img src="/2.webp" alt="mobile skins" loading="lazy" />
        </a>
        <a className={css} target="_blank" href="https://www.instagram.com/reel/Cq5Z29DAUC9/?igshid=MzRlODBiNWFlZA%3D%3D">
          <img src="/3.webp" alt="mobile skins" loading="lazy" />
        </a>
        <a className={css} target="_blank" href="https://www.instagram.com/reel/C0yNsLFpzSD/?igshid=MzRlODBiNWFlZA%3D%3D">
          <img src="/4.webp" alt="mobile skins" loading="lazy" />
        </a>
        <a className={css} target="_blank" href="https://www.instagram.com/reel/CvAM78lg5DB/?igshid=MzRlODBiNWFlZA%3D%3D">
          <img src="/5.webp" alt="mobile skins" loading="lazy" />
        </a>
        <a className={css} target="_blank" href="https://www.instagram.com/reel/CxGA_gqS3Dl/?igshid=MzRlODBiNWFlZA%3D%3D">
          <img src="/6.webp" alt="mobile skins" loading="lazy" />
        </a>
      </div>
    </>
  );
};

export default page;
