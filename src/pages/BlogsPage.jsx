import { usePageChrome } from "../hooks/usePageChrome.js";

const articles = [
  {
    title: "1. What is useState and how does it work in React?",
    body: "useState is a React Hook that gives a component its own local state. It returns a value and a setter function. When you call the setter, React schedules a re-render so the UI reflects the latest state. It is the simplest way to make a function component interactive.",
  },
  {
    title: "2. What is the purpose of useEffect in React?",
    body: "useEffect runs side effects after render. It is commonly used for data fetching, subscriptions, timers, document title updates, and syncing with browser APIs such as localStorage. Its dependency array controls when the effect runs again.",
  },
  {
    title: "3. What is a custom hook in React and when should you use one?",
    body: "A custom hook is a reusable function that combines one or more React Hooks and starts with the word use. Use one when you notice the same stateful logic or side effect logic appearing in multiple components, such as shared form handling or data loading.",
  },
  {
    title:
      "4. Difference between controlled and uncontrolled components? Which one is better?",
    body: "Controlled components keep form values in React state, which makes validation and conditional UI easier. Uncontrolled components keep form values in the DOM and are simpler for very small forms. Controlled inputs are usually better for most applications because they give React full visibility and predictable behavior.",
  },
  {
    title: "5. Tell us something about useFormStatus() (explore and explain)",
    body: "useFormStatus() is a React DOM hook used with forms that are submitted through React Server Actions. It exposes information about the pending submission state so you can disable buttons or show feedback while the form is processing. It is helpful for progressive, accessible form experiences in modern React apps.",
  },
];

export function BlogsPage() {
  usePageChrome({ footerVisible: true, title: "Blogs | DocTalk" });

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <section className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_18px_54px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Medical Booking Blog Notes
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            These short answers explain the React ideas used throughout this
            booking application.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {articles.map((article) => (
            <details
              key={article.title}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 open:bg-white open:shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
            >
              <summary className="cursor-pointer list-none text-left text-lg font-bold text-slate-900">
                {article.title}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {article.body}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
