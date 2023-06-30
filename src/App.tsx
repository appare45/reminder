import { useEffect, useState } from "react";

function App() {
  const [permission, setPermission] = useState("default");
  useEffect(() => {
    setPermission(Notification.permission);
  }, []);
  const requestPermission = async () => {
    const newPermission = await Notification.requestPermission();
    setPermission(newPermission);
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-md">
          <a href="#" className="navbar-brand">
            <h1>Simple Reminder</h1>
          </a>
        </div>
      </nav>
      <div className="container">
        <section className="my-4">
          <h2>Notification Settings</h2>
          {!("Notification" in window) ? (
            <div className="alert alert-danger" role="alert">
              This browser does not support notifications
            </div>
          ) : (
            <>
                <span className={`badge ${permission == "granted" ? "bg-success" : "bg-warning text-dark"} `}>
                {permission.toUpperCase()}
              </span>
              {permission !== "granted" && (
                <button
                  type="button"
                  className="btn btn-primary btn-sm mx-2"
                  onClick={() => requestPermission()}
                >
                  Request
                </button>
              )}
            </>
          )}
        </section>
        <section className="my-4">
          <h2>Reminder</h2>
        </section>
      </div>
    </>
  );
}

export default App;
