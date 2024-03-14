"use client"

import { useTheme } from "next-themes";

const Home = () => {

  const {setTheme} = useTheme();

  return (
    <div className="h-screen text-center flex flex-col justify-center align-middle">
      <p className='text-center text-green-500 dark:text-red-500'>Hello World!</p>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  )
}

export default Home;