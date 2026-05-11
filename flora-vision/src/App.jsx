import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >

      {/* Main Content */}
      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
}

export default App;