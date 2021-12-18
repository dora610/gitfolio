import React from 'react';

function Home() {
  return (
    <div>
      <h3>Home page</h3>
      {/* TODO: to be removed */}
      <form>
        <input type='hidden' value={import.meta.env.VITE_SOME_SECRET} />
      </form>
    </div>
  );
}

export default Home;
