const Footer = () => {
  return (
    <footer className="mx-1 mt-8 md:mt-0">
      <p className="text-center text-[0.875rem] text-almost-black dark:text-white">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer noopener"
          className="font-bold hover:text-medium-gray"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/MelvinAguilar"
          target="_blank"
          rel="noreferrer noopener"
          className="font-bold hover:text-medium-gray"
        >
          Melvin Aguilar
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
