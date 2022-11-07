import React, { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading/Loading.js";

const Whome = lazy(() => import("./components/whome/Whome"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Certificates = lazy(() =>
  import("./components/certificates/Certificates.js")
);
const LineTop = lazy(() => import("./components/LineTop/LineTop.js"));
const Route = lazy(() => import("./components/Route"));

const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
const App = () => {
  const [Storage, setStorage] = useLocalStorage("color", "blue");
  const router = createBrowserRouter([
    { path: "/", element: <Whome Storage={Storage} /> },
    {
      path: "projects",
      element: <Route Storage={Storage} setStorage={setStorage} />,
      children: [
        {
          index: true,
          element: <Projects Storage={Storage} />,
        },
      ],
    },
    {
      path: "Certificates",
      element: <Route Storage={Storage} setStorage={setStorage} />,
      children: [
        {
          index: true,
          element: <Certificates Storage={Storage} />,
        },
      ],
    },
    {
      path: "Contact",
      element: <Route Storage={Storage} setStorage={setStorage} />,
      children: [
        {
          index: true,
          element: <Contact Storage={Storage} />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <Suspense fallback={<Loading Storage={Storage} />}>
        <LineTop Storage={Storage} />
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
