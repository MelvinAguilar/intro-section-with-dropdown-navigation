import databiz from "../../assets/images/client-databiz.svg";
import audiophile from "../../assets/images/client-audiophile.svg";
import meet from "../../assets/images/client-meet.svg";
import maker from "../../assets/images/client-maker.svg";
import mockupDesktop from "../../assets/images/image-hero-desktop.png";
import mockupMobile from "../../assets/images/image-hero-mobile.png";
import styles from "../../styles";

const Main = () => {
  const pixelPerfectLink = `leading-none pl-[1.9375rem] pr-[1.6875rem] pt-[1.1875rem] pb-[1rem] w-max tracking-[-0.01em] font-[700] `;
  return (
    <main
      id="main"
      className={`${styles.containerSm} mt-[2.8125rem] flex flex-col gap-4  md:flex-row-reverse`}
    >
      <div className="flex-1">
        <picture>
          <source
            media="(min-width: 48rem)"
            srcSet={mockupDesktop}
            type="image/png"
          />
          <img
            src={mockupMobile}
            alt=""
            aria-hidden="true"
            width={480}
            height={640}
            className="dark:filter-dark ml-auto block dark:mix-blend-screen max-md:mx-auto"
          />
        </picture>
      </div>
      <div className="my-[0.4375rem] flex flex-1 flex-col justify-center gap-[3.0625rem] text-center text-normal md:my-[1.5625rem] md:mx-[2.1875rem] md:text-left lg:my-[6.4375rem]">
        <h1 className="text-[1.875rem] font-[700] leading-none tracking-[-0.013em] text-almost-black transition duration-300 ease-in-out dark:text-white md:max-w-[10.8ch] md:text-[5rem]">
          Make remote work
        </h1>
        <p className="max-w-[43ch] leading-[1.6] tracking-[0.01em] text-medium-gray transition duration-300 ease-in-out dark:text-almost-white md:text-normal max-md:mx-auto">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a
          href="#"
          className={`${styles.transition} ${pixelPerfectLink} block rounded-2xl border-2 border-almost-black bg-almost-black p-3 text-white hover:bg-transparent hover:text-almost-black dark:border-white dark:bg-white dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white max-md:mx-auto`}
        >
          Learn more
        </a>
        <div className="md:mt-[3.6875rem]">
          <h2 className="sr-only">Our Customers</h2>
          <ul className="flex flex-wrap items-center gap-[2.5625rem] max-md:justify-center">
            <li>
              <a href="#" className="block">
                <img
                  src={databiz}
                  alt="databiz"
                  width={113}
                  height={20}
                  className="transition duration-300 ease-in-out md:filter-none"
                />
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <img
                  src={audiophile}
                  alt="audiophile"
                  width={73}
                  height={36}
                  className="transition duration-300 ease-in-out md:filter-none"
                />
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <img
                  src={meet}
                  alt="meet"
                  width={90}
                  height={20}
                  className="transition duration-300 ease-in-out md:filter-none"
                />
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <img
                  src={maker}
                  alt="maker"
                  width={82}
                  height={24}
                  className="ml-[-0.1875rem] transition duration-300 ease-in-out md:filter-none"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
