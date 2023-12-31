export default function Footer() {
  return (
    <footer className="border-t  border-zinc-800 dark:bg-black">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <small className=" duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:text-white duration-200">
          <a
            href="https://github.com/jayclef"
            target="_blank"
            rel="noreferrer noopener"
          >
            Prepared by <span className="text-purple-400">Mba James</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
