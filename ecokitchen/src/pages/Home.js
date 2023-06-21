import { supabase } from "../components/supabase/supabaseClient";

function Home() {
  console.log(supabase);

  return (
    //Main page styling start
    <div>
      <h1 className="page-title">Your Homepage</h1>

      <input type="text" placeholder="Search" />
    </div>
  );
}

export default Home;
