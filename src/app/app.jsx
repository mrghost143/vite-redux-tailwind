

import Header from "@layout/Header"
import Footer from "@layout/footer"
import Routing from "./route"

export const App = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Your main content goes here */}
        <h1 className="text-2xl text-center mt-10">Welcome to My App!</h1>
        <Routing />
      </main>
      <Footer />
    </div>
  )
}