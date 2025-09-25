import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Trips from "@/pages/Trips";
import Blog from "@/pages/Blog";
import Gallery from "@/pages/Gallery";
import Join from "@/pages/Join";
import Safety from "@/pages/Safety";
import Faculty from "@/pages/Faculty";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/trips" component={Trips} />
      <Route path="/blog" component={Blog} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/join" component={Join} />
      <Route path="/safety" component={Safety} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/contact" component={Contact} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;