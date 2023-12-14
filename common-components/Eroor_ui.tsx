// router
import Link from "next/link";
// --------------------------------------------------
interface Props {
  pageStatus_msg: string;
  errorMessage: string;
}
const Error_ui = ({ pageStatus_msg, errorMessage }: Props) => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <p className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            {pageStatus_msg}
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {errorMessage}
          </p>

          <div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Link
              href="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-sky-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error_ui;