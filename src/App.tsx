import viteLogo from "/icon.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vgrow Advisor</h1>
      <h2>Thank you for visiting VgrowAdvisor!</h2>
      <p className="read-the-docs">
        We’re currently building our site to serve you better. We’ll be back in
        2 weeks with exciting new features and services. In the meantime, if you
        need assistance or want to get in touch, please reach us at: <br></br>
        <b>
          Phone: +91 9873097291 <br></br>Email: vaibhav@vgrowadvisor.com <br></br>
        </b>
        We appreciate your patience and look forward to welcoming you back soon!{" "}
      </p>
    </>
  );
}

export default App;
