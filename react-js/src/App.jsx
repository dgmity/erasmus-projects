import Layout from "./Layout";
import Student from "./Student";

function App() {
  return (
    <div>
      <div>
        <Layout title="Welcome" description="This is the home page" />
        <Layout title="About us" description="Learn more about our company" />
        <Layout title="Contact" description="Get in touch with us" />
      </div>
      <div>
        <Student name="Maks" age="17" city="Grodno" />
      </div>      
    </div>
  );
}

export default App;